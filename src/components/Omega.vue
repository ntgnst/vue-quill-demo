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
  mounted() {
    console.log(this.quill);
  },
  methods: {
    buttonClick() {
      var range = this.quill.getSelection();

      if (range) {
         this.quill.clipboard.dangerouslyPasteHTML(range.index, this.image, "user");
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