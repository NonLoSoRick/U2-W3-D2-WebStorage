  function updateSessionTimer() {
      let counter = sessionStorage.getItem("counter");
      if (!counter) {
        counter = 0;
      }
      counter++;
      sessionStorage.setItem("counter", counter);
      document.getElementById("timer").textContent = counter;
    }

    // Update the session timer every second
    setInterval(updateSessionTimer, 1000);