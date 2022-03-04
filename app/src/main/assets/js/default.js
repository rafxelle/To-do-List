var nTarefa = 0;

$(document).ready(function(){
	$('.btAdd').on('click',function(){
		$('.formTarefa').toggleClass('ativo');
	});
	
	$('.btForm').on('click',function(){
		$('.formTarefa').toggleClass('ativo');
		addTarefa();
	});
	
	listarTarefas();
});

function addTarefa(){
	let tarefa = $('#novaTarefa').val();
	let texto = '';
	
	texto += '<li>';
	texto += '<label>';
	texto += '<input type="checkbox" value="">';
	texto += '<span class="checkbox">✔</span>';
	texto += '</label>';
	texto += '<p>'+tarefa+'</p>';
	texto += '</li>';
	
	$(".tarefas ul").append(texto);
	// Adiciona tarefa
	localStorage.setItem("tarefa"+nTarefa, tarefa);
	nTarefa++;
}

function listarTarefas(){
	for (var i = 0; i < localStorage.length; i++){
		let tarefa = localStorage.getItem(localStorage.key(i));
		let texto = '';	
		texto += '<li>';
		texto += '<label>';
		texto += '<input type="checkbox" value="">';
		texto += '<span class="checkbox">✔</span>';
		texto += '</label>';
		texto += '<p>'+tarefa+'</p>';
		texto += '</li>';
		
		$('.tarefas ul').append(texto);
		nTarefa++;
	}
}

function excluirTarefa(tarefa){
	localStorage.removeItem(tarefa);
}