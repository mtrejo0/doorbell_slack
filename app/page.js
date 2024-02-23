"use client"

import axios from 'axios';
import React, { useState } from 'react';

export default function Home() {
  // State to hold the text area value
  const [message, setMessage] = useState('');
  // Optional: State to manage loading state
  const [isLoading, setIsLoading] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);

  const sendToSlack = async (msg, setL) => {
    setL(true);

    axios.post('/api/slack', {
      text: msg
    }).then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log(err)
      // alert('Failed to send message.');
    }).finally(() => {
      alert('Message sent successfully!');
      setL(false);
    })

  };

  return (
    <main className="flex min-h-screen flex-col items-center  p-24">


      <div className="my-4 mt-32">
        <button
          className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 w-full mb-[100px]"
          onClick={() => sendToSlack('Someone is at the gates!', setIsLoading)}
          disabled={isLoading}
        >
          {isLoading ? 'Ringing...' : 'Ring doorbell'}
        </button>
        <textarea
          rows={"4"}
          className="w-full p-2 border rounded rows"
          placeholder="Write your message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 w-full"
          onClick={() => sendToSlack(message, setIsLoading2)}
          disabled={isLoading}
        >
          {isLoading2 ? 'Sending...' : 'Send a message'}
        </button>
      </div>

    </main>
  );
}