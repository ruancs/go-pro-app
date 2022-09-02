import "jquery-validation"; /*necessario outra build com jquery validate para executar */
export default class FormValidate {
	constructor() {
		this.mascara();
		this.validation();
		
	}
	validation(){
		this.registrarMetodosCustomizadosDeValidacao(this.getMetodosPersonalizadosDeValidacao());
		var opcoesValidacao = {
			onkeyup: false,
			focusInvalid: true,
			onfocusout: function (element) {
				$(element).valid();
			},
			errorPlacement: function (error, element) {
				element.parent().find("label.error").remove();
				error
					.css("display", "none")
					.appendTo(element.parent())
					.fadeIn("slow");
			},
			rules: this.regrasDeValidacao(),
			messages: this.mensagensDeValidacao(),
		};
		$('#form-launch').validate(opcoesValidacao);
		$('#form-launch-termos').is(":checked");
		$("#associado-submit").on("click", this.cadastrar.bind(this));
	}
	mascara() {
		$("#form-launch-cpf").mask("000.000.000-00");
		$("#form-launch-telefone").mask("(00) 000000000");
	}
	
	bloquear() {
		$('#form-launch').addClass("form-disabled");
		$('#form-launch')
			.find("input, textarea, select, button")
			.prop("disabled", true);
		return this;
	}

	cadastrar(e) {
		e.preventDefault();
		if($('#form-launch-termos').is(":checked")){
			this.bloquear();
			this.save()
				.done(this.cadastrado.bind(this))
				.fail(this.naoCadastrado.bind(this));
		}
		else{
			this.feedBack('Campo não preenchido', 'Campo Não preenchido','É necessário aceitar o regulamento')
		}
	}

	save(){
		const urlPost = "https://ljljwajadf.execute-api.us-east-1.amazonaws.com/production/draw"
		return $.ajax({
			headers: {
			'Content-Type': "application/json"
		  },
			url:urlPost ,
			type: "POST" ,
			data: JSON.stringify(this.content())
		});
	}

	cadastrado(data, textStatus, jqXHR) {
		const urlMasterDAta = "/api/dataentities/DP/documents"
		$.ajax({
			headers: {
				Accept: "application/vnd.vtex.ds.v10+json",
				"Content-Type": "application/json",
			},
			url:urlMasterDAta ,
			type: "POST" ,
			data: JSON.stringify(data)
		}).done((data)=>{
			console.log(data);
			this.renderPopupSucess();
		}).fail(this.naoCadastrado.bind(this));
		
	}
	renderPopupSucess(){
		if (!$(".form-launch__success").length) {
			let msgContainer = `
				<div class="form-launch__success">
					<div class="form-launch__success__overlay success__close"></div>
					<div class="form-launch__success__popup">
						<a class="form-launch__success__close success__close" aria-label="Fechar">
							<i class="sprite sprite-fechar"></i>
						</a>
						<h3 class="form-launch__success__title">
							<i class="sprite sprite-blue-check"></i>
							<span>Cadasto realizado com sucesso</span>
						</h3>
						<div class="form-launch__success__description">
							Encaminhamos para o e-mail cadastrado a cópia do regulamento e o número que irá concorrer.
						</div>
						<a style="border-radius:0;" class="form-launch__success__end success__close">
							Finalizar Cadastro
						</a>
					</div>
				</div>
			`;

			$(msgContainer).appendTo("#form-launch");

			$(".success__close").on("click", function () {
				$(this).parents(".form-launch__success").removeClass("active");
				$('.form-launch__close-form').trigger('click')
			});
		}

		$(".form-launch__success").addClass("active");

		this.limpar();
		this.desbloquear();
	}
	naoCadastrado(jqXHR, textStatus, errorThrown) {
		let message =
			"Não foi possível concluir o envio do cadastro. Por favor, tente novamente mais tarde.";

		if (jqXHR.responseText.indexOf("User already draw a code") >= 0) {
			message =
				"Não foi possível concluir o envio do cadastro. Participante já possui um número da sorte!";
		}
		
		if (jqXHR.responseText.indexOf("Invalid CPF") >= 0) {
			message =
				"Não foi possível concluir o envio do cadastro. CPF inválido.";
		}

		this.feedBack("erro", "Erro ao enviar cadastro", message);
		this.desbloquear();
	}

