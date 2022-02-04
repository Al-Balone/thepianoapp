const incorrectAnswer = () => {
    const hints = [
     "Whoops!",
     "Not Quite!", 
     "Try Again!",
     "So Close!"
     ]; 
    
    return hints[Math.floor(Math.random() * hints.length)];
}

export default incorrectAnswer;