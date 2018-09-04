console.log('js');

$(document).ready(readyNow);

function readyNow() {
    console.log('jq');
    $('#buttonHere').append('<button id="generatorButton">Generate</button>');
    $('#buttonHere').on('click', 'button', makeDiv);
}
let timesButtonPressed = 0;
function makeDiv() {
    console.log('in makeDiv');
    //increase the counter
    timesButtonPressed++
    //append a div with a p tag in it 
    $('#moreDivsHere').append(`
        <div>
            <p>` + timesButtonPressed + `</p>
            <button class="swapButton">Swap</button>
            <button class="deleteButton">Delete</button>
        </div>
`);
}