'use client';

import { useState } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'John Mwangi',
    agency: 'Waraka Homes',
    quote:
      'Our new website brought us more clients in the first month than the previous year! Highly recommend.',
    image:
      'https://plus.unsplash.com/premium_photo-1682145963461-ec2339485a4d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Grace Wanjiru',
    agency: 'Kitengela Sunrise Plots',
    quote:
      'The WhatsApp integration made it so easy for clients to reach us. The site looks amazing on mobile!',
    image:
      'https://plus.unsplash.com/premium_photo-1661943721318-2eb4b48134ec?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Samuel Otieno',
    agency: 'Ngong Hills Realty',
    quote:
      'We saw a big jump in Google rankings and inquiries. The process was smooth and professional.',
    image:
      'https://plus.unsplash.com/premium_photo-1707155465551-0d2b570926d6?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

export default function TestimonialsCarousel() {
  const [idx, setIdx] = useState(0);

  return (
    <div className="max-w-xl mx-auto bg-base-100 rounded-xl shadow-lg p-8 text-center relative">
      <Image
        src={testimonials[idx].image}
        alt={testimonials[idx].name}
        width={64}
        height={64}
        className="w-16 h-16 rounded-full mx-auto mb-3 object-cover"
      />
      <blockquote className="italic text-base-content text-opacity-70 mb-2">
        {testimonials[idx].quote}
      </blockquote>
      <div className="font-semibold text-base-content opacity-80">
        {testimonials[idx].name}
      </div>
      <div className="text-xs text-base-content text-opacity-50 mb-2">
        {testimonials[idx].agency}
      </div>
      <div className="flex justify-center gap-2 mt-4">
        {testimonials.map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full ${i === idx ? 'bg-primary' : 'bg-base-300'}`}
            onClick={() => setIdx(i)}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
