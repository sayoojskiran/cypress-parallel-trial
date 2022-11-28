const { defineConfig } = require("cypress");
const readXlsx=require('./cypress/support/read-xlsx')
module.exports = defineConfig({
  projectId: 'ea41fa',
  
  e2e: {
    baseUrl:'https://rahulshettyacademy.com/angularpractice/',
    env:{
      url:'https://rahulshettyacademy.com/angularpractice/'
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task',{
        'readXlsx':readXlsx.read
      })
     
      
    },
    
    specPattern:'cypress/Integration/Example/*.js'
    
  },
});
