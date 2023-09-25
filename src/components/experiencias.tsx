"use client";
import { experiencias } from "@/lib/experiencias";
import Experiencia from "./experiencia";
import styles from "@/styles/fieldsets.module.css";
import anime from "animejs/lib/anime.es.js";
import { useRef, useEffect } from "react";
export default function Experiencias() {
  // const animation = useRef(null);
  useEffect(() => {
    anime({
      targets: ".mover",
      // loop: true,
      // translateX: 250,
      rotate: "1turn",
      // backgroundColor: "#FFF",
      duration: 800,
    });
  });

  return (
    <>
      <fieldset className={styles.field_habilidades}>
        <legend className={styles.legend_habilidades}> Experiencia</legend>
        <div className="mover columns is-mobile is-desktop is-multiline px-1">
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
