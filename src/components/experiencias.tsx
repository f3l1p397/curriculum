"use client";
import { experiencias } from "@/lib/experiencias";
import Experiencia from "./experiencia";
import styles from "@/styles/fieldsets.module.css";
import anime from "animejs/lib/anime.es.js";
import clsx from "clsx";

export default function Experiencias() {
  return (
    <>
      <fieldset className={styles.field_habilidades}>
        <legend className={styles.legend_habilidades}> Experiencia</legend>
        <div
          className={clsx(
            styles.contenedor_experiencias,
            "mover columns is-mobile is-desktop is-multiline px-1"
          )}
        >
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
      </fieldset>
    </>
  );
}
