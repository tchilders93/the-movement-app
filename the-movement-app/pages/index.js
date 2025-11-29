import Layout from "../components/Layout";
import MovementCard from "../components/MovementCard";
import movements from "../public/data/movements.json";

export default function Home() {
  return (
    <Layout>
      <h1 className="title">Movement Library</h1>
      <div className="grid">
        {movements.map((movement) => (
          <MovementCard key={movement.id} movement={movement} />
        ))}
      </div>
    </Layout>
  );
}