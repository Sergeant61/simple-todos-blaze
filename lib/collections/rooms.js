import SimpleSchema from "simpl-schema";

Rooms = new Mongo.Collection("rooms");

RoomSchema = new SimpleSchema({
  name: String,

  description: {
    type: String,
    optional: true,
  },
});

Rooms.attachSchema(RoomSchema);
