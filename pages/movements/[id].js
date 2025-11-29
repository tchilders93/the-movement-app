import data from '../../movements.json';

export async function getStaticPaths() {
  const paths = data.movement_patterns.map((m) => ({
    params: { id: m.movement_pattern }
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const movement = data.movement_patterns.find(
    (m) => m.movement_pattern === params.id
  );

  return { props: { movement } };
}

export default function MovementPage({ movement }) {
  return (
    <div>
      <h1>{movement.movement_pattern}</h1>
      <pre>{JSON.stringify(movement, null, 2)}</pre>
    </div>
  );
}
