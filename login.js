function loguserin() {
    var name = prompt("What is your name?", "")
    var code = prompt("What is your code?", "")


    
}

function Login() {
    var account = prompt("Do you have an accont? Say yes or no:", "no")
    if(account == yes) {
        loguserin()
    }
    else {
        if(account == no) {
            var signUp = prompt("Do you wish to sign up? Say yes or no:", "no")
            if(signUp === yes) {
                location.href = 'Checkout.html';
            }
        }
    }
}