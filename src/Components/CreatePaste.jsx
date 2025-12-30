import { useState } from "react";

const API_BASE = "http://localhost:3000";

export default function CreatePaste() {
  const [content, setContent] = useState("");
  const [ttl, setTtl] = useState("");
  const [maxViews, setMaxViews] = useState("");
  const [link, setLink] = useState("");

  const submit = async () => {
    const res = await fetch(`${API_BASE}/api/pastes`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content,
        ttl_seconds: ttl ? Number(ttl) : undefined,
        max_views: maxViews ? Number(maxViews) : undefined
      })
    });

    const data = await res.json();
    setLink(data.url);
  };

  return (
    <div>
      <h2>Create Paste</h2>

      <textarea
        rows="6"
        placeholder="Paste text here..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <br />

      <input
        placeholder="TTL (seconds)"
        value={ttl}
        onChange={(e) => setTtl(e.target.value)}
      />

      <br />

      <input
        placeholder="Max views"
        value={maxViews}
        onChange={(e) => setMaxViews(e.target.value)}
      />

      <br />

      <button onClick={submit}>Create</button>

      {link && (
        <p>
          Share link: <a href={link}>{link}</a>
        </p>
      )}
    </div>
  );
}
