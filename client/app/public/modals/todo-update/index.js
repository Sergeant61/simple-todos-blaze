import bootstrap from "bootstrap";

Template.publicModalTodoUpdate.onRendered(function () {
  const self = this;

  const modalElement = document.getElementById('brdPublicModalTodoUpdateModal');
  this.modal = new bootstrap.Modal(modalElement);

  modalElement.addEventListener('hidden.bs.modal', function (event) {
    AppUtil.temp.set('todo', null);
    self.$('form#brdPublicModalTodoUpdateForm').trigger("reset");
  });
});

Template.publicModalTodoUpdate.events({
  'submit form#brdPublicModalTodoUpdateForm': function (event, template) {
    event.preventDefault();

    const todo = AppUtil.temp.get('todo');

    const name = event.target.name.value
    const description = event.target.description.value

    const obj = {
      _id: todo._id,
      todo: {
        name: name,
        description: description,
      }
    }

    Meteor.call('todos.update', obj, function (error, result) {
      if (error) {
        console.log('error', error);
      }


      console.log(result);
      AppUtil.refreshTokens.set('todos', Random.id());
      event.target.reset();
      template.modal.hide();
    });
  }
});