function inserir(valor) {
    const tela = document.getElementById("tela");
  
    if (valor === "CA") {
      tela.value = "";
    } else {
      tela.value += valor;
    }
  }
  
  function calcular() {
    const tela = document.getElementById("tela");
    try {
      tela.value = math.evaluate(tela.value);
    } catch {
      tela.value = "Erro";
    }
  }
  