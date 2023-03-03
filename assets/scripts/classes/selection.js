class Selection {

    constructor() {
        this.level = document.querySelector(".ticket-name")

        this.min = Number(this.level.dataset.min);
        this.max = Number(this.level.dataset.max);

        this.init = 0;

        this.build()
    }

    get initValue() {
        return this.value = this.init;
    }

    get value() {
        return Number(this.level.innerText)
    }

    set value(val) {
        if (val >= this.min && val <= this.max)
            this.level.innerText = val;
    }

    build() {
        this.upBtn = document.querySelector(".ticket-up");
        this.downBtn = document.querySelector(".ticket-down");

        let _this = this;

        this.upBtn.addEventListener("click", function () {
            console.log(1);
            if (_this.value < _this.max)
                _this.value = ++_this.value
        })

        this.downBtn.addEventListener("click", function () {
            if (_this.value > _this.min)
                _this.value = --_this.value
        })
    }
}