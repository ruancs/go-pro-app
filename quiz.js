function verificarResposta(clicked){

	var resp = clicked;



	if (resp == 1){
		console.log('acertou')
		$('#1').addClass('acertou')
		$(".lp-launch__join__content_q1-opt").prop("onclick", null).off("click");
		$('#1 strong').html('<img src="https://gopro.vteximg.com.br/arquivos/correct.png" width="100px" alt="">')
	

	}else 
	if(resp == 4){
		console.log('acertou')
		$('#4').addClass('acertou')
		$(".lp-launch__join__content_q2-opt").prop("onclick", null).off("click");
		$('#4 strong').html('<img src="https://gopro.vteximg.com.br/arquivos/correct.png" max-width="100px"  alt="">')
	

	}else
	if (resp == 6){
		console.log('acertou')
		$('#6').addClass('acertou')
		$(".lp-launch__join__content_q3-opt").prop("onclick", null).off("click");
		$('#6 strong').html('<img src="https://gopro.vteximg.com.br/arquivos/correct.png" max-width="100px"  alt="">')
	

	}
	else if(resp == 2){
		console.log("errou")
		$('#2').addClass('errou')
		$('#2 strong').html('<img src="https://gopro.vteximg.com.br/arquivos/wrong.png" max-width="100px"  alt="">')

	}
	else if(resp == 3){
		console.log("errou")
		$('#3').addClass('errou')
		$('#3 strong').html('<img src="https://gopro.vteximg.com.br/arquivos/wrong.png" max-width="100%" alt="">')
		
	}
	else if(resp == 5){
		console.log("errou")
		$('#5').addClass('errou')
		$('#5 strong').html('<img src="https://gopro.vteximg.com.br/arquivos/wrong.png" max-width="100%"  alt="">')
		
	}
	else if(resp == 7){
		console.log("errou")
		$('#7').addClass('errou')
		$('#7 strong').html('<img src="https://gopro.vteximg.com.br/arquivos/wrong.png" max-width="100%"  alt="">')
		
	}
	else if(resp == 8){
		console.log("errou")
		$('#8').addClass('errou')
		$('#8 strong').html('<img src="https://gopro.vteximg.com.br/arquivos/wrong.png" max-width="100%" alt="">')
		
	}
	if (
		$(".lp-launch__join__content_q1-opt").hasClass( "acertou" )&& 
		$(".lp-launch__join__content_q2-opt").hasClass( "acertou" )&&
		$(".lp-launch__join__content_q3-opt").hasClass( "acertou" )){
			console.log("parabens")
			$('.lp-launch__form').addClass("active");
	}else 
	if (
		$(".lp-launch__join__content_q1-opt").hasClass( "errou" )&& 
		$(".lp-launch__join__content_q2-opt").hasClass( "errou" )&&
		$(".lp-launch__join__content_q3-opt").hasClass( "errou" )){
			console.log("parabens tambem")
			$('.lp-launch__form').addClass("active");
	}else
	if (
		$(".lp-launch__join__content_q1-opt").hasClass( "errou" )&& 
		$(".lp-launch__join__content_q2-opt").hasClass( "acertou" )&&
		$(".lp-launch__join__content_q3-opt").hasClass( "errou" )){
			console.log("parabens tambem")
			$('.lp-launch__form').addClass("active");
	}
	else
	if (
		$(".lp-launch__join__content_q1-opt").hasClass( "acertou" )&& 
		$(".lp-launch__join__content_q2-opt").hasClass( "errou" )&&
		$(".lp-launch__join__content_q3-opt").hasClass( "errou" )){
			console.log("parabens tambem")
			$('.lp-launch__form').addClass("active");
	}
	else
	if (
		$(".lp-launch__join__content_q1-opt").hasClass( "acertou" )&& 
		$(".lp-launch__join__content_q2-opt").hasClass( "acertou" )&&
		$(".lp-launch__join__content_q3-opt").hasClass( "errou" )){
			console.log("parabens tambem")
			$('.lp-launch__form').addClass("active");
	}
	else
	if (
		$(".lp-launch__join__content_q1-opt").hasClass( "errou" )&& 
		$(".lp-launch__join__content_q2-opt").hasClass( "errou" )&&
		$(".lp-launch__join__content_q3-opt").hasClass( "acertou")){
			console.log("parabens tambem")
			$('.lp-launch__form').addClass("active");
	}
	else
	if (
		$(".lp-launch__join__content_q1-opt").hasClass( "errou" )&& 
		$(".lp-launch__join__content_q2-opt").hasClass( "acertou" )&&
		$(".lp-launch__join__content_q3-opt").hasClass( "acertou" )){
			console.log("parabens tambem")
			$('.lp-launch__form').addClass("active");
	}

	}