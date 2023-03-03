class Prize {

    constructor(sel) {
        this.DOM = document.querySelector(sel);

        this.min = Number(1000000000)
        this.max = Number(2500000000)
        this.prize = this.prize;
    }

    #random() {
        return Math.floor(Math.random() * (this.max - this.min)) + this.max;
    }

    #randomText() {
        let text = document.createElement("p");
        text.classList.add(".d");
        text.innerText = `Mostani várható főnyeremény: ${this.#random()} forint!`
        let prize = document.querySelector("#prize");

        prize.appendChild(text)
    }

    renderRandomPrize() {
        this.prizeBox = document.querySelector("#prize");

        if (this.prizeBox) {
            this.prizeBox.remove()
        }

        this.prizeBox = document.createElement("p");
        this.prizeBox.id = "prize";

        let text = document.createElement("p");
        text.classList.add(".d");
        text.innerText = `Mostani várható főnyeremény: ${this.#random()} forint!`

        this.prizeBox.appendChild(text)
    }
}