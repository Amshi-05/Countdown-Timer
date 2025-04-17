document.getElementById("start-btn").addEventListener("click", function () {
  const targetDate = new Date(document.getElementById("datetime").value);
  const countdownDisplay = document.getElementById("countdown");
  const message = document.getElementById("complete-message");

  if (isNaN(targetDate.getTime())) {
    alert("Please select a valid date and time.");
    return;
  }

  const updateCountdown = () => {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
      clearInterval(timerInterval);
      countdownDisplay.style.display = "none";
      message.textContent = "🎉 Countdown Complete!";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("days").textContent = String(days).padStart(2, '0');
    document.getElementById("hours").textContent = String(hours).padStart(2, '0');
    document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
    document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
  };

  updateCountdown(); // Run immediately
  const timerInterval = setInterval(updateCountdown, 1000);
});