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
        <omega  :quill="quill" :image="image" slot="toolbar-extension"></omega>
        <undo :quill="quill" slot="toolbar-extension"></undo>
        <redo :quill="quill" slot="toolbar-extension"></redo>
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
import Editor from './components/Editor.vue'
import dedent from 'dedent';
import Omega from './components/Omega.vue';
import Undo from './components/Undo.vue';
import Redo from './components/Redo.vue';

export default {
  name: 'App',
  data() {
    return {
      content: 'asd',
      image: dedent`<img src='C:\Users\Batu\Desktop\may-the-source-be-with-you.png' />`,
      isReady: false,
      quill: null
    }
  },
  components: {
    Editor,
    Omega,
    Undo,
    Redo
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
  }
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
