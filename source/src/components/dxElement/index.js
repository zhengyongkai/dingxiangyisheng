import Swipe from "./Swiper";
import SwipeItem from "./SwiperItem";
import Icon from "./Icon"
import "vant/lib/index.css";
const components = [Swipe, SwipeItem,Icon];
export default {
  install(Vue) {
    components.map(el => Vue.component(el.name, el));
    // Vue.prototype.$message = Message;
    // Vue.prototype.$confirm = MessageBox.confirm;
    // Vue.prototype.$prompt = MessageBox.prompt;
    // Vue.use(Loading.directive);
  }
};
