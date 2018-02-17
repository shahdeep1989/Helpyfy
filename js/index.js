/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        //pushStart();
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        pushStart();
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();

function pushStart() {
    alert("Jay Mataji...");
    try{
        var push = PushNotification.init({
            android: {
                //senderID: "997173714040"
                // alert: true,
                // badge: false,
                // sound: true,
                // "clearBadge": true
            },
            ios: {
                //senderID: "997173714040",
                alert: true,
                badge: false,
                sound: true
                //fcmSandbox: true,
                //"clearBadge": true
            }
        });
    }
    catch(err){
        alert(err);
        alert(JSON.stringify(err));
    }

    alert("Done done done");

    push.on('registration', function(data) {
        localStorage.setItem('regId', data.registrationId);
        alert("Push register Id: " + data.registrationId);

        console.log("Device token:" + data.registrationId);
        console.log("Type of Push: " + data.registrationType);
        alert("Type of Push: " + data.registrationType);
    });

    push.on('notification', function(data) {
        alert(data.message);
        // console.log(data.message);
        // console.log(data.title);
        // console.log(data.count);
        // console.log(data.sound);
        // console.log(data.image);
        // console.log(data.additionalData);
    });

    push.on('error', function(e) {
        alert(e.message);
        //console.log(e.message);
    });

}
