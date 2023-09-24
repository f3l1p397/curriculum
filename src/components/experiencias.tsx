import { experiencias } from "@/lib/experiencias";
import Experiencia from "./experiencia";
import styles from "@/styles/fieldsets.module.css";
export default function Experiencias() {
  return (
    <>
      <fieldset className={styles.field_habilidades}>
        <legend className={styles.legend_habilidades}> Experiencia</legend>
        <div className="columns is-mobile is-desktop is-multiline  px-3">
          {experiencias.map(
            ({ id, empresa, cargo, inicio, fin, actividades }) => {
              return (
                <Experiencia
                  className="column is-12"
                  key={id}
                  data={{ empresa, cargo, inicio, fin, actividades }}
                />
              );
            }
          )}
        </div>
      </fieldset>
    </>
  );
}
