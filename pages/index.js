import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Link from "next/link";

export default function Home() {
  const [movements, setMovements] = useState([]);

  useEffect(() => {
    fetch("public/data/movements.json")
      .then((res) => res.json())
      .then((data) => {
        setMovements(data.movement_patterns);
      });
  }, []);

  return (
    <Layout>
      <h1>Movement App</h1>
      <p>Select a movement pattern:</p>

      <ul>
        {movements.map((movement) => (
          <li key={movement.movement_pattern}>
            <Link href={`/movements/${encodeURIComponent(movement.movement_pattern)}`}>
              {movement.movement_pattern}
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

