const btn = document.getElementById('btn');

// Can define a function and then pass it through the event listener ass a callback function - no parentheses at end of function name (most readable):

const addText = () => {
    document.body.append('Add this badboy')
}

const changeClass = () => {
    //toggle a class on the body - toggle adds or takes away class.
    document.body.classList.toggle('red')
}

//button changes body background red/white:
btn.addEventListener('click', changeClass);

// Can have a function defined within the event handler:
// btn.addEventListener('click', () => {
//     // add sentence onto body page once button is clicked:
//     // document.body.append('The button has been clicked')


// });
