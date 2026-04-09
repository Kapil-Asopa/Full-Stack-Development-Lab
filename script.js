function validateForm() {
    let phone = document.forms[0]["contact"].value;
    if (phone.length != 10) {
        alert("Enter valid phone number");
        return false;
    }
}