export default {
  name: "student",
  title: "Student",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Student Name",
      type: "string",
    },
    {
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) =>
        Rule.custom((email) => {
          if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            return true
          } else {
            return "Enter a valid email"
          }
        }),
    },
    {
      name: "dob",
      title: "Date of Birth",
      type: "date",
    },
    {
      name: "enrolled",
      title: "Enrolled Courses",
      type: "array",
      of: [{ type: "reference", to: { type: "course" } }],
    },
  ],
}
