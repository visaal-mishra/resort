import React, { Component } from 'react';

export default class home extends Component {
  state = {
    users: [
      { id: 1011, name: 'Vishal', password: 'vishal@123' },
      { id: 1012, name: 'Ravi', password: 'ravi@123' },
      { id: 1013, name: 'Manoj', password: 'manoj@123' }
    ],
    isLoggedIn: false,
    Value: [10, 20, 30, 40]
  };

//   printArrayValue = value => {
//     var returnArray = value.map((arraymember) => {
       
//       return <li>{arraymember}</li> ;
      
//     });
//     return returnArray
//   };


  render() {
    const value = this.state.users
   // console.log(value)
    var printLi = value.map((arraymember,index) => {    

         return <li key={index}>{arraymember.id + '-' + arraymember.name}</li> ;        
      });

    return <div><h1>The Array List is</h1>
        <ul> {printLi}</ul>

   
    </div>;
  }
}
