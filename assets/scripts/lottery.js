document.title = `Lottó - ${Lottery.version}`;

let selection = new Selection(".ticket-name");

// let prize = new Prize();

let lottery = new Lottery({
    addTo: "main"
});

document.querySelector("#start-game").addEventListener("click", function () {
    // prize.renderRandomPrize();
    // prize.renderRandomPrize();
    lottery.renderLotteryTickets();
});