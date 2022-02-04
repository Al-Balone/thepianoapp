


const getTheRandomNote =()=>{
    const randomNumber = Math.floor(Math.random()*12);
    const noteArray = 
    ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];
    return noteArray[randomNumber];
}


export default getTheRandomNote;