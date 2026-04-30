function addLoadMessage(){
  var footer = document.getElementsByTagName("footer")[0];


  
  if (footer) {
    var newP =document.createElement("p");
    var today= new Date() ;
    var text =document.createTextNode("Page loaded on: " + today);
    newP.appendChild(text);
    footer.appendChild(newP); }}




function validateForm(){
  var name=document.getElementById("name");
  var email =document.getElementById("email");

  
  if (name.value == "" ||email.value== ""){
    
    alert("Please fill out all required fields.");
    return false;}
  else{return true;}

}

function toggleDescription(id){
  var desc =document.getElementById(id);

  
  if(desc.style.display == "none"){
    desc.style.display = "block";}
  else {desc.style.display = "none";
  }}

function quoteEvents(){
  var quote =document.getElementById("quote");

  if (quote){
    
    quote.addEventListener("mouseover", function(){
      
      quote.style.backgroundColor = "#fff7cc";
      quote.style.fontStyle = "italic";
    });

    quote.addEventListener("mouseout", function(){
      quote.style.backgroundColor = "";
      quote.style.fontStyle = "";
    }); }


}

window.onload =function(){
  if (document.body.id== "home"){
    addLoadMessage(); }

  quoteEvents(); };
