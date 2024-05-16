function test(event){
    var confirmRemove = confirm("Você realmente deseja remover esta tarefa?");
    if (confirmRemove) {
        event.target.remove();
        saveTasksToCookie();
    }
};




document.addEventListener("DOMContentLoaded", function() {
  if (document.cookie) {
      document.getElementById("ft_list").innerHTML = decodeURIComponent(document.cookie);
  }

  document.getElementById("addTaskBtn").addEventListener("click", function() {
      var task = prompt("Digite a nova tarefa:");
      if (task !== null && task !== "") {
          addTask(task);
      }
  });

  function addTask(taskContent) {
      var taskElement = document.createElement("div");
      taskElement.classList.add("task");
      taskElement.textContent = taskContent;
      taskElement.setAttribute("onclick","test(event)")

      document.getElementById("ft_list").prepend(taskElement);
      saveTasksToCookie();
  }
  

  function saveTasksToCookie() {
      let tasksHTML = document.getElementById("ft_list").innerHTML;
      document.cookie = encodeURIComponent(tasksHTML);
  }
});

