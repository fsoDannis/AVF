function onBodyLoad()
{
    document.addEventListener("deviceready",onDeviceReady,false);
}

/* When this function is called, PhoneGap has been initialized and is ready to roll */
function onDeviceReady()
{
    phoneGapReady.innerHTML = "PhoneGap is Ready";
}

function getCurrentAcceleration() {
    navigator.accelerometer.getCurrentAcceleration(onAccelerationSuccess, onError);
}

// onSuccess: Get a snapshot of the current acceleration
//
function onAccelerationSuccess(acceleration) {
    currentAccelerationResult.innerHTML = 'Acceleration X: ' + acceleration.x + '<BR>' +
    'Acceleration Y: ' + acceleration.y + '<BR>' +
    'Acceleration Z: ' + acceleration.z + '<BR>' +
    'Timestamp: '      + acceleration.timestamp + '<BR>';
}


var watchId = -1;
var updates = 0;

function startWatch() {
    
    // Update acceleration every 3 seconds
    var options = { frequency: 1000 };
    
    if (watchId == -1)
        watchID = navigator.accelerometer.watchAcceleration(onAccelerationWatchSuccess, onError, options);
}

// Stop watching the acceleration
//
function stopWatch() {
    if (watchID > -1) {
        navigator.accelerometer.clearWatch(watchID);
        watchID = -1;
        updates = 0;
    }
}

// onSuccess: Get a snapshot of the current acceleration
//
function onAccelerationWatchSuccess(acceleration) {
    
    // alert("here!");
    updates++;
    watchResult.innerHTML = 'Acceleration X: ' + acceleration.x + '<BR>' +
    'Acceleration Y: ' + acceleration.y + '<BR>' +
    'Acceleration Z: ' + acceleration.z + '<BR>' +
    'Timestamp: '      + acceleration.timestamp + '<BR>' +
    'Update Number: '      + updates + '<BR>';
}


// onError: Failed to get the acceleration
//
function onError() {
    alert ("onError");
}
