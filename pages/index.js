import Link from "next/link";
import movementsData from "../public/data/movements.json";

export default function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Movement App</h1>
      <p>Select a movement pattern:</p>

      <ul>
        {movementsData.movement_patterns.map((movement, index) => (
          <li key={index}>
            <Link href={`/movements/${index}`}>
              {movement.movement_pattern}
            </Link>
          </li>
        ))}
      </ul>

      <br />
      <Link href="/movements">
        <button>View All Movements</button>
      </Link>
    </div>
  );
}

