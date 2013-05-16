$(document).ready(function() {
    var map = null;
    $('#dashtabs').tabs();
    $('#dashtabs').bind('tabsshow', function(event, ui) {
        if (ui.panel.id == 'map_tab' && !map)
        {
            map = initializeMap();
            google.maps.event.trigger(map, 'resize');
        }
    });
});

function initializeMap() {
    // Just some canned map for now
    var latlng = new google.maps.LatLng(-34.397, 150.644);
    var myOptions = {
        zoom: 8,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    return new google.maps.Map($('#map_canvas')[0], myOptions);
}

$('#dashtabs').bind('tabsshow', function(event, ui) {
    if (ui.panel.id == "map-tab") {
        resizeMap();
    }
});

// Collapsable Menu

$(function() {
        $( "#accordion" ).accordion();
      });

$(document).ready(function() {
$(".trigger").click(function(){
        $(this).next(".panel").slideToggle("medium");    
    });    
});
