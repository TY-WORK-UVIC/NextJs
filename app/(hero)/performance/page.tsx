import React from "react";
import Hero from '@/components/hero';
import performanceSrc from '/public/performance.jpg';
import { Metadata } from "next";
export const metadata: Metadata={
  title: 'Performance',
}
export default function Page(){


  return (
   <Hero imgUrl={performanceSrc} altTxt="Performance" content="Welcome to Performance"/>
  )
}