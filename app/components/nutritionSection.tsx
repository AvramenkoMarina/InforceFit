import handIphone from "~/images/handIphoneCropped.png";

export default function NutritionSection() {
  return (
    <section className="flex gap-25 mt-37">
      <div className="max-w-125 flex flex-col  justify-center">
        <p className="mb-4 text-[16px] font-bold ">ЛЕГКО</p>

        <h2 className="mb-6 text-5xl font-bold leading-tight  md:text-5xl">
          Стежте за раціоном
        </h2>

        <p className="mb-8 text-gray-400 text-[18px]">
          Сфотографуйте страву, скажіть вголос або відскануйте штрих-код, а
          додаток зробить все решту.
        </p>

        <button className="w-[133px] rounded-full bg-red-600 px-[14px] py-3 font-bold text-[14px] transition hover:bg-red-700">
          Завантажити
        </button>
      </div>

      <div className="h-[420px] w-[540px]">
        <img
          src={handIphone}
          alt="Nutrition tracking app"
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  );
}
