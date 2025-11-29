import path from "path";
import fs from "fs";

export async function getStaticPaths() {
  const filePath = path.join(process.cwd(), "public/data/movements.json");
  const movements = JSON.parse(fs.readFileSync(filePath, "utf8"));

  const paths = movements.map((m) => ({
    params: { id: m.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), "public/data/movements.json");
  const movements = JSON.parse(fs.readFileSync(filePath, "utf8"));

  const movement = movements.find((m) => m.id.toString() === params.id);

  return { props: { movement } };
}
