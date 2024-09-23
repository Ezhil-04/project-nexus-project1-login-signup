const toggleBtn1=document.querySelector(".btnOne")
const toggleBtn2=document.querySelector(".btnTwo")
const toggleBtns=document.querySelector(".circleDiv")
const loginPanel=document.querySelector(".login")
const signupPanel=document.querySelector(".signup")

document.addEventListener("DOMContentLoaded",()=>{
loginPanel.classList.add("showPanel")
})


toggleBtn1.addEventListener("click",()=>{
  signupPanel.classList.add("showPanel")
  loginPanel.classList.remove("showPanel")
  toggleBtn1.style.opacity="0"
  toggleBtn2.style.opacity="1"
})

toggleBtn2.addEventListener("click",()=>{
    loginPanel.classList.add("showPanel")
    signupPanel.classList.remove("showPanel")
    toggleBtn2.style.opacity="0"
    toggleBtn1.style.opacity="1"
})






let phone1=document.getElementById("phoneInput1");
let email1=document.getElementById("emailInput1");
let password1=document.getElementById("passwordInput1");
let submitBtn1=document.getElementById("submitBtn1")


let phone2=document.getElementById("phoneInput2");
let email2=document.getElementById("emailInput2");
let password2=document.getElementById("passwordInput2");
let submitBtn2=document.getElementById("submitBtn2");

let emailSpan1=document.getElementById("emailSpan1")
let phoneSpan1=document.getElementById("phoneSpan1")
let passwordSpan1=document.getElementById("passwordSpan1")

let emailSpan2=document.getElementById("emailSpan2")
let phoneSpan2=document.getElementById("phoneSpan2")
let passwordSpan2=document.getElementById("passwordSpan2")




phone1.addEventListener("keyup",validatePhone1);
phone2.addEventListener("keyup",validatePhone2);
email1.addEventListener("keyup",validateEmail1);
email2.addEventListener("keyup",validateEmail2);
password1.addEventListener("keyup",validatePassword1);
password2.addEventListener("keyup",validatePassword2);
submitBtn1.addEventListener("click",validateForm1)
submitBtn2.addEventListener("click",validateForm2)


// <i class="fa-solid fa-check" style="color: #1fbd0a;"></i>
// <i class="fa-solid fa-circle-xmark" style="color: #ff0000;"></i>
function validatePhone1(){

    const element=phone1;
    const elementSpan=phoneSpan1;
  
    if(!element.value.match(/^(?:(?:\+?1\s*(?:[.-]\s*)?)?\(?(\d{3})\)?[-\s.]?\d{3}[-\s.]?\d{4})(?:\s*(?:#|ext\.)\s*(\d+))?$/)){

        elementSpan.innerHTML=`<i class="fa-solid fa-circle-xmark" style="color: #ff0000;"></i>`
        return false

    }
    
    elementSpan.innerHTML=`<i class="fa-solid fa-check" style="color: #1fbd0a;"></i>`
    
    return true

}

function validatePhone2(){

    const element=phone2;
    const elementSpan=phoneSpan2;
  
    if(!element.value.match(/^(?:(?:\+?1\s*(?:[.-]\s*)?)?\(?(\d{3})\)?[-\s.]?\d{3}[-\s.]?\d{4})(?:\s*(?:#|ext\.)\s*(\d+))?$/)){

        elementSpan.innerHTML=`<i class="fa-solid fa-circle-xmark" style="color: #ff0000;"></i>`
        return false

    }
    
    elementSpan.innerHTML=`<i class="fa-solid fa-check" style="color: #1fbd0a;"></i>`
    
    return true

}

function validateEmail1(){

    const element=email1;
    const elementSpan=emailSpan1;

   
    const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[\w-]{2,4}$/;

    if(!regex.test(element.value)){

        elementSpan.innerHTML=`<i class="fa-solid fa-circle-xmark" style="color: #ff0000;"></i>`
        return false

    }
    
    elementSpan.innerHTML=`<i class="fa-solid fa-check" style="color: #1fbd0a;"></i>`
    
    return true

}

function validateEmail2(){

    const element=email2;
    const elementSpan=emailSpan2;

   
    const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[\w-]{2,4}$/;

    if(!regex.test(element.value)){

        elementSpan.innerHTML=`<i class="fa-solid fa-circle-xmark" style="color: #ff0000;"></i>`
        return false

    }
    
    elementSpan.innerHTML=`<i class="fa-solid fa-check" style="color: #1fbd0a;"></i>`
    
    return true

}

function validatePassword1(){

    const element=password1;
    const elementSpan=passwordSpan1;

    if(element.value.length==0){

        elementSpan.innerHTML=`<i class="fa-solid fa-circle-xmark" style="color: #ff0000;"></i>`
        return false

    }

    elementSpan.innerHTML=`<i class="fa-solid fa-check" style="color: #1fbd0a;"></i>`
    
    return true
}

function validatePassword2(){

        const element=password2;
        const elementSpan=passwordSpan2;
    
        if(element.value.length==0){
    
            elementSpan.innerHTML=`<i class="fa-solid fa-circle-xmark" style="color: #ff0000;"></i>`
            return false
    
        }
        
        elementSpan.innerHTML=`<i class="fa-solid fa-check" style="color: #1fbd0a;"></i>`
        
        return true
    
}

function validateForm1(){
  
    if(!validateEmail1() || !validatePassword1() || !validatePhone1()){  
        element.preventDefault();
    }
    else{
        alert("Succesfully Logined")
    }

}

function validateForm2(){
  
    if(!validateEmail2() || !validatePassword2() || !validatePhone2()){  
        element.preventDefault();
    }
    else{
        alert("Account created succesfully")
    }

}

