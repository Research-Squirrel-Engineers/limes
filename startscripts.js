var namespaces={"rdf":"http://www.w3.org/1999/02/22-rdf-syntax-ns#","xsd":"http://www.w3.org/2001/XMLSchema#","geo":"http://www.opengis.net/ont/geosparql#","rdfs":"http://www.w3.org/2000/01/rdf-schema#","owl":"http://www.w3.org/2002/07/owl#","dc":"http://purl.org/dc/terms/","skos":"http://www.w3.org/2004/02/skos/core#"}
var annotationnamespaces=["http://www.w3.org/2004/02/skos/core#","http://www.w3.org/2000/01/rdf-schema#","http://purl.org/dc/terms/"]
var geoproperties={
                   "http://www.opengis.net/ont/geosparql#asWKT":"DatatypeProperty",
                   "http://www.opengis.net/ont/geosparql#asGML": "DatatypeProperty",
                   "http://www.opengis.net/ont/geosparql#asKML": "DatatypeProperty",
                   "http://www.opengis.net/ont/geosparql#asGeoJSON": "DatatypeProperty",
                   "http://www.opengis.net/ont/geosparql#hasGeometry": "ObjectProperty",
                   "http://www.opengis.net/ont/geosparql#hasDefaultGeometry": "ObjectProperty",
                   "http://www.w3.org/2003/01/geo/wgs84_pos#geometry": "ObjectProperty",
                   "http://www.georss.org/georss/point": "DatatypeProperty",
                   "http://www.w3.org/2006/vcard/ns#hasGeo": "ObjectProperty",
                   "http://www.w3.org/2003/01/geo/wgs84_pos#lat":"DatatypeProperty",
                   "http://www.w3.org/2003/01/geo/wgs84_pos#long": "DatatypeProperty",
                   "http://www.semanticweb.org/ontologies/2015/1/EPNet-ONTOP_Ontology#hasLatitude": "DatatypeProperty",
                   "http://www.semanticweb.org/ontologies/2015/1/EPNet-ONTOP_Ontology#hasLongitude": "DatatypeProperty",
                   "http://schema.org/geo": "ObjectProperty",
                   "http://schema.org/polygon": "DatatypeProperty",
                   "https://schema.org/geo": "ObjectProperty",
                   "https://schema.org/polygon": "DatatypeProperty",
                   "http://geovocab.org/geometry#geometry": "ObjectProperty",
                   "http://www.w3.org/ns/locn#geometry": "ObjectProperty",
                   "http://rdfs.co/juso/geometry": "ObjectProperty",
                   "http://www.wikidata.org/prop/direct/P625":"DatatypeProperty",
                   "https://database.factgrid.de/prop/direct/P48": "DatatypeProperty",
                   "http://database.factgrid.de/prop/direct/P48":"DatatypeProperty",
                   "http://www.wikidata.org/prop/direct/P3896": "DatatypeProperty"
}

  var baseurl="{{baseurl}}"
  $( function() {
    var availableTags = Object.keys(search)
    $( "#search" ).autocomplete({
      source: availableTags
    });
    console.log(availableTags)
    setupJSTree()
  } );

function openNav() {
  document.getElementById("mySidenav").style.width = "400px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function exportGeoJSON(){
    if(typeof(feature) !== "undefined"){
        saveTextAsFile(JSON.stringify(feature),"geojson")
    }
}

function parseWKTStringToJSON(wktstring){
    wktstring=wktstring.substring(wktstring.lastIndexOf('(')+1,wktstring.lastIndexOf(')')-1)
    resjson=[]
    for(coordset of wktstring.split(",")){
        curobject={}
        coords=coordset.split(" ")
        if(coords.length==3){
            resjson.append({"x":coords[0],"y":coords[1],"z":coords[2]})
        }else{
            resjson.append({"x":coords[0],"y":coords[1]})
        }
    }
    return resjson
}

