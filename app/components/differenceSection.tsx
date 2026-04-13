interface DifferenceSectionProps {
  backgroundImage: string;
  mobileBackgroundImage?: string;
  mobileImageLeft?: boolean;
  mobileImageSizeClass?: string;
  mobilePopupImage?: string;
  mobilePopupClassName?: string;
  textClassName?: string;
  tagBg: string;
  textRight?: boolean;
  tagText: string;
  title: React.ReactNode;
  secondaryTitle: string;
  text: React.ReactNode;
}

const DifferenceSection = ({
  backgroundImage,
  mobileBackgroundImage,
  mobileImageLeft,
  mobileImageSizeClass,
  mobilePopupImage,
  mobilePopupClassName,
  textClassName,
  tagBg,
  textRight,
  tagText,
  title,
  secondaryTitle,
  text,
}: DifferenceSectionProps) => {
  return (
    <div className="relative w-full min-h-[490px] md:h-[490px] rounded-2xl mt-10 md:mt-20 pt-10 pb-10 px-6 md:pt-25 md:px-20 flex flex-col overflow-hidden bg-[#EAEAEA] md:bg-transparent">
      <img
        src={backgroundImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 hidden h-full w-full object-cover md:block"
      />

      <img
        src={mobileBackgroundImage ?? backgroundImage}
        alt=""
        aria-hidden="true"
        className={`absolute md:hidden ${
          mobileBackgroundImage
            ? `inset-auto -bottom-13 ${mobileImageSizeClass ?? "w-[250px] h-[250px]"} object-contain ${
                mobileImageLeft ? "left-0" : "right-0"
              }`
            : "inset-0 h-full w-full object-cover object-bottom"
        }`}
      />

      {mobilePopupImage && (
        <img
          src={mobilePopupImage}
          alt=""
          aria-hidden="true"
          className={`absolute z-[5] md:hidden ${
            mobilePopupClassName ?? "left-4 bottom-4 w-[170px] h-auto"
          }`}
        />
      )}

      <div
        className={`relative z-10 text-black max-w-full md:max-w-[550px] ${
          textRight ? "md:ml-auto md:text-right" : "md:text-left"
        } text-left`} // На мобілці завжди вліво для читабельності, на десктопі — згідно пропсу
      >
        <span
          style={{ backgroundColor: tagBg }}
          className="text-white tracking-widest px-3 py-1.5 font-heading text-[10px] md:text-[12px] font-bold rounded-sm inline-block"
        >
          {tagText}
        </span>

        <h3 className="text-[24px] md:text-[40px] font-bold tracking-tight leading-tight md:leading-10.5 mt-[20px] md:mt-10">
          {title}
        </h3>

        <p className="text-[16px] md:text-lg font-semibold font-heading leading-snug md:leading-6 mt-[12px]">
          {secondaryTitle}
        </p>

        <p
          className={`mt-[20px] text-[14px] leading-5 md:max-w-[480px] inline-block ${
            textClassName ?? ""
          }`}
        >
          {text}
        </p>
      </div>
    </div>
  );
};

export default DifferenceSection;
