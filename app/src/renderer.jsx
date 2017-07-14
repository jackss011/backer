const React = require('react')
const ReactDOM = require('react-dom')

const $ = require('jquery')
const path = require('path')
const fs = require('fs')

let ctn

$(document).ready(() => {
    let ctn = $('#ctn')
    $('#btn').click(() => {
        ctn.html(parseInt(ctn.html()) + 1)
    })
});

ReactDOM.render(
    <div>
        <button id="btn">Click Me</button>
        <div>Counter: <span id="ctn">0</span></div>
    </div>,
  $('#root').get(0)
);
