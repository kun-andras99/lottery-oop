document.title = `Lottó - ${Lottery.version}`;

let selection = new Selection(".ticket-name");

let lottery = new Lottery({
    addTo: "main"
});

document.querySelector("#start-game").addEventListener("click", function () {
    console.log(1);
    let level = selection.initValue;
    // prize.renderRandomPrize();
    lottery.renderLotteryTickets();
});