import Python_Example from '../../../assets/python_example.png'
import Php_Example from '../../../assets/php_example.png'
import C_Example from '../../../assets/c_example.png'
import { useNavigate } from 'react-router-dom'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Banner = () => {

  const navigate = useNavigate();

  return (
    <section class='text-white bg-gray-900'>
      <div class='max-w-screen-xl px-4 py-32 mx-auto lg:items-center lg:flex'>
        <div class='max-w-3xl mx-auto text-center'>
          <h1 class='text-3xl font-extrabold text-transparent sm:text-5xl bg-clip-text bg-gradient-to-r from-pink-200 via-pink-500 to-purple-600'>
            Hello There.
          </h1>

          <p class='max-w-xl mx-auto mt-4 sm:leading-relaxed sm:text-xl'>
            My name is Lucas Miranda. I studied Information Technology and am
            currently studying Electronic Engineering at a federal institute in
            Brazil. I made this website to introduce myself and show some of my
            work!
          </p>

          <div class='flex flex-wrap justify-center gap-4 mt-8'>
            <a
              class='block w-full px-12 py-3 text-sm font-medium text-white bg-pink-500 border border-pink-500 rounded sm:w-auto active:text-opacity-75 hover:bg-transparent hover:text-white focus:outline-none focus:ring'
              target="_blank"
              rel="noopener noreferrer"
              href='https://github.com/TheMiranha'
            >
              Open Github
            </a>

            <AnchorLink
              class='block w-full px-12 py-3 text-sm font-medium text-white bg-pink-500 border border-pink-500 rounded sm:w-auto active:text-opacity-75 hover:bg-transparent hover:text-white focus:outline-none focus:ring'
              href="#footer"
            >
              Contact
            </AnchorLink>
          </div>
          <div class='flex flex-wrap mx-auto md:flex-nowrap p-12'>
            <a>
              <div class='flex w-full'>
                <div class='relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform bg-white shadow-2xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8'>
                  <img
                    class='object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36'
                    src={C_Example}
                    alt='blog'
                  />
                  <div class='px-6 py-8'>
                    <h4 class='mt-4 text-2xl font-semibold text-neutral-600'>
                      <span class='text-pink-500'>C</span>
                    </h4>
                    <p class='mt-4 text-base font-normal text-gray-500 leading-relax'>
                      It is one of the most popular programming languages ​​in
                      the world, which has been around since the concepts of
                      structured language and the personal computer emerged.
                    </p>
                  </div>
                </div>
              </div>
            </a>

            <a>
              <div class='flex w-full'>
                <div class='relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform bg-white shadow-2xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8'>
                  <img
                    class='object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36'
                    src={Php_Example}
                    alt='blog'
                  />
                  <div class='px-6 py-8'>
                    <h4 class='mt-4 text-2xl font-semibold text-neutral-600'>
                      <span class='text-pink-500'>PHP</span>
                    </h4>
                    <p class='mt-4 text-base font-normal text-gray-500 leading-relax'>
                      It is a widely used, general-purpose, open source scripting language especially suited for web development that can be embedded within HTML(Can also be used as Rest API).
                    </p>
                  </div>
                </div>
              </div>
            </a>

            <a>
              <div class='flex w-full'>
                <div class='relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform bg-white shadow-2xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8'>
                  <img
                    class='object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36'
                    src={Python_Example}
                    alt='javascript'
                  />
                  <div class='px-6 py-8'>
                    <h4 class='mt-4 text-2xl font-semibold text-neutral-600'>
                      <span class='text-pink-500'>Python</span>
                    </h4>
                    <p class='mt-4 text-base font-normal text-gray-500 leading-relax'>
                      General-purpose Open-Source language widely used in data science, machine learning, web development, application development, script automation and mroe
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
