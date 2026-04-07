interface DifferenceSectionProps {
  backgroundImage: string;
  tagBg: string;
  textRight?: boolean;
  tagText: string;
  title: React.ReactNode;
  secondaryTitle: string;
  text: React.ReactNode;
}

const DifferenceSection = ({
  backgroundImage,
  tagBg,
  textRight,
  tagText,
  title,
  secondaryTitle,
  text,
}: DifferenceSectionProps) => {
  return (
    <div
      className="w-full h-122.5 rounded-2xl bg-cover bg-center mt-20 pt-25 px-20"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div
        className="text-black"
        style={{
          marginLeft: textRight ? "auto" : "",
          textAlign: textRight ? "right" : "left",
        }}
      >
        <span
          style={{ backgroundColor: tagBg }}
          className="text-white tracking-widest px-3 py-1.5 font-heading text-[12px] font-bold rounded-sm"
        >
          {tagText}
        </span>
        <h3 className="text-[40px] font-bold tracking-tight leading-10.5 mt-10">
          {title}
        </h3>
        <p className="text-lg font-semibold font-heading leading-6 mt-3">
          {secondaryTitle}
        </p>
        <p className="mt-8 text-[14px] leading-5">{text}</p>
      </div>
    </div>
  );
};

export default DifferenceSection;
