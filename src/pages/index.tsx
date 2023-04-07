import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [output, setOutput] = useState<string[]>([]);

  const fetchData = async () => {
    const eventSource = new EventSource("/api/tasks");

    eventSource.onmessage = (event) => {
      console.log(event.data);
      setOutput((prevOutput) => [...prevOutput, event.data]);
    };

    return () => {
      eventSource.close();
    };
  };

  const startTaskLoop = async () => {
    fetchData();
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="p-12">
        <div className="mb-4">
          <h1 className="text-xl font-bold">Baby AGI</h1>
          <button
            className="text-gray-500 hover:text-gray-300"
            onClick={startTaskLoop}
          >
            Start Task Loop
          </button>
        </div>
        <ul>
          {output.map((line, index) => (
            <li key={index}>{line}</li>
          ))}
        </ul>
      </main>
    </>
  );
}
