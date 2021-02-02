import {createApp} from 'vue'
// TypeScript error? Run VSCode command
// TypeScript: Select TypeScript version - > Use Workspace Version
import App from './App.vue'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'mdbootstrap/css/mdb.min.css'


const app = createApp(App)
app.mount('#app')
