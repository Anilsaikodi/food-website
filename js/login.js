const loginText = document.querySelector(".title-text .login");
         const loginForm = document.querySelector("form.login");
         const loginBtn = document.querySelector("label.login");
         const signupBtn = document.querySelector("label.signup");
         const signupLink = document.querySelector("form .signup-link a");
         signupBtn.onclick = (()=>{
           loginForm.style.marginLeft = "-50%";
           loginText.style.marginLeft = "-50%";
         });
         loginBtn.onclick = (()=>{
           loginForm.style.marginLeft = "0%";
           loginText.style.marginLeft = "0%";
         });
         signupLink.onclick = (()=>{
           signupBtn.click();
           return false;
         });
function getData()
{
    var first = document.getElementById('First').value
    var lastname = document.getElementById('last').value
    var Email = document.getElementById('email').value
    var password = document.getElementById('password').value
    user = {
        firstname : first,
        Lastname : lastname,
        email : Email,
        Password : password
    }

    localStorage.setItem('firstname',first)
    localStorage.setItem('Lastname',lastname)
    localStorage.setItem('email',Email)
    localStorage.setItem('password',password)

    
    if (first =="" || lastname=="" || Email=="" || password =="" )
    {
        alert("Enter all the detials")
    }
    else{
        document.getElementById('First').value = " ";
        document.getElementById('last').value = " ";
        document.getElementById('email').value = " ";
        document.getElementById('password').value = " ";
        let a = document.getElementById('href')
        a.href = "login.html"
        console.log(user)
        alert("Acount created!")
    }
}
function userLogin()
{
    let Email = localStorage.getItem('email')
    let password = localStorage.getItem('password')
    // console.log(Email,password);
    let useremail = document.getElementById('email').value
    let userpass = document.getElementById('password').value
    // console.log(useremail)

    if (Email == useremail && password == userpass)
    {
        window.location.href = 'home.html'
        alert("LOGIN SUCCESS!")
        
    }
    else
    {
        alert("enter the correct details")
    }

}