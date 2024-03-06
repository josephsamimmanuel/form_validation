
var submit=document.getElementById("submit")
submit.addEventListener("click", (e)=>{
    e.preventDefault()

    var nameRegex=/^[a-zA-Z ]+$/
    var emailRegex=/^[a-zA-Z0-9]+@gmail\.com/
    var phoneRegex=/^[0-9]{10}$/

    var name=document.getElementById("name")
    var email=document.getElementById("email")
    var phone=document.getElementById("phone")
    var header=document.getElementById("header")

    var validate=true

    if(nameRegex.test(name.value)==false){
        document.querySelector(".nameerror").style.display="inline"
        validate=false
    }
    else{
        document.querySelector(".nameerror").style.display="none"
    }

    if(phoneRegex.test(phone.value)==false){
        document.querySelector(".phoneerror").style.display="inline"
        validate=false
    }
    else{
        document.querySelector(".phoneerror").style.display="none"
    }

    if(emailRegex.test(email.value)==false){
        document.querySelector(".emailerror").style.display="inline"
        validate=false
    }
    else{
        document.querySelector(".emailerror").style.display="none"
    }
    if(validate==true){
        setTimeout(function() {
            header.style.top="30px"
        }, 500);
        
        setTimeout(function() {
            header.style.top = "-50px";
        }, 4000);
    }
})
