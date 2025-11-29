import { useState, useEffect } from "react";

export default function MovementsPage() {
  const [movements, setMovements] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function loadData() {
      const res = await fetch("/data/movements.json"); // pulling from public/data
      const data = await res.json();
      setMovements(data);
    }
    loadData();
  }, []);

  const filtered = movements.filter((m) =>
    m.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>All Movements</h1>

      <input
        type="text"
        placeholder="Search movements..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px",
          width: "100%",
          maxWidth: "400px",
          marginBottom: "20px",
        }}
      />

      <ul>
        {filtered.map((movement) => (
          <li key={movement.id} style={{ marginBottom: "12px" }}>
            <a
              href={`/movements/${movement.id}`}
              style={{ color: "blue", textDecoration: "underline" }}
            >
              {movement.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
