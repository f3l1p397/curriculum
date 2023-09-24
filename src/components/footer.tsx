import styles from "@/styles/footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.is_footer}>
      <div className="content has-text-centered">
        <p>
          <strong>Make by</strong>
          <a href="https://www.linkedin.com/in/felipe-hidalgo97">
            Felipe Hidalgo
          </a>
        </p>
      </div>
    </footer>
  );
}
