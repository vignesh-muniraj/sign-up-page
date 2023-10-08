function myfun()
{
    var email = document.getElementById('email').value;
    var password = document.getElementById('pass').value;
    var emailpat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var passwordpat = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/;
    if (!emailpat.test(email)) {
        alert("Invalid email. Please enter a valid email address.");
    } else if (!passwordpat.test(password)) {
        alert("weak password ");
    } else {
        alert("Signup Successful!");
    }
   
}