var pictureSource;   // picture source
var destinationType; // sets the format of returned value 


function onBodyLoad()
{
    document.addEventListener("deviceready",onDeviceReady,false);
}

/* When this function is called, PhoneGap has been initialized and is ready to roll */
function onDeviceReady()
{
    phoneGapReady.innerHTML = "PhoneGap is Ready";
    
}

function getDeviceProperties() {
    var element = document.getElementById('deviceProperties');
    
    element.innerHTML = 'Device Name: '     + device.name     + '<br />' + 
    'Device PhoneGap: ' + device.phonegap + '<br />' + 
    'Device Platform: ' + device.platform + '<br />' + 
    'Device UUID: '     + device.uuid     + '<br />' + 
    'Device Version: '  + device.version  + '<br />';
}
