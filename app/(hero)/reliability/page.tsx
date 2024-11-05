import React from "react";
import Hero from '@/components/hero';
import reliabilitySrc from '/public/Reliability.jpg';

import { Metadata } from "next";
export const metadata: Metadata={
  title: 'Reliability',
}
export default function Page(){


  return (
   <Hero imgUrl={reliabilitySrc} altTxt="Reliability" content="Welcome to Reliability"/>
  )
}