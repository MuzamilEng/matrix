var directionDisplay;
var directionsService = new google.maps.DirectionsService();
var geocoder;
var map;
var infowindow = new google.maps.InfoWindow();
var marker;
var movingIcon = '../images/category-marker-off.png';
var zMlat = '51.515742';
var zMlng = '-0.158755';
var zZoom = '16';
var markersArray = [];
function MapStyle() {
    var style = [{
        "featureType": "landscape",
        "stylers": [
			            {
			                "hue": "#FF6F00"
			            },
			            {
			                "saturation": -13.200000000000003
			            },
			            {
			                "lightness": -3.6000000000000085
			            },
			            {
			                "gamma": 1
			            }
		            ]
    },
	            {
	                "featureType": "road.highway",
	                "stylers": [
			            {
			                "hue": "#FF7500"
			            },
			            {
			                "saturation": -49.7326203208556
			            },
			            {
			                "lightness": -11.933333333333337
			            },
			            {
			                "gamma": 1
			            }
		            ]
	            },
	            {
	                "featureType": "road.arterial",
	                "stylers": [
			            {
			                "hue": "#FF6F00"
			            },
			            {
			                "saturation": -72
			            },
			            {
			                "lightness": -27.200000000000003
			            },
			            {
			                "gamma": 1
			            }
		            ]
	            },
	            {
	                "featureType": "road.local",
	                "stylers": [
			            {
			                "hue": "#FF7500"
			            },
			            {
			                "saturation": -49.7326203208556
			            },
			            {
			                "lightness": 29.80000000000001
			            },
			            {
			                "gamma": 1
			            }
		            ]
	            },
	            {
	                "featureType": "water",
	                "stylers": [
			            {
			                "hue": "#FF6F00"
			            },
			            {
			                "saturation": -49.7326203208556
			            },
			            {
			                "lightness": -21.333333333333343
			            },
			            {
			                "gamma": 1
			            }
		            ]
	            },
	            {
	                "featureType": "poi",
	                "stylers": [
			            {
			                "hue": "#FF6F00"
			            },
			            {
			                "saturation": -49.7326203208556
			            },
			            {
			                "lightness": -4.200000000000003
			            },
			            {
			                "gamma": 1
			            }
		            ]
	            }
				];
    return style;
}

//google.maps.Map.prototype.setCenterWithOffset = function (latlng, offsetX, offsetY) {
//    var map = this;
//    var ov = new google.maps.OverlayView();
//    ov.onAdd = function () {
//        var proj = this.getProjection();
//        var aPoint = proj.fromLatLngToContainerPixel(latlng);
//        aPoint.x = aPoint.x + offsetX;
//        aPoint.y = aPoint.y + offsetY;
//        map.setCenter(proj.fromContainerPixelToLatLng(aPoint));
//    }
//    ov.draw = function () { };
//    ov.setMap(this);
//};

function initialize(micon, mlats, mlngs, mcontents, mindex, markeriden) {
    //alert(micon + " - " + mlats + " - " + mlngs + " - " + mcontents + " - " + mindex + " - " + markeriden);
    directionsDisplay = new google.maps.DirectionsRenderer();
    var mapOptions = { disableDoubleClickZoom: false, scrollwheel: false, zoom: 16, mapTypeId: google.maps.MapTypeId.ROADMAP, center: new google.maps.LatLng(zMlat, zMlng), mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR
    }, styles: MapStyle()
    };
    map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);


    var ctaLayer = new google.maps.KmlLayer('http://162.13.38.176/portman/Portman-Boundary.kml',
    {
        suppressInfoWindows: false,
        preserveViewport: true,
        map: map
    });
    //ctaLayer.setMap(map);
    //directionsDisplay.setMap(map);
    //directionsDisplay.setPanel(document.getElementById('directions-panel'));
    //addMarker(micon, mlats, mlngs, mcontents, mindex, markeriden);
}

function addMarker(micon, micono, mlats, mlngs, mcontents, mindex, markeriden) {
    //alert(micon + " - " + mlats + " - " + mlngs + " - " + mcontents + " - " + mindex + " - " + markeriden);
    //alert(markersArray.length);
    //infowindow = new google.maps.InfoWindow({ maxWidth: 200 });
    //    infowindow = new google.maps.InfoWindow({
    //        pixelOffset: new google.maps.Size(0, 60)
    //    }); 
    marker = new google.maps.Marker({
        position: new google.maps.LatLng(mlats, mlngs),
        map: map,
        icon: new google.maps.MarkerImage(micon)
    });

    //alert(marker.getPosition());
    //map.panTo(marker.getPosition());
    google.maps.event.addListener(marker, 'mouseover', (function (marker, mindex) {
        return function () {
            //map.setZoom(13);
            //map.setCenter(marker.getPosition());
            //map.setCenterWithOffset(new google.maps.LatLng(mlats, mlngs), 0, -100);
            for (var i = 0; i < markersArray.length; i++) {
                markersArray[i].setIcon(micon);
            }
            this.setIcon(micono);
            infowindow.setContent(mcontents);
            infowindow.open(map, marker);
        }
    })(marker, mindex));
    //    google.maps.event.addListener(marker, 'mouseout', function () {
    //        infowindow.close(map, marker);
    //    });
    markersArray.push(marker);
}

