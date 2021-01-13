import Vue from 'vue';
import App from './App.vue';

import VueQuillEditor from './editorPlugin';

import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';

Vue.use(VueQuillEditor, /* { global Opt. } */);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
