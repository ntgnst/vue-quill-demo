<template>
  <b ref="wordCountRef" class="ql-wordCount">{{wordCount}}</b>
</template>

<script>
export default {
name: 'word-count',
  props: {
    quill: {
      type: Object,
      required: true
    }
  },
  mounted() {
    console.log(this.quill);
  },
  computed: {
    wordCount() {
      if(this.quill) {
        const content = this.quill.getText();
        const wordCount = content.length - 1 > 0 ? content.split(/\s+/).length - 1  : 0;
        return wordCount + "W";
      }

      return 0;
    }
  },
  methods: {
    buttonClick() {
      this.quill.history.redo();
    }
  }
}
</script>

<style>
.ql-wordCount:after {
  content: "";
  width: 20px;
}
</style>