import { useEffect, useState } from "react";
import Layout from "../components/Layout";

export default function Home() {
  const [movements, setMovements] = useState([]);

  useEffect(() => {
    fetch("/data/movements.json")
      .then((res) => res.json())
      .then((data) => {
        setMovements(data.movement_patterns);
      });
  }, []);

  return (
    <Layout>
      <h1>Movement App</h1>

      {movements.length === 0 && <p>Loading movements...</p>}

      <ul>
        {movements.map((m) => (
          <li key={m.movement_pattern}>
            {m.movement_pattern}
          </li>
        ))}
      </ul>
    </Layout>
  );
}
