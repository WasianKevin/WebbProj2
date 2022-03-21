const bananpoints = document.querySelector("#banan_action");
const pointcounter = document.querySelector(".pointstext")
bananpoints.addEventListener("click", handleClick);

let score = 0;

let label = document.querySelector(".pointstext");

let label2 = document.querySelector(".bananknapp");

label2.addEventListener("score", handleClick);

function handleClick(){

if (score < 51)
{
    score += 1;
    pointcounter.innerHTML = `Points: ${score}`;
}
    

if (score > 49 && score < 251) {
    document.querySelector("#banan_action").setAttribute("src", "./pictures/banin.png");

        score += 2;
        pointcounter.innerHTML = `Points: ${score}`;

}

if (score > 249 && score < 1001) {
    document.querySelector("#banan_action").setAttribute("src", "./pictures/Trädban.png");
        score += 5;
        pointcounter.innerHTML = `Points: ${score}`;

}

if (score > 999 && score < 3001) {
    document.querySelector("#banan_action").setAttribute("src", "./pictures/Bananfarm.png");
        score += 10;
        pointcounter.innerHTML = `Points: ${score}`;
}

if (score > 2999) {
    document.querySelector("#banan_action").setAttribute("src", "./pictures/banfam.png");
        score += 25;
        pointcounter.innerHTML = `Points: ${score}`;
}


}