function exportCSV(){
    rescsv=""
    if(typeof(feature)!=="undefined"){
        if("features" in feature){
           for(feat of feature["features"]){
                rescsv+="\""+feat["geometry"]["type"].toUpperCase()+"("
                feat["geometry"].coordinates.forEach(function(p,i){
                //	console.log(p)
                    if(i<feat["geometry"].coordinates.length-1)rescsv =  rescsv + p[0] + ' ' + p[1] + ', ';
                    else rescsv =  rescsv + p[0] + ' ' + p[1] + ')';
                })
                rescsv+=")\","
                if("properties" in feat){
                    if(gottitle==false){
                       rescsvtitle="\"the_geom\","
                       for(prop in feat["properties"]){
                          rescsvtitle+="\""+prop+"\","
                       }
                       rescsvtitle+="\n"
                       rescsv=rescsvtitle+rescsv
                       gottitle=true
                    }
                    for(prop in feat["properties"]){
                        rescsv+="\""+feat["properties"][prop]+"\","
                    }
                }
                rescsv+="\n"
           }
        }else{
            gottitle=false
            rescsv+="\""+feature["geometry"]["type"].toUpperCase()+"("
            feature["geometry"].coordinates.forEach(function(p,i){
            //	console.log(p)
                if(i<feature["geometry"].coordinates.length-1)rescsv =  rescsv + p[0] + ' ' + p[1] + ', ';
                else rescsv =  rescsv + p[0] + ' ' + p[1] + ')';
            })
            rescsv+=")\","
            if("properties" in feature){
                if(gottitle==false){
                   rescsvtitle=""
                   for(prop in feature["properties"]){
                      rescsvtitle+="\""+prop+"\","
                   }
                   rescsvtitle+="\n"
                   rescsv=rescsvtitle+rescsv
                   gottitle=true
                }
                for(prop in feature["properties"]){
                    rescsv+="\""+feature["properties"][prop]+"\","
                }
            }
        }
        saveTextAsFile(rescsv,".csv")
    }else if(typeof(nongeofeature)!=="undefined"){
        if("features" in nongeofeature){
           for(feat of nongeofeature["features"]){
                if("properties" in feat){
                    if(gottitle==false){
                       rescsvtitle="\"the_geom\","
                       for(prop in feat["properties"]){
                          rescsvtitle+="\""+prop+"\","
                       }
                       rescsvtitle+="\n"
                       rescsv=rescsvtitle+rescsv
                       gottitle=true
                    }
                    for(prop in feat["properties"]){
                        rescsv+="\""+feat["properties"][prop]+"\","
                    }
                }
                rescsv+="\n"
           }
        }else{
            gottitle=false
            if("properties" in nongeofeature){
                if(gottitle==false){
                   rescsvtitle=""
                   for(prop in nongeofeature["properties"]){
                      rescsvtitle+="\""+prop+"\","
                   }
                   rescsvtitle+="\n"
                   rescsv=rescsvtitle+rescsv
                   gottitle=true
                }
                for(prop in nongeofeature["properties"]){
                    rescsv+="\""+nongeofeature["properties"][prop]+"\","
                }
            }
        }
        saveTextAsFile(rescsv,".csv")
    }
}

function setSVGDimensions(){ 
    $('.svgview').each(function(i, obj) {
        console.log(obj)
        console.log($(obj).children().first()[0])
        maxx=Number.MIN_VALUE
        maxy=Number.MIN_VALUE
        minx=Number.MAX_VALUE
        miny=Number.MAX_VALUE
        $(obj).children().each(function(i){
            svgbbox=$(this)[0].getBBox()
            console.log(svgbbox)
            if(svgbbox.x+svgbbox.width>maxx){
                maxx=svgbbox.x+svgbbox.width
            }
            if(svgbbox.y+svgbbox.height>maxy){
                maxy=svgbbox.y+svgbbox.height
            }
            if(svgbbox.y<miny){
                miny=svgbbox.y
            }
            if(svgbbox.x<minx){
                minx=svgbbox.x
            }
        });
        console.log(""+(minx)+" "+(miny-(maxy-miny))+" "+((maxx-minx)+25)+" "+((maxy-miny)+25))
        newviewport=""+((minx))+" "+(miny)+" "+((maxx-minx)+25)+" "+((maxy-miny)+25)
        $(obj).attr("viewBox",newviewport)
        $(obj).attr("width",((maxx-minx))+10)
        $(obj).attr("height",((maxy-miny)+10))
        console.log($(obj).hasClass("svgoverlay"))
        if($(obj).hasClass("svgoverlay")){
            naturalWidth=$(obj).prev()[0].naturalWidth
            naturalHeight=$(obj).prev()[0].naturalHeight
            currentWidth=$(obj).prev()[0].width
            currentHeight=$(obj).prev()[0].height
            console.log(naturalWidth+" - "+naturalHeight+" - "+currentWidth+" - "+currentHeight)
            overlayposX = (currentWidth/naturalWidth) * minx;
            overlayposY = (currentHeight/naturalHeight) * miny;
            overlayposWidth = ((currentWidth/naturalWidth) * maxx)-overlayposX;
            overlayposHeight = ((currentHeight/naturalHeight) * maxy)-overlayposY;
            console.log(overlayposX+" - "+overlayposY+" - "+overlayposHeight+" - "+overlayposWidth)
            $(obj).css({top: overlayposY+"px", left:overlayposX+"px", position:"absolute"})
            $(obj).attr("height",overlayposHeight)
            $(obj).attr("width",overlayposWidth)
        }
    });
}

