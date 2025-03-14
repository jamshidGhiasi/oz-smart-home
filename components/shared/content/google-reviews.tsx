'use client'
import { Metadata } from 'next';
import React from 'react';
import { ElfsightWidget } from 'react-elfsight-widget';

export const metadata: Metadata = {
  title: 'Customer Reviews | Oz Smart Home',
  description: 'See what customers say about Oz Smart Home’s automation solutions. Read reviews and share your experience to help others make informed choices.',
  alternates: {
    canonical: 'https://www.ozsmarthome.com.au/reviews'
  }
}

function GoogleReviews() {
  return <ElfsightWidget widgetId={'4fa8e754-9b08-4bd8-840b-41458db42c6d'} lazy modern />;
}

export default GoogleReviews;