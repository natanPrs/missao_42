$(document).ready(function() {
    if (document.cookie) {
        $("#ft_list").html(decodeURIComponent(document.cookie)); // é usado para definir ou obter 
                                                                 // o conteúdo HTML de um elemento.
                                                                 // Neste caso, queremos obter o cookie
    }
    // $("#ft_list") e $("#addTaskBtn"): seleciona os elementos com os IDs ft_list e addTaskBtn, respectivamente.

    // Adicionando um ouvinte de evento de clique para o botão de adicionar tarefa
    $("#addTaskBtn").click(function() {
        var task = prompt("Digite a nova tarefa:");
        if (task !== null && task !== "") {
            addTask(task);
        }
    });

    // Função para adicionar uma nova tarefa
    function addTask(taskContent) {
        var taskElement = $("<div>").addClass("task").text(taskContent).click(test);

        $("#ft_list").prepend(taskElement);
        saveTasksToCookie();
    }

    // Função para remover uma tarefa
    function test() {
        var confirmRemove = confirm("Você realmente deseja remover esta tarefa?");
        if (confirmRemove) {
            $(this).remove();
            saveTasksToCookie();
        }
    }

    // Função para salvar as tarefas em cookies
    function saveTasksToCookie() {
        var tasksHTML = $("#ft_list").html();
        document.cookie = encodeURIComponent(tasksHTML);
    }
});