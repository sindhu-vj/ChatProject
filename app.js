const chatBodyHeight = 227;

var messages = [
    // {
    //     displayName: 'asdf',
    //     message: 'hello world!!'
    // },
    // {
    //     displayName: 'EnoughSaid',
    //     message: 'Preach!'
    // },
    // {
    //     displayName:'Guest1234',
    //     message: 'Why would I change your mind? Its the fastest growing industry out there...'
    // },
    // {
    //     displayName: 'TheMan',
    //     message: 'Hard to argue with that...'
    // }
];

// var height = 0
// var index = 0

// $.each(messages, function(i, message){

//     height = height + chatBodyHeight;

//     $('#chatBody').append(`<div id=messageFrame>
//                 <img src="./img/usricon.png">
//                 <div class=messageBox>
//                     <div class=row1>
//                         <div class=displayName>${message.displayName}</div>
//                         <button id=editButton name=${index}>Edit</button>
//                         <button id=deleteButton name=${index}>Delete</button>
//                     </div>
//                     <div class=row2>
//                         <h2 class=chatMessage>${message.message}</h2>
//                     </div>
//                 </div>
//                 <div class=divider></div>
//                 </div>`);

//     document.getElementById('chatBodyBackground').style.height = height.toString() + 'px';
//     index++;
// });


$('#submitButton').on('click', function() {
    displayName = document.getElementById("displayNameText").value
    message = document.getElementById("comment").value

    if (displayName !== '' && message !== '') {
        document.getElementById("displayNameText").value = ''
        document.getElementById("comment").value = ''

        var index = messages.length;

        messages.push({displayName: displayName, message: message});

        $('#chatBody').append(`<div id=messageFrame>
                <img src="./img/usricon.png">
                <div class=messageBox>
                    <div class=row1>
                        <div class=displayName>${displayName}</div>
                            <button id=editButton name=${index}>Edit</button>
                            <button id=deleteButton name=${index}>Delete</button>
                    </div>
                    <div class=row2>
                        <h2 class=chatMessage>${message}</h2>
                    </div>
                </div>
                <div class=divider></div>
            </div>`);

        var height = 0;

        if (document.getElementById('chatBodyBackground').style.height === ''){
            height = chatBodyHeight + 10
        }
        else {
            height = parseInt(document.getElementById('chatBodyBackground').style.height,10) + chatBodyHeight
        }

        document.getElementById('chatBodyBackground').style.height = height.toString() + 'px';
    }
});

$('#chatBody').on('click', '#editButton', function() {
    console.log('edit')
    console.log(parseInt(this.name,10));
});

$('#chatBody').on('click', '#deleteButton', function() {
    console.log('delete')
    console.log(messages[parseInt(this.name,10)]);
    messages.splice([parseInt(this.name,10)],1);
    console.log(messages)
    this.parentNode.parentNode.parentNode.remove();

    var height = parseInt(document.getElementById('chatBodyBackground').style.height,10) - chatBodyHeight
    document.getElementById('chatBodyBackground').style.height = height.toString() + 'px';

});

$('#deleteButton').on('click', function() {
    console.log('delete')
});