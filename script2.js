function countTo(){
    let from = 0;
    let to = 300;
    let step = to > from ? 1 : -1;
    let interval = 20;

    if(from == to){
        document.querySelector("#outputtitu1").textContent = from;
        return;
    }

    let counter = setInterval(function(){
        from += step;
        document.querySelector("#outputtitu1").textContent = from;

        if(from == to){
            clearInterval(counter);
        }
    }, interval);
}
countTo();