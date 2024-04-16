import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="alunos" />
      <h2>Alunos</h2>
    </main>
  );
}
