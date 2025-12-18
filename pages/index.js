import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Link from "next/link";

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
      <p>Select a movement pattern to explore regressions and progressions.</p>

      <ul>
        {movements.map((movement, index) => (
          <li key={index}>
            <Link href={`/movements/${index}`}>
              {movement.movement_pattern}
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
