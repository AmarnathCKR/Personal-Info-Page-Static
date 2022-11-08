function sumbitData(event) {

    event.preventDefault()
    let error = true
    let name = document.getElementById("name")
    let email= document.getElementById("email")
    let subject=document.getElementById("subject")
    
    let nameError = document.getElementById("nameError")
    let emailError = document.getElementById("emailError")
    let subjectError = document.getElementById("subjectError")
    console.log(name.value);
    if (name.value === ''|| name.value.length<3 || name.value.length>10) {
        error = false;
        nameError.innerHTML = "Please enter your name"
    }else {  
        nameError.innerHTML = ""
    }
    if (email.value === '' || email.value.indexOf('@')<=0 || (email.value.charAt(email.value.length-4)!='.')&&(email.value.charAt(email.value.length-3)!='.') ){
        error = false;
        emailError.innerHTML = "Please enter your email"
    }else {  
        emailError.innerHTML = ""
    }









    if (subject.value === '') {
        error = false;
        subjectError.innerHTML = "Please enter the subject"
    }else {
        subjectError.innerHTML = ""
     }
     if (message.value === '') {
        error = false;
        messageError.innerHTML = "Please enter the message"
    }else {
        messageError.innerHTML = ""
     }

    if (error===true) {
        called()
    }
}






        function called() {
          console.log("Form Submitted")
       
            $.ajax({
              url:'https://script.google.com/macros/s/AKfycbzqNSI_lU3lAQrOcsdcXrWJZorJnTZHMmFBL_wH9LXmmF-HiOiK-k59_G_tItpXrSE3qQ/exec',
		
                data:$("#submit-form").serialize(),
                method:"post",
                success:function (response){
                    alert("Form submitted successfully")
                    window.location.reload()
                    //window.location.href="https://google.com"
                },
                error:function (err){
                    alert("Something Error")
    
                }
            })
      
          }
