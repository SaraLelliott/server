$(document).ready(function(){
	//Deals with the submit button
	$("#submit").click(function(){
		//Check if question is answered
		if(!$("input:checked").val()){
			alert("You didn't answer the question, FOOL!");
		}
		else{
		//Check to see if the answer is correct
			//convert to string
			var answerInput = "input[name=q" + currentQuestion + "]:checked";
			console.log(answerInput);
			//Get input answer
			var answerEntered = $(answerInput).val();
			console.log(answerEntered);
			$("#response").empty();

			//Check if this answer is correct
			if(answerEntered == answersArray[currentQuestion-1]){
				console.log("You are amazing ROB!!");
				//Now display text that the answer is right.
				$("#response").append("<p class='text-center'>Congradulations!</p><p class='text-center'> You got the right answer!</p>");
			}
			else{
				$("#response").append("<p class='text-center'>That was not the correct answer</p>");
			}
		}
	});

	//This function does stuff when the next button is pressed.
	//It loades the next question
	$("#next").click(function(){
		currentQuestion++;
		$("#response").empty();
		console.log(currentQuestion);
		//If last question, reset the questions
		if(currentQuestion == totalQuestions){
			currentQuestion=1;
		}
			hideDom();
			$("#q"+currentQuestion).show("slow");


	});

	//store the answers in an array.
	var totalQuestions = $(".question").size();
	console.log(totalQuestions);
	//Only for 6 questions
	var answersArray = ["b","c","c","d","b","a"];
	//keeps track of the current question
	var currentQuestion = 1;

	//Initial questions
	for (var i=2; i <= totalQuestions; i++){
		var clear = "#q" + i;
		console.log(clear);
		$(clear).hide();
	}


function hideDom(){
	//Hide all current questions
	for (var i=1; i <= totalQuestions; i++){
		var clear = "#q" + i;
		console.log(clear);
		$(clear).hide();
	}
}



});
	
