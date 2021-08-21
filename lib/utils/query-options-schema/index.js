import SimpleSchema from "simpl-schema";

Weekdays = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

WeekdayShort2Long = (day) => {
  switch (day) {
    case "mon":
      return "monday";
    case "thu":
      return "thursday";
    case "wed":
      return "wednesday";
    case "tue":
      return "tuesday";
    case "fri":
      return "friday";
    case "sat":
      return "saturday";
    case "sun":
      return "sunday";
  }
};

ImageSchema = new SimpleSchema({
  url: String,
  sort: Number,
});

WeekdaySchema = new SimpleSchema({
  sun: Boolean,
  mon: Boolean,
  tue: Boolean,
  wed: Boolean,
  thu: Boolean,
  fri: Boolean,
  sat: Boolean,
});

PaginationSchema = new SimpleSchema({
  currentPage: {
    type: SimpleSchema.Integer,
  },

  pageItems: {
    type: SimpleSchema.Integer,
  },
});

SortingSchema = new SimpleSchema({
  sortField: {
    type: String,
  },

  sortOrder: {
    type: String,
  },
});

QueryOptionsSchema = new SimpleSchema({
  pagination: {
    type: PaginationSchema,
    optional: true,
  },

  sorting: {
    type: SortingSchema,
    optional: true,
  },

  filtering: {
    type: Object,
    blackbox: true,
    optional: true,
  },

  searching: {
    type: Object,
    blackbox: true,
    optional: true,
  },
});
