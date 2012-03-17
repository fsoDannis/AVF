
function onBodyLoad()
{
    document.addEventListener("deviceready",onDeviceReady,false);
}

/* When this function is called, PhoneGap has been initialized and is ready to roll */
function onDeviceReady()
{
    phoneGapReady.innerHTML = "PhoneGap is Ready";
    
}

// PhoneGap is ready
//
var currentContact = null;
var contactNum = 0;

function createContact() {
    
    results.innerHTML = "";
    try {
        var myContact = navigator.contacts.create();
        
        var name = new ContactName();
        name.familyName = "UserA" + contactNum;
        name.givenName = "Test";
        myContact.name = name;
        results.innerHTML = results.innerHTML + name.givenName  + " " + name.familyName;                         
        myContact.save(onSaveSuccess, onSaveError);
        //alert(myContact.toString());
        contactNum++;       
        
    }
    catch (err)
    {
        alert(err);
    }
}

function removeContact()
{
    results.innerHTML = "";
    
    results.innerHTML = results.innerHTML + currentContact.name.givenName  + " " + currentContact.name.familyName; 
    currentContact.remove(onRemoveSuccess,onRemoveError);
    
}

function onSaveSuccess(contact) {
    currentContact = contact;
    
    results.innerHTML = results.innerHTML + " saved!";
    del.style.visibility="";
    create.style.visibility="hidden";
    
}

// onSaveError: Failed to get the contacts
//
function onSaveError(contactError) {
    alert("Error = " + contactError.code);
}

// onRemoveSuccess: Get a snapshot of the current contacts
//
function onRemoveSuccess() {
    results.innerHTML = results.innerHTML + " removed!";
    currentContact = null;
    del.style.visibility="hidden";
    create.style.visibility="";
}

// onRemoveError: Failed to get the contacts
//
function onRemoveError(contactError) {
    alert("Error = " + contactError.code);
}


function findContacts() {
    // find all contacts with 'User' in any name field
    var options = new ContactFindOptions();
    options.filter="User"; 
    options.multiple=true;
    var fields = ["displayName", "name", "givenName", "familyName"];
    navigator.contacts.find(fields, onSuccess, onError, options);
}

// onSuccess: Get a snapshot of the current contacts
//{"id":1,"name":{"givenName":"Test","formatted":"Test Hiedi","middleName":null,"familyName":"Hiedi","honorificPrefix":null,"honorificSuffix":null}}

function onSuccess(contacts) {
    alert(contacts.length);
    contactsSearch.innerHTML = "";
    for (var i=0; i<contacts.length; i++) {
        contactsSearch.innerHTML = "Display Name = " + contacts[i].name.formatted + "<BR>" + contactsSearch.innerHTML;
    }
}

// onError: Failed to get the contacts
//
function onError() {
    alert('Nothing Found!');
}
