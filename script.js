const nomePersonagem = document.getElementById("nome-personagem");
const tbody = document.querySelector("#tabelaPersonagens tbody");
const statusApi = document.getElementById("informacao-carregamento-api");

async function getPersonagens(endpoint) {
  const resposta = await fetch(`https://rickandmortyapi.com/api/${endpoint}`);
  statusApi.innerText = "Carregando...";
  if (resposta.status === 200) {
    const objeto = await resposta.json();
    objeto.results.forEach((personagem) => {
      criarTr(personagem);
    });
    statusApi.innerText = "Sucesso!";
  } else {
    statusApi.innerText = "Deu ruim...";
  }
}

function criarTr(personagem) {
  const tr = document.createElement("tr");

  const tdId = document.createElement("td");
  tdId.innerText = personagem.id || "-";
  const tdNome = document.createElement("td");
  tdNome.innerText = personagem.name || "-";
  const tdStatus = document.createElement("td");
  tdStatus.innerText = personagem.status || "-";
  const tdEspecie = document.createElement("td");
  tdEspecie.innerText = personagem.species || "-";
  const tdTipo = document.createElement("td");
  tdTipo.innerText = personagem.type || "-";
  const tdGender = document.createElement("td");
  tdGender.innerText = personagem.gender || "-";

  tr.appendChild(tdId);
  tr.appendChild(tdNome);
  tr.appendChild(tdStatus);
  tr.appendChild(tdEspecie);
  tr.appendChild(tdTipo);
  tr.appendChild(tdGender);

  tbody.appendChild(tr);
}

getPersonagens("character");
