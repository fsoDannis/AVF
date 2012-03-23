$(document).ready(function(){
 
		    $(".show").click(function () {
		    	var divname= this.name;
		      $("#footer").fadeOut(50);
		      $("#"+divname).fadeIn(2000).siblings().fadeOut("slow");
		      
		    });
		
	
    
    
    
    
    
		
});


    
