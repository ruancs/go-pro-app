export default class ShowPopup {
    constructor() {
        this.selectors();
    }
    selectors(){                    
        this.registerButton = $('.lp-launch__join__butom-cadastro');
        this.popupContainer = $("section.lp-launch__form");
        this.overlayPopup = $('.lp-launch__overlay');
        this.closePopupButton = $('.form-launch__close-form');
        this.events();
    }
    events(){
        this.registerButton.on( 'click', ()=>{
            this.popupContainer.toggleClass('active');
            this.overlayPopup.toggleClass('active');
            console.log('clicou');
        })

        this.overlayPopup.on('click', ()=>{
            this.closePopup()
        })

        this.closePopupButton.on('click', ()=>{
            this.closePopup()
        })
        
    }
    closePopup(){
        this.popupContainer.removeClass('active')
        this.overlayPopup.removeClass('active');
    }
}