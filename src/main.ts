import {createApp} from 'vue'
import App from './App.vue'
// TypeScript error? Run VSCode command
// TypeScript: Select TypeScript version - > Use Workspace Version

// Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'mdbootstrap/css/mdb.min.css'

// FontAwesome
import {library} from "@fortawesome/fontawesome-svg-core";
import {faUserSecret} from "@fortawesome/free-solid-svg-icons" // 쓸것만 고르기
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

// Primer
import "@primer/css/core/index.scss";
import "@primer/css/product/index.scss";
import "@primer/css/marketing/index.scss";

library.add(faUserSecret) // 고른거 추가하기  오

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
