var watchID;

function onBodyLoad()
{
    document.addEventListener("deviceready",onDeviceReady,false);
}

/* When this function is called, PhoneGap has been initialized and is ready to roll */
function onDeviceReady()
{
    phoneGapReady.innerHTML = "PhoneGap is Ready";
    
}

function getHeading()
{
    try {
        navigator.compass.getCurrentHeading(onSuccess, onError);
    }
    catch (err)
    {
        alert(err);
    }
    
}
// onSuccess: Get the current heading
//
function onSuccess(heading) {
    
    var element = document.getElementById('currentHeading');
    element.innerHTML = 'heading: ' + heading + '<BR>';
}

// onError: Failed to get the heading
//
function onError(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}

// Start watching the compass
//
function startWatch() {
    
    // Update compass every 3 seconds
    var options = { frequency: 3000 };
    
    watchID = navigator.compass.watchHeading(onWatchSuccess, onError, options);
    
}

// Stop watching the compass
//
function stopWatch() {
    
    if (watchID) {
        navigator.compass.clearWatch(watchID);
        watchID = null;
    }
    
    
}

// onSuccess: Get the current heading
//
function onWatchSuccess(heading) {
    
    alert(heading);
    
    var element = document.getElementById('watchResult');
    element.innerHTML = 'heading: ' + heading + '<BR>';
    
    
    
}

