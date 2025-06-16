const inputCriarTarefa = document.getElementById('input-tarefa');
const btnAdicionar = document.querySelector('.btn-adicionar');
const listaTarefas = document.querySelector('.tarefas-criadas');

function atualizarVisibilidadeDoBotao() {
  if (document.activeElement === inputCriarTarefa || inputCriarTarefa.value !== '') {
    btnAdicionar.style.display = 'block';
  } else {
    btnAdicionar.style.display = 'none';
  }
}

inputCriarTarefa.addEventListener('focus' || 'input', atualizarVisibilidadeDoBotao);
inputCriarTarefa.addEventListener('blur', atualizarVisibilidadeDoBotao);

function adicionarTarefa() {
    const nomeTarefa = inputCriarTarefa.value;
    if (nomeTarefa === '') return;

    const li = document.createElement('li');
    li.classList.add('tarefas-item');

    const imgCheckbox = document.createElement('img');
    imgCheckbox.src = './img/input-checkbox.svg';
    imgCheckbox.alt = 'input checkbox'
    
    const p = document.createElement('p');
    p.classList.add('tarefa-nome');
    p.textContent = nomeTarefa;

    const imgRemove = document.createElement('img');
    imgRemove.classList.add('remove-button');
    const darkAtivo = localStorage.getItem('darkmode') === 'active';
    imgRemove.src = darkAtivo ? './img/remove-darkmode.svg' : './img/remove-button.svg';
    imgRemove.alt = 'remove button';

    li.appendChild(imgCheckbox);
    li.appendChild(p);
    li.appendChild(imgRemove);

    const hr = document.createElement('hr');
    hr.classList.add('tarefa-linha-divisoria');

    listaTarefas.appendChild(li);
    listaTarefas.appendChild(hr);

    inputCriarTarefa.value = '';
    inputCriarTarefa.focus();
    salvarTarefasLocalStorage();
}

btnAdicionar.onclick = adicionarTarefa;
inputCriarTarefa.addEventListener('keydown', (evento) => {
  if (evento.key === 'Enter') {
    evento.preventDefault();
    adicionarTarefa();
  }
});


listaTarefas.addEventListener('click', (evento) => {
  const tarefaItem = evento.target.closest('.tarefas-item');

  if (evento.target.classList.contains('remove-button')) {
    tarefaItem.nextElementSibling?.tagName === 'HR' && tarefaItem.nextElementSibling.remove();
    tarefaItem.remove();
    salvarTarefasLocalStorage();
  } else {
    tarefaItem.classList.toggle('checked');

    const imgCheckbox = tarefaItem.querySelector('img');
    if (tarefaItem.classList.contains('checked')) {
      imgCheckbox.src = './img/checkbox-checked.svg';
    } else {
      imgCheckbox.src = './img/input-checkbox.svg';
    }

    salvarTarefasLocalStorage();
  }
});

function salvarTarefasLocalStorage() {
    localStorage.setItem('tarefa', listaTarefas.innerHTML);
}

function mostrarTarefasSalvas(){
    listaTarefas.innerHTML = localStorage.getItem('tarefa');
}

mostrarTarefasSalvas();