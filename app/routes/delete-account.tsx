import { useMemo, useState } from "react";
import type { FormEvent } from "react";
import type { Route } from "./+types/delete-account";

const supportEmail = "support@inforce.fit";

const deletedData = [
  "Profile data and account identifiers",
  "Nutrition goals and plan settings",
  "Onboarding answers",
  "Meal logs and calorie logs",
  "Food history",
  "Settings and preferences",
  "Progress data",
  "Weight history",
  "Data connected to the account that is required to operate the profile",
];

const retainedReasons = [
  "Security and fraud prevention",
  "Compliance with legal obligations",
  "Dispute resolution and enforcement of our terms",
  "Temporary backup and disaster recovery systems",
];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Delete Account | InforceFit" },
    {
      name: "description",
      content:
        "Request deletion of your InforceFit account and associated app data.",
    },
  ];
}

export default function DeleteAccountPage() {
  const [email, setEmail] = useState("");
  const [requestType, setRequestType] = useState(
    "Delete account and all associated data",
  );
  const [message, setMessage] = useState("");
  const [selectedData, setSelectedData] = useState<string[]>([]);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const isSpecificDataRequest = requestType === "Delete specific data only";
  const canSubmit =
    isConfirmed && (!isSpecificDataRequest || selectedData.length > 0);

  const requestBody = useMemo(
    () =>
      [
        "Hello InforceFit Support,",
        "",
        "I would like to submit an account/data deletion request.",
        "",
        `Email address: ${email || "[enter your InforceFit account email]"}`,
        `Request type: ${requestType}`,
        `Specific data selected: ${
          isSpecificDataRequest
            ? selectedData.join(", ") || "[select at least one data category]"
            : "Not applicable"
        }`,
        `Message: ${message || "[optional details]"}`,
        "",
        "I understand that deleting my account and data may be permanent.",
      ].join("\n"),
    [email, isSpecificDataRequest, message, requestType, selectedData],
  );

  const mailtoHref = useMemo(() => {
    return `mailto:${supportEmail}?subject=${encodeURIComponent(
      "InforceFit account deletion request",
    )}&body=${encodeURIComponent(requestBody)}`;
  }, [requestBody]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!canSubmit) return;
    setIsSubmitted(true);
    window.location.href = mailtoHref;
  }

  function toggleSelectedData(item: string) {
    setSelectedData((current) =>
      current.includes(item)
        ? current.filter((selectedItem) => selectedItem !== item)
        : [...current, item],
    );
  }

  return (
    <div className="min-h-screen bg-[#f6f8f9] font-sans text-[#1a1a1a] selection:bg-red-100">
      <main className="mx-auto max-w-6xl px-5 py-8 sm:px-6 md:py-14 lg:px-8">
        <header className="grid gap-8 rounded-[28px] bg-white p-6 shadow-[0_24px_80px_rgba(26,28,30,0.08)] sm:p-8 lg:grid-cols-[1.05fr_0.95fr] lg:p-12">
          <div className="flex flex-col justify-center">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.24em] text-[#D71921]">
              InforceFit
            </p>
            <h1 className="max-w-3xl text-[38px] font-extrabold leading-[1.04] tracking-tight text-black sm:text-5xl lg:text-6xl">
              Delete your InforceFit account and data
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-700 sm:text-lg">
              You can request deletion of your InforceFit account and associated
              app data without signing in to the mobile app. This public page is
              available for users who cannot access the app or prefer to contact
              support through the web.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#request-form"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#1A1C1E] px-6 text-sm font-bold text-white transition hover:bg-neutral-800"
              >
                Request deletion
              </a>
              <a
                href={`mailto:${supportEmail}`}
                className="inline-flex h-12 items-center justify-center rounded-full border border-neutral-300 px-6 text-sm font-bold text-neutral-900 transition hover:border-neutral-500"
              >
                Email support
              </a>
            </div>
          </div>

          <aside className="rounded-2xl bg-[#1A1C1E] p-6 text-white sm:p-8">
            <h2 className="text-2xl font-bold">Before you submit</h2>
            <div className="mt-6 space-y-5 text-sm leading-6 text-white/78">
              <p>
                Use the email address connected to your InforceFit account so
                that support can locate and verify the account.
              </p>
              <p>
                If additional verification is required, we will contact you by
                email before completing the request.
              </p>
              <p>
                Account deletion is processed within 30 days unless a longer
                retention period is required by law, security, or fraud
                prevention obligations.
              </p>
            </div>
          </aside>
        </header>

        <section
          id="request-form"
          className="mt-8 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]"
        >
          <div className="rounded-[24px] bg-white p-6 shadow-[0_18px_60px_rgba(26,28,30,0.06)] sm:p-8">
            <div className="mb-8">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#D71921]">
                Request form
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-black">
                Submit your request
              </h2>
              <p className="mt-3 text-sm leading-6 text-neutral-600">
                Submitting this form opens a pre-filled email to InforceFit
                Support. If your email app does not open, send the same details
                directly to{" "}
                <a
                  href={`mailto:${supportEmail}`}
                  className="font-semibold text-[#D71921] underline"
                >
                  {supportEmail}
                </a>
                .
              </p>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-bold text-neutral-900"
                >
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  autoComplete="email"
                  placeholder="you@example.com"
                  className="h-12 w-full rounded-xl border border-neutral-300 bg-white px-4 text-base text-neutral-900 outline-none transition placeholder:text-neutral-400 focus:border-[#1A1C1E] focus:ring-4 focus:ring-neutral-200"
                />
              </div>

              <div>
                <label
                  htmlFor="request-type"
                  className="mb-2 block text-sm font-bold text-neutral-900"
                >
                  Request type
                </label>
                <select
                  id="request-type"
                  name="requestType"
                  required
                  value={requestType}
                  onChange={(event) => {
                    setRequestType(event.target.value);
                    if (event.target.value !== "Delete specific data only") {
                      setSelectedData([]);
                    }
                  }}
                  className="h-12 w-full rounded-xl border border-neutral-300 bg-white px-4 text-base text-neutral-900 outline-none transition focus:border-[#1A1C1E] focus:ring-4 focus:ring-neutral-200"
                >
                  <option>Delete account and all associated data</option>
                  <option>Delete specific data only</option>
                </select>
              </div>

              {isSpecificDataRequest && (
                <fieldset className="rounded-xl border border-neutral-200 bg-neutral-50 p-4">
                  <legend className="px-1 text-sm font-bold text-neutral-900">
                    Select data to delete
                  </legend>
                  <p className="mt-2 text-sm leading-6 text-neutral-600">
                    Choose one or more data categories that you want InforceFit
                    to delete.
                  </p>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {deletedData.map((item) => (
                      <label
                        key={item}
                        className="flex gap-3 rounded-xl border border-neutral-200 bg-white p-3 text-sm leading-5 text-neutral-800"
                      >
                        <input
                          type="checkbox"
                          name="selectedData"
                          value={item}
                          checked={selectedData.includes(item)}
                          onChange={() => toggleSelectedData(item)}
                          className="mt-0.5 h-4 w-4 shrink-0 accent-[#D71921]"
                        />
                        <span>{item}</span>
                      </label>
                    ))}
                  </div>
                  {selectedData.length === 0 && (
                    <p className="mt-3 text-sm font-medium text-[#D71921]">
                      Select at least one data category to continue.
                    </p>
                  )}
                </fieldset>
              )}

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-bold text-neutral-900"
                >
                  Message <span className="font-medium">(optional)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  rows={5}
                  placeholder="Add any details that may help us process your request."
                  className="w-full resize-y rounded-xl border border-neutral-300 bg-white px-4 py-3 text-base text-neutral-900 outline-none transition placeholder:text-neutral-400 focus:border-[#1A1C1E] focus:ring-4 focus:ring-neutral-200"
                />
              </div>

              <label className="flex gap-3 rounded-xl border border-neutral-200 bg-neutral-50 p-4 text-sm leading-6 text-neutral-700">
                <input
                  type="checkbox"
                  required
                  checked={isConfirmed}
                  onChange={(event) => setIsConfirmed(event.target.checked)}
                  className="mt-1 h-4 w-4 shrink-0 accent-[#D71921]"
                />
                <span>
                  I understand that deleting my account and associated data may
                  be permanent and may remove access to my InforceFit profile,
                  goals, logs, and progress history.
                </span>
              </label>

              <button
                type="submit"
                className="flex h-12 w-full items-center justify-center rounded-full bg-[#D71921] px-6 text-sm font-bold text-white transition hover:bg-[#bd151d] disabled:cursor-not-allowed disabled:opacity-60"
                disabled={!canSubmit}
              >
                Submit deletion request
              </button>

              {isSubmitted && (
                <div
                  role="status"
                  className="rounded-xl border border-green-200 bg-green-50 p-4 text-sm leading-6 text-green-900"
                >
                  Your email client should open with a prepared deletion
                  request. Send that email to complete the request.
                </div>
              )}
            </form>
          </div>

          <div className="space-y-8">
            <section className="rounded-[24px] bg-white p-6 shadow-[0_18px_60px_rgba(26,28,30,0.06)] sm:p-8">
              <h2 className="text-3xl font-bold tracking-tight text-black">
                What data is deleted
              </h2>
              <p className="mt-3 text-sm leading-6 text-neutral-600">
                After your request is verified and processed, the following
                account data will be deleted or anonymized where applicable:
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {deletedData.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-xl bg-[#f2f5f7] p-4 text-sm font-medium leading-6 text-neutral-800"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D71921]" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-[24px] bg-white p-6 shadow-[0_18px_60px_rgba(26,28,30,0.06)] sm:p-8">
              <h2 className="text-3xl font-bold tracking-tight text-black">
                What data may be retained
              </h2>
              <p className="mt-3 text-sm leading-6 text-neutral-600">
                Some records may be retained temporarily when necessary for the
                reasons below. Retained data is limited to what is required and
                is deleted or anonymized when retention is no longer needed.
              </p>
              <ul className="mt-6 space-y-3">
                {retainedReasons.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-6 text-neutral-800"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-black" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </section>

        <section className="mt-8 grid gap-8 lg:grid-cols-3">
          <div className="rounded-[24px] bg-white p-6 shadow-[0_18px_60px_rgba(26,28,30,0.06)] sm:p-8">
            <h2 className="text-2xl font-bold text-black">
              Processing timeline
            </h2>
            <p className="mt-4 text-sm leading-6 text-neutral-600">
              Requests are reviewed and processed within 30 days. We may ask
              for additional verification to protect the account owner before
              deleting data.
            </p>
          </div>

          <div className="rounded-[24px] bg-white p-6 shadow-[0_18px_60px_rgba(26,28,30,0.06)] sm:p-8">
            <h2 className="text-2xl font-bold text-black">Support contact</h2>
            <p className="mt-4 text-sm leading-6 text-neutral-600">
              For questions or fallback requests, contact InforceFit Support at{" "}
              <a
                href={`mailto:${supportEmail}`}
                className="font-semibold text-[#D71921] underline"
              >
                {supportEmail}
              </a>
              .
            </p>
          </div>

          <div className="rounded-[24px] bg-white p-6 shadow-[0_18px_60px_rgba(26,28,30,0.06)] sm:p-8">
            <h2 className="text-2xl font-bold text-black">Privacy policy</h2>
            <p className="mt-4 text-sm leading-6 text-neutral-600">
              Learn more about how InforceFit handles personal data in our{" "}
              <a
                href="/privacy-policy"
                className="font-semibold text-[#D71921] underline"
              >
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
