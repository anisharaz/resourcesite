"use client";

import { useState } from "react";
// import { useEffect } from 'react';
import { Loader } from "lucide-react";
import { getResponse } from "@/app/actions/ai";

export function ChatUI() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     console.log(pdfPath);

  //     const r = await uploadPdf(pdfPath);
  //     console.log("hey");

  //     console.log(r);

  //   };
  //   fetchData();
  // }, [pdfPath]);

  const handleSend = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (input.length === 0) {
        alert("Please enter a question.");
        return;
      } else {
        const response = await getResponse(input, "c74455A965An");
        setMessages([...messages, input, response.message]);
        setInput("");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-1/5 bg-blue-950 p-4 flex flex-col h-96">
      <div className="flex-grow overflow-y-auto mb-4">
        {messages.map((message, index) => (
          <div key={index} className="bg-white text-black p-2 my-2 rounded">
            {message}
          </div>
        ))}
      </div>
      <form className="flex" onSubmit={handleSend}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow p-2 rounded-l"
          placeholder="Type a message..."
        />
        {loading ? (
          <Loader className="animate-spin h-6 w-6 text-gray-500" />
        ) : (
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-r"
          >
            Send
          </button>
        )}
      </form>
    </div>
  );
}
