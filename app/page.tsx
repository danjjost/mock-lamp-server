"use client";

import { useEffect, useState } from "react";


export default function Home() {
  const [color, setColor] = useState("black");

  useEffect(() => {
    const interval = setInterval(() => {
      fetch("/api/getColor")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setColor(data.color);
        });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: color }}>
      <div style={{ color: "black", background: "#f8f8f8", padding: "20px", width: "75vw", borderRadius: "10px", boxShadow: "2.5px 2.5px 2.5px rgba(0, 0, 0, 0.5)" }}>
          <h1 style={{ fontSize: "24px", fontWeight: "light", textAlign: "center" }}>Mock Lamp</h1>
          <p style={{ fontSize: "14px", marginTop: "20px" }}>
              At some point, the <span style={{ fontStyle: "italic" }}>blazor frontend</span> will probably make an HTTP request to either <span style={{ fontWeight: "bold" }}>Alexa</span>, a <span style={{ fontWeight: "bold" }}>backend service</span>, or another server to change the {"lamp's"} color. This is a mock server that the blazor frontend can make requests to in the meantime.
          </p>
          <p style={{ fontSize: "14px", marginTop: "20px" }}>
              Make a <span style={{ fontWeight: "bold" }}>POST request</span> to <span style={{ fontStyle: "italic" }}>http://localhost:3000/api/setColor</span> with a JSON body of <span style={{ fontStyle: "italic" }}>{'{"color": "green"}'}</span>
          </p>
          <pre style={{ background: "#eee", padding: "10px", borderRadius: "5px", fontSize: "12px", marginTop: "20px" }}>
            {"curl -X POST http://localhost:3000/api/setColor -H \"Content-Type: application/json\" -d \"{'color': 'green'}\""}
          </pre>
      </div>
    </div>
  );
}