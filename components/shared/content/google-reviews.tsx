'use client'
import { Metadata } from 'next';
import React from 'react';
import { ElfsightWidget } from 'react-elfsight-widget';

export const metadata: Metadata = {
  title: 'Customer Reviews | Oz Smart Home',
  description: 'See what customers are saying about Oz Smart Home. Read real reviews and testimonials on our smart home automation services and customer satisfaction.',
  alternates: {
    canonical: 'https://www.ozsmarthome.com.au/reviews'
  }
}

function GoogleReviews() {
  return <ElfsightWidget widgetId={'4fa8e754-9b08-4bd8-840b-41458db42c6d'} lazy modern />;
}

export default GoogleReviews;