function exportWKT(){
    if(typeof(feature)!=="undefined"){
        reswkt=""
        if("features" in feature){
            for(feat of feature["features"]){
                reswkt+=feat["geometry"]["type"].toUpperCase()+"("
                feat["geometry"].coordinates.forEach(function(p,i){
                //	console.log(p)
                    if(i<feat["geometry"].coordinates.length-1)reswkt =  reswkt + p[0] + ' ' + p[1] + ', ';
                    else reswkt =  reswkt + p[0] + ' ' + p[1] + ')';
                })
                reswkt+=")\n"
            }
        }else{
                reswkt+=feature["geometry"]["type"].toUpperCase()+"("
                feature["geometry"].coordinates.forEach(function(p,i){
                    if(i<feature["geometry"].coordinates.length-1)reswkt =  reswkt + p[0] + ' ' + p[1] + ', ';
                    else reswkt =  reswkt + p[0] + ' ' + p[1] + ')';
                })
                reswkt+=")\n"
        }
        saveTextAsFile(reswkt,".wkt")
    }
}

function downloadFile(filePath){
    var link=document.createElement('a');
    link.href = filePath;
    link.download = filePath.substr(filePath.lastIndexOf('/') + 1);
    link.click();
}

function saveTextAsFile(tosave,fileext){
    var a = document.createElement('a');
    a.style = "display: none";  
    var blob= new Blob([tosave], {type:'text/plain'});
    var url = window.URL.createObjectURL(blob);
    var filename = "res."+fileext;
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(function(){
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);  
    }, 1000);
}

function download(){
    format=$('#format').val()
    if(format=="geojson"){
        exportGeoJSON()
    }else if(format=="ttl"){
        downloadFile("index.ttl")
    }else if(format=="json"){
        downloadFile("index.json")
    }else if(format=="wkt"){
        exportWKT()
    }else if(format=="csv"){
        exportCSV()
    }
}

function rewriteLink(thelink){
    console.log(thelink)
    if(thelink==null){
        rest=search[document.getElementById('search').value].replace(baseurl,"")
    }else{
        rest=thelink.replace(baseurl,"")
    }
    console.log(rest)
    count=0
    if(!indexpage){
        count=rest.split("/").length
    }
    console.log(count)
    counter=0
    while(counter<count){
        rest="../"+rest
        counter+=1
    }
    rest+="/index.html"
    console.log(rest)
    return rest
}

function followLink(thelink=null){
    rest=rewriteLink(thelink)
    location.href=rest
}

function changeDefLink(){
	$('#formatlink').attr('href',definitionlinks[$('#format').val()]);
}

function changeDefLink2(){
	$('#formatlink2').attr('href',definitionlinks[$('#format2').val()]);
}