// Removes the overlays from the map, but keeps them in the array.
function clearOverlays() {
    setAllMap(null);
}
// Sets the map on all markers in the array.
function setAllMap(map) {
    //alert(markersArray.length);
    for (var i = 0; i < markersArray.length; i++) {
        markersArray[i].setMap(map);
    }
}
// Deletes all markers in the array by removing references to them.
function deleteOverlays() {
    clearOverlays();
    markersArray = [];
}

$(document).ready(function () {
    //initialize(movingIcon, zMlat, zMlng, 'contents', 1000, 'markerAI');
    var myurl = "http://www.portmanestate.co.uk/";
    $(document).ajaxComplete(function (event, xhr, settings) {
        //alert(settings.url);
        if (settings.url == myurl + "overview.xml") {
            $(xhr.responseText).find('Category').each(function () {
                //to get categories
                var $mcaticons = "";
                var $mcaticonso = "";
                var $catid = 0;
                $mcats = $(this);
                //alert($mcats.attr('id'));
                if ($mcats.attr('id') == "zad1") {
                    $mcaticons = myurl + 'images/marker1-active.png';
                    $mcaticonso = myurl + 'images/marker1-over.png';
                }
                else if ($mcats.attr('id') == "zad6") {
                    $mcaticons = myurl + 'images/marker2-active.png';
                    $mcaticonso = myurl + 'images/marker2-over.png';
                }
                else if ($mcats.attr('id') == "zad4") {
                    $mcaticons = myurl + 'images/marker3-active.png';
                    $mcaticonso = myurl + 'images/marker3-over.png';
                }
                else if ($mcats.attr('id') == "zad3") {
                    $mcaticons = myurl + 'images/marker4-active.png';
                    $mcaticonso = myurl + 'images/marker4-over.png';
                }
                else if ($mcats.attr('id') == "zad2") {
                    $mcaticons = myurl + 'images/marker5-active.png';
                    $mcaticonso = myurl + 'images/marker5-over.png';
                }
                else if ($mcats.attr('id') == "zad5") {
                    $mcaticons = myurl + 'images/marker6-active.png';
                    $mcaticonso = myurl + 'images/marker6-over.png';
                }
                //$(this).find("href").html();
                //alert($catid + ' - catids');
                $("<li>").appendTo("#recordcategories").attr("id", $(this).attr("id")).each(function () {
                    $catid = $(this).attr("id");
                    $(this).bind('click', function () {
                        $("#recordcategories li").removeClass("active");
                        $(this).addClass("active");
                        deleteOverlays();
                        myamenities();
                    });
                    $("<span>" + $mcats.find("heading").html() + "</span>").appendTo(this); ;
                });
                function myamenities() {
                    $(xhr.responseText).find('Placemark').each(function (index) {
                        if ($(this).attr("id") == $catid) {
                            //alert($(this).attr("id") + " - " + $catid);
                            //alert($(this).find("linkurl").text()); 
                            var urlvisible = "block";
                            var imgvisible = "block";
                            //alert("-" + $(this).find("thumbnail").text().trim() + "-");
                            var urltarget = "";
                            var lastSlash = document.URL.lastIndexOf("/");
                            var mUrl = $(this).find("linkurl").text();
                            if (mUrl.indexOf(document.URL.substring(0, lastSlash + 1)) == -1) { urltarget = "target='_blank'"; }
                            if ($(this).find("linkurl").text().trim() == "") { urlvisible = "none"; }
                            if ($(this).find("thumbnail").text().trim() == "") { imgvisible = "none"; }
                            addMarker($mcaticons, $mcaticonso, $(this).find("lat").html(), $(this).find("lng").html(), "<div style='float:left; width:auto;'><div class=\"InfoWindow\"><h1> " + $(this).find("name").html() + "</h1><p>" + $(this).find("description").text() + "</p><span class=\"visiturl\" style=\"display:" + urlvisible + ";\"><a " + urltarget + " style=\"background:none;\" href=" + $(this).find("linkurl").text() + ">+ Visit Site</a></span></div><div style='width:135px;height:100px; float:left;border:solid 1px #c0a895;margin:5px 0 0 0; padding:2px; display:" + imgvisible + ";'><img alt='' src='" + $(this).find("thumbnail").text() + "' width='135' height='100' /></div></div>", index, "markerAA");

                        }
                    });
                }
                //                $("#recordcategories li:first").click(function () {
                //                    myamenities();
                //                });
                //$("#recordcategories li:first").addClass("active");
                //myamenities();
            });
        }
    });
    $.ajax({
        type: "GET",
        url: myurl + "overview.xml"
    });
});
        
        

