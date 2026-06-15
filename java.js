const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  alert("Sistema AgroTech conectado com sucesso!");
});

function contador(id, final, velocidade){
  let valor = 0;

  const timer = setInterval(() => {

    valor += Math.ceil(final / 100);

    if(valor >= final){
      valor = final;
      clearInterval(timer);
    }

    document.getElementById(id).innerText = valor;

  }, velocidade);
}

contador("prod", 8500, 20);
contador("gados", 2400, 25);

let ef = 0;

const eficiencia = setInterval(() => {

  ef++;

  document.getElementById("eficiencia").innerText = ef + "%";

  if(ef >= 98){
    clearInterval(eficiencia);
  }

}, 30);