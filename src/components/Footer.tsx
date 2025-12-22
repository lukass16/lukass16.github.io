export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          © {currentYear} Lukass Kellijs. This work is licensed under{" "}
          <a
            href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            CC BY NC SA 4.0
          </a>
        </p>
      </div>
    </footer>
  );
}

