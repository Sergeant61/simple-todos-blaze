import Swal from 'sweetalert2';

Template.publicPageClasses.onCreated(function () {
  this.state = new ReactiveDict(null, {
    classes: [],
    notFound: false,
  });

  this.pagination = new ReactiveDict(null, {
    currentPage: 1,
    pageItems: 5,
    totalCount: 0,
    totalPages: 0
  });

  this.sorting = new ReactiveDict(null, {
    sortField: 'name',
    sortOrder: 'asc'
  });

  this.filtering = new ReactiveDict(null, {});
});

Template.publicPageClasses.onRendered(function () {
  const self = this;

  this.autorun(function () {
    AppUtil.refreshTokens.get('classes');
    const currentPage = self.pagination.get('currentPage');
    const pageItems = self.pagination.get('pageItems');
    const filtering = self.filtering.all();
    const sorting = self.sorting.all();

    const obj = {
      options: {
        pagination: {
          currentPage: currentPage,
          pageItems: pageItems
        },
        filtering: filtering,
        sorting: sorting,
      }
    }

    console.log(obj);

    Meteor.call('classes.list', obj, function (error, result) {
      if (error) {
        console.log('error', error);
      }
      if (result) {

        self.state.set('classes', result.classes);
        self.state.set("notFound", result.options.pagination.totalCount === 0);
        self.pagination.set("currentPage", result.options.pagination.currentPage);
        self.pagination.set("pageItems", result.options.pagination.pageItems);
        self.pagination.set("totalCount", result.options.pagination.totalCount);
        self.pagination.set("totalPages", result.options.pagination.totalPages);
      }
    });
  });
});

Template.publicPageClasses.events({
  'click .brd-delete': function (event, template) {

    const todo = this;

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

    AppUtil.temp.set('todo', this);

  },
});