 function onBodyLoad()
                {
                    document.addEventListener("deviceready",onDeviceReady,false);
                }
                
                /* When this function is called, PhoneGap is ready */
                function onDeviceReady()
                {
                    phoneGapReady.innerHTML = "PhoneGap is Ready";
                    
                }
                
                function getLocation() {
                    try {
                        navigator.geolocation.getCurrentPosition(onSuccess, onError);
                    }
                    catch (err)
                    {
                        alert(err);
                    }
                }
                
                // onSuccess Geolocation
                //
                function onSuccess(position) {
                    var element = document.getElementById('geolocation');
                    element.innerHTML = 'Latitude: ' + position.coords.latitude + '<br />' +
                    'Longitude: ' + position.coords.longitude + '<br />' +
                    'Altitude: ' + position.coords.altitude + '<br />' +
                    'Accuracy: ' + position.coords.accuracy + '<br />' +
                    'Altitude Accuracy: ' + position.coords.altitudeAccuracy + '<br />' +
                    'Heading: ' + position.coords.heading + '<br />' +
                    'Speed: ' + position.coords.speed + '<br />' +
                    'Timestamp: ' + new Date(position.timestamp) + '<br />';
                }
                
                // onError Callback receives a PositionError object
                //
                function onError(error) {
                    alert('code: ' + error.code + '\n' +
                          'message: ' + error.message + '\n');
                }

                var watchID;
                var updates = 0;
                function startWatch() {
                    // Update every 3 seconds
                    var options = { frequency: 1000 };
                    watchID = navigator.geolocation.watchPosition(onWatchSuccess, onError, options);
                }
                
                // onSuccess Geolocation
                //
                function onWatchSuccess(position) {
                    updates++;
                    
                    var element = document.getElementById('watchResult');
                    element.innerHTML = 'Latitude: ' + position.coords.latitude + '<br />' +
                    'Longitude: ' + position.coords.longitude + '<br /> updates: '+ updates +
                    '<hr />';
                }

                
                function stopWatch() {
                    if (watchID != null) {
                        navigator.geolocation.clearWatch(watchID);
                        watchID = null;
                        updates = 0;
                    }
                }
