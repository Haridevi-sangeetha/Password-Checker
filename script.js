const password = document.getElementById("password");
const bar = document.getElementById("bar");
const text = document.getElementById("strengthText");

password.addEventListener("input", function () {
    let value = password.value;

    if (value.length < 6) {
        bar.style.width = "33%";
        bar.style.background = "red";
        text.innerText = "Weak Password ❌";
    } 
    else if (!/[A-Z]/.test(value) || !/[0-9]/.test(value)) {
        bar.style.width = "66%";
        bar.style.background = "orange";
        text.innerText = "Medium Password ⚠️";
    } 
    else if (/[!@#$%^&*]/.test(value)) {
        bar.style.width = "100%";
        bar.style.background = "green";
        text.innerText = "Strong Password ✅";
    } 
    else {
        bar.style.width = "66%";
        bar.style.background = "orange";
        text.innerText = "Medium Password ⚠️";
    }
});
