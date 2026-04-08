import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — ArborGRC",
  description: "ArborGRC privacy policy. How we collect, use, and protect your data.",
};

export default function PrivacyPolicyPage() {
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
          Privacy Policy
        </h1>
        <p className="text-sm text-stone-400">Last updated: April 8, 2026</p>
      </header>

      <Section title="1. Introduction">
        <p>
          A9 Advisory FZ-LLC (&ldquo;A9 Advisory&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;)
          operates the ArborGRC platform (&ldquo;Platform&rdquo;) accessible at arborgrc.com. This Privacy Policy
          explains how we collect, use, disclose, and safeguard your information when you visit our website
          or use our Platform.
        </p>
        <p>
          We are committed to protecting your privacy in compliance with the UAE Federal Decree-Law No. 45 of 2021
          on the Protection of Personal Data, the DIFC Data Protection Law (DIFC Law No. 5 of 2020),
          the ADGM Data Protection Regulations 2021, and applicable international data protection standards.
        </p>
      </Section>

      <Section title="2. Information We Collect">
        <h3>2.1 Information You Provide</h3>
        <ul>
          <li><strong>Account information:</strong> name, email address, organization name, job title, and phone number when you register for an account.</li>
          <li><strong>Billing information:</strong> payment details processed securely through our third-party payment provider. We do not store credit card numbers.</li>
          <li><strong>Platform data:</strong> compliance frameworks, risk assessments, audit evidence, control documentation, and other GRC data you input into the Platform.</li>
          <li><strong>Communications:</strong> correspondence when you contact our support team or provide feedback.</li>
        </ul>

        <h3>2.2 Information Collected Automatically</h3>
        <ul>
          <li><strong>Usage data:</strong> pages visited, features used, session duration, and interaction patterns.</li>
          <li><strong>Device information:</strong> browser type, operating system, device type, and screen resolution.</li>
          <li><strong>Log data:</strong> IP address, access times, and referring URLs.</li>
          <li><strong>Cookies:</strong> see our <a href="/cookies" className="text-green-700 hover:underline">Cookie Policy</a> for details.</li>
        </ul>
      </Section>

      <Section title="3. How We Use Your Information">
        <p>We use the information we collect to:</p>
        <ul>
          <li>Provide, maintain, and improve the ArborGRC Platform.</li>
          <li>Process transactions and manage your account.</li>
          <li>Send administrative communications (service updates, security alerts, support messages).</li>
          <li>Analyze usage patterns to improve user experience and Platform performance.</li>
          <li>Comply with legal obligations and enforce our terms.</li>
          <li>Detect, prevent, and address fraud, abuse, or security issues.</li>
        </ul>
        <p>
          We do <strong>not</strong> sell your personal data to third parties. We do <strong>not</strong> use
          your GRC data for advertising, profiling, or any purpose other than providing the Platform service.
        </p>
      </Section>

      <Section title="4. Data Storage and Security">
        <p>
          Your data is stored on secure cloud infrastructure with encryption at rest (AES-256) and in transit (TLS 1.2+).
          We implement industry-standard security measures including:
        </p>
        <ul>
          <li>Role-based access control (RBAC) with row-level security.</li>
          <li>Regular security assessments and penetration testing.</li>
          <li>Automated backup and disaster recovery procedures.</li>
          <li>SOC 2 Type II aligned controls (certification in progress).</li>
        </ul>
        <p>
          Data residency: your Platform data is hosted in the Asia-Pacific region. We are working toward
          UAE Sovereign Cloud hosting for customers who require in-country data residency.
        </p>
      </Section>

      <Section title="5. Data Sharing and Disclosure">
        <p>We may share your information with:</p>
        <ul>
          <li><strong>Service providers:</strong> trusted third parties who assist in operating the Platform (cloud hosting, payment processing, analytics), bound by confidentiality agreements.</li>
          <li><strong>Legal requirements:</strong> when required by law, regulation, legal process, or governmental request.</li>
          <li><strong>Business transfers:</strong> in connection with a merger, acquisition, or sale of assets, with prior notice.</li>
        </ul>
        <p>
          We will never share your GRC compliance data, risk assessments, or audit evidence with any
          third party without your explicit written consent.
        </p>
      </Section>

      <Section title="6. Your Rights">
        <p>Under applicable data protection laws, you have the right to:</p>
        <ul>
          <li><strong>Access:</strong> request a copy of your personal data.</li>
          <li><strong>Rectification:</strong> correct inaccurate or incomplete data.</li>
          <li><strong>Erasure:</strong> request deletion of your personal data (subject to legal retention requirements).</li>
          <li><strong>Portability:</strong> receive your data in a structured, machine-readable format.</li>
          <li><strong>Restriction:</strong> limit how we process your data.</li>
          <li><strong>Objection:</strong> object to processing based on legitimate interests.</li>
        </ul>
        <p>
          To exercise any of these rights, contact us at <strong>privacy@a9advisory.com</strong>.
          We will respond within 30 days.
        </p>
      </Section>

      <Section title="7. Data Retention">
        <p>
          We retain your personal data for as long as your account is active or as needed to provide services.
          Upon account deletion, we will remove your personal data within 90 days, except where retention
          is required by law or for legitimate business purposes (e.g., audit trail requirements).
        </p>
        <p>
          Platform data (GRC frameworks, controls, risks, evidence) is retained for the duration of your
          subscription. Upon termination, you may export your data for 30 days before permanent deletion.
        </p>
      </Section>

      <Section title="8. International Data Transfers">
        <p>
          If your data is transferred outside the UAE, we ensure adequate protection through standard
          contractual clauses, data processing agreements, and compliance with applicable cross-border
          transfer requirements under UAE data protection laws.
        </p>
      </Section>

      <Section title="9. Children&rsquo;s Privacy">
        <p>
          ArborGRC is a business-to-business platform not intended for individuals under the age of 18.
          We do not knowingly collect personal data from minors.
        </p>
      </Section>

      <Section title="10. Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. We will notify you of material changes
          by posting the updated policy on this page and updating the &ldquo;Last updated&rdquo; date.
          Continued use of the Platform after changes constitutes acceptance.
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
