import { useState } from "react";

function App() {
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = async () => {
    const response = await fetch("http://localhost:5000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content,
        scheduled_date: date,
        scheduled_time: time,
      }),
    });

    const data = await response.json();

    alert("Post Scheduled Successfully!");
    console.log(data);

    setContent("");
    setDate("");
    setTime("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Content Scheduler</h1>

      <textarea
        rows="5"
        cols="50"
        placeholder="Write your post..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <br /><br />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <br /><br />

      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />

      <br /><br />

      <button onClick={handleSubmit}>
        Schedule Post
      </button>
    </div>
  );
}

export default App;