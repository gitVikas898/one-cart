import React from 'react';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center p-8 min-h-screen">
      <div className="flex flex-col gap-3 items-center justify-center max-w-5xl text-center">
        <p className="text-purple-500 bg-gradient-to-r bg-purple-100 px-4 py-2 rounded-full text-sm mb-4">Introducing</p>
        <div className="px-8 py-4 mb-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="text-purple-500">OneCart</span>
            <span className="text-blue-950"> – Your Universal Shopping Cart</span>
          </h1>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-blue-950">
          Sync, Organize & Shop Smarter!
          </h2>
        </div>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
        Tired of juggling multiple carts across different websites? OneCart brings all your favorite products into one place, making shopping seamless and stress-free.
        </p>
      </div>
      <div>
        <Button variant="purple">Get Started</Button>
        <Button variant="white" className="ml-4">Downlaod Extension</Button>
    </div>
    </div>
  );
};

export default Hero;