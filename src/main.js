import { createApp } from 'vue'
import router from './router';
import App from './App.vue'
import { createRouter } from 'vue-router'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
// import './style1.css';
// import './helpers/import-vendor'
// import '../src/helpers/import-vendor'
import'./resources/css/main.css';
import'./resources/css/util.css';
import './resources/css/vendor.css';
import './resources/css/normalize.css';
import './resources/css/style.css';
import './resources/css/demo.css';
import './resources/css/plugins.css';
import './resources/css/kaiadmin.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import './resources/fe/css/normalize.css'
// import './resources/fe/css/vendor.css'
// import './resources/fe/icomoon/icomoon.css'
// // import './resources/fe/js/modernizr'
// import './resources/fe/js/plugins'
// import './resources/fe/js/script'
// import './resources/fe/js/slideNav'
// import './resources/fe/style.css'
library.add(fab, fas, far)
import axios from 'axios';
window.axios=axios;


const app = createApp(App);

app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
// createApp(App).mount('#app')
// app.config.globalProperties.$message = message;
