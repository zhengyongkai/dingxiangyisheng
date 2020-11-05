import Swipe from "./Swiper";
import SwipeItem from "./SwiperItem";
import Icon from "./Icon";
import dxHeader from "./dxHeader";
import vanIcon from "./vanIcon";
import Navbar from "./vanNavbar";
import dxSearch from "./dxSearch";
import Sticky  from './dxStiky' 
import dxScroll from './dxScroll'
import dxUpload from './dxUpload'
import dxActionSheet from './dxActionSheet'
import picActionSheet from './dxChoosePic'
import dxImagePreview from './dxImagePreview'
import "vant/lib/index.css";
import "vant/lib/icon/local.css";
const components = [
  Swipe,
  SwipeItem,
  Icon,
  dxHeader,
  vanIcon,
  Navbar,
  dxSearch,
  Sticky,
  dxScroll,
  dxUpload,
  dxActionSheet,
  picActionSheet,
  dxImagePreview
];
export default {
  install(Vue) {
    components.map(el => Vue.component(el.name, el));
    // Vue.prototype.$message = Message;
    // Vue.prototype.$confirm = MessageBox.confirm;
    // Vue.prototype.$prompt = MessageBox.prompt;
    // Vue.use(Loading.directive);
  }
};
