function outputSound(key){
    switch (key) {
        case "w":
            let audio1 = new Audio("./sounds/tom-1.mp3");
            audio1.play();

            break;
        case "a":
            let audio2 = new Audio("./sounds/tom-2.mp3");
            audio2.play();


            break;

        case "s":
            let audio3 = new Audio("./sounds/tom-3.mp3");
            audio3.play();


            break;

        case "d":
            let audio4 = new Audio("./sounds/tom-4.mp3");
            audio4.play();


            break;

        case "j":
            let audio5 = new Audio("./sounds/snare.mp3");
            audio5.play();


            break;
    
        case "k":
            let audio6 = new Audio("./sounds/crash.mp3");
            audio6.play();

            break;
        case "l":
            let audio7 = new Audio("./sounds/kick-bass.mp3");
            audio7.play();

            break;
    
        default:
            break;
    }
}

function keyAnimation(key){
    let activeKey = document.querySelector("."+key);
    activeKey.classList.add("pressed");
    setTimeout(function(){activeKey.classList.remove("pressed");},100);
}


let numberOfDrums = document.querySelectorAll(".drum").length
for(let i = 0; i < numberOfDrums; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    let key = this.innerHTML;
    outputSound(key);
    keyAnimation(key);
    
    })

}

document.addEventListener("keypress",function(event){
    outputSound(event.key);
    keyAnimation(event.key);
})




