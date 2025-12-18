"use client";
import { useEffect, useMemo, useState } from "react";

export default function Home() {
  const [query, setQuery] = useState("");
  const [movementsData, setMovementsData] = useState(null);

  useEffect(() => {
    fetch("/data/movements.json")
      .then((r) => r.json())
      .then(setMovementsData);
  }, []);

  const filteredMovements = useMemo(() => {
    const list = movementsData?.movement_patterns ?? [];
    return list.filter((m) =>
      m.movement_pattern.toLowerCase().includes(query.toLowerCase())
    );
  }, [movementsData, query]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Movement App</h1>

      <input
        type="text"
        placeholder="Search movements..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: "10px", width: "100%", marginTop: "20px" }}
      />

      <ul style={{ marginTop: "20px" }}>
        {filteredMovements.map((movement) => (
          <li key={movement.movement_pattern} style={{ margin: "10px 0" }}>
            {movement.movement_pattern}
          </li>
        ))}
      </ul>
    </div>
  );
}

  );
}

