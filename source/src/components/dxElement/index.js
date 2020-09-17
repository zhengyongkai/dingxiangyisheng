import Swipe from "./Swiper";
import SwipeItem from "./SwiperItem";
import Icon from "./Icon";
import dxHeader from "./dxHeader";
import vanIcon from "./vanIcon";
import Navbar from "./vanNavbar";
import "vant/lib/index.css";
import "vant/lib/icon/local.css";
const components = [Swipe, SwipeItem, Icon, dxHeader, vanIcon, Navbar];
export default {
  install(Vue) {
    components.map(el => Vue.component(el.name, el));
    // Vue.prototype.$message = Message;
    // Vue.prototype.$confirm = MessageBox.confirm;
    // Vue.prototype.$prompt = MessageBox.prompt;
    // Vue.use(Loading.directive);
  }
};
