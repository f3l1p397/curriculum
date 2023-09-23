import styles from "@/styles/experiencias.module.css";

export default function Experiencia({ data }: any) {
  return (
    <div className="column is-4">
      <h3 className="title is-3">{data.empresa}</h3>
      <h4 className="subtitle is-4">{data.cargo}</h4>
      <h6 className="subtitle is-6">
        {data.inicio} - {data.fin}
      </h6>
      <ol>
        {data.actividades.map((actividad: string, index: number) => {
          return (
            <li className={styles.actividad} key={index}>
              {actividad}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
