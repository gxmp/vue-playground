import Vue from 'vue';

window.axios = require('axios');

new Vue({
  el:'#app',

  components: {

  },

  mounted: function () {

    axios.post('https://jsonplaceholder.typicode.com/posts')
      .then(response => this.posts = console.log(response))
      .catch(error => this.posts = [{title: 'No post found'}])
      .finally(() => console.log('Data loading complete'));

  },

  data:{
    posts: null,
  },
});