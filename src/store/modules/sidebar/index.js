import { isDev } from "@/config/env";

const docs = __APP_INFO__.pkg.docs

const outsideList = [
  {
    only: "message",
    icon: "ChatDotSquare",
    locale: "message",
    title: "消息",
    class: "fix-ed",
    if_fixed: 1,
    type: "el-icon",
  },
  {
    only: "notebook",
    icon: "Notebook",
    locale: "addressBook",
    title: "通讯录",
    class: "fix-ed",
    if_fixed: 1,
    type: "el-icon",
  },
  {
    only: "prompt",
    icon: "assistant",
    locale: "",
    title: "AI助理",
    // type: "el-icon",
  },
  {
    only: "test",
    icon: "SwitchFilled",
    title: "web",
    show: isDev ? "" : "hide",
    type: "el-icon",
  },
  {
    only: "more",
    icon: "MoreFilled",
    locale: "more",
    title: "更多",
    mode: "other",
    type: "el-icon",
  },
];
const moreList = [
  {
    only: "番茄酱",
    icon: "IceTea",
    title: "番茄酱",
    type: "el-icon",
    openType: "outside",
    url: "https://blog.1314151.xyz",
  },
];

export default {
  state: {
    outsideList,
    moreList,
  },
  mutations: {
    SET_OUT_SIDE_LIST(state, list) {
      const data = state.outsideList.filter((t) => t.only === "more");
      state.outsideList = [...list, ...data];
    },
    SET_MORE_LIST(state, list) {
      state.moreList = list;
    },
  },
};
