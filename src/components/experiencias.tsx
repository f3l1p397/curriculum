import { experiencias } from "@/lib/experiencias";
import styles from "@/styles/experiencias.module.css";
import Experiencia from "./experiencia";

export default function Experiencias() {
  return (
    <div className="columns is-mobile is-desktop is-multiline is-vcentered is-centered px-3">
      <h1 className="subtitle is-1">Mi Experiencia</h1>
      <section className="column is-12-desktop is-12-mobile ">
        <div className="columns is-multiline is-centered is-vcentered">
          {experiencias.map(
            ({ id, empresa, cargo, inicio, fin, actividades }) => {
              return (
                <Experiencia
                  key={id}
                  data={{ empresa, cargo, inicio, fin, actividades }}
                />
              );
            }
          )}
        </div>
      </section>
    </div>
  );
}
