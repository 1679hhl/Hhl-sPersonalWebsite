import type { Collection } from "tinacms";
import { ColorPickerInput } from "../fields/color";
import { iconSchema } from "../fields/icon";
import { icon } from "mermaid/dist/rendering-util/rendering-elements/shapes/icon.js";

const Global: Collection = {
  label: "全局设置",
  name: "global",
  path: "content/global",
  format: "json",
  ui: {
    global: true,
  },
  fields: [
    {
      type: "object",
      label: "页眉",
      name: "header",
      fields: [
        iconSchema as any,
        {
          type: "string",
          label: "名称",
          name: "name",
        },
        {
          type: "string",
          label: "颜色",
          name: "color",
          options: [
            { label: "默认", value: "default" },
            { label: "主色", value: "primary" },
          ],
        },
        {
          type: "object",
          label: "导航链接",
          name: "nav",
          list: true,
          ui: {
            itemProps: (item) => {
              return { label: item?.label };
            },
            defaultItem: {
              href: "home",
              label: "首页",
            },
          },
          fields: [
            {
              type: "string",
              label: "链接",
              name: "href",
            },
            {
              type: "string",
              label: "标签",
              name: "label",
            },
          ],
        },
      ],
    },
    {
      type: "object",
      label: "页脚",
      name: "footer",
      fields: [
        {
          type: "object",
          label: "社交链接",
          name: "social",
          list: true,
          ui: {
            itemProps: (item) => {
              return { label: item?.icon?.name || 'undefined' };
            },
          },
          fields: [
            iconSchema as any,
            {
              type: "string",
              label: "链接",
              name: "url",
            },
          ],
        },
      ],
    },
    {
      type: "object",
      label: "主题",
      name: "theme",
      // @ts-ignore
      fields: [
        {
          type: "string",
          label: "主色",
          name: "color",
          ui: {
            component: ColorPickerInput,
          },
        },
        {
          type: "string",
          name: "font",
          label: "字体",
          options: [
            {
              label: "System Sans",
              value: "sans",
            },
            {
              label: "Nunito",
              value: "nunito",
            },
            {
              label: "Lato",
              value: "lato",
            },
          ],
        },
        {
          type: "string",
          name: "darkMode",
          label: "深色模式",
          options: [
            {
              label: "跟随系统",
              value: "system",
            },
            {
              label: "浅色",
              value: "light",
            },
            {
              label: "深色",
              value: "dark",
            },
          ],
        },
      ],
    },
  ],
};

export default Global;