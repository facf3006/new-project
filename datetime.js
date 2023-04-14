function updateTime() {
        const now = new Date();
        document.getElementById("date").textContent = now.toLocaleDateString();
        document.getElementById("time").textContent = now.toLocaleTimeString();
      }

      setInterval(updateTime, 1000); // atualiza a cada 1 segundo