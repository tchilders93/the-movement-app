import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import Link from "next/link";

export default function MovementsIndex() {
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
      <h1>All Movement Patterns</h1>

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
