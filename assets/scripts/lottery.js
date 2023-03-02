document.title = `Lottó - ${Lottery.version}`;

let lottery = new Lottery({
    addTo: "main",
    lotteryTicket: document.querySelector("div[data-ticket-value]").dataset.ticketValue
});

document.querySelector("#start-game").addEventListener("click", function () {
    lottery.renderLotteryTickets();
});