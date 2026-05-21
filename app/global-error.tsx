"use client";

export default function GlobalError({ reset }: { error: Error; reset: () => void }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1.5rem",
          padding: "2rem",
          textAlign: "center",
          backgroundColor: "#100a14",
          color: "#f3eef6",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <h1 style={{ fontSize: "1.75rem", fontWeight: 300, letterSpacing: "0.08em" }}>
          Something went wrong
        </h1>
        <p style={{ maxWidth: "28rem", fontSize: "0.9rem", color: "#b9a9c6", lineHeight: 1.6 }}>
          Sorry about that. Please try again, or reach Adora directly on
          Instagram @adora.lashesandbrows.
        </p>
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", justifyContent: "center" }}>
          <button
            onClick={() => reset()}
            style={{
              cursor: "pointer",
              borderRadius: "9999px",
              border: "none",
              padding: "0.65rem 1.75rem",
              backgroundColor: "#9a5cff",
              color: "#ffffff",
              fontSize: "0.9rem",
            }}
          >
            Try Again
          </button>
          <a
            href="/"
            style={{
              borderRadius: "9999px",
              border: "1px solid rgba(154,92,255,0.5)",
              padding: "0.65rem 1.75rem",
              color: "#f3eef6",
              fontSize: "0.9rem",
              textDecoration: "none",
            }}
          >
            Back to Home
          </a>
        </div>
      </body>
    </html>
  );
}
