import { useEffect } from 'react';
import { ArrowLeft, Mail, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const sections = [
  {
    title: 'Information we use',
    body: 'We may use an adviser’s name, phone number, email address and support-related messages when the adviser provides them or asks us for assistance.',
  },
  {
    title: 'Why we use it',
    body: 'Information is used for requested adviser support, onboarding or training coordination, agreed follow-ups and communication-preference management.',
  },
  {
    title: 'WhatsApp communication',
    body: 'WhatsApp messages are sent only when the recipient has given permission or started the conversation. A recipient can ask us to stop WhatsApp communication at any time.',
  },
  {
    title: 'Sharing and retention',
    body: 'We do not sell adviser contact information. We retain only what is reasonably required for support, record-keeping and applicable legal obligations, and use service providers only where needed to operate the communication system.',
  },
  {
    title: 'Your choices',
    body: 'You may ask what information we hold, request a correction or deletion where applicable, or withdraw communication consent by contacting the desk.',
  },
];

function NitinGrowthDeskPrivacy() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'Privacy Notice | Nitin Growth Desk';

    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#f4f8fb] text-slate-900">
      <header className="bg-primary text-white">
        <div className="mx-auto flex max-w-4xl items-center justify-between gap-6 px-5 py-4 md:px-8">
          <Link to="/" aria-label="Eazyinsured home">
            <img
              src="/Images/easy-logo.png"
              alt="Eazyinsured"
              className="h-auto w-[150px] object-contain md:w-[210px]"
            />
          </Link>
          <Link
            to="/nitin-growth-desk"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/80 transition hover:text-white md:text-base"
          >
            <ArrowLeft size={18} aria-hidden="true" />
            Growth Desk
          </Link>
        </div>
      </header>

      <section className="bg-primary pb-16 pt-10 text-white md:pb-20 md:pt-14">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm">
            <ShieldCheck size={18} className="text-[#5bff97]" aria-hidden="true" />
            Nitin Growth Desk
          </div>
          <h1 className="mt-6 text-4xl font-semibold md:text-5xl">Privacy Notice</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/80">
            This notice explains how Nitin Growth Desk handles adviser information and consent-based communications.
          </p>
          <p className="mt-4 text-sm text-white/60">Last updated: 12 September 2026</p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-12 md:px-8 md:py-16">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <p className="leading-7 text-slate-600">
            Nitin Growth Desk is an independently operated adviser-support initiative hosted on Eazyinsured and operated by Nitin in Rohtak, Haryana, India. It is not an insurer.
          </p>
        </div>

        <div className="mt-8 space-y-5">
          {sections.map(({ title, body }) => (
            <article key={title} className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
              <h2 className="text-xl font-semibold text-primary">{title}</h2>
              <p className="mt-3 leading-7 text-slate-600">{body}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-2xl bg-[#e9fbf0] p-6 md:p-8">
          <h2 className="text-xl font-semibold text-[#075d2d]">Privacy contact</h2>
          <p className="mt-3 leading-7 text-slate-700">
            For a privacy request or to change your WhatsApp communication preference, contact:
          </p>
          <a
            href="mailto:support@eazyinsured.com"
            className="mt-5 inline-flex items-center gap-2 font-semibold text-primary underline decoration-[#39dc75] decoration-2 underline-offset-4"
          >
            <Mail size={19} aria-hidden="true" />
            support@eazyinsured.com
          </a>
        </div>
      </section>

      <footer className="bg-[#06365d] text-white">
        <div className="mx-auto max-w-4xl px-5 py-8 text-sm text-white/70 md:px-8">
          © {new Date().getFullYear()} Eazyinsured. Nitin Growth Desk privacy notice.
        </div>
      </footer>
    </main>
  );
}

export default NitinGrowthDeskPrivacy;
