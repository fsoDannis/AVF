               
                
                function onBodyLoad()
                {
                    document.addEventListener("deviceready",onDeviceReady,false);
                }
                
                /* When this function is called, PhoneGap has been initialized and is ready to roll */
                function onDeviceReady()
                {
                    phoneGapReady.innerHTML = "PhoneGap is Ready";
                    
                }
                
                // alert dialog dismissed
                function alertDismissed() {
                    // do something
                }
                
                // Show a custom alert
                //
                function showAlert() {
                    navigator.notification.alert(
                                                 'You pressed Alert!', // message
                                                 alertDismissed, // callback
                                                 'This is a Test... of the Emergency...', // title
                                                 'Done' // buttonName
                                                 );
                }
                
                // process the confirmation dialog result
                function onConfirm(button) {
                    alert('You selected button ' + button);
                }
                
                // Show a custom confirmation dialog
                //
                function showConfirm() {
                    navigator.notification.confirm(
                                                   'You pressed Confirm!', // message
                                                   onConfirm, // callback to invoke with index of button pressed
                                                   'We have Confirmation', // title
                                                   'Restart,Exit' // buttonLabels
                                                   );
                }
                
                function playBeep() {
                    navigator.notification.beep(3);
                }
                
                // Vibrate for 2 seconds
                //
                function vibrate() {
                    navigator.notification.vibrate(2000);
                    alert('vibrate does not work on Sim');
                }
                
                