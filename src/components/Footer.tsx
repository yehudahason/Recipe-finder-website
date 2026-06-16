import Footer2 from "./Footer2";
import { Link } from "react-router-dom";

export default function Footer() {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <footer className="footer flex flex-col items-center justify-center max-w-360 mx-auto mt-8">
      <div
        className="flex w-full
      sm:flex-row 
      flex-col
      gap-6
      items-center justify-between max-w-300 
        lg:px-0
        px-8"
      >
        <span
          className="flex items-center  justify-center text-preset-9
        text-green-950"
        >
          Made with &nbsp; ❤️ and &nbsp; 🥑
        </span>
        <span className="flex items-center justify-center gap-4">
          <Link to="#">
            <img src={baseUrl + "/assets/images/icon-instagram.svg"} alt="" />
          </Link>
          <Link to="#">
            <img src={baseUrl + "/assets/images/icon-tiktok.svg"} alt="" />
          </Link>

          <Link to="#">
            <img src={baseUrl + "/assets/images/icon-bluesky.svg"} alt="" />
          </Link>
        </span>
      </div>
      <Footer2 />
    </footer>
  );
}
