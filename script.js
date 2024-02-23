document.getElementById('girar').addEventListener('click', function() {
  var ponteiro = document.getElementById('ponteiro');
  var resultado = document.getElementById('resultado');
  resultado.textContent = ''; // Limpa o resultado anterior
  var graus = Math.floor(Math.random() * 3600 + 360); // Gira entre 1 e 10 voltas
  var cssTransform = 'rotate(' + graus + 'deg)';

  ponteiro.style.transform = 'translate(-50%, -50%) ' + cssTransform;
  
});

document.getElementById('girar').addEventListener('click', function() {
  var ponteiro = document.querySelector('.ponteiro');
  var graus = Math.floor(Math.random() * 360) + 1440; // 4 voltas + valor aleatório
  ponteiro.style.transform = 'translate(-50%, -50%) rotate(' + graus + 'deg)';

});

document.getElementById('girar').addEventListener('click', function() {
  var ponteiro = document.querySelector('.ponteiro');
  var graus = Math.floor(Math.random() * 360) + 1440; // Gira pelo menos 4 voltas + aleatório
  ponteiro.style.transform = 'translate(-50%, -50%) rotate(' + graus + 'deg)';

  setTimeout(function() {
      // Exibe o modal
      document.getElementById('modalPremiado').style.display = 'block';
  }, 4500); // Ajuste conforme o tempo da animação
});



document.getElementById('girar').addEventListener('click', function() {
  var ponteiro = document.querySelector('.ponteiro');
  var graus = Math.floor(Math.random() * 360) + 1440; // Gira pelo menos 4 voltas + aleatório
  ponteiro.style.transform = 'translate'
})

document.addEventListener('DOMContentLoaded', (event) => {
  const receiveBonusBtn = document.getElementById('receiveBonusBtn');
  if (receiveBonusBtn) {
      receiveBonusBtn.addEventListener('click', function() {
          window.location.href = 'https://playpix.com/affiliates/?btag=1425184_l220351'; // Substitua pela URL desejada
      });
  }
});
