import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  CalendarCheck,
  LockKeyhole,
  Mail,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Users,
} from 'lucide-react';

const supportAreas = [
  {
    icon: <Users size={22} aria-hidden="true" />,
    title: 'Adviser support',
    description:
      'Structured guidance for onboarding, training coordination and day-to-day support requests.',
  },
  {
    icon: <CalendarCheck size={22} aria-hidden="true" />,
    title: 'Follow-up coordination',
    description:
      'Clear reminders for scheduled adviser conversations, commitments and agreed next steps.',
  },
  {
    icon: <MessageCircle size={22} aria-hidden="true" />,
    title: 'Consent-based communication',
    description:
      'WhatsApp communication is used only with the adviser’s permission and can be stopped at any time.',
  },
];

function NitinGrowthDesk() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'Nitin Growth Desk | Adviser Support by Eazyinsured';

    const description =
      'Official information page for Nitin Growth Desk, an adviser-support initiative operated by Nitin and hosted on Eazyinsured.';
    let metaDescription = document.querySelector('meta[name="description"]');
    const previousDescription = metaDescription?.getAttribute('content');

    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    let canonical = document.querySelector('link[rel="canonical"]');
    const previousCanonical = canonical?.getAttribute('href');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute(
      'href',
      'https://www.eazyinsured.com/nitin-growth-desk',
    );

    return () => {
      document.title = previousTitle;
      if (previousDescription) metaDescription.setAttribute('content', previousDescription);
      if (previousCanonical) canonical.setAttribute('href', previousCanonical);
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#f4f8fb] text-slate-900">
      <header className="border-b border-white/10 bg-primary text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4 md:px-8">
          <Link to="/" aria-label="Eazyinsured home">
            <img
              src="/Images/easy-logo.png"
              alt="Eazyinsured"
              className="h-auto w-[150px] object-contain md:w-[210px]"
            />
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/80 transition hover:text-white md:text-base"
          >
            <ArrowLeft size={18} aria-hidden="true" />
            Eazyinsured home
          </Link>
        </div>
      </header>

      <section className="relative overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(57,220,117,0.24),transparent_40%)]" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.2fr_0.8fr] md:px-8 md:py-20">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/90">
              <ShieldCheck size={18} className="text-[#5bff97]" aria-hidden="true" />
              Official information page on Eazyinsured
            </div>
            <p className="mb-3 text-base font-semibold uppercase tracking-[0.18em] text-[#5bff97]">
              Adviser support initiative
            </p>
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
              Nitin Growth Desk
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80 md:text-xl">
              A focused support desk for adviser coordination, scheduled follow-ups and professional development.
            </p>
          </div>

          <aside className="rounded-3xl border border-white/15 bg-white/10 p-6 shadow-2xl shadow-slate-950/15 backdrop-blur md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#5bff97]">
              Business identity
            </p>
            <dl className="mt-6 space-y-5 text-base">
              <div>
                <dt className="text-white/60">Trade name</dt>
                <dd className="mt-1 font-medium">Nitin Growth Desk</dd>
              </div>
              <div>
                <dt className="text-white/60">Owner and operator</dt>
                <dd className="mt-1 font-medium">Nitin</dd>
              </div>
              <div>
                <dt className="text-white/60">Web presence</dt>
                <dd className="mt-1 font-medium">eazyinsured.com</dd>
              </div>
              <div>
                <dt className="text-white/60">Location</dt>
                <dd className="mt-1 flex items-center gap-2 font-medium">
                  <MapPin size={17} aria-hidden="true" /> Rohtak, Haryana, India
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
            What the desk supports
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-4xl">
            Clear, accountable adviser communication
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Nitin Growth Desk helps associated advisers stay aligned on training, follow-ups and support requests. It does not issue insurance policies, collect premiums or represent itself as an insurance company.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {supportAreas.map(({ icon, title, description }) => (
            <article key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e9fbf0] text-[#087a38]">
                {icon}
              </div>
              <h3 className="mt-5 text-xl font-semibold">{title}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-2 md:px-8 md:py-16">
          <div>
            <div className="flex items-center gap-3 text-primary">
              <LockKeyhole size={24} aria-hidden="true" />
              <h2 className="text-2xl font-semibold">Communication and privacy</h2>
            </div>
            <p className="mt-5 text-base leading-7 text-slate-600">
              Adviser contact details are used only for requested support, operational follow-ups and consented communications. WhatsApp updates are not sent without permission. A recipient may ask to stop WhatsApp communication at any time.
            </p>
            <Link
              to="/nitin-growth-desk/privacy"
              className="mt-5 inline-flex font-semibold text-primary underline decoration-[#39dc75] decoration-2 underline-offset-4"
            >
              Read the Nitin Growth Desk Privacy Notice
            </Link>
          </div>

          <div className="rounded-2xl bg-[#eef5fb] p-6 md:p-8">
            <h2 className="text-2xl font-semibold">Contact the desk</h2>
            <p className="mt-3 text-base leading-7 text-slate-600">
              Use the contact details below for adviser-support enquiries or to update communication preferences.
            </p>
            <div className="mt-6 space-y-4">
              <a
                href="mailto:support@eazyinsured.com"
                className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 font-medium text-primary shadow-sm transition hover:-translate-y-0.5"
              >
                <Mail size={20} aria-hidden="true" />
                support@eazyinsured.com
              </a>
              <a
                href="https://wa.me/918686000434?text=Hello%20Nitin%20Growth%20Desk%2C%20I%20would%20like%20adviser%20support."
                className="flex items-center gap-3 rounded-xl bg-[#087a38] px-4 py-3 font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#066b31]"
              >
                <MessageCircle size={20} aria-hidden="true" />
                Start a WhatsApp conversation
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 md:px-8">
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 text-amber-950">
          <h2 className="text-lg font-semibold">Important disclosure</h2>
          <p className="mt-2 text-base leading-7">
            Nitin Growth Desk is an independently operated adviser-support initiative hosted on Eazyinsured. It is not an insurer and is not the official corporate website of any insurance company. Insurance products, eligibility and claims remain subject to the relevant insurer’s terms and applicable regulations.
          </p>
        </div>
      </section>

      <footer className="bg-[#06365d] text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-sm text-white/70 md:flex-row md:items-center md:justify-between md:px-8">
          <p>© {new Date().getFullYear()} Eazyinsured. Nitin Growth Desk information page.</p>
          <div className="flex gap-5">
            <Link to="/nitin-growth-desk/privacy" className="hover:text-white">Privacy Notice</Link>
            <Link to="/terms-use" className="hover:text-white">Terms of Use</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default NitinGrowthDesk;
