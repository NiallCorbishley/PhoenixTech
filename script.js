function logIn() {
    const username = document.getElementById("Username1").value.trim();
    const password = document.getElementById("Password1").value.trim();
    
    if (username && password) {
        window.open("Account_Profile_Write_Post.html", "_self");
    } else {
        alert("Incomplete credentials");
    }
}

function signUp() {
    const username = document.getElementById("Username").value.trim();
    const email = document.getElementById("Email").value.trim();
    const password = document.getElementById("Password").value.trim();
    const reconfirmPassword = document.getElementById("Reconfirm_Password").value.trim();
    const acceptTerms = document.getElementById("Accept_term_and_conditions").checked;
    
    if (username && email && password && reconfirmPassword && acceptTerms) {
        window.open("Account_Profile_Write_Post.html", "_self");
    } else {
        alert("Incomplete account information");
    }
}
