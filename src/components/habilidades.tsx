import styles from "@/styles/fieldsets.module.css";
import { habilidades } from "@/lib/habilidades";
import clsx from "clsx";
export default function Habilidades() {
  return (
    <aside>
      <fieldset className={styles.field_habilidades}>
        <legend className={styles.legend_habilidades}>Habilidades</legend>
        <ul>
          {habilidades.map(({ id, habilidad, list }) => {
            return (
              <li className={styles.item} key={id}>
                <h3 className={styles.titleHabilidad}>{habilidad}&bull; </h3>
                <p className={clsx(styles.habilidades)}>{list}</p>
              </li>
            );
          })}
        </ul>
      </fieldset>
    </aside>
  );
}
