// Creating vue app and assigning it to id #tweetapp
const app = new Vue({
  el: '#tweetapp',
  data: {
    username: 'Angelica',
    bio: 'Young web developer woman from Finland',
    location: 'Helsinki, Finland',
    newTweet: '',
    tweets: [
      'Today I started to learn the Vue.js',
      'I\'m trying to build an easy Vue app',
      'Wish me luck',
      'I think this is going well',
    ]

  },
  methods: {

  },


});