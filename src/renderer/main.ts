import { createApp } from "vue";
import { Button, List, Spin, Input, Avatar } from "ant-design-vue";
import App from "./App.vue";

createApp(App)
  .use(Button)
  .use(List)
  .use(Spin)
  .use(Input)
  .use(Avatar)
  .mount("#app");
