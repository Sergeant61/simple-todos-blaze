import SimpleSchema from "simpl-schema";

Classes = new Mongo.Collection("classes");

ClassSchema = new SimpleSchema({
  name: String,

  description: {
    type: String,
    optional: true,
  },
});

Classes.attachSchema(ClassSchema);

/**
 * Classes // ad, açıklama, 
 * Students // ad, soyadı, okulNumarası, classId
 * Yoklama // tarih, studentId, isVar(boolean)
 *
 * 
 *  <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>

  {{#each ...}}
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
  {{/each}}

  </tbody>
</table>
 */