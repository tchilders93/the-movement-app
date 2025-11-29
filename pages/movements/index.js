import movementsData from "../../public/data/movements.json";

export default function MovementsIndex() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>All Movement Patterns</h1>

      <ul>
        {movementsData.movement_patterns.map((movement) => (
          <li key={movement.movement_pattern}>
            <a
              href={`/movements/${encodeURIComponent(
                movement.movement_pattern
              )}`}
            >
              {movement.movement_pattern}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
