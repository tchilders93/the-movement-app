import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import movements from "../../public/data/movements.json";

export default function MovementPage() {
  const router = useRouter();
  const { id } = router.query;

  const movement = movements.find((m) => m.id === id);

  if (!movement) return <Layout>Loading...</Layout>;

  return (
    <Layout>
      <h1>{movement.name}</h1>
      <p><strong>Pattern:</strong> {movement.pattern}</p>

      <h2>Regressions</h2>
      <ul>
        {movement.regressions.map((r, i) => <li key={i}>{r}</li>)}
      </ul>

      <h2>Progressions</h2>
      <ul>
        {movement.progressions.map((p, i) => <li key={i}>{p}</li>)}
      </ul>

      <h2>Coaching Cues</h2>
      <ul>
        {movement.coaching.map((c, i) => <li key={i}>{c}</li>)}
      </ul>

      <h2>Population Notes</h2>
      <ul>
        {movement.population_notes.map((n, i) => <li key={i}>{n}</li>)}
      </ul>
    </Layout>
  );
}