const pwAlert = document.createElement('div');
pwAlert.textContent = "Password doesn't match!";
pwAlert.style.color = 'red';

const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    const pw = document.querySelector('#user_password').value;
    const confirmPw = document.querySelector('#confirm_password').value;
    
    const formRow = document.querySelector('div.form-row');

    // Remove any existing pwAlert
    const existingAlert = formRow.querySelector('.pw-alert');
    if (existingAlert) {
        existingAlert.remove();
    }

    // Check if passwords match
    if (pw !== confirmPw) {
        pwAlert.classList.add('pw-alert'); // Adding a class for identification
        formRow.appendChild(pwAlert);
    }
});
