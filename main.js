

function dateValidate(id, idMessage) {
    var input = document.getElementById(id);
    var divMessage = document.getElementById(idMessage);

    var api = [
        { "name": "prueba 2", "date": "2019-03-26" },
        { "name": "Prueba de app", "date": "2019-03-25" },
        { "name": "Vacaciones", "date": "2019-03-03" },
        { "name": "Mantenimiento Programado", "date": "2019-02-28" }
    ]

    for (var i = 0; i < api.length; i++) {
        if (api[i].date === input.value) {
            divMessage.innerText = "Fecha ocupada: " + api[i].date + "(" + api[i].name + ")"
            input.value = "";
            break;
        }

        if (api[i].date !== input.value) {
            divMessage.innerText = "Fecha Libre: " + input.value;
        }

    }
    console.log('input value actual: ' + input.value)
}


var myInput = document.getElementById("input")

myInput.addEventListener('change', function () {
    dateValidate("input", "message")
})