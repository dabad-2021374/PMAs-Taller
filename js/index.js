const miCanvas = document.getElementById('mi-canvas');

const funcionTemporizada = (func) => {
    let temporizador;
    return (event) => {
      if (temporizador) {
        clearTimeout(temporizador)
      }
      temporizador = setTimeout(func, 200, event);
    }
  }
  window.addEventListener('resize', funcionTemporizada(() => { 
    miCanvas.width = window.innerWidth;
    miCanvas.height = window.innerHeight;
  }));

  const contexto = miCanvas.getContext('2d');

  contexto.beginPath();
contexto.moveTo(50, 50);
contexto.lineTo(150, 150);
contexto.lineTo(350, 50)
contexto.closePath();
contexto.stroke();