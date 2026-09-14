import React from 'react';
import { UserPlus, ListChecks, ShieldPlus, CreditCard, ExternalLink, Lightbulb, Sparkles } from 'lucide-react';
import { SectionTab, DashedDivider, Polaroid } from '../components/UI.jsx';

const steps = [
  {
    icon: UserPlus,
    title: 'Create an IEEE Account',
    items: [
      'Go to the official IEEE website.',
      'Click "Create Account" at the top right.',
      'Fill in your name and email address.',
      'Create a secure password.',
      'Complete the email verification process.',
    ],
  },
  {
    icon: ListChecks,
    title: 'Choose Your Membership Type',
    items: [
      'Log into your new account.',
      'Click the "Join IEEE" button.',
      'Select "Join as a professional" or "Join as a student" based on your status.',
      'Enter your educational or professional details.',
    ],
  },
  {
    icon: ShieldPlus,
    title: 'Add the IAS Society',
    items: [
      'Navigate to the Societies step during checkout, or go directly to the IEEE IAS Membership Catalog page.',
      'Search for Industry Applications Society (IAS).',
      'Click "Add to Cart".',
    ],
    tip: 'Look out for bundling discounts — adding the Power Electronics Society (PELS) alongside IAS often reduces the rate.',
  },
  {
    icon: CreditCard,
    title: 'Complete Payment',
    items: [
      'Review your cart to confirm both IEEE base membership and IAS are listed.',
      'Enter any available promo codes — students can often find active 50% off discounts.',
      'Pay by credit card, debit card, or PayPal.',
      'Download your digital membership card once payment is confirmed.',
    ],
  },
];

export default function BecomeMember() {
  return (
    <div className="px-6 sm:px-10 py-10 sm:py-16 max-w-5xl w-full mx-auto">
      <SectionTab>quest log</SectionTab>
      <h1 className="font-heading font-black text-5xl sm:text-6xl mt-4 text-ink tracking-tight">
        Become a Member
      </h1>
      <p className="font-hand text-2xl sm:text-3xl mt-3 text-ink/90 max-w-2xl">
        Four steps stand between you and your IEEE Industry Applications
        Society membership. Check them off as you go.
      </p>

      <a
        href="https://www.ieee.org"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 font-hand text-xl mt-4 text-marker underline underline-offset-4 hover:text-ink transition-colors"
      >
        Open ieee.org <ExternalLink size={18} />
      </a>

      <DashedDivider />

      <div className="grid md:grid-cols-2 gap-8">
        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <div
              key={step.title}
              className="relative bg-white/70 ink-border rounded-lg p-6 shadow-[5px_5px_0_#222222]"
            >
              <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-marker ink-border flex items-center justify-center font-heading font-black text-paper text-xl rotate-[-4deg]">
                {i + 1}
              </div>
              <div className="flex items-center gap-3 mb-4 pl-6">
                <Icon className="text-marker" size={28} />
                <h2 className="font-heading font-extrabold text-2xl text-ink">
                  {step.title}
                </h2>
              </div>
              <ul className="space-y-2 pl-6">
                {step.items.map((item, j) => (
                  <li key={j} className="font-hand text-lg text-ink/90 flex gap-2">
                    <span className="text-marker">✓</span> {item}
                  </li>
                ))}
              </ul>
              {step.tip && (
                <div className="mt-4 ml-6 flex items-start gap-2 bg-olive/10 border border-olive/40 rounded-md p-3 rotate-[-1deg]">
                  <Lightbulb size={20} className="text-olive shrink-0 mt-0.5" />
                  <p className="font-hand text-base text-ink/90">{step.tip}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <DashedDivider />

      {/* Life inside IEEE IAS Polaroids */}
      <div className="mt-8">
        <div className="flex items-center gap-2 mb-6">
          <Sparkles className="text-marker" size={24} />
          <h2 className="font-heading font-extrabold text-3xl text-ink">
            Life Inside the IAS Chapter
          </h2>
        </div>
        <p className="font-hand text-xl text-ink/80 mb-6">
          From industry headquarters excursions to hands-on leadership bootcamps:
        </p>

        <div className="grid sm:grid-cols-2 gap-8 items-start">
          <Polaroid
            img="/assets/ieee/wso22_bw.jpg"
            caption="Direct Industrial Exposure · Tech Site Tours"
            rotate="-rotate-2"
            aspect="aspect-[3/4]"
            className="max-w-xs mx-auto w-full"
          />
          <Polaroid
            img="/assets/ieee/leadspring2_bw.jpg"
            caption="Student Leadership &amp; Community Frontline"
            rotate="rotate-2"
            aspect="aspect-[3/4]"
            className="max-w-xs mx-auto w-full"
          />
        </div>
      </div>
    </div>
  );
}
