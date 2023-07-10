import React from 'react'
import Link from 'next/link'

const Home = () => {
  return (
    <>
      <section className='w-full flex-center flex-col'>
        <h1 className='head_text text-center'>
          Quickly Create & Practice
          <br className='max-md:hidden' />
          <span className='orange_gradient text-center'> Online Flashcards</span>
        </h1>
        <p className='desc text-center'>
          Flash McFlasherson is an  online tool for students and teachers to
          discover, create and share creative flashcards rapidly.
        </p>
        <Link href="/collections" className='head_text text-center'>Go to Collections</Link>
      </section>
    </>
  )
}

export default Home