import { useState } from "react";

const articles = [
  {
    author: "Kelsey Green",
    readTime: "4,5 хв на читання",
    title: "Як ультраперероблені продукти впливають на схуднення",
    description:
      "Чому ультраперероблені продукти можуть ускладнювати підтримання дефіциту калорій і втрату ваги.",
    avatarClassName: "bg-red-600",
  },
  {
    author: "Kelsey Green",
    readTime: "4,5 хв на читання",
    title: "Як ультраперероблені продукти впливають на схуднення",
    description:
      "Чому ультраперероблені продукти можуть ускладнювати підтримання дефіциту калорій і втрату ваги.",
    avatarClassName: "bg-red-600",
  },
  {
    author: "Kelsey Green",
    readTime: "4,5 хв на читання",
    title: "Як ультраперероблені продукти впливають на схуднення",
    description:
      "Чому ультраперероблені продукти можуть ускладнювати підтримання дефіциту калорій і втрату ваги.",
    avatarClassName: "bg-red-600",
  },
  {
    author: "Kelsey Green",
    readTime: "4,5 хв на читання",
    title: "Як ультраперероблені продукти впливають на схуднення",
    description:
      "Чому ультраперероблені продукти можуть ускладнювати підтримання дефіциту калорій і втрату ваги.",
    avatarClassName: "bg-red-600",
  },
];

export default function HealthKnowledgeSection() {
  const [activeArticle, setActiveArticle] = useState(0);
  const currentArticle = articles[activeArticle];

  return (
    <section className="w-full py-[64px]">
      <div className="mx-auto grid max-w-7xl items-center gap-10  lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <div className="max-w-[500px]">
          <h2 className="text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-[36px] lg:text-6xl">
            Підживлюй своє
            <br />
            здоров’я
            <br />
            знаннями
          </h2>

          <p className="mt-6 max-w-md text-base leading-7 text-white/70 sm:text-lg">
            Ознайомся з практичними порадами, порадами з харчування та
            підтримкою фахівців для схуднення.
          </p>

          <div className="mt-8">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5"
            >
              Переглянути все
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="w-full max-w-[440px] rounded-[24px] bg-white px-7 py-8 shadow-[0_20px_80px_rgba(0,0,0,0.25)] sm:px-8 sm:py-9">
            <div className="flex items-start gap-4">
              <div
                className={`h-10 w-10 shrink-0 rounded-full ${currentArticle.avatarClassName}`}
              />
              <div>
                <p className="text-sm font-semibold text-neutral-900">
                  {currentArticle.author}
                </p>
                <p className="mt-1 text-sm text-neutral-400">
                  {currentArticle.readTime}
                </p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="max-w-[320px] text-2xl font-semibold leading-tight text-neutral-900">
                {currentArticle.title}
              </h3>

              <p className="mt-5 max-w-[340px] text-sm leading-6 text-neutral-600">
                {currentArticle.description}
              </p>
            </div>

            <div className="mt-8 flex items-center gap-3">
              {articles.map((article, index) => (
                <button
                  key={article.title}
                  type="button"
                  aria-label={`Показати картку ${index + 1}`}
                  aria-pressed={activeArticle === index}
                  onClick={() => setActiveArticle(index)}
                  className={`h-2 w-2 rounded-full transition ${
                    activeArticle === index
                      ? "bg-red-600"
                      : "border border-neutral-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
