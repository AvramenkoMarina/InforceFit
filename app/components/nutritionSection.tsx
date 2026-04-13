import handIphone from "~/images/handIphoneCropped.png";

export default function NutritionSection() {
  return (
    <section className="flex gap-15 md:gap-25 mt-[60px] mb-[60px] md:mt-50 flex-col md:flex-row">
      <div className="max-w-125 flex flex-col justify-center">
        <p className="mb-4 text-[16px] font-bold ">ЛЕГКО</p>

        <h2 className="mb-6 text-[36px] font-bold leading-tight  md:text-[48px]">
          Стежте за раціоном
        </h2>

        <p className="md:mb-8 text-gray-400 text-[18px]">
          Сфотографуйте страву, скажіть вголос або відскануйте штрих-код, а
          додаток зробить все решту.
        </p>

        <button className="hidden md:block w-[133px] rounded-full bg-red-600 px-[14px] py-3 font-bold text-[14px] transition hover:bg-red-700">
          Завантажити
        </button>
      </div>

      <div className="md:h-[420px] md:w-[540px]">
        <img
          src={handIphone}
          alt="Nutrition tracking app"
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  );
}
