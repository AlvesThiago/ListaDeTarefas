$(document).ready(function() {

    $('#task-form').on('submit', function(event) {
        event.preventDefault();

        const taskName = $('#task-name').val().trim();

        if (taskName !== '') {
            const checkbox = $('<input type="checkbox" class="check">');
            const taskText = $('<p></p>').text(taskName);
            const taskDiv = $('<div class="tasks-check"></div>').append(checkbox).append(taskText);
            const removeButton = $('<span class="remove-task">Feito!</span>');
            const newTask = $('<li></li>').append(taskDiv).append(removeButton);

            $('#tasks').append(newTask);
            $('#task-name').val('');
        }
    });
 
    $(document).on('change', '.check', function() {
        $(this).siblings('p').toggleClass('task-completed');
    });

    $(document).on('click', '.remove-task', function() {
        const taskItem = $(this).closest('li');
        const checkbox = taskItem.find('.check');

        if (checkbox.is(':checked')) {
            taskItem.remove();
        } else {
            // Criar a mensagem de erro
            const messageError = $('<p class="msgError">Por favor, marque a tarefa como concluída antes de removê-la.</p>');
            $('.task-form').append(messageError);

            // Tornar a mensagem temporária
            setTimeout(function() {
                messageError.fadeOut(function() {
                    $(this).remove();
                });
            }, 2000); 
        }
    });

});
