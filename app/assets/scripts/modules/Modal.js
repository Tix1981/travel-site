import $ from 'jquery';

class Modal {
    constructor() {
        this.openModalButton = $('.open-modal');
        this.modal = $('.modal');
        this.closeModalButon = $('.modal__close');
        this.events();
    }

    events(){
        //clicking the open modal button
        this.openModalButton.click(this.openModal.bind(this));

        //clicking the x close modal button
        this.closeModalButon.click(this.closeModal.bind(this));

        // pushes the any key
        $(document).keyup(this.keyPressHandler.bind(this));

    }

    keyPressHandler(e){
        if (e.keyCode == 27) {
            this.closeModal();
        }
    }

    openModal(){
        this.modal.addClass("modal--is-visible");
        return false;
    }

    closeModal(){
        this.modal.removeClass("modal--is-visible");
    }
}

export default Modal;