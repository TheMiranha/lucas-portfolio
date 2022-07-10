const Project = ({project}) => {
    return (
        <article class="p-6 bg-gray-900 sm:p-8 m-10 rounded-xl ring ring-pink-500">
  <div class="flex items-start">
    <div
      class="hidden sm:grid sm:h-20 sm:w-20 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2 sm:border-indigo-500"
      aria-hidden="true"
    >
        {project.svg}
    </div>

    <div class="sm:ml-8">
      {project.tags.map((tag, index) => {
        return (
            <strong
            key={`${index}`}
        class="rounded border mr-2 border-pink-600 bg-pink-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        {tag}
      </strong>
        )
      })}

      <h2 class="mt-4 text-lg font-medium sm:text-xl">
        <a href="" class="hover:underline text-gray-400"> {project.name} </a>
      </h2>

      <p class="mt-1 text-base text-gray-400">
        {project.description}
      </p>

      <div class="mt-4 sm:flex sm:items-center sm:gap-2">
        <p class="mt-2 text-sm font-medium text-gray-500 sm:mt-0">
          {project.developers.length > 1 ? 'Developers' : 'Developer'}:
          {project.developers.map((developer, index) => {
            return (
                <>
                 <a key={`${index}`} href={developer.url} class="underline hover:text-gray-700"> {developer.name}</a>
                {index == project.developers.length - 1 ? '' : ', '}
                </>
            )
          })}
        </p>
      </div>
    </div>
  </div>
</article>
    )
}

export default Project;