var definitionlinks={
"covjson":"https://covjson.org",
"csv":"https://tools.ietf.org/html/rfc4180",
"cipher":"https://neo4j.com/docs/cypher-manual/current/",
"esrijson":"https://doc.arcgis.com/de/iot/ingest/esrijson.htm",
"geohash":"http://geohash.org",
"json":"https://geojson.org",
"gdf":"https://www.cs.nmsu.edu/~joemsong/software/ChiNet/GDF.pdf",
"geojsonld":"http://geojson.org/geojson-ld/",
"geojsonseq":"https://tools.ietf.org/html/rfc8142",
"geouri":"https://tools.ietf.org/html/rfc5870",
"gexf":"https://gephi.org/gexf/format/",
"gml":"https://www.ogc.org/standards/gml",
"gml2":"https://gephi.org/users/supported-graph-formats/gml-format/",
"gpx":"https://www.topografix.com/gpx.asp",
"graphml":"http://graphml.graphdrawing.org",
"gxl":"http://www.gupro.de/GXL/Introduction/intro.html",
"hdt":"https://www.w3.org/Submission/2011/03/",
"hextuples":"https://github.com/ontola/hextuples",
"html":"https://html.spec.whatwg.org",
"jsonld":"https://json-ld.org",
"jsonn":"",
"jsonp":"http://jsonp.eu",
"jsonseq":"https://tools.ietf.org/html/rfc7464",
"kml":"https://www.ogc.org/standards/kml",
"latlon":"",
"mapml":"https://maps4html.org/MapML/spec/",
"mvt":"https://docs.mapbox.com/vector-tiles/reference/",
"n3":"https://www.w3.org/TeamSubmission/n3/",
"nq":"https://www.w3.org/TR/n-quads/",
"nt":"https://www.w3.org/TR/n-triples/",
"olc":"https://github.com/google/open-location-code/blob/master/docs/specification.md",
"osm":"https://wiki.openstreetmap.org/wiki/OSM_XML",
"osmlink":"",
"rdfxml":"https://www.w3.org/TR/rdf-syntax-grammar/",
"rdfjson":"https://www.w3.org/TR/rdf-json/",
"rt":"https://afs.github.io/rdf-thrift/rdf-binary-thrift.html",
"svg":"https://www.w3.org/TR/SVG11/",
"tgf":"https://docs.yworks.com/yfiles/doc/developers-guide/tgf.html",
"tlp":"https://tulip.labri.fr/TulipDrupal/?q=tlp-file-format",
"trig":"https://www.w3.org/TR/trig/",
"trix":"https://www.hpl.hp.com/techreports/2004/HPL-2004-56.html",
"ttl":"https://www.w3.org/TR/turtle/",
"wkb":"https://www.iso.org/standard/40114.html",
"wkt":"https://www.iso.org/standard/40114.html",
"xls":"http://www.openoffice.org/sc/excelfileformat.pdf",
"xlsx":"http://www.openoffice.org/sc/excelfileformat.pdf",
"xyz":"https://gdal.org/drivers/raster/xyz.html",
"yaml":"https://yaml.org"
}

function shortenURI(uri){
	prefix=""
	if(typeof(uri)!="undefined"){
		for(namespace in namespaces){
			if(uri.includes(namespaces[namespace])){
				prefix=namespace+":"
				break
			}
		}
	}
	if(typeof(uri)!= "undefined" && uri.includes("#")){
		return prefix+uri.substring(uri.lastIndexOf('#')+1)
	}
	if(typeof(uri)!= "undefined" && uri.includes("/")){
		return prefix+uri.substring(uri.lastIndexOf("/")+1)
	}
	return uri
}

var presenter = null;
function setup3dhop(meshurl,meshformat) { 
  presenter = new Presenter("draw-canvas");  
  presenter.setScene({
    meshes: {
			"mesh_1" : { url: meshurl}
		},
		modelInstances : {
			"model_1" : { 
				mesh  : "mesh_1",
				color : [0.8, 0.7, 0.75]
			}
		}
  });
}

function start3dhop(meshurl,meshformat){
    init3dhop();
	setup3dhop(meshurl,meshformat);
	resizeCanvas(640,480);
  	moveToolbar(20,20);  
}


let camera, scene, renderer;

function init(domelement,verts) {
    camera = new THREE.PerspectiveCamera( 90, window.innerWidth / window.innerHeight, 0.1, 100 );
    camera.position.z = 145;
    scene = new THREE.Scene();
	vertarray=[]
    for(vert in verts){
        vertarray.append(vert["x"])
        vertarray.append(vert["y"])
        vertarray.append(vert["z"])
    }
    vertices=new Float32Array(vertarray)
    const geometry =new THREE.BufferGeometry( ); 
    geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );    
    const material = new THREE.MeshBasicMaterial( { color: 0xFFFFFF } );
    const mesh = new THREE.Mesh( geometry, material );
    scene.add( mesh );
    renderer = new THREE.WebGLRenderer( { antialias: false } );
		renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.querySelector(domelement).appendChild( renderer.domElement );		
	const controls = new THREE.OrbitControls( camera, renderer.domElement );
}

function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
}


