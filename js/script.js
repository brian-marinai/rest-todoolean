
function getTasks() {

    $.ajax({

      url: 'http://157.230.17.132:3016/todos',
      method: 'GET',
      success: function(data) {
        printTasks(data);
      },
      error: function(err) {

      }

    })
}

function printTasks(tasks) {
  var target = $('#tasks');
  for (var i = 0; i < tasks.length; i++) {
    var task = tasks[i];
    target.append('<li>${task.text}</li>');
  }
}



function init() {
  getTasks();
}

$(document).ready(init);
