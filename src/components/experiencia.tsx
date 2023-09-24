import styles from "@/styles/experiencia.module.css";
import clsx from "clsx";

export default function Experiencia({ data }: any) {
  return (
    <div className={clsx(styles.contentList, "column is-full")}>
      <span className={styles.empresa}>{data.empresa} - </span>
      <span className={styles.cargo}>{data.cargo}</span>
      <span>
        {" "}
        ({data.inicio} - {data.fin})
      </span>
      <ul>
        {data.actividades.map((actividad: string, index: number) => {
          return (
            <li type="disc" className={styles.actividad} key={index}>
              {actividad}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
