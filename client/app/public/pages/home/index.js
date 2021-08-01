import Swal from 'sweetalert2';

Template.publicPageHome.onCreated(function () {
  this.state = new ReactiveDict(null, {
    todos: [],
  });

  this.number = ReactiveVar(0);
});

Template.publicPageHome.helpers({
  number: function () {
    return Template.instance().number
  }
});

Template.publicPageHome.onRendered(function () {
  const self = this;

  this.autorun(function () {
    AppUtil.refreshTokens.get('todos');

    Meteor.call('todos.list', {}, function (error, result) {
      if (error) {
        console.log('error', error);
      }
      if (result) {

        console.log(result);
        self.state.set('todos', result);
      }
    });
  });
});

Template.publicPageHome.events({
  'click .brd-delete': function (event, template) {

    const todo = this;

    console.log(this);

    Swal.fire({
      title: 'Silmek istiyor musunuz?',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'var(--bs-danger)',
      cancelButtonColor: 'var(--bs-dark)',
      cancelButtonText: 'Hayır',
      confirmButtonText: 'Evet'
    }).then((result) => {
      if (result.value) {

        Loading.show();
        Meteor.call('todos.delete', { _id: todo._id }, function (error, result) {
          Loading.hide();

          if (error) {
            console.log('error', error);
          }

          AppUtil.refreshTokens.set('todos', Random.id());
        });
      }
    });

  },
  'click .brd-update': function (event, template) {

    const todo = this;

    console.log(this);

    AppUtil.temp.set('todo',this);

  },
  'click .brd-todo-remove': function (event, template) {
    event.preventDefault();

    const todo = this.data;

    console.log(this);

    Swal.fire({
      title: 'Silmek istiyor musunuz?',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'var(--bs-danger)',
      cancelButtonColor: 'var(--bs-dark)',
      cancelButtonText: 'Hayır',
      confirmButtonText: 'Evet'
    }).then((result) => {
      if (result.value) {

        Loading.show();
        Meteor.call('todos.delete', { _id: todo._id }, function (error, result) {
          Loading.hide();

          if (error) {
            console.log('error', error);
          }

          AppUtil.refreshTokens.set('todos', Random.id());
        });
      }
    });

  },
  'click .brd-todo-update': function (event, template) {
    event.preventDefault();
    const todo = this;

    AppUtil.temp.set('todo',this.data);
    $('#brdPublicModalTodoUpdateModal').modal('show');
  }
});

Template.publicPageHome.onDestroyed(function () {

});