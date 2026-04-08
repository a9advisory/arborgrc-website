import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — ArborGRC",
  description: "ArborGRC terms of service. Conditions for using the platform.",
};

export default function TermsOfServicePage() {
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
          Terms of Service
        </h1>
        <p className="text-sm text-stone-400">Last updated: April 8, 2026</p>
      </header>

      <Section title="1. Agreement to Terms">
        <p>
          These Terms of Service (&ldquo;Terms&rdquo;) constitute a legally binding agreement between you
          (&ldquo;User&rdquo;, &ldquo;you&rdquo;, or &ldquo;your&rdquo;) and A9 Advisory FZ-LLC
          (&ldquo;A9 Advisory&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) governing
          your access to and use of the ArborGRC platform (&ldquo;Platform&rdquo;) and related services.
        </p>
        <p>
          By accessing or using the Platform, you agree to be bound by these Terms. If you do not agree,
          you must not access or use the Platform.
        </p>
      </Section>

      <Section title="2. Platform Description">
        <p>ArborGRC is an enterprise-grade Governance, Risk, and Compliance (GRC) platform that provides:</p>
        <ul>
          <li>Information Security Management System (ISMS) tools aligned with ISO 27001:2022 and UAE-IA.</li>
          <li>Enterprise Risk Management (ERM) capabilities based on ISO 31000.</li>
          <li>Third-Party Risk Management (TPRM) and vendor assessment workflows.</li>
          <li>Compliance tracking, audit management, and evidence collection.</li>
          <li>Excel import/export functionality for seamless data migration.</li>
        </ul>
      </Section>

      <Section title="3. Account Registration">
        <p>To use the Platform, you must:</p>
        <ul>
          <li>Provide accurate, current, and complete registration information.</li>
          <li>Maintain the security of your account credentials.</li>
          <li>Be at least 18 years of age and authorized to enter into these Terms on behalf of your organization.</li>
          <li>Promptly notify us of any unauthorized access to your account.</li>
        </ul>
        <p>
          You are responsible for all activities that occur under your account. We are not liable for any loss
          arising from unauthorized use of your account.
        </p>
      </Section>

      <Section title="4. Subscription and Payment">
        <h3>4.1 Plans</h3>
        <p>
          The Platform is offered on a per-module subscription basis. Pricing details, features, and billing
          cycles are provided at the time of purchase and may vary by region.
        </p>
        <h3>4.2 Payment Terms</h3>
        <ul>
          <li>Subscription fees are billed in advance on a monthly or annual basis.</li>
          <li>All fees are non-refundable unless otherwise stated in your subscription agreement.</li>
          <li>We reserve the right to modify pricing with 30 days&rsquo; notice before the next billing cycle.</li>
        </ul>
        <h3>4.3 Free Trial</h3>
        <p>
          If we offer a free trial, you may use the Platform during the trial period at no cost.
          At the end of the trial, your account will convert to a paid subscription unless cancelled.
        </p>
      </Section>

      <Section title="5. Acceptable Use">
        <p>You agree not to:</p>
        <ul>
          <li>Use the Platform for any unlawful purpose or in violation of any applicable laws or regulations.</li>
          <li>Attempt to gain unauthorized access to any part of the Platform or its infrastructure.</li>
          <li>Interfere with or disrupt the Platform&rsquo;s integrity, performance, or availability.</li>
          <li>Upload malicious code, viruses, or harmful content.</li>
          <li>Reverse-engineer, decompile, or disassemble any part of the Platform.</li>
          <li>Use the Platform to store or process data that violates third-party intellectual property rights.</li>
          <li>Share your account credentials or allow unauthorized users to access your account.</li>
          <li>Scrape, crawl, or use automated means to access the Platform without our written consent.</li>
        </ul>
      </Section>

      <Section title="6. Data Ownership">
        <h3>6.1 Your Data</h3>
        <p>
          You retain all rights and ownership of the data you upload, create, or store on the Platform
          (&ldquo;Customer Data&rdquo;). This includes compliance frameworks, risk assessments, controls,
          evidence, and audit documentation.
        </p>
        <h3>6.2 Our Rights</h3>
        <p>
          We own all intellectual property rights in the Platform, including its software, design, algorithms,
          documentation, and branding. You are granted a limited, non-exclusive, non-transferable license
          to use the Platform for the duration of your subscription.
        </p>
        <h3>6.3 Data Portability</h3>
        <p>
          You may export your Customer Data at any time in standard formats (Excel, CSV, PDF) using
          the Platform&rsquo;s export functionality. Upon subscription termination, you have 30 days to
          export your data before permanent deletion.
        </p>
      </Section>

      <Section title="7. Service Level">
        <p>
          We strive to maintain Platform availability of 99.9% uptime, excluding planned maintenance windows.
          We will provide reasonable advance notice of scheduled maintenance. We are not liable for downtime
          caused by factors outside our reasonable control, including force majeure events.
        </p>
      </Section>

      <Section title="8. Confidentiality">
        <p>
          We treat all Customer Data as confidential. We will not access, use, or disclose your Customer Data
          except as necessary to provide the Platform service, comply with legal obligations, or with your
          explicit written consent.
        </p>
        <p>Our confidentiality obligations survive termination of these Terms for a period of three (3) years.</p>
      </Section>

      <Section title="9. Limitation of Liability">
        <p>To the maximum extent permitted by applicable law:</p>
        <ul>
          <li>The Platform is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranties of any kind.</li>
          <li>We do not warrant that the Platform will be uninterrupted, error-free, or secure.</li>
          <li>Our total liability shall not exceed the fees paid by you in the 12 months preceding the claim.</li>
          <li>We are not liable for indirect, incidental, consequential, or punitive damages.</li>
        </ul>
        <p>
          The Platform provides tools to assist with GRC processes. It does not constitute legal, compliance,
          or regulatory advice. You remain responsible for your organization&rsquo;s compliance decisions.
        </p>
      </Section>

      <Section title="10. Indemnification">
        <p>
          You agree to indemnify and hold harmless A9 Advisory, its officers, directors, employees, and agents
          from any claims, liabilities, damages, or expenses arising from:
        </p>
        <ul>
          <li>Your use of the Platform in violation of these Terms.</li>
          <li>Your violation of any applicable law or regulation.</li>
          <li>Any data you upload that infringes third-party rights.</li>
        </ul>
      </Section>

      <Section title="11. Termination">
        <ul>
          <li>You may cancel your subscription at any time through the Platform settings or by contacting support.</li>
          <li>We may suspend or terminate your access for violation of these Terms with reasonable notice.</li>
          <li>Upon termination, your right to use the Platform ceases immediately.</li>
          <li>Provisions that by their nature should survive termination (confidentiality, liability, indemnification) will survive.</li>
        </ul>
      </Section>

      <Section title="12. Governing Law">
        <p>
          These Terms are governed by and construed in accordance with the laws of the Dubai International
          Financial Centre (DIFC), UAE. Any disputes shall be resolved through the DIFC Courts,
          unless otherwise agreed in writing.
        </p>
      </Section>

      <Section title="13. Changes to Terms">
        <p>
          We may update these Terms from time to time. Material changes will be communicated via email
          or prominent notice on the Platform at least 30 days before taking effect. Continued use after
          changes constitutes acceptance of the revised Terms.
        </p>
      </Section>

      <Section title="14. Contact">
        <p>For questions about these Terms:</p>
        <div className="border border-stone-200 rounded-[4px] p-4 bg-white mt-3">
          <p className="text-sm"><strong>A9 Advisory FZ-LLC</strong></p>
          <p className="text-sm text-stone-500">Email: legal@a9advisory.com</p>
          <p className="text-sm text-stone-500">Website: a9advisory.com</p>
        </div>
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
