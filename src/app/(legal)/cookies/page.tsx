import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy — ArborGRC",
  description: "ArborGRC cookie policy. How we use cookies and similar technologies.",
};

export default function CookiePolicyPage() {
  return (
    <article>
      <header className="mb-10">
        <p
          className="text-[11px] font-medium text-stone-400 mb-2"
          style={{ letterSpacing: "0.12em", textTransform: "uppercase" }}
        >
          Legal
        </p>
        <h1
          className="text-3xl font-bold text-stone-900 mb-3"
          style={{ letterSpacing: "-0.02em" }}
        >
          Cookie Policy
        </h1>
        <p className="text-sm text-stone-400">Last updated: April 8, 2026</p>
      </header>

      <Section title="1. What Are Cookies">
        <p>
          Cookies are small text files placed on your device when you visit a website. They are widely used
          to make websites work efficiently and provide information to site owners. This policy explains how
          ArborGRC (operated by A9 Advisory FZ-LLC) uses cookies and similar technologies.
        </p>
      </Section>

      <Section title="2. Cookies We Use">
        <h3>2.1 Strictly Necessary Cookies</h3>
        <p>
          These cookies are essential for the Platform to function. They enable core functionality such as
          authentication, session management, and security. You cannot opt out of these cookies.
        </p>
        <table className="w-full text-sm border border-stone-200 rounded-[4px] mt-2">
          <thead>
            <tr className="bg-stone-50">
              <th className="text-left p-2 border-b border-stone-200 font-semibold text-stone-900">Cookie</th>
              <th className="text-left p-2 border-b border-stone-200 font-semibold text-stone-900">Purpose</th>
              <th className="text-left p-2 border-b border-stone-200 font-semibold text-stone-900">Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border-b border-stone-200 font-mono text-xs">session_id</td>
              <td className="p-2 border-b border-stone-200">User authentication and session management</td>
              <td className="p-2 border-b border-stone-200">Session</td>
            </tr>
            <tr>
              <td className="p-2 border-b border-stone-200 font-mono text-xs">csrf_token</td>
              <td className="p-2 border-b border-stone-200">Cross-site request forgery protection</td>
              <td className="p-2 border-b border-stone-200">Session</td>
            </tr>
            <tr>
              <td className="p-2 font-mono text-xs">cookie_consent</td>
              <td className="p-2">Stores your cookie preferences</td>
              <td className="p-2">1 year</td>
            </tr>
          </tbody>
        </table>

        <h3>2.2 Analytics Cookies</h3>
        <p>
          These cookies help us understand how visitors interact with the Platform by collecting
          anonymous usage statistics. We use this data to improve the user experience.
        </p>

        <h3>2.3 Functional Cookies</h3>
        <p>
          These cookies remember your preferences (such as display settings and timezone)
          to provide a personalized experience.
        </p>
      </Section>

      <Section title="3. Third-Party Cookies">
        <p>We minimize the use of third-party cookies. Where used, they are limited to:</p>
        <ul>
          <li><strong>Hosting provider (Vercel):</strong> performance and security monitoring.</li>
          <li><strong>Payment processor:</strong> secure transaction handling (only on payment pages).</li>
        </ul>
        <p>We do not use advertising cookies or allow third-party advertising networks on the Platform.</p>
      </Section>

      <Section title="4. Managing Cookies">
        <p>You can control cookies through:</p>
        <ul>
          <li><strong>Browser settings:</strong> most browsers allow you to block or delete cookies through their settings menu.</li>
          <li><strong>Platform settings:</strong> manage your cookie preferences in your account settings (available after login).</li>
        </ul>
        <p>Note that disabling strictly necessary cookies may prevent you from using certain features of the Platform.</p>
      </Section>

      <Section title="5. UAE Compliance">
        <p>
          This Cookie Policy is designed to comply with the UAE Federal Decree-Law No. 45 of 2021 on the
          Protection of Personal Data and the Telecommunications and Digital Government Regulatory Authority
          (TDRA) guidelines on electronic communications.
        </p>
        <p>
          We only set non-essential cookies with your consent, and you may withdraw consent at any time
          through the mechanisms described above.
        </p>
      </Section>

      <Section title="6. Changes to This Policy">
        <p>
          We may update this Cookie Policy to reflect changes in our practices or for regulatory reasons.
          Updates will be posted on this page with a revised &ldquo;Last updated&rdquo; date.
        </p>
      </Section>

    </article>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-8">
      <h2 className="text-lg font-semibold text-stone-900 mb-3" style={{ letterSpacing: "-0.01em" }}>
        {title}
      </h2>
      <div className="text-sm text-stone-600 leading-relaxed space-y-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_h3]:text-[13px] [&_h3]:font-semibold [&_h3]:text-stone-900 [&_h3]:mt-4 [&_h3]:mb-2">
        {children}
      </div>
    </section>
  );
}
