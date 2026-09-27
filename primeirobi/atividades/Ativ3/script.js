let txtTarefa = document.getElementById('txtTarefa');
let btnAdicionar = document.getElementById('btnAdicionar');
let lstTarefas = document.getElementById('lstTarefas');

function adicionarTarefa() {
  let strTexto = txtTarefa.value;

  if (strTexto == '') {
    alert('Digite uma tarefa!');
    return;
  }

  let objLi = document.createElement('li');

  let divConteudo = document.createElement('div');
  divConteudo.className = 'item-conteudo';

  let chkConcluido = document.createElement('input');
  chkConcluido.type = 'checkbox';

  let spnTexto = document.createElement('span');
  spnTexto.innerText = strTexto;

  divConteudo.appendChild(chkConcluido);
  divConteudo.appendChild(spnTexto);

  let btnRemover = document.createElement('button');
  btnRemover.className = 'btn-remover';
  btnRemover.innerHTML = '🗑️'; 

  objLi.appendChild(divConteudo);
  objLi.appendChild(btnRemover);

  lstTarefas.appendChild(objLi);

  txtTarefa.value = '';
  txtTarefa.focus();
}

btnAdicionar.addEventListener('click', adicionarTarefa);


lstTarefas.addEventListener('click', function(e) {
  let elemento = e.target;

  // Se clicou na caixinha de marcar
  if (elemento.type == 'checkbox') {
    let li = elemento.closest('li');
    if (elemento.checked) {
      li.classList.add('concluida');
    } else {
      li.classList.remove('concluida');
    }
  }

  // Se clicou no botao de lixeira
  if (elemento.classList.contains('btn-remover')) {
    let li = elemento.closest('li');
    li.remove();
  }
});