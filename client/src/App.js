import React, {useEffect, useState} from 'react';
import './App.css';

export default function App() {
  const [socket, setSocket] = useState(null);

  // Run whenever the page is re-render
  useEffect(() => {
    const newSocket = new WebSocket("ws://localhost:8080/ws");
    setSocket(newSocket);

    console.log("Attempting Websocket Connection");

    newSocket.onopen = () => {
      console.log("Successfully Connected");
      newSocket.send("Hi From The Client");
    }

    newSocket.onclose = (event) => {
      console.log("Socket Closed Connection: ", event);
    }

    newSocket.onmessage = (msg) => {
      console.log(msg);
    }
  
    newSocket.onerror = (error) => {
      console.log("Socket Error: ", error);
    }
  }, []); // [] makes it only run once when refresh is clicked

  return (
    <>
      Hello World
    </>
  );
}
