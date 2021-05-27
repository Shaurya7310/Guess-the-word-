player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");
player1_score = localStorage.getItem("player1score");
player2_score = localStorage.getItem("player2score");
if(player1_score==5){
document.getElementById("winner").innerHTML = player1_name + "  wins 😄";
}
else{
    document.getElementById("winner").innerHTML = player2_name + "  wins 😄";
}
function Go_back(){
    window.location="index.html";
}

    
