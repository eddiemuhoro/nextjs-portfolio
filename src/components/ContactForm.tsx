'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      name: (form.elements[0] as HTMLInputElement).value,
      email: (form.elements[1] as HTMLInputElement).value,
      message: (form.elements[3] as HTMLTextAreaElement).value,
    };
    const res = await fetch('https://formspree.io/f/mknlkryo', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      setStatus('success');
      form.reset();
    } else {
      setStatus('error');
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-base-100 rounded-xl shadow-lg p-8">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="input input-bordered"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="input input-bordered"
          required
        />
        <input
          type="text"
          placeholder="Agency Name (optional)"
          className="input input-bordered"
        />
        <textarea
          placeholder="How can I help you?"
          className="textarea textarea-bordered"
          rows={4}
          required
        />
        <button type="submit" className="btn btn-primary w-full">
          Send Inquiry
        </button>
      </form>
      {status === 'success' && (
        <div className="text-green-600 text-center mt-4">
          Thank you! Your message has been sent.
        </div>
      )}
      {status === 'error' && (
        <div className="text-red-600 text-center mt-4">
          Sorry, there was a problem. Please try again later.
        </div>
      )}
      <div className="text-center mt-4">
        <a
          href="https://wa.me/254705982249"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-primary font-semibold underline z-hover"
        >
          Or chat on WhatsApp
        </a>
      </div>
    </div>
  );
}
