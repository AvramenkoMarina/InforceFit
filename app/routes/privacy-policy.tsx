import type { Route } from "./+types/privacy-policy";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Privacy Policy | InforceFit" },
    {
      name: "description",
      content: "Privacy Policy for InforceFit website and app.",
    },
  ];
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#1a1a1a] selection:bg-blue-100">
      <main className="mx-auto max-w-4xl px-6 py-12 md:px-12 md:py-20">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-black mb-4">
            InforceFit - Privacy Policy
          </h1>
        </header>

        <section className="space-y-8 text-[18px] leading-relaxed text-[#333]">
          <p>
            <strong>INF TECH LTD</strong> (hereinafter, “InforceFit” or the
            “Provider”), with registered office in Ukraine, 82300, Lviv region,
            Drohobych district, Boryslav city, Doroshenka street, building 19,
            apartment 85, operates the website{" "}
            <a href="https://inforce.fit/" className="text-blue-600 underline">
              https://inforce.fit/
            </a>{" "}
            (hereinafter, the “Website”) as well as the InforceFit app, a
            digital calorie and health tracker (hereinafter, the “App” or the
            “Product”) for Android and iOS.
          </p>

          <p>
            The following Data Protection Policy informs you about the types of
            personal data of InforceFit users that are processed, the purposes
            for which they are processed, and the scope of processing. The Data
            Protection Policy applies to all processing of personal data
            performed by InforceFit, both in connection with service provision
            and, in particular, on the Website and in the InforceFit App, which
            users can install on their mobile end device, as well as within
            external online presences, such as InforceFit’s social media
            profiles (hereinafter, collectively referred to as the “Online
            Offer”)
          </p>

          {/* 1. Controller Section */}
          <div className="pt-6">
            <h2 className="text-3xl font-bold text-black mb-6 uppercase tracking-tight border-t border-gray-100 pt-8">
              1. Controller
            </h2>
            <p className="mb-4">
              Control over the protection of personal data is carried out in
              accordance with the norms of the General Data Protection
              Regulation (hereinafter referred to as the GDPR) and the Law of
              Ukraine "On the Protection of Personal Data". The controller
              within the meaning of the—i.e., the entity responsible for
              collecting, processing and using personal user data—is.
            </p>
            <div className="bg-[#f2f5f7] rounded-2xl p-8 my-6 border border-gray-100">
              <address className="not-italic space-y-1 text-gray-800">
                <p className="font-bold text-xl text-black">INF TECH LTD</p>
                <p>Ukraine, 82300,</p>
                <p>Lviv region, Drohobych district, Boryslav city,</p>
                <p>19 Doroshenka street, 19, #85,</p>
                <p className="pt-2">
                  <a
                    href="mailto:support@inforce.fit"
                    className="text-blue-600 font-medium hover:underline"
                  >
                    support@inforce.fit
                  </a>
                </p>
              </address>
            </div>
          </div>

          {/* 2. Encryption */}
          <div>
            <h2 className="text-3xl font-bold text-black mb-4 uppercase tracking-tight">
              2. Encryption
            </h2>
            <p>
              All incoming and outgoing data—both in the communication with the
              Apps and in third-party provider communication—are transmitted in
              encrypted form. The encrypted connection when using the InforceFit
              Website can be seen, for instance, via the address bar of the
              browser being used, which begins with <strong>“https://”</strong>,
              and via the encryption symbol found there. Because of encryption,
              the transmitted data cannot be read by third parties.
            </p>
          </div>

          {/* 3. Collection Section */}
          <div>
            <h2 className="text-3xl font-bold text-black mb-4 uppercase tracking-tight">
              3. Collection, Processing, & Use of Personal Data
            </h2>
            <h3 className="text-xl font-bold text-black mb-3">
              3.1. Personal data
            </h3>
            <p className="mb-6">
              “Personal data” for the purposes of the GDPR means any information
              relating to an identified or identifiable natural person; an
              identifiable natural person is one who can be identified, directly
              or indirectly, in particular by reference to an identifier such as
              a name, an identification number, location data, an online
              identifier or to one or more factors specific to the physical,
              physiological, genetic, mental, economic, cultural or social
              identity of that natural person;Personal data (e.g., e-mail
              address, nutritional data in the App) will be processed by the
              Provider only pursuant to the provisions of applicable data
              protection law. The following provisions inform you about the
              nature, scope and purpose of the collection, processing and use of
              personal data.
            </p>

            <h3 className="text-xl font-bold text-black mb-3">
              3.2. Collection of data when using the InforceFit Website
            </h3>
            <p className="mb-6">
              When visiting the Website www.inforce.fit, the web server, on the
              basis of InforceFit’s legitimate interests under Article 6(1)(f)
              GDPR, automatically records log files, which cannot be attributed
              to any specific person, if this is necessary for the App’s
              functionality and is not outweighed by the interest in protecting
              the user's personal data. These data include, e.g., the browser
              type and version, the operating system used, referrer URL (the
              previously visited site), IP address of the requesting computer,
              access date and time of server request, and the file requested by
              the client (file name and URL). These data are collected only for
              the purpose of statistical analysis and for security reasons
              (e.g., to investigate acts of misuse or fraud) and are stored for
              seven days and then erased. If it should be necessary to retain
              the data for a longer period of time for evidentiary purposes,
              they are exempt from erasure until final resolution of the
              respective event.
            </p>

            <h3 className="text-xl font-bold text-black mb-3">
              3.2.1. Use of cookies
            </h3>
            <p className="mb-6">
              In order to make the Website more user friendly and more effective
              overall, InforceFit itself or third parties engaged by InforceFit
              for this purpose store cookies on the user’s hard drive, provided
              the user has consented to this in accordance with Article 6(1)(a)
              GDPR.A cookie is a small text file that is used, inter alia, to
              record information with respect to use of a website. These cookies
              cannot execute programs or transmit viruses to the user’s
              computer. They do not contain any personal data, cannot be
              attributed to specific persons, and, unless described otherwise,
              will be automatically deleted after one year, at the latest. These
              data are not combined with other data sources.It is also possible
              to use websites operated by the Provider without cookies. The
              storage of cookies can be deactivated or limited to certain
              websites in the respective browser, or the browser can be
              configured in such a way that it notifies the user once a cookie
              is sent. The user can also delete cookies from the hard drive of
              their PC at any time
            </p>
            <h3 className="text-xl font-bold text-black mb-3">
              3.3. Personal data when using the InforceFit App
            </h3>
            <h3 className="text-xl font-bold text-black mb-3">
              3.3.1. Required information when creating a personalized user
              account
            </h3>
            <p className="mb-6">
              In order to be able to use the App, the user must provide the
              required information “e-mail address” and “password” . These are
              used to identify the user and for the purpose of communication
              between the Provider and the user. The e-mail address and all
              other user data cannot be viewed by other users.
            </p>
            <h3 className="text-xl font-bold text-black mb-3">
              3.3.2. Use of the InforceFit app with the feature "Sign Up With
              Apple" / "Continue With Apple"
            </h3>
            <p className="mb-6">
              The user has the option to create a InforceFit account via his or
              her Apple account. The user can register for or log in to
              InforceFit with this Apple account if he or she uses the "Sign Up
              With Apple" button on the website or the "Continue With Apple"
              button in the app when registering. When logging in using the
              Apple ID, the personal e-mail address can be hidden or shared with
              InforceFit. With “Hide e-mail address” , the user can use Apple's
              e-mail relay service to generate a generic alias address through
              which messages from InforceFit are forwarded to their private
              e-mail address. “Continue with Apple''uses two-factor
              authentication. An additional password does not have to be
              assigned. Further information about the method of operation and
              settings is available at:{" "}
              <a
                href="https://support.apple.com/HT210425"
                className="text-blue-600 underline"
              >
                https://support.apple.com/HT210425
              </a>
              . The watchOS app for the Apple Watch can additionally be
              downloaded and used through the Apple Watch itself, unless it is
              automatically coupled with the user's iPhone. In this case,
              registration must take place using the feature “Continue With
              Apple” .
            </p>

            <h3 className="text-xl font-bold text-black mb-3">
              3.3.3. Use of the InforceFit app with the feature "Sign Up With
              Google" / "Continue With Google"
            </h3>
            <p className="mb-6">
              The user has the option to create a InforceFit account via his or
              her Google account. The user can register for or log in to
              InforceFit with this Google account if he or she uses the "Sign Up
              With Google" button on the website or the "Continue With Google"
              button in the app when registering. In this regard,InforceFit
              collects and stores the user's personal data through the Google
              account, such as the user's e-mail address, optionally also first
              and last names,and the user's profile picture. The user can
              individually adjust the data transfer to InforceFit in their
              Google account under privacy settings. Further information about
              the method of operation and settings is available at:
              <a
                href="https://support.google.com/accounts/answer/2541991"
                className="text-blue-600 underline"
              >
                {" "}
                https://support.google.com/accounts/answer/2541991
              </a>
              .
            </p>

            <h3 className="text-xl font-bold text-black mb-3">
              3.3.4. Use of the InforceFit App without personalized user account
            </h3>
            <p className="mb-6">
              An existing anonymous user account can be converted into a
              personalized account at any time by adding an e-mail address and
              password. It is not possible to attribute an anonymous account to
              a user, meaning that if the mobile end device is lost, it is not
              possible for InforceFit to restore the account.
            </p>

            <h3 className="text-xl font-bold text-black mb-3">
              3.3.5. Data provided by the user
            </h3>
            <p className="mb-4">
              When creating a personalized user account, the user can optionally
              provide, in addition to the required information (e-mail address
              and password),first name, last name and place of residence, which
              are then recorded by InforceFit.
            </p>
            <p className="mb-4">
              In addition, InforceFit records data that are provided by the user
              through a personalized or anonymous user account, which can be
              entered when using the App. This comprises a user profile, which
              includes, but is not limited to, the below-listed body and health
              data:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 mb-6">
              {[
                "Age / Date of birth",
                "Gender",
                "Height",
                " Diet (e.g., vegan)",
                "Goal (e.g., lose weight)",
                "Activity level (high/low)",
                "Recorded activities",
                " Calories consumption and activity calories",
                "Favorite recipes",
                "Starting weight, weight progress and target weight",
              ].map((item) => (
                <li key={item} className="flex items-center">
                  <span className="mr-3 h-1.5 w-1.5 rounded-full bg-black shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mb-4">
              The data are collected on the basis of the user’s consent under
              Article 6(1)(a) GDPR. The provision of body data is necessary in
              order to be able to use the App's features. In particular, it is
              necessary to provide starting weight/target weight, gender, date
              of birth and height so InforceFit can calculate the user's
              personal calorie goal.
            </p>
            <p className="mb-4">
              Other data, such as water consumption, enable the user to track
              the amount of water they drink. These data are used solely for the
              stated purposes and, as a rule, cannot be seen by third parties.
            </p>

            <h3 className="text-xl font-bold text-black mb-3">
              3.3.6. Data automatically recorded by InforceFit
            </h3>
            <p className="mb-4">
              When the App is installed, the following are recorded one time:
            </p>
            <ul className="grid grid-cols-1 gap-5  mb-6">
              {[
                "Date of installation",
                "Date of registration",
                "Operating system of the device used (Android/iOS)",
                "Country and language (using locale: the “locale” is a set of settings that contains the region parameters (local parameters) for computer programs. These primarily include the language of the user interface, the country and settings for the character set, keyboard layout, and formats for payments, currencies, dates and times.)",
              ].map((item) => (
                <li key={item} className="flex items-start">
                  <span className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-black shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mb-6">
              These data are recorded in order to improve and personalize our
              services, and this takes place on the basis of our legitimate
              interest pursuant to Article 6(1)(f) GDPR.
            </p>

            <h3 className="text-xl font-bold text-black mb-3">
              3.3.7. Data recorded while using the App
            </h3>
            <p className="mb-4">
              When the App is being used, InforceFit furthermore records the
              following:
            </p>
            <ul className="grid grid-cols-1 gap-3 mb-6">
              {[
                "Current IP address",
                "App version being used",
                "Current time zone",
              ].map((item) => (
                <li key={item} className="flex items-start">
                  <span className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-black shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mb-6">
              These data are recorded in order to improve and personalize the
              offered services, and this takes place on the basis of
              InforceFit’s legitimate interest pursuant to Article 6(1)(f) GDPR.
            </p>

            <h3 className="text-xl font-bold text-black mb-3">
              3.3.8. Contractual relationship and payment procedure
            </h3>
            <p className="mb-4">
              Where a contractual relationship between the user and InforceFit
              is to be established, substantively structured or changed,
              InforceFit stores personal data of the user on the basis of
              Article 6(1)(b) GDPR (see the list of personal data under No.
              3.3.5 to 3.3.7), provided this is necessary for the performance of
              the contract.
            </p>
            <p className="mb-4">
              Through an in-app purchase, the user has the ability to acquire a
              PRO version of the InforceFit App in connection with a
              subscription, optionally at the start of a seven-day free trial
              phase (trial subscription). If the user decides to acquire the PRO
              version and presses the order button, they will be forwarded
              directly to the Apple App Store or the Google Play Store,
              depending on their operating system, even if they had first opted
              for the seven-day free trial phase during the temporary
              subscription. In that case, the corresponding amount for the
              subscription will be automatically debited after the seventh day
              of the trial phase.
            </p>
            <p className="mb-4">
              When the user is forwarded to the appropriate app store,
              InforceFit transmits the starting and ending date and, if
              applicable, the subscription termination date, as well as the
              reason for termination (e.g., after a possible cancellation). The
              payment processing data are collected directly by the app stores.
              The data protection policies of the app stores can be viewed here:
            </p>
            <ul className="grid grid-cols-1 gap-3 mb-6">
              <li>
                Apple App Store:{" "}
                <a
                  href="https://www.apple.com/privacy/"
                  className="text-blue-600 underline"
                >
                  https://www.apple.com/privacy/
                </a>
              </li>
              <li>
                Google Play Store:{" "}
                <a
                  href="https://policies.google.com/privacy"
                  className="text-blue-600 underline"
                >
                  https://policies.google.com/privacy
                </a>
              </li>
            </ul>
            <p className="mb-4">
              The PRO version of the App can also be purchased through the
              InforceFit Website. Depending on the selected payment option
              (Apple Pay, Google Pay, SEPA payment or credit card payment), the
              user must provide the relevant account data, even if they are
              first using the seven-day trial subscription.
            </p>
            <p className="mb-4">
              Applicable to the payment transactions are the business terms and
              conditions and the data protection policies of the respective
              payment service providers, which are available on the respective
              websites or transaction apps.
            </p>
            <p className="mb-4">
              Further processing is handled by the payment service provider
              Stripe. The service is offered by Stripe Payments Europe Ltd,
              Block 4, Harcourt Centre, Harcourt Road, Dublin 2, Ireland.
              Information provided by the user (name, e-mail address, credit
              card data, start and end date, and, if applicable, termination
              data of subscriptions, invoice amount) is transmitted by
              InforceFit to Stripe pursuant to Article 6(1)(b) GDPR as part of
              the order process. User data are shared solely for the purpose of
              payment processing with the payment service provider Stripe
              Payments Europe Ltd. and only to the extent they are necessary for
              this. Further information about data protection by Stripe is
              available at{" "}
              <a
                href="https://stripe.com/legal"
                className="text-blue-600 underline"
              >
                https://stripe.com/legal
              </a>
              .
            </p>
            <p className="mb-4">
              Moreover, InforceFit makes the mobile payment system Apple Pay of
              Apple Inc., One Infinite Loop, 95014 Cupertino, USA, available to
              users in the InforceFit App. When Apple Pay is used, Apple does
              not store any original credit card, debit card or prepaid card
              numbers used by the user. Apple has no access to them. In
              addition, no backup of transaction data takes place that permits
              conclusions to be drawn as to the user. Further data protection
              notices can be found at{" "}
              <a
                href="https://www.apple.com/privacy/"
                className="text-blue-600 underline"
              >
                https://www.apple.com/privacy/
              </a>
              .
            </p>
            <p className="mb-6">
              In addition, the mobile payment system Google Pay of Google
              Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland,
              is also available to users. Google stores information about the
              transaction made by the user and the payment method selected
              (debit or credit card). It collects data such as date, time,
              merchant location, merchant name and merchandise description.
              Google may combine these data with the information of other Google
              services that the user uses with their Google account. Further
              information is available at{" "}
              <a
                href="https://payments.google.com/payments/apis-secure/get_legal_document?ldo=0&ldt=privacynotice"
                className="text-blue-600 underline"
              >
                https://payments.google.com/payments/apis-secure/get_legal_document?ldo=0&ldt=privacynotice
              </a>
              .
            </p>

            <h3 className="text-xl font-bold text-black mb-3">
              3.4. AI-Generated Wellness and Health Reports
            </h3>
            <p className="mb-4">
              InforceFit offers an optional feature that provides AI-generated
              wellness and nutrition reports (“AI Health Reports”). These
              reports are created based on information voluntarily provided by
              the user, such as responses to questionnaires, dietary habits,
              lifestyle details, and other inputs.
            </p>
            <p className="mb-4 font-semibold">Important Disclaimer:</p>
            <p className="mb-4">
              AI Health Reports do not constitute medical advice, diagnosis,
              treatment, or professional healthcare services. InforceFit is not
              a medical provider, does not perform medical evaluations, and does
              not offer emergency or crisis support. Any insights, assessments,
              or recommendations generated by the AI are intended for
              informational and educational purposes only.
            </p>
            <p className="mb-6">
              Users should consult a licensed healthcare professional regarding
              any medical questions, laboratory results, symptoms, or health
              concerns. In emergency situations, users must contact their local
              emergency services immediately.
            </p>

            <h3 className="text-xl font-bold text-black mb-3">
              3.4.1. Data Processed
            </h3>
            <p className="mb-4">
              To generate AI Health Reports, InforceFit may process the
              following categories of data:
            </p>
            <ul className="grid grid-cols-1 gap-3 mb-6">
              {[
                "user questionnaire responses",
                "nutrition, activity, and lifestyle information entered in the App",
                "optional health-related data voluntarily provided by the user",
                "technical data necessary for the feature to operate (e.g., device type, language settings)",
              ].map((item) => (
                <li key={item} className="flex items-start">
                  <span className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-black shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-bold text-black mb-3">
              3.4.2. Purpose of Processing
            </h3>
            <p className="mb-4">The collected data may be used to:</p>
            <ul className="grid grid-cols-1 gap-3 mb-6">
              {[
                "generate a personalized, non-medical AI Health Report",
                "provide tailored wellness insights",
                "improve the accuracy, safety, and performance of the App",
                "conduct internal analytics for service improvement",
                "develop and enhance InforceFit’s non-medical wellness features",
              ].map((item) => (
                <li key={item} className="flex items-start">
                  <span className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-black shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-bold text-black mb-3">
              3.4.3. Limitations
            </h3>
            <p className="mb-6">
              AI Health Reports are not intended to diagnose, prevent, or treat
              medical conditions and must not be relied upon as professional
              medical advice. They do not replace consultation with a qualified
              healthcare provider.
            </p>

            <h3 className="text-xl font-bold text-black mb-3">
              3.4.4. Legal Basis
            </h3>
            <p className="mb-4">Processing is carried out under:</p>
            <ul className="grid grid-cols-1 gap-3 mb-6">
              {[
                "Performance of contract (Article 6(1)(b) GDPR)",
                "Legitimate interest (Article 6(1)(f) GDPR)",
                "User consent (Article 6(1)(a) GDPR)",
              ].map((item) => (
                <li key={item} className="flex items-start">
                  <span className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-black shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Third Parties */}
          <div>
            <h2 className="text-3xl font-bold text-black mb-4 uppercase tracking-tight">
              4. Exchange of Data With Third Parties
            </h2>
            <p className="mb-4">
              InforceFit takes the protection of personal user data very
              seriously. For this reason, InforceFit treats personal data
              confidentially and in accordance with statutory provisions
              concerning data protection as well as this Data Protection Policy.
              InforceFit therefore collects and stores only data that are
              provided by third-party providers on the basis of the respective
              user consent under Article 6(1)(a) GDPR and transmits
              corresponding data to them. Subject to statutory or contractual
              permissions, InforceFit processes the data in a third country or
              has the data processed there only where the special requirements
              of Articles 44 et seqq. GDPR are met. Processing takes place,
              e.g., on the basis of special safeguards, such as the observance
              of officially recognized, special contractual obligations
              (“standard contract clauses”).
            </p>
            <p className="mb-4">
              For data transfers to the USA, InforceFit primarily relies on the
              EU-U.S. Trans-Atlantic Data Privacy Framework (DPF), which has
              been recognised as a secure legal framework by an adequacy
              decision of the European Commission. Standard contractual clauses
              may also exist. Further information on the DPF and a list of
              certified companies can be found (in English) at
              https://www.dataprivacyframework.gov/.. article 29 of the Law of
              Ukraine "On Personal Data Protection"
            </p>
            <p className="mb-4">
              If the European Commission does not attribute to a third country
              the same level of data protection as the EU, then InforceFit
              ensures the maintenance of the European level of data protection
              through the use of standard contract clauses (SCC) and binding
              company rules pursuant to Article 46(1) and (2)(c) GDPR.
              Nevertheless, it is possible under certain circumstances that
              authorities in a third country may access user data for control
              and monitoring purposes and, in this regard, that effective legal
              remedies and data subject rights may not be enforceable.
            </p>

            <p className="mb-4">
              The following providers and data are affected:
            </p>

            <h3 className="text-xl font-bold text-black mb-3">
              4.1. Google Fit
            </h3>
            <p className="mb-4">
              InforceFit offers its users the option to link the App with Google
              Fit, a health platform of Google Ireland Limited, Gordon House,
              Barrow Street, Dublin 4, Ireland (“Google”). Google Fit logs the
              physical activities of the respective user using sensors of the
              mobile device or activity sensors. The following data may be
              transmitted in the case of a linking with InforceFit:
            </p>
            <ul className="grid grid-cols-1 gap-3 mb-4">
              {[
                "Total activity",
                "Workouts completed (time, duration, type, calories burned)",
                "Steps (distance, number)",
              ].map((item) => (
                <li key={item} className="flex items-start">
                  <span className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-black shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mb-4">
              Further data protection notices, particularly about the purpose
              and scope of data collection and the further processing and use of
              data by Google Fit as well as the rights in this respect and the
              settings options concerning data protection, are available at{" "}
              <a
                href="https://policies.google.com/privacy"
                className="text-blue-600 underline"
              >
                https://policies.google.com/privacy
              </a>
              .
            </p>
            <p className="mb-6">
              The use of information that InforceFit obtains from Google APIs
              and the sharing of it with other apps takes place pursuant to
              Google API Services-User Data Policy, including the requirements
              for limited use.
            </p>

            <h3 className="text-xl font-bold text-black mb-3">
              4.2. Google Health Connect
            </h3>
            <p className="mb-4">
              InforceFit offers its users the option to link the app with Google
              Health Connect, an integrated health data platform provided by
              Google Ireland Limited, Gordon House, Barrow Street, Dublin 4,
              Ireland (“Google”). Google Health Connect facilitates the
              consolidation of health and wellness data across multiple
              applications. When users link InforceFit with Health Connect, the
              following categories of data may be accessed or shared:
            </p>
            <ul className="grid grid-cols-1 gap-3 mb-4">
              {[
                "Activity Data",
                "Body Measurements",
                "Heart & Vital Signs",
                "DataNutrition",
                "GeneralHealth Data",
              ].map((item) => (
                <li key={item} className="flex items-start">
                  <span className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-black shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mb-4">
              This integration allows users to enhance their experience within
              the InforceFit app by providing more comprehensive health insights
              and personalized recommendations based on aggregated data.
            </p>
            <p className="mb-4">
              InforceFit adheres to the Health Connect Permissions Policy,
              including Limited Use requirements, ensuring that any data
              obtained is solely utilized for the enhancement of user features
              within the app. Users maintain full control over their data and
              can modify their permissions or unlink HealthConnect at any time
              through the InforceFit app settings, being informed of any
              potential impacts on app functionality.
            </p>
            <p className="mb-6">
              Further data protection notices, particularly concerning the
              purpose and scope of data collection and the further processing
              and use of data by Google Health Connect, as well as the rights in
              this respect and the available settings options concerning data
              protection, can be found at{" "}
              <a
                href="https://policies.google.com/privacy"
                className="text-blue-600 underline"
              >
                https://policies.google.com/privacy
              </a>
              .
            </p>

            <h3 className="text-xl font-bold text-black mb-3">
              4.3. Apple Health
            </h3>
            <p className="mb-4">
              Users also have the option to link their App with Apple Health, a
              mobile app of the technology group Apple Inc., One Infinite Loop,
              95014 Cupertino, USA. The below-listed data may be transmitted to
              InforceFit in the course of this:
            </p>
            <ul className="grid grid-cols-1 gap-3 mb-4">
              {[
                "Total activity",
                "Steps (distance, number)",
                "Workouts (time, duration, type, calories burned)",
                "Weight, waist measurement",
                "Systolic blood pressure, diastolic blood pressure, blood glucose level",
                "Body mass index",
                "Menstruation cycle",
              ].map((item) => (
                <li key={item} className="flex items-start">
                  <span className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-black shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mb-4">
              In addition, the below-listed data may be transmitted by
              InforceFit to Apple:
            </p>
            <ul className="grid grid-cols-1 gap-3 mb-4">
              {[
                "Total activity",
                "Physical values (weight, waist measurement, blood sugar, systolic and diastolic blood pressure, blood glucose level, body mass index)",
                "Nutritional energy, macronutrients, micronutrients, vitamins",
              ].map((item) => (
                <li key={item} className="flex items-start">
                  <span className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-black shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mb-6">
              InforceFit has the ability to directly access the data pool of
              Apple Health at any time if the user has consented to this. Apple
              Health collects health-relevant user data and displays them as
              processed in the App. Further data protection notices can be found
              at{" "}
              <a
                href="https://www.apple.com/privacy/"
                className="text-blue-600 underline"
              >
                https://www.apple.com/privacy/
              </a>
              .
            </p>

            <h3 className="text-xl font-bold text-black mb-3">
              4.4. Samsung Health
            </h3>
            <p className="mb-4">
              Furthermore, health, diet and fitness data of users of Samsung
              Health, a platform of Samsung Electronics, Ltd, 129, Samsung-ro,
              Yeongtong-gu, Suwon-si, Gyeonggi-do 16677, Republic of Korea, and
              Samsung Medison, Pangyogeok-ro, 145, Bundang-gu, Republic of
              Korea, can be transmitted to InforceFit if the user uses the
              connect option in the InforceFit App:
            </p>
            <ul className="grid grid-cols-1 gap-3 mb-4">
              {[
                "Total activity",
                "Workouts completed",
                "Steps (distance, number)",
                "Weight",
              ].map((item) => (
                <li key={item} className="flex items-start">
                  <span className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-black shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mb-6">
              Samsung Health manages the mentioned user data in order to support
              its users on the path to greater fitness and well-being.
              InforceFit has the ability to directly access the data pool of
              Samsung at any time. Further information is available at{" "}
              <a
                href="https://privacy.samsung.com/privacy/samsung"
                className="text-blue-600 underline"
              >
                https://privacy.samsung.com/privacy/samsung
              </a>
              .
            </p>

            <h3 className="text-xl font-bold text-black mb-3">
              4.5. Huawei Health
            </h3>
            <p className="mb-4">
              Health and fitness data of users can be transmitted by Huawei
              Health, an official app of Huawei, G1, HUAWEI Industrial Base,
              Bantian, Longgang District, Shenzhen 518129 P.R. China, to
              InforceFit if the user uses the connect option in the InforceFit
              App:
            </p>
            <ul className="grid grid-cols-1 gap-3 mb-4">
              {[
                "Total activity",
                "Workouts completed",
                "Steps (distance, number)",
                "Weight",
              ].map((item) => (
                <li key={item} className="flex items-start">
                  <span className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-black shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mb-6">
              InforceFit Health monitors the health and physical activities of
              users. InforceFit has the ability to directly access the data pool
              of Huawei at any time. Further data protection notices are
              available at:{" "}
              <a
                href="https://consumer.huawei.com/minisite/cloudservice/health/privacy-statement.htm?code=HK&language=en"
                className="text-blue-600 underline"
              >
                https://consumer.huawei.com/minisite/cloudservice/health/privacy-statement.htm?code=HK&language=en
              </a>
              .
            </p>

            <h2 className="text-3xl font-bold text-black mb-4 uppercase tracking-tight">
              5. Contact & Customer Support
            </h2>
            <p className="mb-4">
              InforceFit uses a customer service platform to process user
              inquiries submitted through the Website. The Website provides a
              contact form in which users manually enter their data (name, email
              address, iOS or Android version, possible PRO status, description
              of the issue). Based on this information, the InforceFit Support
              Team can view the user data stored in the user’s App.
            </p>
            <p className="mb-4">
              The personal data that users provide to InforceFit in connection
              with their contact request is used solely to respond to the
              inquiry or to establish contact and is processed only for the
              technical administration associated with this request. The data is
              not shared with third parties.
            </p>
            <p className="mb-4">
              If the user has consented to the storage of their data, they have
              the right to withdraw this consent at any time with effect for the
              future. In such cases, their personal data will be deleted without
              delay. The user’s personal data will also be deleted without a
              separate request if InforceFit has completed processing of their
              inquiry or if storage is not permissible for other legal reasons.
            </p>
            <p className="mb-6">
              The processing of data is carried out based on the user’s consent
              under Article 6(1)(a) GDPR and a data processing agreement
              pursuant to Article 28(3) GDPR.
            </p>

            <h2 className="text-3xl font-bold text-black mb-4 uppercase tracking-tight">
              6. Newsletter & Mailings
            </h2>
            <p className="mb-4">
              InforceFit regularly notifies its users by e-mail about current
              diet trends, recipes and other interesting offers and tips from
              the field of nutrition, weight loss, etc. Registration is
              voluntary and takes place using a double opt-in procedure. After
              registering, the user receives an e-mail requesting that they
              confirm their registration. This is necessary so that a third
              party cannot register to receive the newsletter using someone
              else's e-mail address. In order to document that the registration
              meets the legal requirements, it is logged on the basis of
              InforceFit's legitimate interest pursuant to Article 6(1)(f) GDPR.
            </p>
            <p className="mb-4">
              As part of registration on the Website or in the App, the user
              consents to the processing of the provided data for the purpose of
              sending and receiving e-mails (Article 6(1)(a) GDPR). Furthermore,
              the user consents that InforceFit may collect and process data
              about their usage behavior (namely, opening the e-mail and
              clicking on links in it) so that the content of the mailings can
              be tailored to the respective needs.
            </p>
            <p className="mb-4">
              The consent granted by the user to receive these emails may be
              withdrawn at any time and without providing reasons with
              prospective effect by sending an e-mail to{" "}
              <a
                href="mailto:support@inforce.fit"
                className="text-blue-600 underline"
              >
                support@inforce.fit
              </a>
              .
            </p>
            <p className="mb-6">
              In addition, receipt can be stopped by using a link found at the
              end of each newsletter. InforceFit may store the provided e-mail
              address and the data stored in connection with logging the
              registration for up to three years on the basis of its legitimate
              interest in order to be able to demonstrate that consent had
              previously been given. The processing of these data is limited to
              the purpose of possible defense against claims. An individual
              erasure request is possible at any time, provided that the former
              existence of consent is confirmed at the same time.
            </p>

            <h2 className="text-3xl font-bold text-black mb-4 uppercase tracking-tight">
              7. Use by Children
            </h2>
            <p className="mb-6">
              InforceFit is aware of the importance of additional measures to
              protect the privacy of children. Persons under the age of 18 may
              not open an account unless a parent has consented in accordance
              with applicable law. Should InforceFit learn that personal data
              about a child under the minimum age were collected without
              parental consent, InforceFit will initiate steps to erase these
              data without delay. Parents who believe that their child has sent
              us personal data and would like to have these erased should
              contact InforceFit using the contact data provided in No. 1.
            </p>

            <h2 className="text-3xl font-bold text-black mb-4 uppercase tracking-tight">
              8. Use of Tools for Web analysis, Remarketing & Retargeting
            </h2>
            <p className="mb-4">
              Based on the user's consent within the meaning of Article 6(1)(a)
              GDPR, InforceFit utilizes various tools and plug-ins for the
              purpose of web analysis, remarketing and retargeting. In doing so,
              cookies are used that forward the IP address and/or record and
              analyze different types of data. This includes, for example, the
              number of Website visitors, visit duration, average page-loading
              time and visitor origin.
            </p>
            <p className="mb-4 font-semibold">Specifically:</p>

            <h3 className="text-xl font-bold text-black mb-3">
              8.1. Google Tag Manager/Google Analytics/Google Optimize/Google
              Analytics by Firebase
            </h3>
            <p className="mb-4">
              InforceFit utilizes Google Tag Manager on its Website. The
              provider is Google Ireland Ltd. (“Google”), Google Building Gordon
              House, Barrow Street, Dublin, Ireland. Google Tag Manager is used
              to embed tracking or statistics tools and other technologies on
              the Website and does not itself create user profiles.
            </p>
            <p className="mb-4">
              InforceFit uses Google Analytics and Google Optimize on the
              Website and in the App for analysis. Firebase also provides tools
              including Google Analytics by Firebase. With these tools,
              InforceFit can record and analyze user behavior in order to adjust
              the App and improve features and events.
            </p>
            <p className="mb-4">
              Further information about Google's use of data for marketing
              purposes can be found at{" "}
              <a
                href="https://www.google.com/policies/technologies/ads"
                className="text-blue-600 underline"
              >
                https://www.google.com/policies/technologies/ads
              </a>
              . Google opt-out/settings are available at{" "}
              <a
                href="http://www.google.com/ads/preferences"
                className="text-blue-600 underline"
              >
                http://www.google.com/ads/preferences
              </a>
              . Google's data protection policy is available at{" "}
              <a
                href="https://www.google.com/policies/privacy"
                className="text-blue-600 underline"
              >
                https://www.google.com/policies/privacy
              </a>
              .
            </p>

            <h3 className="text-xl font-bold text-black mb-3">
              8.2. Google Ads Remarketing/conversion tracking
            </h3>
            <p className="mb-4">
              On the Website and in the App, the Provider uses Google Ads
              Remarketing. In connection with Google Ads Remarketing, InforceFit
              uses conversion tracking. If the user clicks an advertisement
              placed by Google, a cookie is set for conversion tracking.
            </p>
            <p className="mb-4">
              Users can object by deactivating conversion tracking cookies in
              browser settings and can also prevent capture/processing by Google
              by installing the browser plug-in available at{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                className="text-blue-600 underline"
              >
                https://tools.google.com/dlpage/gaoptout
              </a>
              .
            </p>
            <p className="mb-4">
              More information about Google Ads Remarketing and conversion
              tracking can be found at{" "}
              <a
                href="https://safety.google/privacy/ads-and-data/"
                className="text-blue-600 underline"
              >
                https://safety.google/privacy/ads-and-data/
              </a>
              .
            </p>

            <h3 className="text-xl font-bold text-black mb-3">
              8.3. Apple Search Ads
            </h3>
            <p className="mb-6">
              InforceFit utilizes Apple Search Ads in the App. The user can view
              and limit their personal data that Apple uses in order to display
              relevant advertising. Further data protection notices are
              available at{" "}
              <a
                href="https://searchads.apple.com/privacy"
                className="text-blue-600 underline"
              >
                https://searchads.apple.com/privacy
              </a>
              .
            </p>

            <h2 className="text-3xl font-bold text-black mb-4 uppercase tracking-tight">
              9. Erasure of User Data
            </h2>
            <p className="mb-6">
              InforceFit stores the user's personal data for the period of use
              of the App. If the user account is deleted, the e-mail address,
              first name, last name, profile picture and links to third-party
              providers will be definitively and irretrievably deleted.
            </p>

            <h2 className="text-3xl font-bold text-black mb-4 uppercase tracking-tight">
              10. Resetting of User Account
            </h2>
            <p className="mb-6">
              The user has the ability to reset their account. In this regard, a
              new account will be transparently set up and settings will be
              copied (e-mail address, password, settings, goals, etc.). The
              e-mail address, first name, last name and—if applicable—Fitbit ID,
              Polar ID, Stripe ID and AppsFlyer ID previously associated with
              the original account will be deleted in it.
            </p>

            <h2 className="text-3xl font-bold text-black mb-4 uppercase tracking-tight">
              11. User Rights
            </h2>
            <p className="mb-4">
              The user has the following rights, which can be asserted with the
              controller or the data protection officer.
            </p>

            <h3 className="text-xl font-bold text-black mb-3">
              11.1. Right of access (Article 15 GDPR)
            </h3>
            <p className="mb-4">
              The user has the right at any time to obtain free information
              about their personal data stored by InforceFit, including a copy
              of the personal data that are the subject of the processing.
            </p>

            <h3 className="text-xl font-bold text-black mb-3">
              11.2. Right to rectification (Article 16 GDPR)
            </h3>
            <p className="mb-4">
              The user has the right at any time to have inaccurate or
              incomplete personal data rectified or completed without undue
              delay.
            </p>

            <h3 className="text-xl font-bold text-black mb-3">
              11.3. Right to withdraw consent (Article 7(3) GDPR)
            </h3>
            <p className="mb-4">
              The user has the right to withdraw their consent to data
              processing at any time with prospective effect.
            </p>

            <h3 className="text-xl font-bold text-black mb-3">
              11.4. Right to erasure (Article 17 GDPR)
            </h3>
            <p className="mb-4">
              Subject to the prerequisites of Article 17 GDPR, the user may
              request erasure of their personal data.
            </p>

            <h3 className="text-xl font-bold text-black mb-3">
              11.5. Right to restriction of processing (Article 18 GDPR)
            </h3>
            <p className="mb-4">
              Subject to the prerequisites of Article 18 GDPR, the user may
              request restriction of the processing of personal data concerning
              them.
            </p>

            <h3 className="text-xl font-bold text-black mb-3">
              11.6. Right to data portability (Article 20 GDPR)
            </h3>
            <p className="mb-4">
              The user has the right to receive their provided personal data in
              a structured, commonly used and machine-readable format or to
              transmit those data to another controller.
            </p>

            <h3 className="text-xl font-bold text-black mb-3">
              11.7. Right to object (Article 21 GDPR)
            </h3>
            <p className="mb-4">
              The user may at any time object to the creation of user profiles
              and to processing based on Article 6(1)(e) or (f) GDPR.
            </p>

            <h3 className="text-xl font-bold text-black mb-3">
              11.8. Right not to be subject to automated decision-making
              (Article 22 GDPR)
            </h3>
            <p className="mb-4">
              The user has the right not to be subject to a decision based
              solely on automated processing, including profiling.
            </p>

            <h3 className="text-xl font-bold text-black mb-3">
              11.9. Right to lodge a complaint (Article 77 GDPR)
            </h3>
            <p className="mb-4">
              In addition, the user has the right to lodge a complaint with the
              supervisory authority responsible for the Provider:
            </p>
            <div className="bg-[#f2f5f7] rounded-2xl p-6 mb-6 border border-gray-100">
              <p className="font-bold">INF TECH LTD</p>
              <p>Ukraine, 82300,</p>
              <p>Lviv region, Drohobych district, Boryslav city,</p>
              <p>19 Doroshenka street, 19, #85,</p>
              <p>
                Email:{" "}
                <a
                  href="mailto:support@inforce.fit"
                  className="text-blue-600 underline"
                >
                  support@inforce.fit
                </a>
              </p>
              <p>
                Web:{" "}
                <a
                  href="https://www.inforce.fit"
                  className="text-blue-600 underline"
                >
                  www.inforce.fit
                </a>
              </p>
            </div>

            <h2 className="text-3xl font-bold text-black mb-4 uppercase tracking-tight">
              12. Version & Updating of This Data Protection Policy
            </h2>
            <p className="mb-6">
              This Data Protection Policy is currently valid in the version of
              Aprile, 17 2026. If our Website or our Product is enhanced, or if
              legal requirements should change, it may become necessary to amend
              this Data Protection Policy. The current version can be viewed and
              printed out at any time by visiting{" "}
              <a
                href="https://inforce.fit/privacy-policy"
                className="text-blue-600 underline"
              >
                https://inforce.fit/privacy-policy
              </a>
              .
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
