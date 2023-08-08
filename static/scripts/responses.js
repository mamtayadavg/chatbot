function getBotResponse(input) {
    
    if (input == "How are you?") {
        return "Fine, what about you!";
    } else if (input == "I want to ask you something.") {
        return "Yes,sure";
    } else if (input == "what is web development?") {
        return "web development is a work involved in developing a website for the network.";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }
}