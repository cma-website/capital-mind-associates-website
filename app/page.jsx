

import TimelineReveal from '../components/TimelineReveal';
import {
  FileText,
  TrendingUp,
  Building2,
  ShieldCheck,
  Handshake,
} from 'lucide-react';

export const metadata = {
  alternates: {
    canonical: '/',
  },
};

import { Hero, ReportTabs } from '../components/Corporate';
import {
  Title,
  Cards,
  Process,
  FAQ,
  CTA,
  Structured,
} from '../components/Sections';

const faq = [
  [
    'What does Capital Mind Associates help with?',
    'We support accounting and bookkeeping, GST, ITR preparation, company and LLP registration, ROC compliance, trademark applications and business-finance documentation. The exact scope is agreed before work begins.',
  ],
  [
    'How do I choose an accounting firm in Delhi?',
    'Look for a clear scope, relevant experience, understandable reporting, transparent fees and a reliable document-review process. Confirm professional credentials where a regulated service requires them.',
  ],
  [
    'Can one business get accounting, GST and tax support together?',
    'Yes. These services can be coordinated so the same underlying records support your accounts and tax reporting. Filing tasks and reporting frequency are agreed for your business.',
  ],
  [
    'Do you work with businesses in Noida and Gurgaon?',
    'We support enquiries from Delhi NCR, including Noida and Gurugram. Documents and discussions can be coordinated remotely; any in-person meeting should be arranged in advance.',
  ],
];

export default function Home() {
  return (
    <main id="main">
        
      <Hero />

      {/* Business Services */}
      <section className="section reveal">
        <div className="wrap">
          <Title>Explore Our Business Services</Title>

          <Cards compact />

          <p className="center-note">
            Need annual company filings?{' '}
            <a href="/roc-filing-compliance-delhi/">
              Explore ROC Filing &amp; Annual Compliance →
            </a>
          </p>
        </div>
      </section>

      {/* Financial Reports */}
      <section className="section tint reveal">
        <div className="wrap">
          <Title>
            Understand the Reports Behind Your Business Decisions
          </Title>
<p style={{
  textAlign: "center",
  maxWidth: "900px",
  margin: "0 auto 24px",
  padding: "0 15px",
  lineHeight: "1.8"
}}>
 Understand revenue, operating expenses, assets, liabilities, working capital and business profitability through structured financial statements and accurate accounting records. These financial reports help businesses monitor financial performance, support budgeting and make informed financial planning decisions.
</p>
          <ReportTabs />
        </div>
      </section>

      {/* Why Work With Us — Timeline Cards */}
     
<section className="section reveal why-choose-section">
  <div className="wrap">
    <Title
      text="Capital Mind Associates provides practical accounting, bookkeeping, taxation and business compliance support to help businesses organise records and make informed decisions."
    >
      Why Work With Capital Mind Associates?
    </Title>

           
<TimelineReveal>
  {[
    {
      icon: '📊',
      title: 'Records Before Assumptions',
      description:
        'We review invoices, bank statements, accounting records and supporting documents to understand your requirements.',
    },
    {
      icon: '📈',
      title: 'Accurate Records, Better Decisions',
      description:
        'Understand your financial reports, profit and loss, balance sheet and cash flow for informed business decisions.',
    },
    {
      icon: '🏢',
      title: 'Connected Business Support',
      description:
        'Get organised support for accounting, GST compliance, income tax documentation and business registration.',
    },
    {
      icon: '🛡️',
      title: 'A Defined Scope of Work',
      description:
        'Understand the agreed services, documentation requirements, responsibilities and professional fees.',
    },
    {
      icon: '🤝',
      title: 'Clear Follow-Through',
      description:
        'Track pending documents, clarifications and the next steps in your accounting and compliance work.',
    },
  ].map((item, index) => (
    <article
      className="timeline-card"
      key={item.title}
      data-index={index}
    >
      <i aria-hidden="true">{item.icon}</i>

      <div className="timeline-card-content">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
    </article>
  ))}
</TimelineReveal>

  </div>
</section>


      {/* Our Process */}
      <section className="section tint reveal">
        <div className="wrap">
          <Title>Simple 4-Step Process</Title>

          <Process />
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="section reveal">
        <div className="wrap faq-layout">
          <div>
            <p className="eyebrow">
              ACCOUNTING &amp; TAXATION · DELHI NCR
            </p>

            <h2>Good advice starts with clear answers.</h2>

            <p>
              For proprietors, growing companies, professionals and LLPs:
              understand your requirement before you commit to a service.
            </p>

            <a className="textlink" href="/about/">
              Get to know Capital Mind Associates →
            </a>
          </div>

          <FAQ items={faq} />
        </div>
      </section>

      {/* Contact Call to Action */}
      <CTA />

      {/* Structured Data */}
      <Structured faq={faq} />
    </main>
  );
}
