function countTo(){
    let from = 0;
    let to = 650;
    let step = to > from ? 1 : -1;
    let interval = 15;

    if(from == to){
        document.querySelector("#outputtitu2").textContent = from;
        return;
    }

    let counter = setInterval(function(){
        from += step;
        document.querySelector("#outputtitu2").textContent = from;

        if(from == to){
            clearInterval(counter);
        }
    }, interval);
}
countTo();