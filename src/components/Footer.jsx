import "../../public/css/footer.css";
export default function Footer(props) {
  return (
    <footer>
      <div className="footer-logo">Your Logo</div>
      <ul className="footer-links">
        <li>
          <a href="#">Privacy Policy</a>
        </li>
        <li>
          <a href="#">Terms of Service</a>
        </li>
      </ul>
    </footer>
  );
}
