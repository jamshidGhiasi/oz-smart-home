// app/booking/page.tsx (or wherever you place the component)
'use client'; // Required if using useEffect or browser-only code

import { useEffect } from 'react';

export default function BookingPage() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.head.appendChild(script);
  }, []);

  return (
    <div
      className="calendly-inline-widget"
      data-url="https://calendly.com/ozsmarthome-info/30min"
      style={{ minWidth: '320px', height: '700px' }}
    />
  );
}
