import Link from "next/link";
import movementsData from "../../public/data/movements.json";

export default function MovementsIndex() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>All Movement Patterns</h1>
      <p>Choose a movement to view regressions & progressions:</p>

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
      <Link href="/">
        <button>Back to Home</button>
      </Link>
    </div>
  );
}

