// JavaScript Document
$(document).ready(function(e){
		//alert ("Listo")
	document.addEventListener("deviceready",function(){
		$('.btn').tap(function(){
			var boton = (($(this).attr('class')).split(' '))[1];
			switch(boton){
			case 'b1':
				navigator.notification.beep(1);
				break;
			case 'b2':
				navigator.notification.beep(2);
				break;
			case 'b3':
				navigator.notification.beep(5);
				break;
			case 'v1':
				navigator.notification.vibrate(800);
				break;
			case 'v2':
				navigator.notification.vibrate(800);
				navigator.notification.vibrate(800);
				break;
			case 'v3':
				navigator.notification.vibrate(800);
				navigator.notification.vibrate(800);
				navigator.notification.vibrate(800);
				navigator.notification.vibrate(800);
				navigator.notification.vibrate(800);				
				break;
			}
			$("#derecha").swiperight(function(){
		           navigator.notification.alert("Desliz&oacute; a la derecha",function(){"Practica 1", "Aceptar"});
			});
		        $("#izquierda").swipeleft(function(){
			   navigator.notification.confirm('¿Qué desea hacer?', function(opcion){
				  switch(opcion){
					  case 1:
					  navigator.notification.beep(1);
					  break;
					  case 2:
					  navigator.notification.vibrate(500);
					  break;
				  }//switch
			  },"Práctica 1","Beep,Vibrar,Cancelar");//function confirm
		   });//function swipe
	});
	},false);
});
