const signupForm = document.getElementById('signup');
const loginForm = document.getElementById('login');
const tabButtons = document.querySelectorAll(".tab-btn");
const forms = document.querySelectorAll(".form");

tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        tabButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        forms.forEach(form => form.classList.remove("active"));
        document.getElementById(btn.dataset.tab).classList.add("active");
    });
});

function toggleVisibility(id) {
    const input = document.getElementById(id);
    input.type = input.type === 'password' ? 'text' : 'password';
}

const cityOptions = {
    'Ukraine': ['Kyiv', 'Lviv', 'Odesa'],
    'USA': ['New York', 'Los Angeles', 'Chicago']
};

const country = document.getElementById('country');
const city = document.getElementById('city');

country.addEventListener('change', () => {
    const selected = country.value;
    city.innerHTML = '<option value="">Select City</option>';

    if (selected && cityOptions[selected]) {
        cityOptions[selected].forEach(c => {
            const option = document.createElement('option');
            option.value = c;
            option.text = c;
            city.appendChild(option);
        });
        city.disabled = false;
    } else {
        city.disabled = true;
    }
});

signupForm.onsubmit = e => {
    e.preventDefault();
    const fn = document.getElementById('firstName');
    const ln = document.getElementById('lastName');
    const email = document.getElementById('email');
    const pw = document.getElementById('password');
    const cpw = document.getElementById('confirmPassword');
    const phone = document.getElementById('phone');
    const dob = document.getElementById('dob');
    const sex = document.getElementById('sex');
    const country = document.getElementById('country');
    const city = document.getElementById('city');

    let valid = true;

    document.querySelectorAll('.error-msg').forEach(e => e.textContent = '');
    document.querySelectorAll('input, select').forEach(f => f.classList.remove('valid', 'invalid'));

    if (fn.value.length < 3 || fn.value.length > 15) {
        valid = false;
        fn.classList.add('invalid');
        document.getElementById('firstNameError').textContent = 'First name must be 3-15 characters.';
    } else fn.classList.add('valid');

    if (ln.value.length < 3 || ln.value.length > 15) {
        valid = false;
        ln.classList.add('invalid');
        document.getElementById('lastNameError').textContent = 'Last name must be 3-15 characters.';
    } else ln.classList.add('valid');

    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(email.value)) {
        valid = false;
        email.classList.add('invalid');
        document.getElementById('emailError').textContent = 'Invalid email.';
    } else email.classList.add('valid');

    if (pw.value.length < 6) {
        valid = false;
        pw.classList.add('invalid');
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters.';
    } else pw.classList.add('valid');

    if (cpw.value !== pw.value) {
        valid = false;
        cpw.classList.add('invalid');
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
    } else cpw.classList.add('valid');

    const phoneRegex = /^\+380\d{9}$/;
    if (!phoneRegex.test(phone.value)) {
        valid = false;
        phone.classList.add('invalid');
        document.getElementById('phoneError').textContent = 'Phone must be in +380XXXXXXXXX format.';
    } else phone.classList.add('valid');

    const birthDate = new Date(dob.value);
    const age = new Date().getFullYear() - birthDate.getFullYear();
    if (!dob.value || birthDate > new Date() || age < 12) {
        valid = false;
        dob.classList.add('invalid');
        document.getElementById('dobError').textContent = 'You must be 12+ years old.';
    } else dob.classList.add('valid');

    if (!sex.value) {
        valid = false;
        sex.classList.add('invalid');
        document.getElementById('sexError').textContent = 'Please select a sex.';
    } else sex.classList.add('valid');

    if (!country.value) {
        valid = false;
        country.classList.add('invalid');
        document.getElementById('countryError').textContent = 'Please select a country.';
    } else country.classList.add('valid');

    if (!city.value) {
        valid = false;
        city.classList.add('invalid');
        document.getElementById('cityError').textContent = 'Please select a city.';
    } else city.classList.add('valid');

    if (valid) {
        document.getElementById('signupSuccess').textContent = 'Registration successful!';
        signupForm.reset();
        city.disabled = true;
        document.querySelectorAll('input, select').forEach(f => f.classList.remove('valid'));
    }
};

loginForm.onsubmit = e => {
    e.preventDefault();
    const un = document.getElementById('loginUsername');
    const pw = document.getElementById('loginPassword');
    let valid = true;

    document.getElementById('loginUsernameError').textContent = '';
    document.getElementById('loginPasswordError').textContent = '';

    if (!un.value) {
        valid = false;
        document.getElementById('loginUsernameError').textContent = 'Username is required.';
    }
    if (pw.value.length < 6) {
        valid = false;
        document.getElementById('loginPasswordError').textContent = 'Password must be at least 6 characters.';
    }

    if (valid) {
        document.getElementById('loginSuccess').textContent = 'Login successful!';
        loginForm.reset();
    }
};