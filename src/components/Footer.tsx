import Footer2 from "./Footer2";

export default function Footer() {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <footer className="footer flex flex-col items-center justify-center max-w-360 mx-auto">
      <div
        className="flex w-full
      sm:flex-row 
      flex-col
      gap-6
      items-center justify-between max-w-300"
      >
        <span
          className="flex items-center  justify-center text-preset-9
        text-green-950"
        >
          Made with &nbsp; ❤️ and &nbsp; 🥑
        </span>
        <span className="flex items-center justify-center gap-4">
          <img src={baseUrl + "/assets/images/icon-instagram.svg"} alt="" />
          <img src={baseUrl + "/assets/images/icon-tiktok.svg"} alt="" />
          <img src={baseUrl + "/assets/images/icon-bluesky.svg"} alt="" />
        </span>
      </div>
      <Footer2 />
    </footer>
  );
}