function labelFromURI(uri,label){
        if(uri.includes("#")){
        	prefix=uri.substring(0,uri.lastIndexOf('#')-1)
        	if(label!=null){
        		return label+" ("+prefix.substring(prefix.lastIndexOf("/")+1)+":"+uri.substring(uri.lastIndexOf('#')+1)+")"
        	
        	}else{
				return uri.substring(uri.lastIndexOf('#')+1)+" ("+prefix.substring(uri.lastIndexOf("/")+1)+":"+uri.substring(uri.lastIndexOf('#')+1)+")"        	
        	}
       	}
        if(uri.includes("/")){
            prefix=uri.substring(0,uri.lastIndexOf('/')-1)
            if(label!=null){
            	return label+" ("+prefix.substring(prefix.lastIndexOf("/")+1)+":"+uri.substring(uri.lastIndexOf('/')+1)+")" 
            }else{
        		return uri.substring(uri.lastIndexOf('/')+1)+" ("+prefix.substring(uri.lastIndexOf("/")+1)+":"+uri.substring(uri.lastIndexOf('/')+1)+")"
            }
       	}
        return uri
}

function formatHTMLTableForClassRelations(result,nodeicon,nodelabel,nodeid){
    dialogcontent=""
    if(nodelabel.includes("[")){
        nodelabel=nodelabel.substring(0,nodelabel.lastIndexOf("[")-1)
    }
    dialogcontent="<h3><img src=\""+nodeicon+"\" height=\"25\" width=\"25\" alt=\"Instance\"/><a href=\""+nodeid.replace('/index.json','/index.html')+"\" target=\"_blank\"> "+nodelabel+"</a></h3><table border=1 id=classrelationstable><thead><tr><th>Incoming Concept</th><th>Incoming Relation</th><th>Concept</th><th>Outgoing Relation</th><th>Outgoing Concept</th></tr></thead><tbody>"
    for(res in result["from"]){
        for(instance in result["from"][res]){
            if(instance=="instancecount"){
                continue;
            }
            dialogcontent+="<tr><td><img src=\"https://raw.githubusercontent.com/i3mainz/geopubby/master/public/icons/class.png\" height=\"25\" width=\"25\" alt=\"Class\"/><a href=\""+instance+"\" target=\"_blank\">"+shortenURI(instance)+"</a></td>"
            dialogcontent+="<td><a href=\""+res+"\" target=\"_blank\">"
            finished=false
            for(ns in annotationnamespaces){
                if(res.includes(annotationnamespaces[ns])){
                    dialogcontent+="<img src=\"https://raw.githubusercontent.com/i3mainz/geopubby/master/public/icons/annotationproperty.png\" height=\"25\" width=\"25\" alt=\"Annotation Property\"/>"
                    finished=true
                }
            }
            if(!finished && res in geoproperties && geoproperties[res]=="ObjectProperty"){
                dialogcontent+="<img src=\"https://raw.githubusercontent.com/i3mainz/geopubby/master/public/icons/geoobjectproperty.png\" height=\"25\" width=\"25\" alt=\"Datatype Property\"/>"
            }else if(!finished){
                dialogcontent+="<img src=\"https://raw.githubusercontent.com/i3mainz/geopubby/master/public/icons/objectproperty.png\" height=\"25\" width=\"25\" alt=\"Datatype Property\"/>"
            }
            dialogcontent+=shortenURI(res)+"</a></td>"
            dialogcontent+="<td><img src=\""+nodeicon+"\" height=\"25\" width=\"25\" alt=\"Instance\"/><a href=\""+nodeid+"\" target=\"_blank\">"+nodelabel+"</a></td><td></td><td></td></tr>"
        }
    }
    for(res in result["to"]){
        for(instance in result["to"][res]){
            if(instance=="instancecount"){
                continue;
            }
            dialogcontent+="<tr><td></td><td></td><td><img src=\""+nodeicon+"\" height=\"25\" width=\"25\" alt=\"Instance\"/><a href=\""+nodeid+"\" target=\"_blank\">"+nodelabel+"</a></td>"
            dialogcontent+="<td><a href=\""+res+"\" target=\"_blank\">"
            finished=false
            for(ns in annotationnamespaces){
                if(res.includes(annotationnamespaces[ns])){
                    dialogcontent+="<img src=\"https://raw.githubusercontent.com/i3mainz/geopubby/master/public/icons/annotationproperty.png\" height=\"25\" width=\"25\" alt=\"Annotation Property\"/>"
                    finished=true
                }
            }
            if(!finished && res in geoproperties && geoproperties[res]=="ObjectProperty"){
                dialogcontent+="<img src=\"https://raw.githubusercontent.com/i3mainz/geopubby/master/public/icons/geoobjectproperty.png\" height=\"25\" width=\"25\" alt=\"Datatype Property\"/>"
            }else if(!finished){
                dialogcontent+="<img src=\"https://raw.githubusercontent.com/i3mainz/geopubby/master/public/icons/objectproperty.png\" height=\"25\" width=\"25\" alt=\"Datatype Property\"/>"
            }
            dialogcontent+=shortenURI(res)+"</a></td>"
            dialogcontent+="<td><img src=\"https://raw.githubusercontent.com/i3mainz/geopubby/master/public/icons/class.png\" height=\"25\" width=\"25\" alt=\"Class\"/><a href=\""+instance+"\" target=\"_blank\">"+shortenURI(instance)+"</a></td></tr>"
        }
    }
    dialogcontent+="</tbody></table>"
    dialogcontent+="<button id=\"closebutton\" onclick='document.getElementById(\"classrelationdialog\").close()'>Close</button>"
    return dialogcontent
}

