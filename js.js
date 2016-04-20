$(document).ready(function() {
    var country ={
        Bangladesh:{
            Capital:"Dhaka",
            Animal:"Bengal tiger",
            Language:"Bangla",
            Population:"156.6 million", 
        },
        
        India:{
            Capital:"New Delhi",
            Animal:"Bengal tiger",
            Language:"Hindi",
            Population:"1.252 billion", 
        },
        
        "United States":{
            Capital:"Washington D.C",
            Animal:"bald eagle",
            Language:"English",
            Population:"318.9 million", 
        },
        
        Egypt:{
             Capital:"Cairo",
            Animal:"Steppe eagle",
            Language:"Arabic",
            Population:"82.06 million", 
        },
        
        "Saudi Arabia":{
            Capital:"Riyadh",
            Animal:"Carabao",
            Language:"Arabic",
            Population:"28.83 million", 
        }
    }
 

  $("#button").click(function(){
   $("#okey").val()
 
 var answer= $("#okey").val()
 alert(country[answer].Capital);
 
  $("#Population").text(country[answer].Population);
   $("#Language").text(country[answer].Language);
    $("#Animal").text(country[answer].Animal);
  
  
 
    

    
});  

});



