<template>
  <button class="ql-redo" @click="buttonClick"></button>
</template>

<script>
export default {
name: 'redo',
  props: {
    quill: {
      type: Object,
      required: true
    }
  },
  mounted() {
    console.log(this.quill);
  },
  methods: {
    buttonClick() {
      this.quill.history.redo();
    }
  }
}
</script>

<style>
.ql-redo:after {
  content: ">";
}
</style>