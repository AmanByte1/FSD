import { useEffect, useState } from "react";

function App() {
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const res = await fetch("http://localhost:5000/posts");
    const data = await res.json();
    setPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleSubmit = async () => {
    await fetch("http://localhost:5000/posts", {
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

    setContent("");
    setDate("");
    setTime("");

    fetchPosts();
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

      <hr />

      <h2>Scheduled Posts</h2>

      {posts.map((post) => (
        <div
          key={post.id}
          style={{
            border: "1px solid gray",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <h3>{post.content}</h3>

          <p>Date: {post.scheduled_date?.split("T")[0]}</p>

          <p>Time: {post.scheduled_time}</p>

          <p>Status: {post.status}</p>
        </div>
      ))}
    </div>
  );
}

export default App;