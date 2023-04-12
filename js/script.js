const { createApp } = Vue;

createApp({
  data() {
    return{
      message: 'Hello World!'
    }
  }
}).mount('#app')

//ho passato un bel po' di tempo perchè non riuscivo a far comparire il message nell' h1. Il problema era che il div app deve avere l'id, io avevo messo class. ;(