function countTo(){
    let from = 0;
    let to = 12;
    let step = to > from ? 1 : -1;
    let interval = 100;

    if(from == to){
        document.querySelector("#outputtitu").textContent = from;
        return;
    }

    let counter = setInterval(function(){
        from += step;
        document.querySelector("#outputtitu").textContent = from;

        if(from == to){
            clearInterval(counter);
        }
    }, interval);
}
countTo();