
import React from 'react';

const MessagePage = () => {
    const messages = [
        { sender: 'Alice', content: 'Hello, how are you?', timestamp: '10:30 AM' },
        { sender: 'Bob', content: 'Don’t forget the meeting at 3 PM.', timestamp: '9:15 AM' },
      ];
  return (
    <div className="p-6 mx-auto lg:flex-row  items-center justify-center flex flex-cols  max-w-4x1 mt-10">
      <div className='container'>
      <h1 className="text-xl font-semibold mb-4 text-blue-500">Messages</h1>
      </div>
      <div className="space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className="bg-white shadow-md p-4 rounded-md hover:shadow-lg transition-all"
          >
            <h2 className="text-lg font-medium text-gray-800">
              {message.sender}
            </h2>
            <p className="text-gray-600">{message.content}</p>
            <span className="text-sm text-gray-400">{message.timestamp}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessagePage;
