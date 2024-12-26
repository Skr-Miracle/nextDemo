import React from 'react';
import scaleSrc from '../../../../public/scale.jpg'
import Hero from '../../components/hero';

export default function Page () {
  return (
      <Hero imgUrl={scaleSrc} altText='scaleSrc' content='welcome to scale'></Hero>
  )
}