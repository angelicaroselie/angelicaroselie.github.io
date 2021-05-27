//Creating Vue app named #interactiveform
const app = new Vue({
  el: '#interactiveform',
  data: {

      serviceQuality: '1',
      serviceSpeed: '1',
      cleanliness: '1',
      surveyFirstName: '',
      surveyLastName: '',
      surveyEmail: '',


  },
  methods: {
    log(msg){
     console.log(msg); 
    }
   },
  

});

