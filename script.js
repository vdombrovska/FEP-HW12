const contactForm = document.querySelector('#newForm');
const contactsList = document.querySelector('#contactsList');
const contactTemplate = document.querySelector('#userTemplate');
const DELETE_Cl = 'delete';
contactForm.addEventListener('click', onAddBtnClick);
contactsList.addEventListener('click', onDeleteBtnClick);
const allContacts = [];

function onAddBtnClick(line) {
    line.preventDefault();
    const newContact = getContact();
    const newContactId = Number(newContact.dataset.id);
    addNewLine(newContact);
    saveData();
    clearInputs();
}

function onDeleteBtnClick (line) {
    if (line.target.classList.contains(DELETE_CL)) {
        line.remove;
    }
    revomeDataStorage();
}

function getContact() {
    const contactFields = {};
    contactFields.firstName = document.getElementById ('inputFirstName');
    contactFields.lastName = document.getElementById ('inputLAstName');
    contactFields.phoneNumber = document.getElementById ('InputUsersTel');
    return contactFields;
}

function areFieldsCorrect(contactFields) {
    return (
        isFirstNameCorrect(contactFields.firstName) &&
        isLastNameCorrect(contactFields.lastName) &&
        isPhoneCorrect(contactFields.phoneNumber)
    );
}

function isFirstNameCorrect (value) {
    if (value =='')
    return error();
}

function isLastNameCorrect (value) {
    if (value =='')
    return error();
}

function isPhoneCorrect (value) {
    if( value =='' || isNaN(value))
    return error();
}

function error(){
    return alert (' error')
}

function clearInputs (){
    contactFields.firstName = '';
    contactFields.lastName = '';
    contactFields.phoneNumber = '';
}

function addNewLine (contactFields){
    const newLineHtml = replaceFunction(contactFields); 
    contactsList.insertAdjacentHTML ('beforeend',newLineHtml)
}

function replaceFunction (contactFields){
    return
    contactTemplate.replace( {firstName}, contactFields.firstName);
    contactTemplate.replace( {lastName}, contactFields.lastName);
    contactTemplate.replace( {phone}, contactFields.phoneNumber)
}

function saveData(newContact) {
    const newContactString = JSON.stringify (newContact);
    localStorage.setItem ( newContactId, newContactString );
}

function revomeDataStorage() {
    localStorage.removeItem (newContactId)
}