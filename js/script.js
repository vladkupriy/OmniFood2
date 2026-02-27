
function cleanInput(text) {
    if (!text) return "";
    return text
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}


const form = document.querySelector('form[name="sign-up"]');

form.addEventListener('submit', function(event) {

    event.preventDefault();


    const name = document.getElementById('full-name').value;
    const email = document.getElementById('email').value;
    const where = document.getElementById('select-where').value;

    const safeName = cleanInput(name);
    const safeEmail = cleanInput(email);

    console.log("Данные отправлены:");
    console.log("Имя:", safeName);
    console.log("Почта:", safeEmail);
    console.log("Источник:", where);

    alert("Спасибо! Данные получены (проверь консоль разработчика).");
});