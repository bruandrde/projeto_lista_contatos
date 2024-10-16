const form = document.getElementById('form-contato');

let linhas = '';

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const inputSeuNome = document.getElementById('seu-nome');
    const inputSeuTelefone = document.getElementById('seu-telefone');
    const inputSeuEmail = document.getElementById('seu-email');

    let linha = '<tr>';
    linha += `<td>${inputSeuNome.value}</td>`;
    linha += `<td>${inputSeuTelefone.value}</td>`;
    linha += `<td>${inputSeuEmail.value}</td>`;
    linha += '</tr>';
    
    linhas += linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    inputSeuNome.value = '';
    inputSeuTelefone.value = '';
    inputSeuEmail.value = '';
});
