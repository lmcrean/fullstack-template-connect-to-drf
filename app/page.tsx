import { useEffect, useState } from "react";

type Post = {
  id: number;
  title: string;
  content: string;
};

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    // Fetch data from DRF API
    fetch("https://my-drf-app.onrender.com/api/posts/")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);

  return (
    <main>
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
