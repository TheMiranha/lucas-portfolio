import { useNavigate } from 'react-router-dom';

const Footer = () => {

  const navigate = useNavigate();

    return (
        <footer class="bg-gray-900">
  <div class="max-w-5xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
    <div class="flex justify-center text-white text-lg">
      Lucas Miranda
    </div>
    <div class="flex justify-center text-white text-lg mt-2">
    <strong class="border text-pink-500 border-current px-5 py-1.5 rounded-full tracking-wide">
  lucas.miranda.strapasson@gmail.com
</strong>
    </div>

    <nav class="mt-8" aria-labelledby="footer-navigation">
      <h2 class="sr-only" id="footer-navigation">Footer navigation</h2>

      <ul class="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
        <li>
          <button class="text-white transition hover:text-white/75" onClick={() => navigate('/')}>
            Introduction
          </button>
        </li>

        <li>
          <button class="text-white transition hover:text-white/75" onClick={() => navigate('/projects')}>
            Projects
          </button>
        </li>
        
        <li>
          <button class="text-white transition hover:text-white/75" onClick={() => navigate('/about')}>
            About
          </button>
        </li>
      </ul>
    </nav>

    <ul class="flex justify-center gap-6 mt-8 md:gap-8">
      <li>
        <a
          href="https://twitter.com/LuMiranha"
          rel="noopener noreferrer"
          target="_blank"
          class="text-white transition hover:text-white/75"
        >
          <span class="sr-only">Twitter</span>
          <svg
            class="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
            />
          </svg>
        </a>
      </li>

      <li>
        <a
          href="https://www.linkedin.com/in/lucas-miranda-496825237/"
          rel="noopener noreferrer"
          target="_blank"
          class="text-white transition hover:text-white/75"
        >
          <span class="sr-only">Linkedin</span>
          <svg
            class="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 256 256"
            aria-hidden="true"
          >
            
    <g fill="none"><path d="M0 18.338C0 8.216 8.474 0 18.92 0h218.16C247.53 0 256 8.216 256 18.338v219.327C256 247.79 247.53 256 237.08 256H18.92C8.475 256 0 247.791 0 237.668V18.335z" fill="#111827"/><path d="M77.796 214.238V98.986H39.488v115.252H77.8zM58.65 83.253c13.356 0 21.671-8.85 21.671-19.91-.25-11.312-8.315-19.915-21.417-19.915-13.111 0-21.674 8.603-21.674 19.914 0 11.06 8.312 19.91 21.169 19.91h.248zM99 214.238h38.305v-64.355c0-3.44.25-6.889 1.262-9.346 2.768-6.885 9.071-14.012 19.656-14.012 13.858 0 19.405 10.568 19.405 26.063v61.65h38.304v-66.082c0-35.399-18.896-51.872-44.099-51.872-20.663 0-29.738 11.549-34.78 19.415h.255V98.99H99.002c.5 10.812-.003 115.252-.003 115.252z" fill="#fff"/></g>
          </svg>
        </a>
      </li>

      <li>
        <a
          href="https://github.com/TheMiranha"
          rel="noopener noreferrer"
          target="_blank"
          class="text-white transition hover:text-white/75"
        >
          <span class="sr-only">GitHub</span>
          <svg
            class="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
      </li>
    </ul>
  </div>
</footer>
    )
}

export default Footer;