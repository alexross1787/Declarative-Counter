import React, { useState } from 'react'; //import multiple by using a comma

function App() {
  let [ counter, changeCounter ] = useState(1); //useState is the variable that changes in the DOM
  window.changeCounter = changeCounter //makes changeCounter global to access variable in the delveloper console
  return ( 
    <div>
      <h1>{counter}</h1> 
      <h2>{counter}</h2>
      <h3>{counter}</h3>
    </div>
  )
}

export default App;