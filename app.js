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
    comment = document.getElementById("comment").value

    if (displayName !== '' && comment !== '') {
        document.getElementById("displayNameText").value = ''
        document.getElementById("comment").value = ''

        $('#chatBody').prepend(`<div id=messageFrame>
                <img src="./img/usricon.png">
                <div id=messageBox>
                    <div id=row1>
                        <div class=displayName>${displayName}</div>
                        <button id=editButton>Edit</button>
                        <button id=deleteButton>Delete</button>
                    </div>
                    <div id=row2>
                        <h2 id=chatMessage>${comment}</h2>
                    </div>
                </div>
            </div>`);
    }
});

$('#chatBody').on('click', '#editButton', function() {
    console.log('edit')

    var i=0, index=0;

    for (i=0; i<this.parentNode.nextElementSibling.childNodes.length;i++){
        if (this.parentNode.nextElementSibling.childNodes[i].id === 'chatMessage'){
            index = i;
        }
    }

    comment = this.parentNode.nextElementSibling.childNodes[index].innerText;
    console.log(comment)

    $(this.parentNode.nextElementSibling).append(`<div id=editSection>
            <input id=editComment value="${comment}"></input>
            <button id=editSubmitButton>Submit</button>
        </div>`)
});

$('#chatBody').on('click', '#deleteButton', function() {
    console.log('delete')
    this.parentNode.parentNode.parentNode.remove();

});

$('#chatBody').on('click', '#editSubmitButton', function() {
    console.log('editSubmitButton')
    newComment = this.previousElementSibling.value

    row2 = this.parentNode.parentNode

    this.parentNode.previousElementSibling.remove()
    this.parentNode.remove()

    $(row2).append(`<h2 id=chatMessage>${newComment}</h2>`)
    
});