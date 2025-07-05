
function buscarIA() {
  const pergunta = document.getElementById('searchInput').value.trim();
  const resposta = document.getElementById('respostaIA');
  if (!pergunta) {
    resposta.innerHTML = '<p style="color:red;">Digite uma pergunta para continuar.</p>';
    return;
  }
  resposta.innerHTML = '<p>Buscando resposta com IA...</p>';
  setTimeout(() => {
    resposta.innerHTML = '<p><strong>Resposta:</strong> (Simulação) Resultado da pesquisa para: ' + pergunta + '</p>';
  }, 1500);
}