function formatHTMLTableForResult(result,nodeicon){
    dialogcontent=""
    dialogcontent="<h3><img src=\""+nodeicon+"\" height=\"25\" width=\"25\" alt=\"Instance\"/><a href=\""+nodeid.replace('/index.json','/index.html')+"\" target=\"_blank\"> "+nodelabel+"</a></h3><table border=1 id=dataschematable><thead><tr><th>Type</th><th>Relation</th><th>Value</th></tr></thead><tbody>"
    for(res in result){
        dialogcontent+="<tr>"
        if(res in geoproperties && geoproperties[res]=="ObjectProperty"){
            dialogcontent+="<td><img src=\"https://raw.githubusercontent.com/i3mainz/geopubby/master/public/icons/geoobjectproperty.png\" height=\"25\" width=\"25\" alt=\"Geo Object Property\"/>Geo Object Property</td>"
        }else if((result[res][0]+"").startsWith("http")){
            dialogcontent+="<td><img src=\"https://raw.githubusercontent.com/i3mainz/geopubby/master/public/icons/objectproperty.png\" height=\"25\" width=\"25\" alt=\"Object Property\"/>Object Property</td>"
        }else{
            finished=false
            for(ns in annotationnamespaces){
                if(res.includes(annotationnamespaces[ns])){
                    dialogcontent+="<td><img src=\"https://raw.githubusercontent.com/i3mainz/geopubby/master/public/icons/annotationproperty.png\" height=\"25\" width=\"25\" alt=\"Annotation Property\"/>Annotation Property</td>"
                    finished=true
                }
            }
            if(!finished && res in geoproperties && geoproperties[res]=="DatatypeProperty"){
                dialogcontent+="<td><img src=\"https://raw.githubusercontent.com/i3mainz/geopubby/master/public/icons/geodatatypeproperty.png\" height=\"25\" width=\"25\" alt=\"Datatype Property\"/>Geo Datatype Property</td>"
            }else if(!finished){
                dialogcontent+="<td><img src=\"https://raw.githubusercontent.com/i3mainz/geopubby/master/public/icons/datatypeproperty.png\" height=\"25\" width=\"25\" alt=\"Datatype Property\"/>Datatype Property</td>"
            }
        }    
        dialogcontent+="<td><a href=\""+res+"\" target=\"_blank\">"+shortenURI(res)+"</a></td>"
        if(Array.isArray(result[res]) && result[res].length>1){
            dialogcontent+="<td><ul>"
            for(resitem of result[res]){
                if((resitem+"").startsWith("http")){
                    dialogcontent+="<li><a href=\""+rewriteLink(resitem)+"\" target=\"_blank\">"+shortenURI(resitem)+"</a></li>"
                }else{
                    dialogcontent+="<li>"+resitem+"</li>"
                }
            }
            dialogcontent+="</ul></td>"
        }else if((result[res][0]+"").startsWith("http")){
            dialogcontent+="<td><a href=\""+rewriteLink(result[res]+"")+"\" target=\"_blank\">"+shortenURI(result[res]+"")+"</a></td>"
        }else{
            dialogcontent+="<td>"+result[res][0]+"</td>"
        }
        dialogcontent+="</tr>"
    }
    dialogcontent+="</tbody></table>"
    dialogcontent+="<button id=\"closebutton\" onclick='document.getElementById(\"dataschemadialog\").close()'>Close</button>"
    return dialogcontent
}

