// FECHA NOTIFICAÇÃO [BEM-VINDO] NO X OU CLICANDO...
$('#welcome').click(function(){
$(this).attr('data-content');
$(this).stop().slideToggle("slow");
});

// MOSTRA NOTIFICAÇÃO [BEM-VINDO]
setTimeout(() => {
  $('#welcome').slideToggle("slow")
}, 7000); // 7000 melhor

// FECHA NOTIFICAÇÃO [BEM-VINDO]
setTimeout(() => {
  $('#welcome').slideUp("slow")
}, 14000); // 14000 melhor
