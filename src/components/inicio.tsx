import Image from "next/image";
import style from "@/styles/inicio.module.css";
import clsx from "clsx";
import picture from "../../public/images/profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Inicio() {
  return (
    <div className="columns is-mobile is-desktop is-multiline is-vcentered is-centered mt-3 mx-3">
      <Image
        className={clsx(style.rounded, "column is-2-desktop is-3-mobile")}
        width={100}
        height={100}
        src={picture}
        alt="felipe hidalgo"
      />
      <div className="column is-4-desktop is-9-mobile">
        <h1
          className={clsx(
            style.nombre,
            "title is-3 is-size-3-desktop is-size-4-mobile"
          )}
        >
          Juan Felipe Hidalgo Rodriguez
        </h1>
        <h2 className={clsx(style.carrera, "title is-4")}>
          Ingeniero de Sistemas
        </h2>
        <a href="https://github.com/f3l1p397" target="_blank">
          <FontAwesomeIcon
            icon={faGithub}
            bounce
            style={{ color: "#000000" }}
            size="3x"
          />
        </a>
      </div>
      <div className="column is-10-desktop is-11-mobile">
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