function getClassRelationDialog(node){
     nodeid=rewriteLink(node.id).replace(".html",".json")
     nodelabel=node.text
     nodetype=node.type
     nodeicon=node.icon
     props={}
     if("data" in node){
        props=node.data
     }
     console.log(nodetype)
     if(nodetype=="class" || nodetype=="geoclass" || node.type=="collectionclass"){
        console.log(props)
        dialogcontent=formatHTMLTableForClassRelations(props,nodeicon,nodelabel,nodeid)
        document.getElementById("classrelationdialog").innerHTML=dialogcontent
        $('#classrelationstable').DataTable();
        document.getElementById("classrelationdialog").showModal();
     }
}

function getDataSchemaDialog(node){
     nodeid=rewriteLink(node.id).replace(".html",".json")
     nodelabel=node.text
     nodetype=node.type
     nodeicon=node.icon
     props={}
     if("data" in node){
        props=node.data
     }
     console.log(nodetype)
     if(nodetype=="class" || nodetype=="geoclass" || node.type=="collectionclass"){
        console.log(props)
        dialogcontent=formatHTMLTableForResult(props["to"],nodeicon)
        document.getElementById("dataschemadialog").innerHTML=dialogcontent
        $('#dataschematable').DataTable();
        document.getElementById("dataschemadialog").showModal();
     }else{
         $.getJSON(nodeid, function(result){
            dialogcontent=formatHTMLTableForResult(result,nodeicon)
            document.getElementById("dataschemadialog").innerHTML=dialogcontent
            $('#dataschematable').DataTable();
            document.getElementById("dataschemadialog").showModal();
          });
    }
}

function setupJSTree(){
    console.log("setupJSTree")
    tree["contextmenu"]={}
    tree["core"]["check_callback"]=true
    tree["sort"]=function(a, b) {
        a1 = this.get_node(a);
        b1 = this.get_node(b);
        if (a1.icon == b1.icon){
            return (a1.text > b1.text) ? 1 : -1;
        } else {
            return (a1.icon > b1.icon) ? 1 : -1;
        }
    }
    tree["contextmenu"]["items"]=function (node) {
        return {
            "lookupdefinition": {
                "separator_before": false,
                "separator_after": false,
                "label": "Lookup definition",
                "icon": "https://github.com/i3mainz/geopubby/raw/master/public/icons/searchclass.png",
                "action": function (obj) {
                    newlink=rewriteLink(node.id)
                    var win = window.open(newlink, '_blank');
                    win.focus();
                }
            }, 
            "copyuriclipboard":{
                "separator_before": false,
                "separator_after": false,
                "label": "Copy URI to clipboard",
                "icon": "https://github.com/i3mainz/geopubby/raw/master/public/icons/classlink.png",
                "action":function(obj){
                    copyText=node.id
                    navigator.clipboard.writeText(copyText);
                }    
            },
            "discoverrelations":{
                "separator_before": false,
                "separator_after": false,
                "label": "Discover class relations",
                "icon": "https://github.com/i3mainz/geopubby/raw/master/public/icons/classlink.png",
                "action":function(obj){
                    console.log("class relations")
                    if(node.type=="class" || node.type=="geoclass" || node.type=="collectionclass"){
                        getClassRelationDialog(node)
                    }
                }    
            },
            "loaddataschema": {
                "separator_before": false,
                "separator_after": false,
                "icon":"https://github.com/i3mainz/geopubby/raw/master/public/icons/classschema.png",
                "label": "Load dataschema for class",
                "action": function (obj) {
                    console.log(node)
                    console.log(node.id)
                    console.log(baseurl)
                    if(node.id.includes(baseurl)){
                        getDataSchemaDialog(node) 
                    }else if(node.type=="class" || node.type=="geoclass" || node.type=="collectionclass"){
                        getDataSchemaDialog(node) 
                    }                                         
                }
            }
        };
    }
    $('#jstree').jstree(tree);
    $('#jstree').bind("dblclick.jstree", function (event) {
        var node = $(event.target).closest("li");
        var data = node[0].id
        if(data.includes(baseurl)){
            followLink(data)
        }else{
            window.open(data, '_blank');
        }
    });
    var to = false;
	$('#classsearch').keyup(function () {
        if(to) { clearTimeout(to); }
        to = setTimeout(function () {
            var v = $('#classsearch').val();
            $('#jstree').jstree(true).search(v,false,true);
        });
    });
}
