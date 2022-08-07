export default function validate2()
{
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value
    checkemail(email)
    checkpassword(password)
}
function checkemail(email)
{
    if(email.length>8 && email.includes("@gmail.com"))
    {
        
        document.getElementById("email_error").innerHTML=''
    }
    else
    { 
        
        document.getElementById("email_error").innerText='Email should contain @gmail.com and must be atleast 8 letters long'
    }
    
}
function checkpassword(password)
{
    if(password.length>5)
    {
        
        document.getElementById("password_error").innerHTML=''
    }
    else
    { 
        
        document.getElementById("password_error").innerText='Password should be atleast 5 letters long'
    }
    
}