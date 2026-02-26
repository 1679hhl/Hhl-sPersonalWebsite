import type { Collection } from "tinacms";

const Tag: Collection = {
  label: "标签",
  name: "tag",
  path: "content/tags",
  format: "mdx",
  fields: [
    {
      type: "string",
      label: "名称",
      name: "name",
      isTitle: true,
      required: true,
    },
  ],
};

export default Tag;