function getRandomIndex(arr) {
    return Math.floor(Math.random()*arr.length);
}
const random = getRandomIndex;
const tournaments = [
    "Champions League", "Europa League", "Europa Conference League", "Super Cup"
];
const teams = [
    "Ajax", "Real", "Barcelona", "Juventus", "Chelsea", "Dinamo Kiev", "Rostov", "Torpedo Taganrog"
];
const scores = [
    '1:0', '2:0', '3:0', '1:1', '0:1', '0:2', '0:3'
]


const randomMatchGenerator = () => {
    let tournament = tournaments[random(tournaments)];
    let team1 = teams[random(teams)];
    let team2 = teams[random(teams)];
    while(team1 === team2) {
        team2 = teams[random(teams)]
    };
    let score = scores[random(scores)];
    let edition = Math.ceil(Math.random()*25);
    const lastDigitStr = String(edition).slice(-1); // 👉️ '7'
    const lastDigitNum = Number(lastDigitStr);
    if(lastDigitNum === 1) {
        edition = edition + "st";
            }
    else if(lastDigitNum === 2) { edition = edition + "nd";}
    else if(lastDigitNum === 3) {edition = edition + "rd";}
    else {edition = edition + "th"};
    console.log(`It was ${edition} edition of ${tournament}.
    ${team1} played against ${team2}, the match was spectacular and finished with the score: ${score}`)    
};
randomMatchGenerator();
randomMatchGenerator();
randomMatchGenerator();
randomMatchGenerator();
randomMatchGenerator();