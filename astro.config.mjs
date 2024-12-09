import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://ihsiao.com",
  base: "/apps/hamster/docs/",
  integrations: [
    starlight({
      title: "「仓输入法」使用指南",
      logo: {
        src: "./src/assets/hamster.png",
      },
      editLink: {
        base: "https://github.com/imfuxiao/HamsterDocument/tree/main",
      },
      social: {
        github: "https://github.com/imfuxiao/HamsterDcouments",
      },
      sidebar: [
        {
          label: "指南",
          items: [
            // Each item here is one entry in the navigation menu.
            // 默认情况下，徽章将使用你的网站的强调色。要使用内置的徽章样式，请将 variant 属性设置为以下值之一：note、tip、danger、caution 或 success。
            { label: "简介", slug: "guides/intro" },
            { label: "输入方案", slug: "guides/input_schema" },
            { label: "文件管理", slug: "guides/file_manager" },
            { label: "应用设置", slug: "guides/settings" },
            {
              label: "自定义键盘",
              slug: "guides/custom_keyboard",
              badge: { text: "不推荐", variant: "danger" },
            },
            {
              label: "键盘配色",
              slug: "guides/keyboard_color",
              badge: { text: "不推荐", variant: "danger" },
            },
            { label: "词库同步", slug: "guides/sync" },
            { label: "RIME 相关", slug: "guides/rime" },
            {
              label: "剪贴板",
              slug: "guides/pasteboard",
              badge: { text: "新", variant: "success" },
            },
            {
              label: "键盘皮肤",
              slug: "guides/keyboard_skins",
              badge: { text: "新", variant: "success" },
            },
            { label: "常见问题", slug: "guides/questions" },
          ],
        },
        {
          label: "应用更新",
          items: [
            { label: "更新日志", slug: "updates/changelog" },
            { label: "版本历史", slug: "updates/history" },
          ],
        },
      ],
    }),
  ],
});
