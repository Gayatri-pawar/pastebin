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
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow p-4" style={{ maxWidth: "500px", width: "100%" }}>
        <h2 className="card-title text-center mb-4">Create Paste</h2>

        <div className="mb-3">
          <textarea
            className="form-control"
            rows="6"
            placeholder="Paste text here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <input
            type="number"
            className="form-control"
            placeholder="TTL (seconds)"
            value={ttl}
            onChange={(e) => setTtl(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <input
            type="number"
            className="form-control"
            placeholder="Max views"
            value={maxViews}
            onChange={(e) => setMaxViews(e.target.value)}
          />
        </div>

        <div className="d-grid">
          <button className="btn btn-primary" onClick={submit}>
            Create
          </button>
        </div>

        {link && (
          <p className="mt-3 text-center">
            Share link: <a href={link}>{link}</a>
          </p>
        )}
      </div>
    </div>
  );
}
