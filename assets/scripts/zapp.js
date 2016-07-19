$(function(){
	$('input[type="file"]').filer({
		changeInput: true,
		showThumbs: true,
		addMore: false,
		limit: 1,
		captions: {
			button: "Choose file",
			feedback: "Select files to upload",
			feedback2: "arquivos escolhidos",
			drop: "Arraste os arquivos aqui",
			removeConfirmation: "Você quer realmente remover este arquivo?",
			errors: {
				filesLimit: "Somente {{fi-limit}} arquivos são permitos.",
				filesType: "Somente imagens são permitidas.",
				filesSize: "{{fi-name}} é muito grande! Por favor envie arquivos com no máximo {{fi-maxSize}} MB.",
				filesSizeAll: "Os arquivos são muito grandes! Por favor envie arquivos com no máximo {{fi-maxSize}} MB."
			}
		}
	});
	
	$('.thumb-gallery li').on('click', function(event){
		event.preventDefault();
		$(this).parent().prev().attr('style', 'background: url('+$(this).data('img')+') no-repeat center / cover;');
	});
	
	$('.navbar-toggle').on('click', function(){
        $('.menu').slideToggle();
    });
	
	// $(".fancybox").fancybox({
	// 	padding     : 0,
	// 	maxWidth	: 800,
	// 	maxHeight	: 600,
	// 	fitToView	: false,
	// 	width		: '70%',
	// 	height		: '70%',
	// 	autoSize	: true,
	// 	helpers : {
	// 		overlay : {
	// 			css : {
	// 				'background' : 'rgba(255, 255, 255, 0.8)'
	// 			}
	// 		}
	// 	}
	// });
});

isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    iPad: function() {
        return navigator.userAgent.match(/iPad/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};