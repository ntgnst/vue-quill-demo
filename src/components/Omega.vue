<template>

  <button class="ql-omega" @click="buttonClick"></button>
</template>

<script>

export default {
  name: 'omega',
  props: {
    quill: {
      type: Object,
      required: true
    },
    image: {
      type: String,
      required: false
    }
  },
  methods: {
    buttonClick() {
      var range = this.quill.getSelection();

      if (range) {
         this.quill.clipboard.dangerouslyPasteHTML(range.index, `<img class="oldu" arrr="bu olmayacak" data-class="asd" src='https://pbs.twimg.com/media/EqLtzJtXcAUlzUb?format=jpg&name=small' />`, "user");
      }
    }
  }
}
</script>

<style>
.ql-omega:after {
  content: "Ω";
}
</style>