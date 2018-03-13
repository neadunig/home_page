$(window).each(function(){
  // EXIBE O MODAL LOCATION
  setTimeout(() => {
    $('.location, .teste').stop().fadeIn();
  }, 5000);
  
  //FECHA O MODAL LOCATION CLICK NO MOUSE
  $('.teste').click(function(event){
    if(event.target){
      $('.location, .teste').stop().fadeOut("slow");
    }
  });
  $('.location, .teste').css("display", "none");
});