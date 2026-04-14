import { Hero } from "~/components/hero";
import type { Route } from "./+types/home";
import NutritionSection from "~/components/nutritionSection";
import DifferencesTitle from "~/components/differencesTitle";
import DifferenceSection from "~/components/differenceSection";
import difference1 from "~/images/difference1.png";
import difference1Mobile from "~/images/difference1Mobile.png";
import grechka from "~/images/grechka.png";
import grechkaMobile from "~/images/grechkaMobile.png";
import borshch from "~/images/borshch.png";
import borshchMobile from "~/images/borshchMobile.png";
import ovochyGrill from "~/images/ovochyGrill.png";
import ovochyGrillMobile from "~/images/ovochyGrillMobile.png";
import app from "~/images/app.png";
import appMobile from "~/images/appMobile.png";
import popup from "~/images/popup.png";

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
      <div className="max-w-360 mx-auto md:px-37.5 px-[32px]">
        <section id="nutrition">
          <NutritionSection />
        </section>
        <div id="advantages" className="py-[60px]">
          <DifferencesTitle />
          <DifferenceSection
            tagBg="#828C13"
            tagText="УКРАЇНСЬКА КУХНЯ"
            backgroundImage={difference1}
            mobileBackgroundImage={difference1Mobile}
            title={
              <>
                Найбільша база<br></br>українських страв
              </>
            }
            secondaryTitle="Нарешті — додаток, що знає нашу їжу"
            text={
              <>
                Міжнародні додатки просто не знають, що таке голубці та банош.
                <span className="hidden md:inline">
                  <br />
                </span>
                Ми знаємо та маємо 20 000+ позицій з перевіреними даними про
                калорійність
              </>
            }
          />
          <DifferenceSection
            tagBg="#0E388E"
            tagText="АНАЛІТИКА"
            backgroundImage={grechka}
            mobileBackgroundImage={grechkaMobile}
            mobileImageLeft
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
            mobileBackgroundImage={borshchMobile}
            mobileImageSizeClass="w-[290px] h-[290px]"
            title={<>Все рідною мовою</>}
            secondaryTitle="Харчування без мовного бар’єру"
            text={
              <>
                Українська мова інтерфейсу, назви страв та рекомендацій робить
                додаток близьким
              </>
            }
          />
          <DifferenceSection
            tagBg="#DD1C20"
            tagText="SMART ПЛАН"
            backgroundImage={ovochyGrill}
            mobileBackgroundImage={ovochyGrillMobile}
            mobileImageSizeClass="w-[270px] h-[270px]"
            mobileImageLeft
            title={
              <>
                Ваш стиль життя - основа<br></br>персонального плану
              </>
            }
            secondaryTitle="Індивідуальний підхід до харчування"
            text={
              <>
                Додаток враховує ваш режим сну, рівень активності, професію,
                харчові звички та будує план, який підходить саме вам
              </>
            }
            textRight
          />
          <DifferenceSection
            tagBg="#9757D7"
            tagText="ДОСТУПНО ВСІМ"
            backgroundImage={app}
            mobileBackgroundImage={appMobile}
            mobileImageSizeClass="w-auto h-[350px]"
            mobilePopupImage={popup}
            mobilePopupClassName="left-6 bottom-10 w-[130px] h-auto"
            textClassName="max-w-[150px]"
            title={
              <>
                Безкоштовне<br></br>додавання їжі
              </>
            }
            secondaryTitle="Ніяких обмежень - просто користуйся"
            text={
              <>Додавайте страви усіма способами без покупки преміум аккаунта</>
            }
          />
        </div>
        <section id="how-it-works">
          <HowItWorksSection />
        </section>
        <FoodTrackingSection />
        <section id="blog">
          <HealthKnowledgeSection />
        </section>
      </div>
    </main>
  );
}
