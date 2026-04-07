import fishImage from "~/images/fish.png";

type Item = {
  id: string;
  title: string;
  description: string;
  color: string;
};

const items: Item[] = [
  {
    id: "01",
    title: "Сфотографуйте тарілку",
    description:
      "Наведіть камеру на страву, додаток одразу розпізнає її та покаже калорії й макроелементи. Не потрібно нічого шукати або вводити вручну. Сфотографуйте — це вже початок.",
    color: "bg-purple-500",
  },
  {
    id: "02",
    title: "Скажіть вголос",
    description:
      "Просто скажіть “борщ 300 грамів”, і додаток зрозуміє вас українською та зафіксує прийом їжі. Зручно вранці, зручно на ходу, зручно, коли руки зайняті.",
    color: "bg-red-500",
  },
  {
    id: "03",
    title: "Відскануйте штрихкод",
    description:
      "Стоїте в магазині біля полиці? Скануйте упаковку і одразу бачите повний склад продукту. Вибір стає простішим і свідомішим.",
    color: "bg-green-500",
  },
  {
    id: "04",
    title: "Введіть самостійно",
    description:
      "Якщо вам зручніше шукати вручну, є зрозумілий пошук у базі з понад 50 000 українських страв. Усе, до чого ви звикли: борщ, деруни, шаурма, бабусина запіканка.",
    color: "bg-yellow-500",
  },
];

export default function FoodTrackingSection() {
  return (
    <section className="px-6 mt-50 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-5xl">
            Додавайте їжу так,
            <br /> як вам зручно
          </h2>

          <p className="text-gray-400">
            Гнучкі способи фіксації вашого харчування
          </p>
        </div>
        <div className="grid items-center gap-20 grid-cols-[574fr_466fr]">
          <img src={fishImage} alt="Food" className="h-full w-full" />

          <div className="space-y-10">
            {items.map((item) => (
              <div key={item.id} className="flex gap-4 flex-col">
                <div
                  className={`h-fit rounded-full px-3 py-1 max-w-9.5 text-sm font-semibold text-white ${item.color}`}
                >
                  {item.id}
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>

                  <p className="text-sm leading-6 text-gray-400">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
