<template>
  <span contenteditable="contenteditable" @focusout="updateInput">
      {{ content }}
  </span>
</template>

<script>
  export default {
      props: ['value'],
      data () {
          return { content: this.value }
      },
      methods: {
          updateInput () {
              this.$emit('input', this.$el.innerText)
          },
      }
  }
</script>

<style>
[contenteditable="true"]:active,
[contenteditable="true"]:focus{
  border:none;
  outline:none;
  border-bottom:  1px solid #999999;
  white-space: nowrap;
  overflow: hidden;
}
[contenteditable="true"] br {
    display:none;

}
[contenteditable="true"] * {
    display:inline;
    white-space:nowrap;
}
</style>