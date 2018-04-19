// form validation
// DOM nodes
var form = {
    register: document.getElementById('register'),
    email: document.getElementById('email'),
    password: document.getElementById('password'),
    confirmPassword: document.getElementById('confirmPassword')
};

// form submit
form.register.addEventListener('submit', CheckForm);

// form submit validation
var reEmail = /^[a-z0-9._%-]+@[a-z0-9.-]+\.[a-z]{2.4}$/;
function CheckForm(e) {
    var msg = "";

    // check email
    if (!reEmail.test(form.email.value)) {
        msg += "\nyour email address";
    }

    // check passwords
    if (form.password.value == "" || form.password.value != form.confirmPassword.value ) {
        msg += "\nyour password";
    }

    // complete message
    if (msg != "") {
        msg = "please check: "+msg;
    }
    else {
        msg = "form is valid!\nSubmitting... "
    }
    alert(msg);
    e.preventDefault();
}