	feedBack(status, titulo, mensagem) {
		let msgContainer;
		const msgHeading = $("<h3>").html(titulo);
		const msg = $("<p>").html(mensagem);

		msgContainer = $("<div/>", {
			class: "form__message",
		})
			.append(msgHeading)
			.append(msg);

		msgContainer.appendTo("#form-launch");

		// this.scrollToMiddle(msgContainer);

		setTimeout(() => {
			msgContainer.fadeOut();
		}, 5000);

		setTimeout(() => {
			msgContainer.remove();
		}, 7000);
	}

	desbloquear() {
		$('#form-launch')
			.find("input, textarea, select, button")
			.prop("disabled", false);
		return this;
	}

	limpar() {
		$('#form-launch')
			.find(
				'input[type="text"],  input[type="tel"], input[type="date"],  textarea,  select'
			)
			.val("")
			.removeClass("error");
		$('#form-launch')
			.find('input[type="checkbox"]')
			.prop("checked", false)
			.removeClass("error");
		$('#form-launch').find(" label.error").remove();
		return this;
	}

	salvar() {
		return $('#form-launch');
	}

	content() {
		let cadastroForm = {
			name: $("#form-launch-nome").val(),
			email: $("#form-launch-email").val(),
			cpf: $("#form-launch-cpf").val(),
			birthDate: $("#form-launch-data").val(),
			phone: $("#form-launch-telefone").val(),
			instagram: $("#form-launch-instagram").val(),
		};
		return cadastroForm;
	}

	regrasDeValidacao() {
		var regras = {
			name: {
				required: true,
				rangelength: [2, 100],
			},
			email: {
				required: true,
				"email-RULE": true,
			},
			CPF: {
				required: true,
				"cpf-RULE": true,
			},
			birthDate: {
				required: true,
			},
			telefone: {
				required: true,
				"telefone-RULE": true,
			},
			instagram: {
				required: true,
				rangelength: [2, 100],
			},
			agreeTerms: "required",
		};
		return regras;
	}
	registrarMetodosCustomizadosDeValidacao(listaMetodos) {
		for (var nomeMetodo in listaMetodos) {
			if (listaMetodos.hasOwnProperty(nomeMetodo)) {
				var metodo = listaMetodos[nomeMetodo];
				$.validator.addMethod(
					nomeMetodo,
					metodo.funcao,
					metodo.mensagem
				);
			}
		}
	}

	mensagensDeValidacao() {
		var mensagensParaCadaRegra = {
			name: {
				required: "Por favor informe o seu Nome.",
				rangelength: $.validator.format(
					"O nome deve ter de {0} caracteres a {1} caracteres"
				),
			},
			email: {
				required: "Por favor informe o seu E-mail.",
				"email-RULE": "Formato de email inválido."
			},
			CPF: {
				required: "Por favor informe o seu CPF.",
				"cpf-RULE": "Formato de CPF inválido."
			},
			birthDate: {
				required: "Por favor informe a sua Data de Nascimento.",
			},
			telefone: {
				required: "Por favor informe o seu Telefone.",
				"telefone-RULE": "Telefone inválido.",
			},
			instagram: {
				required: "Por favor informe o seu Instagram.",
				rangelength: $.validator.format(
					"O Instagram deve ter de {0} caracteres a {1} caracteres"
				)
			},
			agreeTerms: "Por favor confirme que está ciente do regulamento.",
		};
		return mensagensParaCadaRegra;
	}

	getMetodosPersonalizadosDeValidacao() {
		const _this = this;

		return {
			"email-RULE": {
				funcao: function (value, element) {
					return (
						this.optional(element) ||
						/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(
							value
						)
					);
				},
				mensagem: "Preencha o e-mail corretamente.",
			},
			"cpf-RULE": {
				funcao: function (value, element) {
					return (
						this.optional(element) ||
						/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/.test(value)
					);
				},
				mensagem: "Preencha o CPF corretamente.",
			},
			
			
			"telefone-RULE": {
				funcao: function (value, element) {
					return (
						this.optional(element) ||
						/^((\+[0-9]{2} ?)?(\([0-9]{2}\) ?)|([0-9]{2} ?))?[1-9][0-9]{3,4}(\-| )?[0-9]{4}$/.test(
							value
						)
					);
				},
				mensagem: "Preencha o telefone corretamente.",
			}
		};
	}
}

