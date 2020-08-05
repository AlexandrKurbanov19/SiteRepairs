$(document).ready(function() {
  
    $('#but1').click(function(){
      $('#modal').fadeIn(300);
    });
    $('#modal').on('click', function(e){
      if (e.target.id == 'modal'){
        $(this).hide();
      }  
    });
    
    
    
  });