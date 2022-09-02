export default class RegulamentoPopup {
    constructor(){
        this.showPopup();
    }
    showPopup(){
        $(".form-launch__termos__button").on("click", function (e) {
            e.preventDefault();
			$(".form-launch__termos__popup ").addClass("active");
		});

		$('.triggerPopupRegulamento').on('click', ()=>{
			$(".form-launch__termos__button").trigger('click');
		})
		$('.lp-launch__join__button-regulamento').on('click', ()=>{
			$(".form-launch__termos__button").trigger('click');
		})

		$(".form-launch__termos__overlay, .form-launch__termos__close").on(
			"click",
			function () {
				$(this)
					.parents(".form-launch__termos__popup")
					.removeClass("active");
			}
		);
    }
}