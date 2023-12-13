const form = document.getElementById('form');
const nome = [];
const tell = [];
let linhas = '';

form.addEventListener('submit', function (e) {
    e.preventDefault();
    
    const contato = document.getElementById('name');
    const numero = document.getElementById('tel');
    if (tell.includes(numero.value) || nome.includes(contato.value)) {
        alert("Contato ja cadastrado");
    } else {
        nome.push(contato.value);
        tell.push(parseFloat(numero.value));
        let linha = '<tr>';
        linha += `<td>${contato.value}</td>`;
        linha += `<td>${numero.value}</td>`;
        linha += '</tr>';

        linhas += linha;
        const corpoTabela = document.querySelector('tbody');
        corpoTabela.innerHTML = linhas;
    }
    numero.value='';
    contato.value ='';    
})