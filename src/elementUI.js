import Vue from 'vue';

// import 'element-ui/lib/theme-chalk/index.css';
import './styles/element-variables.scss';
import './styles/global.scss';

import {
  Container,
  Header,
  Main,
  Footer,
  Button,
  Message,
  MessageBox,
  Notification,
  Loading,
  Alert,
  Steps,
  Step,
  Tag,
  Card,
  Breadcrumb,
  BreadcrumbItem,
  Input,
  Row,
  Col,
  Scrollbar,
  Radio,
  RadioGroup,
  Tree,
  ButtonGroup,
  Icon,
  Select,
  Option,
  Tabs,
  TabPane,
  InputNumber,
  Form,
  FormItem,
  Divider,
  Table,
  TableColumn,
  Tooltip,
  Dialog,
  Autocomplete,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  DatePicker,
  TimePicker,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Slider,
  Progress,
  Upload,
  Checkbox,
  CheckboxGroup,
  Pagination
} from 'element-ui';

Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;

export default function elementUI() {
  Vue.use(Container);
  Vue.use(Header);
  Vue.use(Main);
  Vue.use(Footer);
  Vue.use(Button);
  Vue.use(Alert);
  Vue.use(Steps);
  Vue.use(Step);
  Vue.use(Tag);
  Vue.use(Card);
  Vue.use(Breadcrumb);
  Vue.use(BreadcrumbItem);
  Vue.use(Input);
  Vue.use(Row);
  Vue.use(Col);
  Vue.use(Scrollbar);
  Vue.use(Radio);
  Vue.use(RadioGroup);
  Vue.use(Tree);
  Vue.use(ButtonGroup);
  Vue.use(Icon);
  Vue.use(Select);
  Vue.use(Option);
  Vue.use(Tabs);
  Vue.use(TabPane);
  Vue.use(InputNumber);
  Vue.use(Form);
  Vue.use(FormItem);
  Vue.use(Divider);
  Vue.use(Table);
  Vue.use(TableColumn);
  Vue.use(Tooltip);
  Vue.use(Dialog);
  Vue.use(Autocomplete);
  Vue.use(Menu);
  Vue.use(Submenu);
  Vue.use(MenuItem);
  Vue.use(MenuItemGroup);
  Vue.use(DatePicker);
  Vue.use(TimePicker);
  Vue.use(Dropdown);
  Vue.use(DropdownItem);
  Vue.use(DropdownMenu);
  Vue.use(Slider);
  Vue.use(Progress);
  Vue.use(Upload);
  Vue.use(Checkbox);
  Vue.use(CheckboxGroup);
  Vue.use(Pagination);
}
