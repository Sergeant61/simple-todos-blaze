import bootstrap from "bootstrap";

Template.publicModalTodoCreate.onRendered(function() {
  const self = this;

  const modalElement = document.getElementById('brdPublicModalTodoCreateModal');
  this.modal = new bootstrap.Modal(modalElement);

  modalElement.addEventListener('hidden.bs.modal', function (event) {
    self.$('form#brdPublicModalTodoCreateForm').trigger("reset");
  });
});

Template.publicModalTodoCreate.events({
  'submit form#brdPublicModalTodoCreateForm': function (event, template) {
    event.preventDefault();

    const name = event.target.name.value
    const description = event.target.description.value

    const obj = {
      todo: {
        name: name,
        description: description,
      }
    }

    Meteor.call('todos.create', obj, function (error, result) {
      if (error) {
        console.log('error', error);
      }


      AppUtil.refreshTokens.set('todos', Random.id());
      event.target.reset();
      template.modal.hide();
    });
  }
});