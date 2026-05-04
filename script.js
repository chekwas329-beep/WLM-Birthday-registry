const SCRIPT_URL = "https://script.google.com/macros/s/AKfycby4uypXj1tZ_FRVW5208Tr1qLA1FKwt1rQd2NdLu1rQa-533RvFTlUbppzbzuQgfo6X/exec";

function testSubmit() {
  const name = document.getElementById('userName').value;
  const day = document.getElementById('birthDay').value;
  const month = document.getElementById('birthMonth').value;
  const feedback = document.getElementById('feedback');
  const sound = document.getElementById('success-sound');

  if(name && day && month) {
    feedback.style.color = "#007FFF";
    feedback.innerHTML = "ESTABLISHING CONNECTION...";

    fetch(SCRIPT_URL, {
      method: "POST",
      mode: 'no-cors', 
      body: JSON.stringify({ "name": name, "day": day, "month": month })
    })
    .then(() => {
      feedback.style.color = "#00ff88";
      feedback.innerHTML = "REGISTRATION SECURED!";
      
      if(sound) {
        sound.currentTime = 0;
        sound.play();
      }
      
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#007FFF', '#ffffff', '#2B3A55']
      });

      setTimeout(() => {
        document.getElementById('userName').value = "";
        document.getElementById('birthDay').value = "";
        document.getElementById('birthMonth').selectedIndex = 0;
        feedback.innerHTML = "";
      }, 4000);
    })
    .catch(err => {
      feedback.style.color = "#ff4444";
      feedback.innerHTML = "NETWORK ERROR. TRY AGAIN.";
    });
  } else {
    feedback.style.color = "#ff4444";
    feedback.innerHTML = "PLEASE FILL ALL FIELDS.";
  }
}

