let startedInp, startedFreeInp;

window.addEventListener('DOMContentLoaded', (event) => {
    startedInp = document.getElementById('started');
    startedFreeInp = document.getElementById('started-free');
    forFreeError = document.getElementById('for-free-error');
    startedError = document.getElementById('started-error');
});

function validateEmail(email) {
    return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

function checkForFreeValidEmail(event) {
    let validate = this.validateEmail(startedFreeInp.value);
    if(!validate) {
        forFreeError.style.visibility = 'visible';
    } else {
        forFreeError.style.visibility = 'hidden';
    }
}

function checkStartedValidEmail(event) {
    let validate = this.validateEmail(startedInp.value);
    if(!validate) {
        startedError.style.visibility = 'visible';
    } else {
        startedError.style.visibility = 'hidden';
    }
}