<template>
  <button class="ql-undo" @click="buttonClick"></button>
</template>

<script>
export default {
name: 'undo',
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
      this.quill.history.undo();
    }
  }
}
</script>

<style>
.ql-undo:after {
  content: "<";
}
</style>