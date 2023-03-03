document.title = `Lottó - ${Lottery.version}`;

let selection = new Selection(".ticket-name");

let lottery = new Lottery({
    addTo: "main"
});

// console.log(lottery);

document.querySelector("#start-game").addEventListener("click", function () {
    let level = selection.initValue;
    // console.log(level);
    lottery.renderLotteryTickets();
});