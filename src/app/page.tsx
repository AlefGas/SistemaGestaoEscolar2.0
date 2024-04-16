import NavBar from "@/components/NavBar"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="home" />
      <h2>home</h2>
    </main>
  );
}
