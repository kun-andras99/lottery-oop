class Prize {

    constructor(sel) {
        this.DOM = document.querySelector(sel);

        this.min = Number(2000000000)
        this.max = Number(3500000000)
        this.prize = this.prize;
    }

    #randomNumber(num1, num2) {
        return Math.floor(Math.random() * (num2 - num1)) + num2;
    }

    #random() {
        return this.#randomNumber(this.min, this.max)
    }

    #randomText() {
        return `Mostani várható főnyeremény: ${this.#random()}`
    }

    renderRandomPrize() {
        console.log(this.#randomText);
    }
}