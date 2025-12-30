import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_BASE = "http://localhost:3000";

export default function ViewPaste() {
  const { id } = useParams();
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`${API_BASE}/api/pastes/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Not found");
        return res.json();
      })
      .then((data) => setContent(data.content))
      .catch(() => setError("Paste not available"));
  }, [id]);

  if (error) return <h3>{error}</h3>;

  return (
    <pre>{content}</pre>
  );
}
