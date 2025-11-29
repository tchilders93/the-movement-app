import Link from "next/link";

export default function MovementCard({ movement }) {
  return (
    <Link href={`/movements/${movement.id}`}>
      <div className="card">
        <h3>{movement.name}</h3>
        <p>{movement.pattern}</p>
      </div>
    </Link>
  );
}