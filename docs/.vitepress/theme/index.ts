import Theme from 'vitepress/theme'
import { h } from "vue";
import AnimateTitle from "./components/AnimateTitle.vue";
import './style/var.css'

export default {
  ...Theme,
  Layout() {
    return h(Theme.Layout, null, {
      "home-hero-info": () => h(AnimateTitle),
    });
  },
};

