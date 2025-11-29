export default function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Movement App</h1>
      <p>Welcome! Use the link below to explore all movements.</p>

      <a href="/movements" style={{ color: "blue", textDecoration: "underline" }}>
        Go to Movements
      </a>
    </div>
  );
}
