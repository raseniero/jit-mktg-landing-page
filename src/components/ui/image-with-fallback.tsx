"use client";

import React, { useState } from 'react';
import Image, { ImageProps } from 'next/image';

interface ImageWithFallbackProps extends Omit<ImageProps, 'onError'> {
  fallbackSrc?: string;
}

export function ImageWithFallback({ 
  src, 
  fallbackSrc = 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2560&q=80',
  alt,
  ...props 
}: ImageWithFallbackProps) {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative">
      <Image
        src={error ? fallbackSrc : src}
        alt={alt}
        onError={() => setError(true)}
        onLoad={() => setIsLoading(false)}
        {...props}
      />
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
    </div>
  );
}