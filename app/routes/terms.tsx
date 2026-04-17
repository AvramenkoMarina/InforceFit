import type { Route } from "./+types/terms";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Terms of Use | InforceFit" },
    {
      name: "description",
      content: "Terms of Use for InforceFit website and app.",
    },
  ];
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#1a1a1a] selection:bg-blue-100">
      <main className="mx-auto max-w-4xl px-6 py-12 md:px-12 md:py-20">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-black mb-4">
            Inforce Fit - Terms of Use
          </h1>
        </header>

        <section className="space-y-8 text-[18px] leading-relaxed text-[#333]">
          <div className="pt-6">
            <h2 className="text-3xl font-bold text-black mb-6 uppercase tracking-tight border-t border-gray-100 pt-8">
              § 1 Scope of application
            </h2>
            <p className="mb-4">
              (1) These General Terms and Conditions of INF TECH LTD, Ukraine,
              82300, Lviv region, Drohobych district, Boryslav city, 19
              Doroshenka street, 19, #85, (hereinafter, the “Provider”), govern
              the use of InforceFit services on the InforceFit website{" "}
              <a href="https://inforce.fit" className="text-blue-600 underline">
                inforce.fit
              </a>{" "}
              (hereinafter, the “Website”) and mobile application (hereinafter,
              the “App” or the “InforceFit App”). They apply regardless of
              whether the App is used free of charge or for a fee.
            </p>
            <p className="mb-6">
              (2) Only the following General Terms and Conditions apply between
              INF TECH LTD (hereinafter, also the “Provider” or “InforceFit”)
              and the user of InforceFit services (hereinafter, the “User”) as
              amended at the time of use. Deviating terms and conditions of the
              User shall not be recognized, unless the Provider expressly agrees
              to their validity.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-black mb-4 uppercase tracking-tight">
              § 2 Definition of terms
            </h2>
            <p className="mb-4">
              (1) InforceFit offers its Users a program that is tailored to the
              topics of weight loss, weight gain, muscle building and healthy
              nutrition, and through the InforceFit App and on inforce.fit, it
              offers a number of ways for Users to become familiar with these
              topics (hereinafter, also the “Services”).
            </p>
            <p className="mb-4">
              (2) The terms “Consumer” and “Entrepreneur” correspond to the
              legal definitions under applicable EU law. Thus, the User is
              herein the “Consumer,” insofar as the use or purchase of the
              InforceFit App cannot be assigned primarily to the User’s
              commercial or self-employed professional activity. In contrast,
              “Entrepreneur” refers to any natural or legal person or
              partnership with legal capacity that acts in exercise of its
              trade, business, or profession when using the InforceFit App or
              entering into the contract.
            </p>
            <p className="mb-6">
              (3) “Distribution Platform” refers to the shops (stores) of
              platform operators, such as Google (“Google Play”) and Apple (“App
              Store”), where the User can select and download the InforceFit App
              to be installed on the User’s device.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-black mb-4 uppercase tracking-tight">
              § 3 Use of the InforceFit Services
            </h2>
            <p className="mb-4">
              (1) The InforceFit Services can be used free of charge or for a
              fee. This also applies, in particular, to use of the Services via
              the InforceFit App. The App is always free of charge when
              installed through a Distribution Platform. Use for a fee always
              requires special, express consent by the User in the App (see
              below § 5 and § 6).
            </p>
            <p className="mb-4">
              (2) As a general rule, the InforceFit App can be installed and
              operated on all InforceFit-supported platforms and end devices,
              including mobile phones, smartwatches, tablets, and other mobile
              devices.
            </p>
            <p className="mb-4">
              (3) By using the Website or installing the App, the User accepts
              these General Terms and Conditions. If the User downloaded the App
              from a third-party Distribution Platform and accesses InforceFit
              Services through the App, then the respective terms and conditions
              of business and/or use of the Distribution Platform apply in
              addition. Where conflicts arise as a result of this, these General
              Terms and Conditions take precedence.
            </p>
            <p className="mb-4">
              (4) The User confirms that his or her information is true,
              accurate, current, and complete. Regular updates of personal
              information are required.
            </p>
            <p className="mb-4">
              (5) The User is not permitted to circumvent technologies used to
              control geographic or other access in order to use fee-based
              services of InforceFit without authorization.
            </p>
            <p className="mb-4">
              (6) The User is obliged to protect his or her account from
              unauthorized access and misuse. Suspicious activity and possible
              violations are to be reported to the Provider immediately at{" "}
              <a
                href="mailto:support@inforce.fit"
                className="text-blue-600 underline"
              >
                support@inforce.fit
              </a>
              . Any possible reimbursement of unauthorized payments will be made
              only after successful reporting of the misuse.
            </p>
            <p className="mb-4">
              (7) If the Provider detects abusive conduct of a User, the
              Provider is entitled to close the respective account.
            </p>
            <p className="mb-6">
              (8) You must be at least 18 years of age to use our App, unless a
              parent or legal guardian has consented to the installation and
              subsequent use in accordance with applicable law. Should
              InforceFit learn that personal data of a minor younger than the
              minimum age was collected without parental consent, the Provider
              will take the necessary steps to delete these data without delay.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-black mb-4 uppercase tracking-tight">
              § 4 Health notice for InforceFit Services
            </h2>
            <p className="mb-4">
              (1) The Provider is not a medical organization, and its
              recommendations do not constitute medical advice. Due to possible
              unintended weight loss associated with the use of the InforceFit
              Services, the User is advised to consult a doctor in individual
              cases before using the InforceFit Services to discuss individual
              recommendations made by the Provider. This especially applies to
              users who are already receiving medical treatment or are taking
              prescription medication to treat a clinically diagnosed condition.
              The Provider recommends using the InforceFit Services under a
              doctor’s supervision and that regular medical check-ups be
              performed. The Provider accepts no responsibility for the actions
              of the User. None of the content is intended to supplement or
              replace information provided by a doctor or pharmacist. By
              agreeing to these General Terms and Conditions, the User confirms
              that he or she is solely responsible for his or her health.
            </p>
            <p className="mb-6">
              (2) The Provider recommends that the User maintains his or her
              weight in accordance with the guidelines for healthy weight
              specified by the World Health Organization (WHO), which
              corresponds to a body mass index (BMI) between 18.5 to 25. The BMI
              can be calculated using the following formula: body weight (in kg)
              divided by height (in m) squared.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-black mb-4 uppercase tracking-tight">
              § 5 Setting up a User account
            </h2>
            <p className="mb-4">
              (1) The InforceFit App can be operated with or without a
              personalized User account. If a personalized User account is
              created, the User is required to enter his or her e-mail address
              and choose a password. The User can convert his or her existing
              anonymous account into a personal User account at any time by
              linking his or her e-mail address with the User account.
            </p>
            <p className="mb-4">
              (2) To use the InforceFit App with a connected device (e.g., Apple
              Watch or Wear OS device), the only requirement is the creation of
              a User account via the respective sign-in method, even if the
              wearable is not paired with the User’s phone.
            </p>
            <p className="mb-6">
              (3) The InforceFit App can also be used by linking it with the
              User’s profile at platform operator, e.g. by creating a InforceFit
              User account via “Sign in with Google.”
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-black mb-4 uppercase tracking-tight">
              § 6 Term and cancellation of free Services
            </h2>
            <p className="mb-6">
              If InforceFit Services are used free of charge, the contract of
              use may be canceled by either INF TECH LTD or the User with 14
              days’ notice sent to{" "}
              <a
                href="mailto:support@inforce.fit"
                className="text-blue-600 underline"
              >
                support@inforce.fit
              </a>{" "}
              or the User’s e-mail address on file, respectively. In addition,
              the User has the ability to delete the account in the App
              settings.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-black mb-4 uppercase tracking-tight">
              § 7 Term, term renewal and cancellation of fee-based Services
            </h2>
            <p className="mb-4">
              (1) InforceFit offers Users subscriptions with various fixed terms
              and a usage fee specific for each term, which is payable in
              advance in order to be able to use all Services without limitation
              (hereinafter also “InforceFit Premium” or “Premium Functions”).
            </p>
            <p className="mb-4">
              (2) If the User wishes to use the functionality of the paid
              version of the InforceFit App, the User can purchase the Premium
              functions using an “in-app purchase” via a Distribution Platform.
            </p>
            <p className="mb-4">
              (a) To purchase the Premium functions via the Provider’s Website,
              the User must log in with his or her e-mail address and password
              or reregister. In his or her user account, the User can view and
              purchase different subscription options on the corresponding
              product page.
            </p>
            <p className="mb-4">
              (b) If the User carries out the upgrade via a Distribution
              Platform, the specific procedure shall be governed by the
              respective platform operator. The purchase agreement shall take
              place according to the terms and conditions of the respective
              Distribution Platform.
            </p>
            <p className="mb-4">
              (3) Where the subscription is purchased on the Website or through
              a Distribution Platform, e.g. the Google Play Store or the App
              Store, InforceFit may temporarily offer Users the option to use
              the chosen subscription free of charge for a InforceFit-specified
              period of time (trial subscription). The trial subscription begins
              on the date on which the purchase process is concluded.
            </p>
            <p className="mb-4">
              (4) The limited-time subscription runs for at least the term
              originally chosen by the User, plus any preceding trial
              subscription period specified by InforceFit.
            </p>
            <p className="mb-4">
              (5) The User may cancel the subscription at any time, effective at
              the end of the chosen term. If it is not canceled, the
              subscription renews for an unlimited period of time at the
              purchase conditions of the initial subscription and may be
              canceled by InforceFit or the User at any time with one month’s
              notice, effective at the end of the month. If the User paid in
              advance, differential amounts will be refunded.
            </p>
            <p className="mb-4">
              (6) If the subscription was purchased at inforce.fit, notice of
              cancellation is to be sent using the cancellation button found in
              the footer, in the App or by e-mail to{" "}
              <a
                href="mailto:support@inforce.fit"
                className="text-blue-600 underline"
              >
                support@inforce.fit
              </a>
              . If the Provider cancels, the User is to be notified using the
              e-mail address on file.
            </p>
            <p className="mb-4">
              (7) The right to cancel without notice for cause remains
              unaffected. Cause for InforceFit exists, in particular, where the
              User violates applicable law or material contractual duties. In
              addition, the arrangements in § 10 remain unaffected.
            </p>
            <p className="mb-6">
              (8) If the User dies, his or her heirs are entitled to cancel the
              subscription in accordance with subsections 5 to 7.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-black mb-4 uppercase tracking-tight">
              § 8 Payment of the usage fee
            </h2>
            <p className="mb-4">
              (1) After purchasing the InforceFit Premium functions via the
              InforceFit Website, the User will receive an invoice for the
              outstanding usage fee, unless another method of payment has been
              agreed upon.
            </p>
            <p className="mb-4">
              (2) The User is obliged to pay all costs incurred if an
              outstanding payment cannot be collected from a bank account
              specified by the User. If payments that were made are charged
              back, or if the User does not pay fees, InforceFit is entitled to
              block all Services or access to individual ones.
            </p>
            <p className="mb-6">
              (3) In-app purchases are billed via the respective Distribution
              Platform. The terms of payment specified by the respective
              platform operator shall apply.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-black mb-4 uppercase tracking-tight">
              § 9 Changes to the usage fee
            </h2>
            <p className="mb-6">
              The Provider reserves the right to change the usage fee for the
              subscription options. Price changes will only become effective
              after the end of the subscription period or when the subscription
              renewal is due for payment. In the event of upcoming price
              increases, the Provider shall notify the User at least 30 days
              before the planned change of the usage fee.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-black mb-4 uppercase tracking-tight">
              § 10 Changes, interruptions, discontinuation of InforceFit
              Services
            </h2>
            <p className="mb-4">
              (1) The Provider is free to change its Services at any time and
              to, e.g., change, interrupt or discontinue the free services of
              the InforceFit App at any time, temporarily or permanently, and in
              whole or in part. This also applies to the offer of limited-time
              subscriptions.
            </p>
            <p className="mb-4">
              (2) The Provider shall inform the User at least 30 days before
              planned changes, interruptions, or discontinuation of fee-based
              services. The Provider will publish the updated usage fees.
            </p>
            <p className="mb-4">
              (3) The User has the right to cancel his or her subscription
              without notice if the change, interruption, or discontinuation of
              the service causes unreasonable disadvantage to the User or the
              contractual balance between the parties is otherwise significantly
              disturbed.
            </p>
            <p className="mb-4">
              (4) The subscription with the respective booked term ends if the
              Provider or the corresponding Distribution Platform used by the
              Provider ceases provision of services or business operations.
            </p>
            <p className="mb-6">
              (5) The present General Terms and Conditions also apply to changed
              services.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-black mb-4 uppercase tracking-tight">
              § 11 Warranty for defects of quality, guarantee
            </h2>
            <p className="mb-4">
              (1) Insofar as the purchase agreement between the Provider and the
              User has been concluded, the Provider is liable for defects in the
              app in line with the applicable statutory provisions under the
              laws of the Ukraine. The warranty period for the app made
              available to Entrepreneurs by the Provider is twelve months.
            </p>
            <p className="mb-6">
              (2) The Provider will make an effort to enable consistently
              complete and error-free availability of the InforceFit App but
              does not guarantee this.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-black mb-4 uppercase tracking-tight">
              § 12 Liability
            </h2>
            <p className="mb-4">
              (1) User claims to compensation for damages are excluded. This
              does not include a User’s claims to compensation for damages for
              injury to life, limb, or health; damages caused by breach of
              material contractual obligations; or liability for other damages
              caused by a deliberate or grossly negligent breach of duty by the
              Provider, its legal representatives, or vicarious agents.
            </p>
            <p className="mb-4">
              (2) If material contractual obligations are violated, the Provider
              is only liable for the typical foreseeable damage if such damage
              was caused by ordinary negligence, unless the User’s claim is
              based on an injury to life, limb, or health.
            </p>
            <p className="mb-6">
              (3) The limitations of subsections (1) and (2) shall also apply in
              favor of the Provider’s legal representatives or vicarious agents
              if claims are asserted directly against such persons.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-black mb-4 uppercase tracking-tight">
              § 13 Instructions on right of withdrawal
            </h2>
            <p className="mb-4">
              (1) If the contract is entered into with INF TECH LTD (and not the
              platform operator), the User, where he or she is a consumer, has a
              statutory right of withdrawal against the Provider, as explained
              in detail below.
            </p>
            <p className="mb-4 font-semibold">
              (2) Instructions on right of withdrawal
            </p>
            <p className="mb-4 font-semibold">Right of withdrawal</p>
            <p className="mb-4">
              You have the right to withdraw from this contract within fourteen
              days without reason. The period for the right of withdrawal
              amounts to fourteen days from the day the contract is entered
              into.
            </p>
            <p className="mb-4">
              In order to exercise your right of withdrawal, you must inform us
              INF TECH LTD, Ukraine, 82300, Lviv region, Drohobych district,
              Boryslav city, 19 Doroshenka street, 19, #85,{" "}
              <a
                href="mailto:support@inforce.fit"
                className="text-blue-600 underline"
              >
                support@inforce.fit
              </a>
              , in a clear statement of your decision to withdraw from this
              contract (e.g., by sending a letter by mail or e-mail). You may
              use the enclosed sample withdrawal form, but this is not
              mandatory. The withdrawal deadline is deemed met if the letter
              stating your decision to use your right of withdrawal is
              dispatched before the withdrawal deadline expires.
            </p>
            <p className="mb-4 font-semibold">
              Consequences of the notice of withdrawal
            </p>
            <p className="mb-4">
              If you withdraw from this contract, we must return any and all
              payments that we have received from you without undue delay and,
              at the latest, within fourteen days from the day on which we
              received your letter stating your withdrawal. We use the same
              means of payment for this repayment as you used for the original
              transaction, unless we have explicitly agreed something else;
              under no circumstances will we charge you a fee for this
              repayment.
            </p>
            <p className="mb-4 font-semibold">(3) Sample withdrawal form</p>
            <div className="bg-[#f2f5f7] rounded-2xl p-8 my-6 border border-gray-100 space-y-1">
              <p>
                (If you wish to withdraw from the contract, please fill in this
                form and send it back to us).
              </p>
              <p>
                — To:{" "}
                <a
                  href="mailto:support@inforce.fit"
                  className="text-blue-600 underline"
                >
                  support@inforce.fit
                </a>
              </p>
              <p>or</p>
              <p>— To: INF TECH LTD</p>
              <p>
                Ukraine, 82300, Lviv region, Drohobych district, Boryslav city,
              </p>
              <p>19 Doroshenka street, 19, #85,</p>
              <p>
                — I/we (*) hereby withdraw from the contract I/we (*) entered
                into concerning the purchase of the following goods (*)/the
                performance of the following service (*)
              </p>
              <p>— Ordered on (*)/received on (*)</p>
              <p>— Name of Consumer(s)</p>
              <p>— Address of Consumer(s)</p>
              <p>
                — E-mail address or specification of User ID of the Consumer(s)
                used for InforceFit registration
              </p>
              <p>
                — Signature of Consumer(s) (only if notification is made in
                writing)
              </p>
              <p>— Date</p>
              <p>(*) Delete as applicable</p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-black mb-4 uppercase tracking-tight">
              § 14 Final provisions
            </h2>
            <p className="mb-4">
              (1) Contracts entered into between the User and the Provider are
              subject to the laws of the Ukraine, excluding the UN Convention on
              Contracts for the International Sale of Goods (CISG). Statutory
              provisions limiting the choice of law and the application of
              mandatory provisions, especially of the state where the User as
              the consumer has his or her habitual abode, remain unaffected.
            </p>
            <p className="mb-4">
              (2) If the User is a merchant, a legal person under public law or
              a special fund under public law, the place of jurisdiction for all
              disputes under the contractual relationships between the User and
              the Provider shall be the registered office of the Provider.
            </p>
            <p className="mb-4">
              (3) If individual items are legally invalid, the remainder of the
              contract shall remain valid. Whenever such provisions exist, the
              statutory provisions shall replace the invalid provisions. If this
              would constitute undue hardship for one of the contracting
              parties, the entire contract shall be deemed invalid.
            </p>
            <p className="mb-6">
              (4) InforceFit’s General Terms and Conditions are available to
              Users in various languages. The English-language version is the
              original source for these General Terms and Conditions and, in the
              case of disputes, misunderstandings, or inconsistencies, is the
              authoritative version and shall take precedence over all
              translated versions.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-black mb-4 uppercase tracking-tight">
              Legal Notice
            </h2>
            <div className="bg-[#f2f5f7] rounded-2xl p-8 my-6 border border-gray-100">
              <p className="font-semibold text-black mb-2">Help</p>
              <p className="mb-4">
                App Help service:{" "}
                <a
                  href="mailto:support@inforce.fit"
                  className="text-blue-600 underline"
                >
                  support@inforce.fit
                </a>
              </p>
              <p className="font-semibold text-black mb-2">
                We make InforceFit
              </p>
              <p>INF TECH LTD</p>
              <p>
                Ukraine, 82300, Lviv region, Drohobych district, Boryslav city,
              </p>
              <p>19 Doroshenka street, 19, #85,</p>
              <p>Company Registration Number: 1004131020000001251</p>
              <p>Represented by its Director</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
