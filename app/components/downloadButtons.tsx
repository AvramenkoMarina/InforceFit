import { Link } from "react-router";
import apple from "~/images/Apple.svg";
import playstore from "~/images/Google.svg";
export default function DownloadButtons() {
  return (
    <div className="w-full h-19 gap-2 flex mt-8 text-white ">
      <div>
        <Link to="#">
          <img src={apple} alt="Download on the App Store" />
        </Link>
      </div>
      <div>
        <Link to="#">
          <img src={playstore} alt="Get it on Google Play" />
        </Link>
      </div>
    </div>
  );
}
