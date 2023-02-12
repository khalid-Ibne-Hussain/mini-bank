//  step 1
document.getElementById('btn-submit').addEventListener('click', function () {
    // console.log("button clicked")
    // step 2 get the email address
    // use .value to get text from an input field

    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // console.log(email);

    // step 3 get password
    // get the password value
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    // console.log(password);

    // step 4 verify email and password
    if (email === 'abc@gmail.com' && password === '1234') {
        window.location.href = 'bank.html';
    }
    else {
        alert('invalid user!!');
    }

})


