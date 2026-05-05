const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwqYV8E8TCgwZvpP1h1ixc2Y4zJYj7lhs3NmMzFCQ_i9p3-bGS3ijyODh4zsoQOm-UB/exec";

function testSubmit() {
    const name = document.getElementById('userName').value;
    const day = document.getElementById('birthDay').value;
    const month = document.getElementById('birthMonth').value;
    const anniversary = document.getElementById('anniversaryDate').value;
    const feedback = document.getElementById('feedback');
    const btn = document.querySelector('.premium-button');

    if (!name || !day || !month) {
        feedback.innerText = "PLEASE FILL ALL REQUIRED FIELDS";
        feedback.style.color = "#ff4d4d";
        return;
    }

    btn.disabled = true;
    btn.innerHTML = "<span>ESTABLISHING CONNECTION...</span>";

    const formData = new FormData();
    formData.append('name', name);
    formData.append('day', day);
    formData.append('month', month);
    formData.append('anniversary', anniversary);

    fetch(SCRIPT_URL, { method: 'POST', body: formData })
    .then(response => {
        confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
        document.getElementById('success-sound').play();
        btn.innerHTML = "<span>REGISTRATION SECURED</span>";
        feedback.innerText = "WELCOME TO THE FAMILY RECORD";
        feedback.style.color = "#00ff7f";
        setTimeout(() => { location.reload(); }, 3500);
    })
    .catch(error => {
        btn.disabled = false;
        btn.innerHTML = "<span>RETRY REGISTER</span>";
        feedback.innerText = "CONNECTION ERROR";
    });
}
