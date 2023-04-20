import { createApp } from "vue";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";
import router from "./router";
import store from "./store";
import axios from "./plugins/axios";
import axiosInterceptor from "./plugins/interceptor";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faChevronLeft, faChevronRight, faBars, faEllipsis, faChevronDown } from '@fortawesome/free-solid-svg-icons';

axiosInterceptor(store);

import App from "./App.vue";
const app = createApp(App);

library.add(faChevronLeft, faChevronRight, faBars, faEllipsis, faChevronDown);
app.component('font-awesome-icon', FontAwesomeIcon);

app.use(router(store));
app.use(store);
app.provide("$axios", axios);
app.mount("#app");
