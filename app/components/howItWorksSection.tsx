type Step = {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    id: "I",
    icon: <span className="text-4xl">🎯</span>,
    title: "Вкажіть мету",
    description:
      "Ваші персональні дані допоможуть додатку коректно розрахувати персональний план",
  },
  {
    id: "II",
    icon: <span className="text-4xl">📱</span>,
    title: "Фіксуйте спожите",
    description:
      "Оберіть зручний для вас спосіб додавання їжі - фото, голос або штрихкод",
  },
  {
    id: "III",
    icon: <span className="text-4xl">📈</span>,
    title: "Відслідковуйте прогрес",
    description:
      "Стежте щодня за рівнем споживання калорій та досягнення вашої мети",
  },
];

function StepCard({
  id,
  icon,
  title,
  description,
  showConnector,
}: Step & { showConnector?: boolean }) {
  return (
    <div className="relative mx-auto flex max-w-[280px] flex-col items-center text-center lg:max-w-none">
      {showConnector && (
        <div className="pointer-events-none absolute hidden items-center lg:flex lg:left-[calc(50%+102px)] lg:w-[calc(100%-164px)] lg:top-9">
          <span className="h-4 w-4 shrink-0 rounded-full border-2 border-white/40" />
          <div className="h-px w-full bg-[repeating-linear-gradient(to_right,rgba(255,255,255,0.4)_0px,rgba(255,255,255,0.4)_6px,transparent_6px,transparent_14px)]" />
          <span className="h-4 w-4 shrink-0 rounded-full border-2 border-white/40" />
        </div>
      )}

      <div className="mb-10 flex h-18 w-18 items-center justify-center rounded-3xl bg-white text-black shadow-lg">
        {icon}
      </div>

      <div className="mb-4 text-2xl text-white/85">{id}</div>

      <h3 className="mb-3 text-2xl font-semibold text-white">{title}</h3>

      <p className="max-w-[280px] text-sm leading-7 text-[#D8D8D8]">
        {description}
      </p>
    </div>
  );
}

export default function HowItWorksSection() {
  return (
    <section className="py-[64px] text-white lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-4xl font-bold md:text-5xl">Як це працює?</h2>
          <p className="text-base text-[#D8D8D8] mt-4">
            Досягайте результату в кілька простих кроків
          </p>
        </div>

        <div className="mt-20 flex flex-col gap-10 px-6 lg:grid lg:grid-cols-3 lg:gap-10 lg:px-0">
          {steps.map((step, index) => (
            <div key={step.id} className="w-full lg:w-auto">
              <StepCard {...step} showConnector={index < steps.length - 1} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
