import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <main className=" ">
      <section>
        <h1 className="font-bold text-5xl">Hello world</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores,
          minus.
        </p>
      </section>
    </main>
  );
}
