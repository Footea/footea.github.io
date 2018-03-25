$(function() {
    
    $('.box1').next().css('background-color','rgba(255, 0, 0, 0.2)');
    
    $('h2').css('border', '1px solid red');

    var toggleStyle = function() {
       var inputFields = $('input[type="text"]');
        if( inputFields.css('background-color') === 'rgb(255, 0, 0)' ) {
           //set background color to white
           inputFields.css('background-color', 'rgb(255, 255, 255)');
           
       } else {
            //set background color to red   
            inputFields.css('background-color', 'rgb(255, 0, 0)'); 
           }
        }
     $('#ReqAQuoteBtn').click( toggleStyle );
    
    //append method
    $('.coreValues').append("<li><strong> This is brand new !!</strong></li>");
    
    //appendTo method
   // $("<li> This is brand new !!</li>").appendTo(".coreValues");
    
    //prepend method
    $('.coreValues').prepend("<li><strong> This is brand new !!</strong></li>");
    
    //prependTo method
   // $("<li> This is also great !!</li>").prependTo(".coreValues");
    
    //
    var nameVal = $('input[name="nameVal"]');
    
        function FillEmpty(){
            if( nameVal.val() == '' ){
                nameVal.val( 'John Doe' );
            }
        }
    
    $('#ReqAQuoteBtn').click( FillEmpty );
    
    
     
    
    
    //Iterating Over Collections
    
    // Array containing Objects with Fruit names & quantities
    		var fruitBasket = [	{title:'Apples', quantity:20},
				            {title:'Oranges', quantity:25},
							{title:'Kiwis', quantity:50},
							{title:'Strawberries', quantity:45},
							{title:'Bananas', quantity:10},
							{title:'Mangoes', quantity:5},
							{title:'Tomatoes', quantity:30} ];
    
        //each method instead of a for loop in js
	   $.each( fruitBasket, function ( index, element){
           $('.fruits').append('<li> We have ' +element.quantity + " " + element.title + '</li>');
       });
        // access to content
        $('.fruits > li').each( function(index, element){
            $(element).css('background-color','rgb(100, 200, 0)');
        });
        
    
        

    
    

    
    
    

})