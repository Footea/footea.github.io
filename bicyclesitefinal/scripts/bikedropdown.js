 $(function(){
  
    
    //Slide Effects
   // $('.dropdownMenu > li').hover( function(){
        // <Mouseover
      //  $(this).children("ul").slideDown(200);
        
   // }, function(){
        //Mouseout
       // $(this).children("ul").slideUp(200); 
   // });
    
  
    
    //Slide Toggle
       $('.dropdownMenu > li').hover( function(){
        // <Mouseover
        $(this).children("ul").slideToggle(200);
    });
    
    
    
})