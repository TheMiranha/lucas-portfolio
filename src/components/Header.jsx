import { useNavigate, useLocation } from 'react-router'

const Header = () => {

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header class='bg-gray-900'>
      <div class='max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8'>
        <div class='flex items-center justify-between h-16'>
          <div class='flex-1 md:flex md:items-center md:gap-12'>
            <button class='block text-lg text-white' onClick={() => {navigate('/')}}>
              <span class='sr-only'>Lucas Miranda</span>
              Lucas Miranda
            </button>
          </div>
          <div class='md:flex md:items-center md:gap-12'>
            <nav class='hidden md:block' aria-labelledby='header-navigation'>
              <h2 class='sr-only' id='header-navigation'>
                Header Navigation
              </h2>

              <ul class='flex items-center gap-6 text-sm'>
                <li>
                  <button
                    class='text-white text-base transition hover:text-white/75'
                    onClick={() => {navigate('/')}}
                  >
                    Introduction
                  </button>
                </li>
                <li>
                  <button
                    class='text-white text-base transition hover:text-white/75'
                    onClick={() => {navigate('/projects')}}
                  >
                    Projects
                  </button>
                </li>
              </ul>
            </nav>

            <div class='flex items-center gap-4'>
              <div class='sm:gap-4 sm:flex'>
                <a
                  class='px-5 py-2.5 text-base font-medium text-white bg-pink-500 rounded-md shadow'
                  target={`_blank`}
                  href='https://github.com/TheMiranha'
                >
                  Github
                </a>
              </div>

              <div class='block md:hidden'>
                <div class='dropdown dropdown-end'>
                  <label
                    tabindex='0'
                    class='p-2 text-white transition rounded hover:text-white/75'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      class='w-5 h-5'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      stroke-width='2'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        d='M4 6h16M4 12h16M4 18h16'
                      />
                    </svg>
                  </label>
                  <ul
                    tabindex='0'
                    class='dropdown-content p-2 shadow bg-gray-900'
                  >
                    <li>
                      <button
                        onClick={() => {navigate('/')}}
                        class={location.pathname == '/' ? 'flex items-center border-l-[3px] border-pink-500 bg-gray-800 px-4 py-3 text-pink-500' : 'flex items-center border-l-[3px] border-transparent px-4 py-3 text-gray-500 hover:border-gray-100 hover:bg-gray-50 hover:text-gray-700'}
                      >
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          class='w-5 h-5 opacity-75'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                          stroke-width='2'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
                          />
                        </svg>

                        <span class='ml-3 text-sm font-medium'> Home </span>
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => {navigate('/projects')}}
                        class={location.pathname == '/projects' ? 'flex items-center border-l-[3px] border-pink-500 bg-gray-800 px-4 py-3 text-pink-500' : 'flex items-center border-l-[3px] border-transparent px-4 py-3 text-gray-500 hover:border-gray-100 hover:bg-gray-50 hover:text-gray-700'}
                      >
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          class='w-5 h-5 opacity-75'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                          stroke-width='2'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z'
                          />
                        </svg>

                        <span class='ml-3 text-sm font-medium'> Projects </span>
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => {navigate('/about')}}
                        class={location.pathname == '/about' ? 'flex items-center border-l-[3px] border-pink-500 bg-gray-800 px-4 py-3 text-pink-500' : 'flex items-center border-l-[3px] border-transparent px-4 py-3 text-gray-500 hover:border-gray-100 hover:bg-gray-50 hover:text-gray-700'}
                      >
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          class='w-5 h-5 opacity-75'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                          stroke-width='2'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2'
                          />
                        </svg>

                        <span class='ml-3 text-sm font-medium'> About </span>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
