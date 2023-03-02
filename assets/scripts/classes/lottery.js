/**
 * Lottószelvény tippelős játék.
 * 
 * * Fejlesztő: Kun András
 */

class Lottery {

    static version = "1.0 - Beta";

    /**
     * @param {object} o 
     */
    constructor(o) {
        this.lotteryTicket = o.lotteryTicket || 5;
        this.tippedNumbers = this.tippedNumbers || [];

        this.complete = true;

        this.parentElement = document.querySelector(o.addTo) || document.createElement("div");

        this.create = new Create();
    }

    #lotteryNumberClick(num) {
        let _this = this;
        num.addEventListener("click", function (e) {
            if (_this.complete) {
                if (!_this.tippedNumbers.includes(e.target.dataset.lotteryNumber)) {
                    _this.tippedNumbers.push(e.target.dataset.lotteryNumber)
                } else {
                    _this.tippedNumbers.splice(_this.tippedNumbers.indexOf(e.target.dataset.lotteryNumber), 1)
                }
                num.classList.toggle("tipped-number")
            }
            console.log(_this.tippedNumbers);
        })

    }

    #createNumber(num) {
        let number = document.createElement("span");
        number.classList.add("lottery-number");
        number.innerHTML = num;
        number.dataset.lotteryNumber = num;

        this.#lotteryNumberClick(number);

        return number;
    }

    renderLotteryTickets() {
        if (this.gameBox)
            this.gameBox.remove()

        this.gameBox = document.createElement("section");
        this.gameBox.id = "lottery-container";

        switch (true) {
            case this.lotteryTicket == 5:
                for (let j = 1; j <= 6; j++) {
                    let row = this.create.createElement({
                        tag: "div",
                        cls: "lottery-tipped-numbers"
                    });
                    for (let i = 1; i <= 90; i++) {
                        row.appendChild(this.#createNumber(i));
                    }
                    this.gameBox.appendChild(row)
                }
                break;

            case this.lotteryTicket == 6:
                for (let j = 1; j <= 8; j++) {
                    let row = this.create.createElement({
                        tag: "div",
                        cls: "lottery-tipped-numbers"
                    });
                    let lotteryNum = this.create.createElement({
                        tag: "span",
                        cls: "lottery-ticket-number"
                    }, j);
                    for (let i = 1; i <= 45; i++) {
                        row.appendChild(this.#createNumber(i));
                    }
                    this.gameBox.appendChild(row)
                    row.appendChild(lotteryNum)
                }
                break;
        }

        this.parentElement.appendChild(this.gameBox)
    }
}