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

export default {
  name: 'App',
  data() {
    return {
      content: ''
    }
  },
  components: {
    Editor
  },
  methods: {
    onEditorReady (quill) {
      console.log('editor ready!', {quill})
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
    },
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
