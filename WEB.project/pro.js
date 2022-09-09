function validation(){
  
    var email=document.getElementById("Email").value;
    var name=document.getElementById("name").value;
    var l_name=document.getElementById("l_name").value;
    var error_massage=document.getElementById("error_massage");
    var text;
     
     if(email.length<6|| email.indexOf("@")==-1){
      text="enter valid email"
      error_massage.innerHTML=text;
      return false;
     }
    
        document.getElementById("form1").innerHTML=  " <span  style='color:#33713d; margin-left:438px;position: relative; top:-30px;'>Thank you!</span> ";
        console.log("client name:"+name+" "+l_name );
       
        console.log(  "Email:"+ email);
     return false;
    //document.getElementById("lol").innerHTML=email;
}
let scrolll= document.getElementById("scrolll");
window.onscroll=function(){
   if(scrollY >=340 &&  scrollY <=370){
       scrolll.style.display='block';
   }
   else{
    scrolll.style.display='none';
   }
}

let scrollll= document.getElementById("scrollll");
window.onscroll=function(){
   if(scrollY >=540  &&  scrollY <=570){
       scrollll.style.display='block';
   }
   else{
    scrollll.style.display='none';
   }
}

function validation2(){
    var f_name =document.getElementById("f_name").value;
    var l_name =document.getElementById("l_name").value;
   var email =document.getElementById("email").value;
   var subject  =document.getElementById("subject").value;
   var message =document.getElementById("text").value;
    
    var upp=document.getElementById("upp");
 var text;

if (f_name.length < 5) {
    text="please entre valid first name";
    upp.innerHTML = text; 
     
    return false;}
    if (l_name.length < 5) {
      text="please entre valid last name";
      upp.innerHTML = text; 
       
      return false;}
      if (email < 5||  email.indexOF("@") == -1) {
          text="please entre valid Email";
          upp.innerHTML = text; 
           
          return false;}
          
  
          if (subject.length < 5) {
              text="please entre valid subject name";
              upp.innerHTML = text; 
               
              return false;}
              if (message.length < 5) {
                  text="please entre valid last name";
                  upp.innerHTML = text; 
                   
                  return false;}
         document.getElementById("thank").innerHTML=  " <span  style='color:#33713d; margin-left:438px;position: relative; top:-30px;'>Thank you!</span> ";
    return true;
 }



 let scrolllll= document.getElementById("scrolllll");
 window.onscroll=function(){
    if(scrollY >=500  &&  scrollY <=540){
        scrolllll.style.display='block';
    }
    else{
     scrolllll.style.display='none';
    }
 }
 let scrollllll= document.getElementById("scrollllll");
 window.onscroll=function(){
    if(scrollY >=560  &&  scrollY <=570){
        scrollllll.style.display='block';
    }
    else{
     scrollllll.style.display='none';
    }
 }

