import React, { useState, useEffect } from 'react';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const departmentLinks = {
    ELECTRICAL: 'https://drive.google.com/drive/folders/1oJBBzBsG536XAbyCk9e8B_cYEtN4RluL?usp=sharing',
    MECHANICAL: 'https://drive.google.com/drive/folders/1UViONzB-gF-uTGWab0SYv_g92Ciq-gRE?usp=sharing',
    BUILDING: 'https://drive.google.com/drive/folders/184r16le774PcZdMSaDvij7hvXnBya6HN?usp=sharing',
    AGRICULTURE: 'https://drive.google.com/drive/folders/1uGKxhCPN2ks-2Eb3sW4MJWm0xgdnv1NA?usp=sharing',
    BUSINESS: 'https://drive.google.com/drive/folders/1wDOxAMfO-DUgrY9Q3NDka9pn0xduPslD?usp=sharing',
    HOSPITALITY: 'https://drive.google.com/drive/folders/1-MZAEOx_MA4K1uyvmbH3Jrff2S3BE6Ih?usp=sharing',
    ICT: 'https://drive.google.com/drive/folders/1yaRLRV0gf2Q7eI7YQJoglYRmxwzdSrlk?usp=sharing',
  };

  useEffect(() => {
    // Send a welcome message when the component mounts
    sendMessageToBot('/start');
  }, []);

  const sendMessageToBot = (message) => {
    // Assuming you have a function to send messages to the bot
    // This is a placeholder, replace it with your actual function
    const botResponse = simulateBotResponse(message);
    setMessages([
      ...messages,
      { text: message, sender: 'user', id: messages.length + 1 },
      { text: botResponse, sender: 'bot', id: messages.length + 2 },
    ]);
  };

  const simulateBotResponse = (userMessage) => {
    if (userMessage.toLowerCase() === '/start') {
      return (
        <>
          Welcome to our E Library bot. Choose a department to access the E Library services:
          <br />
          - ELECTRICAL
          <br />
          - MECHANICAL
          <br />
          - BUILDING
          <br />
          -AGRICULTURE
          <br />
          -BUSINESS
          <br />
          -HOSPITALITY
          <br />
          -ICT
        </>
      );
    } else if (departmentLinks.hasOwnProperty(userMessage.toUpperCase())) {
      const department = userMessage.toUpperCase();
      return (
        <>
          Sure, here is the link to the {department} department's E Library:{' '}
          <a href={departmentLinks[department]} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            {department}
          </a>

          <br />
          Happy learning! 🎉
        </>
      );
    } else {
      return "I'm sorry, I didn't understand that. Please choose a department or provide feedback.";
    }
  };

  const handleSendMessage = () => {
    sendMessageToBot(inputText);
    setInputText('');
  };

  return (
    <div>
      <div
        style={{
          height: '400px',
          overflowY: 'scroll',
          border: '1px solid #007bff',
          padding: '10px',
          display: 'flex',
          flexDirection: 'column',
          borderRadius: '12px'
        }}
      >
        {messages.map((message) => (
          <div
            key={message.id}
            style={{
              marginBottom: '10px',
              textAlign: message.sender === 'bot' ? 'left' : 'right',
              alignSelf: message.sender === 'bot' ? 'flex-start' : 'flex-end',
            }}
          >
            <div
              style={{
                background: message.sender === 'bot' ? '#f0f0f0' : '#007bff',
                color: message.sender === 'bot' ? '#333' : '#fff',
                padding: '10px',
                borderRadius: '8px',
                display: 'inline-block',
                maxWidth: '70%',
              }}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '10px', display: 'flex', alignItems: 'center' }}>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type your message..."
          style={{ flex: 1, marginRight: '10px' }}
        />
        <button
          onClick={handleSendMessage}
          style={{ background: '#007bff', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '8px' }}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;

///////////////////////////////////////////////////////

// import React, { useState, useEffect } from 'react';

// const Chatbot = () => {
//   const [messages, setMessages] = useState([]);
//   const [inputText, setInputText] = useState('');

//   const departmentLinks = {
//     ELECTRICAL: 'https://drive.google.com/drive/folders/1oJBBzBsG536XAbyCk9e8B_cYEtN4RluL?usp=sharing',
//     MECHANICAL: 'https://drive.google.com/drive/folders/1UViONzB-gF-uTGWab0SYv_g92Ciq-gRE?usp=sharing',
//     BUILDING: 'https://drive.google.com/drive/folders/184r16le774PcZdMSaDvij7hvXnBya6HN?usp=sharing',
//     AGRICULTURE: 'https://drive.google.com/drive/folders/1uGKxhCPN2ks-2Eb3sW4MJWm0xgdnv1NA?usp=sharing',
//     BUSINESS: 'https://drive.google.com/drive/folders/1wDOxAMfO-DUgrY9Q3NDka9pn0xduPslD?usp=sharing',
//     HOSPITALITY: 'https://drive.google.com/drive/folders/1-MZAEOx_MA4K1uyvmbH3Jrff2S3BE6Ih?usp=sharing',
//     ICT: 'https://drive.google.com/drive/folders/1yaRLRV0gf2Q7eI7YQJoglYRmxwzdSrlk?usp=sharing',
//   };

//   useEffect(() => {
//     // Send a welcome message when the component mounts
//     sendMessageToBot('/start');
//   }, []);

//   const sendMessageToBot = (message) => {
//     const botResponse = simulateBotResponse(message);
//     setMessages([
//       ...messages,
//       { text: message, sender: 'user', id: messages.length + 1 },
//       { text: botResponse, sender: 'bot', id: messages.length + 2 },
//     ]);
//   };

//   const simulateBotResponse = (userMessage) => {
//     if (userMessage.toLowerCase() === '/start') {
//       return (
//         <>
//           Welcome to our E Library bot. Choose a department to access the E Library services:
//           <br />
//           - ELECTRICAL
//           <br />
//           - MECHANICAL
//           <br />
//           - BUILDING
//           <br />
//           -AGRICULTURE
//           <br />
//           -BUSINESS
//           <br />
//           -HOSPITALITY
//           <br />
//           -ICT
//         </>
//       );
//     } else if (departmentLinks.hasOwnProperty(userMessage.toUpperCase())) {
//       const department = userMessage.toUpperCase();
//       return (
//         <>
//           Sure, here is the link to the {department} department's E Library:{' '}
//           <a href={departmentLinks[department]} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
//             {department}
//           </a>

//           <br />
//           Happy learning! 🎉
//         </>
//       );
//     } else {
//       return "I'm sorry, I didn't understand that. Please choose a department or provide feedback.";
//     }
//   };

//   const handleSendMessage = () => {
//     sendMessageToBot(inputText);
//     setInputText('');
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <div
//         className="h-60 overflow-y-scroll border border-blue-500 p-4 flex flex-col rounded-lg mb-4"
//       >
//         {messages.map((message) => (
//           <div
//             key={message.id}
//             className={`mb-4 text-${message.sender === 'bot' ? 'left' : 'right'} self-${message.sender === 'bot' ? 'start' : 'end'}`}
//           >
//             <div
//               className={`bg-${message.sender === 'bot' ? 'gray-200' : 'blue-500'} text-${message.sender === 'bot' ? 'gray-700' : 'white'} p-4 rounded-lg inline-block max-w-70`}
//             >
//               {message.text}
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="flex flex-col items-center sm:flex-row sm:items-start">
//         <div className="flex-1 mb-4">
//           <input
//             type="text"
//             value={inputText}
//             onChange={(e) => setInputText(e.target.value)}
//             placeholder="Type your message..."
//             className="w-full p-2 border border-gray-400 rounded"
//           />
//         </div>
//         <div className="flex-1">
//           <button
//             onClick={handleSendMessage}
//             className="bg-blue-500 text-white border-none p-2 mt-2 rounded"
//           >
//             Send
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Chatbot;



