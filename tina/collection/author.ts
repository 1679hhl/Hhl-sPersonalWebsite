import type { Collection } from "tinacms";

const Author: Collection = {
  label: "作者",
  name: "author",
  path: "content/authors",
  format: "md",
  fields: [
    {
      type: "string",
      label: "姓名",
      name: "name",
      isTitle: true,
      required: true,
    },
    {
      type: "image",
      label: "头像",
      name: "avatar",
      // @ts-ignore
      uploadDir: () => "authors",
    },
  ],
};
export default Author;