import SimpleSchema from "simpl-schema";

Messages = new Mongo.Collection("messages");

MessageSchema = new SimpleSchema({
  roomId: SimpleSchema.RegEx.Id,

  userId: SimpleSchema.RegEx.Id,

  message: String,

  payload: {
    type: Object,
    blackbox: true,
    optional: true,
  },
  
});

Messages.attachSchema(MessageSchema);
Messages.autoDates();