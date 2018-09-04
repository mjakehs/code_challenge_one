console.log('js');

$( document ).ready( readyNow );

function readyNow(){
    console.log('jq');
    $('#buttonHere').append('<button id="generatorButton">Generate</button>');
    $('#buttonHere').on('click', 'button', makeDiv);
}

function makeDiv(){
    console.log('in makeDiv');
}