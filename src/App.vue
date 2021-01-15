<template>
  <div id="app">
    
    <editor 
    v-model="content"
    @ready="onEditorReady"
    @blur="onEditorBlur"
    @focus="onEditorFocus"
    @input="onEditorInput"
    @change="onEditorChange($event)"
    >
    <div v-if="isReady" class="ql-toolbar ql-snow" slot="toolbar-extension">
      <div class="ql-formats">
        <omega :quill="quill" :image="image"></omega>
        <undo :quill="quill"></undo>
        <redo :quill="quill"></redo>
        <word-count :quill="quill"></word-count>
      </div>
    </div>
  
    </editor>
      <div>
        <div class="output ql-snow">
          <div class="title">Output</div>
        <div class="ql-editor" v-html="content"></div>
      </div>
    </div>
  </div>
</template>

<script>

import dedent from 'dedent';
import Omega from './components/Omega.vue';
import Undo from './components/Undo.vue';
import Redo from './components/Redo.vue';
import WordCount from './components/WordCount.vue';

export default {
  name: 'App',
  data() {
    return {
      content: 'asd',
      image: dedent`<img class="asd" src='https://pbs.twimg.com/media/EqLtzJtXcAUlzUb?format=jpg&name=small' />`,
      isReady: false,
      quill: null
    }
  },
  components: {
    Omega,
    Undo,
    Redo,
    WordCount
  },
  methods: {
    onEditorReady (quill) {
      this.quill = quill;
      this.isReady = true;
      this.quill = quill;
    },
    onEditorBlur(quill) {
      console.log('editor blur!', {quill})
    },
    onEditorFocus(quill){
      console.log('editor focus!', {quill})
    },
    onEditorInput(quill){
      console.log('editor input!', {quill})
    },
    onEditorChange({ quill, html, text }){
      
      console.log('editor change!', { quill, html, text })
    }
  },
  // setup(props, { emit }) {
//     const content = ref('');
//     const dummyImage = ref(dedent`<img src='https://pbs.twimg.com/media/EqLtzJtXcAUlzUb?format=jpg&name=small' />`); 
//     const isReady = ref(false);
//     const quill = ref(null);

//     onMounted(() => {
//       console.log('It Works!!');
//     });

//     const onEditorReady = quill => {
//       this.quill = quill;
//       this.isReady = true;
//       this.quill = quill;
//     };

//     const onEditorBlur = quill => {
//       console.log('editor blur!', {quill})
//     };

//     const onEditorFocus = quill => {
//      console.log('editor focus!', {quill})
//     };

//     const onEditorInput = quill => {
//       console.log('editor input!', {quill});
//     };

//     const onEditorChange = ({ quill, html, text }) => {
//       console.log('editor change!', { quill, html, text })
//     };

//     return {
//       onEditorReady,
//       onEditorBlur,
//       onEditorFocus,
//       onEditorInput,
//       onEditorChange,
//       content,
//       dummyImage,
//       isReady,
//       quill
//     }
//   }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

