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


    var index = {
        Show: show
    };

    /*
    the function below just show a simple

    */
    function show() {
        var msg = require('./simpleMessage');

        msg.CustomMessage('SimpleMessage', 'Click the button "OK" or "Cancel" below.');
        msg.Show();
        msg.ButtonOk.onclick = function () {
            msg.CustomMessage('SimpleMessage', '"OK" button clicked! bye bye...');
            setTimeout(function () {
                msg.Close();
            }, 1500);
        }
    }


    ko.applyBindings(index);

    return index;
});