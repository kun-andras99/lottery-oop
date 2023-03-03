class Lottery {

    static version = "1.0 - Beta";

    /**
     * @param {object} o 
     */
    constructor(o, sel) {
        this.newLottery = document.querySelector("#start-game");

        this.min = this.min || 5;
        this.max = this.max || 6;
        this.ticket = this.ticket || 5;
        this.ticketFields = this.ticketFields || 5;
        this.ticketNumbers = this.ticketNumbers || 90;

        this.ticketDOM = this.ticketDOM || document.querySelectorAll(".lottery-tipped-numbers");
        this.ticketNumberDOM = document.querySelector(".ticket-name");
        this.ticketLotteryNumsDOM = document.querySelectorAll(".lottery-ticket-number");

        this.complete = true;

        this.parentElement = document.querySelector(o.addTo) || document.createElement("div");

        this.create = new ElementCreator();
    }

    /**
     * 
     * @param {val} string
     */
    set value(val) {
        if (val <= this.max && val >= this.min)
            this.ticketNumberDOM.innerHTML = val;
    }

    get value() {
        return Number(this.ticketNumberDOM.innerText);
    }

    #newLotteryBtn() {
        if (this.gameBox) {
            this.gameBox.remove()
        }

        this.newLottery.innerText = "Új lottószelvény";
        this.gameBox = document.createElement("section");
        this.gameBox.id = "lottery-container";
    }

    #lotteryNumberClick(num) {
        let _this = this;
        num.addEventListener("click", function (e) {
        });
    }

    #createNumber(num) {
        let number = document.createElement("span");
        number.classList.add("lottery-number");
        number.innerHTML = num;
        number.dataset.lotteryNumber = num;

        this.#lotteryNumberClick(number);

        return number;
    }

    #checkLotteryValue(num) {
        if (num == 5) {
            this.ticketFields = 6;
            this.ticketNumbers = 90;
        } else {
            this.ticketFields = 6;
            this.ticketNumbers = 45;
        }
    }

    #createLotteryTicketNumbers(ticketNumbers) {
        for (let i = 1; i <= ticketNumbers; i++)
            this.ticketDOM.appendChild(this.#createNumber(i));
    }

    #createTicketRowAndColumn(num) {
        this.ticketDOM = this.create.createElement({
            tag: "div",
            attributes: {
                class: "lottery-tipped-numbers"
            },
            datasets: {
                chan: num
            }
        });
        this.ticketLotteryNumsDOM = this.create.createElement({
            tag: "span",
            attributes: {
                class: "lottery-ticket-number"
            },
            innerText: num
        });
    }

    #createLotteryTicket(fields, numbers) {
        for (let i = 1; i <= fields; i++) {
            this.#createTicketRowAndColumn(i)
            this.#createLotteryTicketNumbers(numbers);
            this.gameBox.appendChild(this.ticketDOM)
            this.ticketDOM.appendChild(this.ticketLotteryNumsDOM)
        }
    }

    renderLotteryTickets() {
        this.ticket = this.ticketNumberDOM.innerText;

        this.#newLotteryBtn();
        this.#checkLotteryValue(this.ticket)
        this.#createLotteryTicket(this.ticketFields, this.ticketNumbers);

        this.parentElement.appendChild(this.gameBox)
    }
}