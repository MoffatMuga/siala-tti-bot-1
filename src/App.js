
// import React from 'react';
// import Chatbot from './components/Chatbot';
// import './App.css'

// const currentYear = new Date().getFullYear();

// function App() {
//   return (
//     <div style={{border:'1px solid #007bff 600px', borderRadius: '20px'}}>
//       <h1 style={{ display:'flex', justifyContent: 'center', color: '#853e03', fontSize:'2.4rem'}}>SIALA TTI CHATBOT</h1>
//       <div style={{display:"flex", alignContent:"center", justifyContent:'center' }}>
//         <div style={{ display:'flex', flexDirection: 'column'}}>
//           <img src='siala.png' alt='siala image'/>
//           <span style={{ display:'flex', justifyContent:'center'}}>I can respond as a bot</span>
//         </div>
//         <Chatbot />
//       </div>
//       <p style={{display:'flex', justifyContent:'center', color: '#853e03', fontWeight:'bold'}}> siala TTI library department &copy; {currentYear} </p>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import Chatbot from './components/Chatbot';
import './App.css';

const currentYear = new Date().getFullYear();

function App() {
  return (
    <div className="container mx-auto">
      <h1 style={{ display:'flex', justifyContent: 'center', color: '#853e03', fontSize:'2.4rem'}}>SIALA TTI CHATBOT</h1>
      <div className="flex flex-col items-center sm:flex-row sm:items-start mt-4">
        <img
          src="siala.png" // Update the image path accordingly
          alt="siala image"
          className="mb-4 sm:mr-4 sm:mb-0"
          style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }}
        />
        <div className="flex-1">
          <span className="text-center sm:text-left block mb-4">I can respond as a bot</span>
          <Chatbot />
        </div>
      </div>
      <p style={{display:'flex', justifyContent:'center', color: '#853e03', fontWeight:'bold'}}> siala TTI library department &copy; {currentYear} </p>
    </div>
  );
}

export default App;

