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
    title: "Вкажіть свою мету",
    description:
      "Ваші персональні дані допоможуть додатку коректно розрахувати персональний план",
  },
  {
    id: "II",
    icon: <span className="text-4xl">📱</span>,
    title: "Фіксуйте, що споживаєте",
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
    <div className="relative flex flex-col items-center text-center">
      {showConnector && (
        <div className="absolute left-[calc(50%+52px)] top-8 hidden w-[calc(100%-104px)] items-center md:flex">
          <span className="h-2.5 w-2.5 rounded-full border border-white/60 bg-[#111418]" />
          <div className="h-px w-full bg-[repeating-linear-gradient(to_right,grey_0px,grey_6px,transparent_6px,transparent_16px)]"></div>
          <span className="h-2.5 w-2.5 rounded-full border border-white/60 bg-[#111418]" />
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
    <section className="mt-50 px-6 text-white md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-4xl font-bold md:text-5xl">Як це працює?</h2>
          <p className="text-base text-[#D8D8D8] mt-4">
            Досягайте результату в кілька простих кроків
          </p>
        </div>

        <div className="grid gap-14 md:grid-cols-3 md:gap-10 mt-20">
          {steps.map((step, index) => (
            <StepCard
              key={step.id}
              {...step}
              showConnector={index < steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
