const sumbit=document.getElementById('submitbutton');
const nameofuser=document.getElementById('takename');
const emailofuser=document.getElementById('takeemail');
const pswdofuser=document.getElementById('takepswd');
// const fs=require('fs');
sumbit.addEventListener('click',function(){
            window.location.href='new.html'
            let user_name;
            user_name=nameofuser.value;
            let user_email;
            user_email=emailofuser.value;
            let pswd;
            pswed=pswdofuser.value;
            console.log(user_email);
            
});
