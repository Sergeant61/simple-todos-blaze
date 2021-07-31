Template.name.events({ 
  'submit form#brdPublicModalTodoCreateForm': function(event, template) { 

    const name = event.target.name.value
    const description = event.target.description.value

    const  obj = {
      todo: {
        name:name,
        description:description,
      }
    }
     
     Meteor.call('todos.create', obj, function(error, result) { 
      if (error) { 
        console.log('error', error); 
      } 
      if (result) { 

          console.log(result);
         self.state.set('todos',result);
      } 
    });
  } 
});