export default {
  name: "course",
  title: "Course",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Course Name",
      type: "string",
    },
    {
      name: "description",
      title: "Course Description",
      type: "text",
      //   type: "array",
      //   of: [{ type: "block" }],
    },
  ],
}
