import { Hero } from "~/components/hero";
import type { Route } from "./+types/home";
import NutritionSection from "~/components/nutritionSection";
import DifferencesTitle from "~/components/differencesTitle";
import DifferenceSection from "~/components/differenceSection";
import difference1 from "~/images/difference1.png";
import grechka from "~/images/grechka.png";
import borshch from "~/images/borshch.png";
import ovochyGrill from "~/images/ovochyGrill.png";
import app from "~/images/app.png";
import HowItWorksSection from "~/components/howItWorksSection";
import FoodTrackingSection from "~/components/add";
import HealthKnowledgeSection from "~/components/healthKnowledgeSection";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="max-w-360 mx-auto px-37.5">
        <NutritionSection />
        <DifferencesTitle />
        <DifferenceSection
          tagBg="#828C13"
          tagText="УКРАЇНСЬКА КУХНЯ"
          backgroundImage={difference1}
          title={
            <>
              Найбільша база<br></br>українських страв
            </>
          }
          secondaryTitle="Нарешті — додаток, що знає нашу їжу"
          text={
            <>
              Міжнародні додатки просто не знають, що таке голубці та банош.
              <br></br> Ми знаємо та маємо 50 000+ позицій з перевіреними даними
              про<br></br> калорійність
            </>
          }
        />
        <DifferenceSection
          tagBg="#0E388E"
          tagText="АНАЛІТИКА"
          backgroundImage={grechka}
          title={
            <>
              Усі нутрієнти під<br></br>контролем
            </>
          }
          secondaryTitle="Баланс нутрієнтів щодня"
          text={
            <>
              Стежте за вітамінами, мінералами, клітковиною та
              <br></br> мікроелементами. Детальний розбір кожної страви
              допомагає<br></br> харчуватися збалансовано і розуміти, чого
              справді не вистачає.
            </>
          }
          textRight
        />
        <DifferenceSection
          tagBg="#FAB95B"
          tagText="МОВА"
          backgroundImage={borshch}
          title={<>Все рідною мовою</>}
          secondaryTitle="Харчування без мовного бар’єру"
          text={
            <>
              Українська мова інтерфейсу, назви страв та
              <br></br> рекомендацій робить додаток близьким
            </>
          }
        />
        <DifferenceSection
          tagBg="#DD1C20"
          tagText="SMART ПЛАН"
          backgroundImage={ovochyGrill}
          title={
            <>
              Ваш стиль життя - основа<br></br>персонального плану
            </>
          }
          secondaryTitle="Індивідуальний підхід до харчування"
          text={
            <>
              Додаток враховує ваш режим сну, рівень активності, професію,
              харчові звички
              <br></br> та будує план, який підходить саме вам
            </>
          }
          textRight
        />
        <DifferenceSection
          tagBg="#9757D7"
          tagText="ДОСТУПНО ВСІМ"
          backgroundImage={app}
          title={
            <>
              Безкоштовне<br></br>додавання їжі
            </>
          }
          secondaryTitle="Ніяких обмежень. Просто користуйся"
          text={
            <>Додавайте страви усіма способами без покупки преміум аккаунта</>
          }
        />
        <HowItWorksSection />
        <FoodTrackingSection />
        <HealthKnowledgeSection />
      </div>
    </main>
  );
}
