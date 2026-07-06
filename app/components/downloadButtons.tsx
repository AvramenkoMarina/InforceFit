import apple from "~/images/Apple.svg";
import playstore from "~/images/Google.svg";

export const APP_STORE_URL =
  "https://apps.apple.com/ua/app/inforcefit/id6761707875";
export const GOOGLE_PLAY_URL =
  "https://play.google.com/store/apps/details?id=digital.inforce.inforcefit&hl=uk";

interface DownloadButtonsProps {
  justifyCenter?: boolean;
}

export default function DownloadButtons({
  justifyCenter = false,
}: DownloadButtonsProps) {
  return (
    <div
      className="w-full h-19 gap-2 flex mt-8 text-white"
      style={{ justifyContent: justifyCenter ? "center" : "flex-start" }}
    >
      <div>
        <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
          <img src={apple} alt="Download on the App Store" />
        </a>
      </div>
      <div>
        <a href={GOOGLE_PLAY_URL} target="_blank" rel="noopener noreferrer">
          <img src={playstore} alt="Get it on Google Play" />
        </a>
      </div>
    </div>
  );
}
