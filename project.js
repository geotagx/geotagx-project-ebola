// Run the application.
geotagx.task.run("ebola", function(question, answer){
    switch (question){
		case 1: // Do you see any people in this photo?
            if (answer === "Yes")
                geotagx.task.showNextQuestion();
            else
                geotagx.task.finish();
            break;
        case 2: // Are the people in the photo wearing any protective equipment?
			geotagx.task.showQuestion(answer === "Yes" ? 3 : 4);
			break;
		case 3: // Are the people in the photo wearing all recommended protective equipment?
        case 4: // Does this image show people cleaning, decontaminating or disinfecting an environment in response to Ebola?
			geotagx.task.showNextQuestion();
		default:
			break;
	}
});
