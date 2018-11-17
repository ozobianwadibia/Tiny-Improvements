//FUNCTION to refresh the DOM 
const refreshDOM = function() {
    location.reload();
}

const displayAll = () => {
        $('#showKudos').empty();
        $.ajax({
            url: '/api/kudos',
            method: 'GET'
        }).then(function(result) {
            console.log(result);
            for (let i = 0; i < result.length; i++) {
                $('#showKudos').append('<div class="card display">' + '<h3>' + result[i].title + '</h3>' + '<br>' +
                    '<h4>' + 'From: ' + result[i].sender + '</h4>' + '<br>' +
                    '<div class="card-body">' + '<h4>' + 'To: ' + result[i].receiver + '</h4>' + '<br>' +
                    '<h5>' + result[i].body + '</h5>' + '</div></div>');
            }
        })
    }
    //calling the function above
displayAll();


//FUNCTION that submits the kudos
const submitKudos = () => {
    let input = $('#input').val().trim();
    let textarea = $('#textarea').val().trim();
    let sender = $('#sender').val();
    let receiver = $('#receiver').val();

    if (input && textarea && sender && receiver) {
        const newEntry = {
            sender: sender,
            receiver: receiver,
            title: input,
            body: textarea
        }
        $.ajax({
            url: '/api/kudos',
            method: 'POST',
            data: newEntry
        }).then(function(newEntry) {
            console.log(newEntry);
        });
        $('#input').val('');
        $('#textarea').val('');
        $('#sender').val('');
        $('#receiver').val('');
        refreshDOM();
    } else {
        $('#missingInfo').modal();
    }
}

$('#sendKudos').on('click', submitKudos);