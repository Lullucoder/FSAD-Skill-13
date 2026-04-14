import { useMemo, useState } from "react";

function normalizeBaseUrl(url) {
  if (!url) return "";
  return url.endsWith("/") ? url.slice(0, -1) : url;
}

export default function App() {
  const appTitle = import.meta.env.VITE_APP_TITLE || "Full Stack Application";
  const apiBaseUrl = useMemo(
    () => normalizeBaseUrl(import.meta.env.VITE_API_BASE_URL || ""),
    []
  );
  const [apiMessage, setApiMessage] = useState("" );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleTest = async () => {
    setLoading(true);
    setError("");
    setApiMessage("");

    try {
      const response = await fetch(`${apiBaseUrl}/api/deployment/status`);
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }
      const data = await response.json();
      setApiMessage(data.message || "App is working successfully!");
      alert("App is working successfully!");
    } catch (err) {
      setError(err.message || "Unable to connect to backend.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="page">
      <section className="content">
        <h1>🚀 {appTitle}</h1>
        <h2>React + Spring Boot Deployment</h2>

        <p className="status-lines">
          ✅ Frontend deployed successfully
          <br />
          ✅ Backend running on Spring Boot
          <br />
          ✅ Application integrated and working
        </p>

        <button type="button" onClick={handleTest} disabled={loading}>
          {loading ? "Checking..." : "Test Button"}
        </button>

        {apiMessage ? <p className="api-message">{apiMessage}</p> : null}
        {error ? <p className="error-message">{error}</p> : null}
      </section>
    </main>
  );
}
