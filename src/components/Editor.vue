<template>
<div class="ql-bound" ref="bound">
  <div class="quill-editor">
    <slot name="toolbar"></slot>
    <div ref="editor"></div>
  </div>
</div>
  
</template>

<script>
  // require sources
  import _Quill from 'quill';
  const Quill = window.Quill || _Quill;
  const defaultOptions = {
    theme: 'snow',
    modules: {
      toolbar: [
        ['bold', 'italic', 'underline', 'strike'],
        ['blockquote', 'code-block'],
        [{ 'header': 1 }, { 'header': 2 }],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        [{ 'script': 'sub' }, { 'script': 'super' }],
        [{ 'indent': '-1' }, { 'indent': '+1' }],
        [{ 'direction': 'rtl' }],
        [{ 'size': ['small', false, 'large', 'huge'] }],
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        [{ 'color': [] }, { 'background': [] }],
        [{ 'font': [] }],
        [{ 'align': [] }],
        ['clean'],
        ['link', 'image', 'video']
      ]
    },
    placeholder: 'Insert text here ...',
    readOnly: false
  }
  // export
  export default {
    name: 'editor',
    data() {
      return {
        // eslint-disable-next-line vue/no-reserved-keys
        _options: {},
        // eslint-disable-next-line vue/no-reserved-keys
        _content: 'asdasdads',
        defaultOptions
      }
    },
    props: {
      content: String,
      value: String,
      disabled: {
        type: Boolean,
        default: false
      },
      options: {
        type: Object,
        required: false,
        default: () => ({})
      },
      globalOptions: {
        type: Object,
        required: false,
        default: () => ({})
      }
    },
    mounted() {
      this.initialize()
    },
    beforeDestroy() {
      this.quill = null
      delete this.quill
    },
    methods: {
      // Init Quill instance
      initialize() {
        if (this.$el) {
          // Options
          this._options = Object.assign({}, this.defaultOptions, this.globalOptions, this.options)
          // Instance
          this.quill = new Quill(this.$refs.editor, this._options)
          
          this.quill.enable(false)
          // Set editor content
          if (this.value || this.content) {
            this.quill.pasteHTML(this.value || this.content)
          }
          // Disabled editor
          if (!this.disabled) {
            this.quill.enable(true)
          }
          // Mark model as touched if editor lost focus
          this.quill.on('selection-change', range => {
            if (!range) {
              this.$emit('blur', this.quill)
            } else {
              this.$emit('focus', this.quill)
            }
          })
          // Update model if text changes
          // eslint-disable-next-line no-unused-vars
          this.quill.on('text-change', (delta, oldDelta, source) => {
            let html = this.$refs.editor.children[0].innerHTML
            const quill = this.quill
            const text = this.quill.getText()
            if (html === '<p><br></p>') html = ''
            this._content = html
            this.$emit('input', this._content)
            this.$emit('change', { html, text, quill })
          })
          // Emit ready event
          this.$emit('ready', this.quill)
        }
      }
    },
    watch: {
      // Watch content change
      // eslint-disable-next-line no-unused-vars
      content(newVal, oldVal) {
        if (this.quill) {
          if (newVal && newVal !== this._content) {
            this._content = newVal
            this.quill.pasteHTML(newVal)
          } else if(!newVal) {
            this.quill.setText('')
          }
        }
      },
      // Watch content change
      // eslint-disable-next-line no-unused-vars
      value(newVal, oldVal) {
        if (this.quill) {
          if (newVal && newVal !== this._content) {
            this._content = newVal
            this.quill.pasteHTML(newVal)
          } else if(!newVal) {
            this.quill.setText('')
          }
        }
      },
      // Watch disabled change
      // eslint-disable-next-line no-unused-vars
      disabled(newVal, oldVal) {
        if (this.quill) {
          this.quill.enable(!newVal)
        }
      }
    }
  }
</script>