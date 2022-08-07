import './validate.css'
export default function validateaddress()
{
    let address=document.getElementById("address").value;
    if(address!='')
    {
        
        document.getElementById("address_error").innerHTML=''
        return(true)
    }
    else
    { 
        
        document.getElementById("address_error").innerText='Enter the delivery address'
        return(false)
        
    }
}
