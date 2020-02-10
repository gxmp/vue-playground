<template>
  <select name="dropdown" id="dropdown" v-model="selectedOption"  @change="optionChanged">
    <option value="null" disabled>Please select an option</option>
    <option value="1">option 1</option>
    <option value="2">option 2</option>
    <option value="3">option 3</option>
  </select>
</template>

<script>
  export default {
    name: 'Dropdown',

    data: function () {
      return {
        selectedOption: null,
      }
    },

    methods: {
      optionChanged: function (value) {
        this.$emit('update:option', this.selectedOption)
      }
    }
  }
</script>

<style scoped>

</style>