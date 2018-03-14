$(window).each(function(){
  // EXIBE O MODAL LOCATION
  setTimeout(() => {
    $('.location, .fundo-slide').stop().fadeIn();
  }, 5000);
  
  //FECHA O MODAL LOCATION CLICK NO MOUSE
  $('.fundo-slide').click(function(event){
    if(event.target){
      $('.location, .fundo-slide').stop().fadeOut("slow");
    }
  });
  $('.location, .fundo-slide').css("display", "none");
});

