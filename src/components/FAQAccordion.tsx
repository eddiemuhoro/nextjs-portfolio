'use client';

import { useState } from 'react';

const faqs = [
  {
    q: 'How long does a website take?',
    a: 'Most projects are completed in 2-4 weeks, depending on requirements.',
  },
  {
    q: 'What is the cost?',
    a: 'Pricing is tailored to your needs. Contact me for a free quote.',
  },
  {
    q: 'Do you offer support?',
    a: 'Yes! I provide ongoing support and updates as needed.',
  },
  {
    q: 'Can you integrate WhatsApp?',
    a: 'Absolutely. WhatsApp chat and inquiry forms are a popular feature.',
  },
];

export default function FAQAccordion() {
  const [open, setOpen] = useState(-1);

  return (
    <div className="max-w-2xl mx-auto">
      {faqs.map((faq, i) => (
        <div key={i} className="mb-3 border-b border-base-300">
          <button
            className="w-full text-left py-3 font-semibold text-base-content opacity-80 focus:outline-none flex justify-between items-center"
            onClick={() => setOpen(open === i ? -1 : i)}
          >
            {faq.q}
            <span className="ml-2 text-primary">{open === i ? '-' : '+'}</span>
          </button>
          {open === i && (
            <div className="pb-3 text-base-content text-opacity-70">
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
