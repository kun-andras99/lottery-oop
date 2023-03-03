class Selection {

    /**
     * 
     * @param {object} o 
     */
    constructor(sel) {
        this.DOM = document.querySelector(sel);
        // console.log(this.DOM);
        this.min = Number(this.DOM.dataset.min);
        this.max = Number(this.DOM.dataset.max);
        this.init = 0;

        this.build();
    }

    build() {
        this.upBtn = this.DOM.querySelector(".ticket-up");
        // console.log(this.upBtn);
        this.downBtn = this.DOM.querySelector(".ticket-down");

        this.valueContainer = this.DOM.querySelector(".ticket-name");
        // console.log(this.valueContainer);
        let _this = this;

        // this.upBtn.addEventListener("click", function () {
        //     if (_this.value < _this.max)
        //         _this.value = ++_this.value
        // })

        // this.downBtn.addEventListener("click", function () {
        //     if (_this.value > this.min)
        //         _this.value = --_this.value
        // })
    }

    get initValue() {
        return this.value = this.init;
    }

    get value() {
        return Number(this.valueContainer)
    }

    set value(val) {
        if (val >= this.min && val <= this.max)
            this.valueContainer.innerText = val;
    }
}