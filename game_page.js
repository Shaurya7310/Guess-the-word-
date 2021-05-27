
	player1_name = localStorage.getItem("player1_name");
	player2_name = localStorage.getItem("player2_name");

	player1_score = 0;
	player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score ;
document.getElementById("player2_score").innerHTML = player2_score ;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name ;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name ;

function send() {
	get_word = document.getElementById("word").value;
	word = get_word.toLowerCase();
	console.log("word in lowerCase = " + word);

    charAt1 = word.charAt(1);
	console.log(charAt1);

	lenght_divide_2 = Math.floor(word.length/2);
	charAt2 = word.charAt(lenght_divide_2);
	console.log(charAt2);

    lenght_minus_1 = word.length - 1; 
    charAt3 = word.charAt(lenght_minus_1); 
	console.log(charAt3);

    remove_charAt1 = word.replace(charAt1, "_");
    remove_charAt2 = remove_charAt1.replace(charAt2, "_");
    remove_charAt3 = remove_charAt2.replace(charAt3, "_");
	console.log(remove_charAt3);

    question_word = "<h4 id='word_display'> Q. "+remove_charAt3+"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row =  question_word + input_box + check_button ; 
    document.getElementById("output").innerHTML = row;
document.getElementById("word").value = "";
}
var question_turn="player1_name";
var answer_turn="player2_name";


function check(){
	answer=document.getElementById("input_check_box").value
right_answer=answer.toLowerCase();
	if(right_answer==word){
		if(answer_turn=="player1_name"){
			player1_score=player1_score+1
			document.getElementById("player1_score").innerHTML=player1_score;
			player1_name=localStorage.getItem("player1_name")
			speak(player1_name);
		}
		else{

			player2_score=player2_score+1
			document.getElementById("player2_score").innerHTML=player2_score;
			player2_name=localStorage.getItem("player2_name");
			speak(player2_name);
		}
		if(player1_score==5||player2_score==5){
			localStorage.setItem("player1score", player1_score);
			localStorage.setItem("player2score", player2_score);
			window.location="Winner.html";
			}
		
	
	}
	if(question_turn=="player1_name"){
		question_turn="player2_name"
		document.getElementById("player_question").innerHTML="question turn - "+ player2_name
	}
	else{
		question_turn="player1_name"
		document.getElementById("player_question").innerHTML="question turn - "+ player1_name
	}
	if(answer_turn=="player1_name"){
		answer_turn="player2_name"
		document.getElementById("player_answer").innerHTML="answer turn - "+ player2_name
	}
	else{
		answer_turn="player1_name"
		document.getElementById("player_answer").innerHTML="answer turn - "+ player1_name
	}


	document.getElementById("output").innerHTML="";


	
}
function speak(player_name){
    var synth = window.speechSynthesis;

   speak_data = player_name+" scores a point";


  var utterThis = new SpeechSynthesisUtterance(speak_data); 

setTimeout(function(){
    
	synth.speak(utterThis);  

},100
)
}
