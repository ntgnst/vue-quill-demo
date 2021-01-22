import Vue from 'vue';
import App from './App.vue';

import VueQuillEditor from './editorPlugin';

import '../dist/quill.core.css';
import '../dist/quill.snow.css';
import '../dist/quill.bubble.css';

Vue.use(VueQuillEditor, /* { global Opt. } */);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
