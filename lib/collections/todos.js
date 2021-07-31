import SimpleSchema from "simpl-schema";

Todos = new Mongo.Collection("todos");

TodoSchema = new SimpleSchema({
  name: String,

  description: {
    type: String,
    optional: true,
  },
});

Todos.attachSchema(TodoSchema);
