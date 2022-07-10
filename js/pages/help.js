const inputEmail = document.getElementById('email');
const ResultMessages = document.getElementById('result-messages');
const Btn = document.getElementById("btn");
const BtnLimpiar = document.getElementById("btnLimpiar");


Btn.onclick = function validateEmail() {
    debugger;
    var re = /\S+@\S+\.\S+/;
    var email = inputEmail.value
    ResultMessages.style.display = "block"

    if (!validateEmail(email)) {
        ResultMessages = '<h3>Ingrese un Email valido</h3>';
    }
    return re.test(email);

}

BtnLimpiar.onclick = function Limpiar() {
    document.getElementById("control-form").remove;
}