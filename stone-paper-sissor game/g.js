
const b=document.querySelectorAll(".bt");

let player,comp,result,p,c;

b.forEach(button => button.addEventListener("click", () => {
    player = button.textContent;
    console.log(player);
    let comp = computerturn();
     console.log(comp);
    result = match(player,comp);
    document.getElementById("play").innerHTML=`Player: ${player}`
    document.getElementById("com").innerHTML=`Computer: ${comp}`
    document.getElementById("st").innerHTML=`status: ${result}`
}))

function computerturn(){
    let no=Math.floor(Math.random() * 2) + 0;
    const a=["Rock","Paper","Sissors"];
    return a[no];
}

function match(p,c){
    if(p==c){
        return "Draw!";
    }
    else if(c == "Rock"){
        if(p== "Paper"){
            return "You Win";
        }
        else{
            return "You loss"
        }
    }
    else if(c == "Paper"){
        if(p== "Sissors"){
            return "You Win";
        }
        else{
            return "You loss"
        }
    }
    else {
        if(p== "Rock"){
            return "You Win";
        }
        else{
            return "You loss"
        }
    }
    
      
    
}