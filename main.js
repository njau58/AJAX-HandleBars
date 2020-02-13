var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'http://localhost:3000/pets',true);
ourRequest.onload = function() {
  if (ourRequest.status >= 200 && ourRequest.status < 400) {
   
    var data = JSON.parse(ourRequest.responseText);
    renderHtml(data);
  } else {
    console.log("We connected to the server, but it returned an error.");
  }
};

ourRequest.onerror = function() {
  console.log("Connection error");
};

ourRequest.send();

Handlebars.registerHelper("calculateAge", function(birthYear){
 let age = new Date().getFullYear() - birthYear;
if(age>0){
  return age + " years  old."
}else
{
  return "less than 1yeae old."
}
})

function renderHtml(details){
let rawTemplate = document.getElementById("entry-template").innerHTML;
let compiledTemplate = Handlebars.compile(rawTemplate);
let generatedHtml = compiledTemplate(details);

let details_container = document.getElementById("details-container");
details_container.innerHTML = generatedHtml;


}