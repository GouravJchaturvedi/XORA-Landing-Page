import React from 'react'
import { Element } from 'react-scroll'

function Hero() {
  return (
    <section className='relative border-2 border-amber-500 pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32'>
        <Element name='hero'>
            <div className='container'>
                <div className='relative z-2 max-w-512 max-lg:max-w-338'>
                    <div className='caption small-2 uppercase text-p3'>
                        Video Editing
                    </div>
                    <h1 className='mb-6 h1 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12'>
                        Amazingly Simple
                    </h1>
                    <p className='max-w-440 mb-40 body-1 max-md:mb-10'>
                        We designed XORA AI video editor to be an easy to use, quick to learn, and surprisingly powerful.
                    </p>
                </div>
            </div>
        </Element>
    </section>
  )
}

export default Hero
 