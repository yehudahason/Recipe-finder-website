import { Link } from "react-router-dom";
import Footer2 from "./Footer2";

export default function Footer() {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <footer className="footer">
      <div className="footer-con">
        <img
          className="footer-logo"
          src={baseUrl + "/assets/shared/desktop/logo_white.svg"}
          alt="logo"
        />

        <ul className="social-links" aria-label="social links">
          <li>
            <Link to="#" aria-label="facebook">
              <img
                src={baseUrl + "/assets/shared/desktop/facebook.svg"}
                alt="facebook"
              />
            </Link>
          </li>
          <li>
            <Link to="#" aria-label="twitter">
              <img
                src={baseUrl + "/assets/shared/desktop/twitter.svg"}
                alt="twitter"
              />
            </Link>
          </li>
          <li>
            <Link to="#" aria-label="pinterest">
              <img
                src={baseUrl + "/assets/shared/desktop/pinterest.svg"}
                alt="pinterest"
              />
            </Link>
          </li>
          <li>
            <Link to="#" aria-label="instagram">
              <img
                src={baseUrl + "/assets/shared/desktop/instagram.svg"}
                alt="instagram"
              />
            </Link>
          </li>
          <li>
            <Link to="#" aria-label="youtube">
              <img
                src={baseUrl + "/assets/shared/desktop/youtube.svg"}
                alt="youtube"
              />
            </Link>
          </li>
        </ul>

        <nav>
          <ul className="footer-nav-list" aria-label="footer navigation">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/stories">Stories</Link>
            </li>
            <li>
              <Link to="/features">Features</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
          </ul>
        </nav>

        <Link to="#" className="footer-invite-btn">
          GET AN INVITE
          <img
            src={baseUrl + "/assets/shared/desktop/arrow.svg"}
            alt="arrow"
            className="arrow"
          />
        </Link>

        <p className="copyright">Copyright 2019. All Rights Reserved</p>
      </div>
      <Footer2 />
    </footer>
  );
}
