$(document).ready(function () {

    $.get("/api/question", function(data){
        var genNum = 1;
        data.forEach(function (element) {
            $("#formStart").append(
                `<label for="question" class="questform">${genNum}. ${element.question}</label>
            <select class="form-control dropdown" id="q${genNum}">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
            </select>`
            );
            genNum++;
        })
    })

    $("#formStart").append(
        `<div class="submitbutton"><button type="button" class="btn btn-secondary btn-lg">Submit</button></div>`)


});



//     $(".submit").on("click", function () {


//         forEach(function()
//     }
//         var newReservation = {
//             customerName: $('#reserve_name').val().trim(),
//             phoneNumber: $('#reserve_phone').val().trim(),
//             customerEmail: $('#reserve_email').val().trim(),
//             customerID: $('#reserve_uniqueID').val().trim()
//         };

//         console.log(newReservation);

//     });
// });
