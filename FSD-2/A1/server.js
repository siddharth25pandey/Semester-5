function check() {
    let first = document.getElementById("first").value;
    let last = document.getElementById("last").value;
    let phone = document.getElementById("phone").value;
    let roll = document.getElementById("roll").value;
    if (first === "") {
        alert("First Name is Empty, Please Enter First Name");
        return false;
    } else if (last === "") {
        alert("Last Name is Empty, Please Enter Last Name");
        return false;
    } else if (phone.length != 10) {
        alert("Phone number is not of 10 Digits");
        return false;
    } else if (!roll.startsWith("S2019")) {
        alert("Please enter ROll number starting with S2019");
        return false;
    } else {
        alert("Registration Successfull");
        return true;
    }
}