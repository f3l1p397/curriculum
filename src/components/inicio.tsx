import Image from "next/image";
import style from "@/styles/inicio.module.css";
import clsx from "clsx";
import picture from "../../public/images/profile.jpg";

export default function Inicio() {
  return (
    <div className="columns is-mobile is-desktop is-multiline is-vcentered is-centered">
      <Image
        className={clsx(
          style.rounded,
          "column is-3-desktop is-half-mobile p-6"
        )}
        src={picture}
        width={300}
        height={300}
        alt="felipe hidalgo"
      />
      <div className="column is-9-desktop is-full-mobile px-6">
        <h1 className={clsx(style.nombre, "title is-1")}>
          Juan Felipe Hidalgo Rodriguez
        </h1>
        <h2 className={clsx("title is-4")}> Ingeniero de Sistemas</h2>
        <p className={style.sobreMi}>
          Soy ingeniero de sistemas, estoy enfocado en explorar nuevas
          posibilidades y desafíos para continuar desarrollándome en mi carrera.
          Estoy abierto a oportunidades que me permitan aplicar mis
          conocimientos, habilidades y experiencias a la vez que me gusta
          aprender nuevas tecnologías y herramientas para implementar, obtener
          su máximo provecho y ofrecer lo mejor de mí en los proyectos que
          participé.
        </p>
      </div>
    </div>
  );
}
