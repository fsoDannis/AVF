
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
    pictureSource=navigator.camera.PictureSourceType;
    destinationType=navigator.camera.DestinationType;
    
}

// Called when a photo is successfully retrieved
//
function onPhotoDataSuccess(imageData) {
    // Uncomment to view the base64 encoded image data
    // console.log(imageData);
    
    // Get image handle
    //
    var myImage = document.getElementById('myImage');
    
    // Unhide image elements
    //
    myImage.style.display = 'block';
    
    // Show the captured photo
    // The inline CSS rules are used to resize the image
    //
    myImage.src = "data:image/jpeg;base64," + imageData;
    
}

// Called when a photo is successfully retrieved
//
function onPhotoURISuccess(imageURI) {
    // Uncomment to view the image file URI 
    // console.log(imageURI);
    
    // Get image handle
    //
    var myImage = document.getElementById('myImage');
    
    // Unhide image elements
    //
    myImage.style.display = 'block';
    
    // Show the captured photo
    // The inline CSS rules are used to resize the image
    //
    myImage.src = imageURI;
}

// A button will call this function
//
function capturePhoto() {
    
    // Take picture using device camera and retrieve image as base64-encoded string
    try {
        navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50, 
                                    destinationType: destinationType.FILE_URI });
        
    }
    catch (err)
    {
        alert(err);
    }
}

// A button will call this function
//
function capturePhotoEdit() {
    try {
        // Take picture using device camera, allow edit, and retrieve image as base64-encoded string  
        navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 20, allowEdit: true }); 
    }catch (err)
    {
        alert(err);
    }
}

// A button will call this function
//
function getPhoto(source) {
    
    try {
        // Retrieve image file location from specified source
        navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50, 
                                    destinationType: destinationType.FILE_URI,
                                    sourceType: source });
    }catch (err)
    {
        alert(err);
    }
}

function onFail(message) {
    
    alert('Failed: ' + message);
}