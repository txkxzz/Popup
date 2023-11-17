function popup() {
    const janela = document.createElement("div");
  
    janela.setAttribute("style", "width: 400px; height: 500px;");
  

    janela.innerHTML = `
      <h2>Notas do aluno</h2>
      <input type="number" placeholder="Media 1" id="nota1">
      <input type="number" placeholder="Media 2" id="nota2">
      <input type="number" placeholder="Media 3" id="nota3">
      <button onclick="calcular()">Calcular</button>
      <p id="resultado"></p>
    `;
  
    
    document.body.appendChild(janela);
  }
  
  function calcular() {
   
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);
    
  
    
    const soma = nota1 + nota2 + nota3;
    const media = soma / 3;
  
   
    document.getElementById("resultado").innerHTML = `
      Soma: ${soma}
      Média: ${media}
    `;
  }