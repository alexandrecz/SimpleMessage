/*SimpleMessage
 * Version 2.0.1
 * Copyright 2013 Alexandre Czechowicz.  
 * All Rights Reserved.  
 * Use, reproduction, distribution, and modification of this code is subject to the terms and 
 * conditions of the MIT license, available at http://www.opensource.org/licenses/mit-license.php
 * Author: Alexandre Czechowicz
 * Project: https://github.com/alexandrecz/SimpleMessage
 */
define(function (require) {


    var divBody = document.createElement('div');
    var divMessage = document.createElement('div');
    var title = document.createElement('h1');
    var message = document.createElement('h2');

    var buttonOk = document.createElement('button');
    var buttonCancel = document.createElement('button');

    var simpleMessage = {
        Close: close,
        Show: show,
        ButtonOk: buttonOk,
        CustomMessage: customMessage
    };


    function close() {
        document.body.removeChild(divBody);
    }


    function create() {

        divBody.setAttribute('class', 'simple-message-body');
        divMessage.setAttribute('class', 'simple-message-content');

        buttonOk.innerHTML = 'Ok';
        buttonOk.setAttribute('class', 'defaultButton');

        buttonCancel.innerHTML = 'Cancel';
        buttonCancel.setAttribute('class', 'defaultButton');
        buttonCancel.setAttribute('style', 'margin-left:4px');

        divMessage.appendChild(title);
        divMessage.appendChild(message);
        divMessage.appendChild(buttonOk);
        divMessage.appendChild(buttonCancel);

        divBody.appendChild(divMessage);
    }

    function customMessage(titleBody, messageBody) {
        title.innerHTML = titleBody;
        message.innerHTML = messageBody;
    }

    function show() {
        create();
        document.body.appendChild(divBody);

    }


    buttonCancel.onclick = function cancelfunction() {
        close();
    }

    

    return simpleMessage;
});


