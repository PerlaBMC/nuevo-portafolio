
const btn = document.getElementById('button');

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    btn.value = 'Sending...';

    const serviceID = 'default_service';
    const templateID = 'template_kehjpjn';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            btn.value = 'Send Email';
            alert('Sent!');
            // Limpiar el formulario
            document.getElementById('form').reset();
        }, (err) => {
            btn.value = 'Send Email';
            alert(JSON.stringify(err));
        });
});