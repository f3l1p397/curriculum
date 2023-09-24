import Inicio from "@/components/inicio";
import Experiencias from "@/components/experiencias";
import Habilidades from "@/components/habilidades";

export default function Home() {
  return (
    <>
      <Inicio />
      <div className="tile is-ancestor px-6">
        <div className="tile is-child is-9 ">
          <Experiencias />
        </div>
        <div className="tile is-child">
          <Habilidades />
        </div>
      </div>
    </>
  );
}
