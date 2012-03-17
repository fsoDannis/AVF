
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

