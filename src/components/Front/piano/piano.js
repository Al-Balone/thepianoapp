import React, { Fragment, useEffect, useState } from 'react';
import './piano.css';
import getTheRandomNote from './randomNoteGenerator';
import incorrectAnswer from './incorrectAnswer';

function Piano() {
    const [note, setNote] = useState('');
    const [score, setScore] = useState(0);
    const [attempts, setAttempts] = useState(0);
    const [incorrectAttempts, setIncorrectAttempts] = useState(0);
    const [congrats, setCongrats] = useState(false);
    const [commiserations, setCommiserations] = useState(false);



    const answerChecker = (userGuess) => {
        if(userGuess === note){
            setScore(score => score + 1);
            setIncorrectAttempts(0);
        } else if (userGuess !== note) {
            setIncorrectAttempts
            (incorrectAttempts => incorrectAttempts + 1);
            setCommiserations(true);
            setTimeout(() => setCommiserations(false), 500);
        }
    };

    const congratsMessage = () => {
        setTimeout(()=>setCongrats(false), 500);
        setCongrats(true);  
    }


    useEffect(()=> {
        
    })

    //Update random note when score changes:
    useEffect(()=>{
        setNote(getTheRandomNote())},[score])


    //Call function to display correct answer message:
    useEffect(
        () => {congratsMessage()},[score]);

    return (
        <Fragment>
            <h1>Can You Find {note}?</h1>
            <div className = "piano">
                <div className="naturals-container">
                <button onClick={() => {
                    setAttempts((a) => a + 1);
                   answerChecker("C");
                }}><p>C</p></button>

                <button onClick={() => {
                    setAttempts((a) => a + 1);
                   answerChecker("D");
                }}><p>D</p></button>

                <button onClick={() => {
                    setAttempts((a) => a + 1);
                   answerChecker("E");
                }}><p>E</p></button>

                <button onClick={() => {
                    setAttempts((a) => a + 1);
                   answerChecker("F");
                }}><p>F</p></button>

                <button onClick={() => {
                    setAttempts((a) => a + 1);
                   answerChecker("G");
                }}><p>G</p></button>

                <button onClick={() => {
                    setAttempts((a) => a + 1);
                   answerChecker("A");
                }}><p>A</p></button>

                <button onClick={() => {
                    setAttempts((a) => a + 1);
                   answerChecker("B");
                }}><p>B</p></button>
            </div>

            <div className = "accidentals-container">
                <button className="Csharp" onClick={() => {
                    setAttempts((a) => a + 1);
                   answerChecker("C#");
                }}><p></p></button>

                <button className="Dsharp" onClick={() => {
                    setAttempts((a) => a + 1);
                   answerChecker("D#");
                }}><p></p></button>

                <button className="Fsharp" onClick={() => {
                    setAttempts((a) => a + 1);
                   answerChecker("F#");
                }}><p></p></button>

                <button className="Gsharp" onClick={() => {
                    setAttempts((a) => a + 1);
                   answerChecker("G#");
                }}><p></p></button>

                <button className="Asharp" onClick={() => {
                    setAttempts((a) => a + 1);
                   answerChecker("A#");
                }}><p></p></button>
            </div>

            <div className='info'>
            {
                congrats ? <h1>Well Done!</h1> : null
            }
            {
                commiserations ? <h1>{incorrectAnswer()}</h1> : null
            }
            <h2> You've Scored {score} out of {attempts}</h2>
            <button className = "ResetButton" onClick={() => {
                setAttempts(0);
                setScore(0);
                setCongrats(false);
                setCommiserations(false);
            }}>Reset</button>
            </div>
        </div>
        </Fragment>
    )
}


export default Piano;