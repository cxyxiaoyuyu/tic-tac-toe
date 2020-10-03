<template>
  <div class="cell" @click="clickCell">
    {{ text }}
  </div>
</template>

<script>
export default {
  props: ["text"],
  methods: {
    clickCell(){
      if(!this.text){
        this.$emit('click')
      }
    }
  }
}
</script>

<style scoped>
.cell {
  border: 1px solid #000;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26px;
}
</style>