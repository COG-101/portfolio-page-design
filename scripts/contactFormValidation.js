function formValidation() {
    
    var fName = document.getElementById('first-name').value;
    var lName = document.getElementById('last-name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;
    var errorMessage = document.getElementById('error-message');

    var fNameColor = document.querySelector('[for=first-name]');
    var lNameColor = document.querySelector('[for=last-name]');
    var emailColor = document.querySelector('[for=email]');
    var subjectColor = document.querySelector('[for=subject]');
    var messageColor = document.querySelector('[for=message]');

    var errorColor = '#ff9d94';

    var lettersOnlyRegex = /^[a-zA-Z]+$/;
    var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var subjMessageRegex = /^[A-Za-z0-9_ \n\.,£\$'"@:;]+$/;



    if (fName.length < 3 || fName.length > 30) {
        errorMessage.innerHTML = 'First Name must be between 2 - 30 characters in length';
        fNameColor.style.color = errorColor;
        return false;   

    } else if (!fName.match(lettersOnlyRegex)) {
        errorMessage.innerHTML = 'First Name must only contain letters (a-z, A-Z). No spaces.';
        fNameColor.style.color = errorColor;
        return false;   

    } else {
        fNameColor.style.color = 'white';
    }



    if (lName.length < 3 || lName.length > 30) {
        errorMessage.innerHTML = 'Last Name must be between 2 - 30 characters in length';
        lNameColor.style.color = errorColor;
        return false;  

    } else if (!lName.match(lettersOnlyRegex)) {
        errorMessage.innerHTML = 'Last Name must only contain letters (a-z, A-Z). No spaces.';
        lNameColor.style.color = errorColor;
        return false;

    } else {
        lNameColor.style.color = 'white';
    }



    if (email.length < 6 || email.length > 254) {
        errorMessage.innerHTML = 'Email must be between 6 - 254 characters in length';
        emailColor.style.color = errorColor;
        return false;    

    } else if (!email.match(emailRegex)) {
        errorMessage.innerHTML = 'Email must only contain letters, numbers & special characters (-!#$%&\'*+-/=?^_`{}|~). No spaces.';
        emailColor.style.color = errorColor;
        return false;

    } else {
        emailColor.style.color = 'white';
    }



    if (subject.length < 1 || subject.length > 230) {
        errorMessage.innerHTML = 'Subject must between 1 - 230  characters in length';
        subjectColor.style.color = errorColor;
        return false;    

    } else if (!subject.match(subjMessageRegex)) {
        errorMessage.innerHTML = 'Subject must not contain any special characters except (.,£$\'\"@:;)';
        subjectColor.style.color = errorColor;
        return false; 

    } else {
        subjectColor.style.color = 'white';
    }



    if (message.length < 1 || message.length > 300) {
        errorMessage.innerHTML = 'Message must between 1 - 300  characters in length';
        messageColor.style.color = errorColor;
        return false;    
    } else if (!message.match(subjMessageRegex)) {
        errorMessage.innerHTML = 'Message must not contain any special characters except (.,£$\'\"@:;)';
        messageColor.style.color = errorColor;
        return false; 
    } else {
        messageColor.style.color = 'white';
    }

    return true
}  