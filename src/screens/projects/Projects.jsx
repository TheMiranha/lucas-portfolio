import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Project from './components/Project'

const ProjectsArray = [
    {
        name: 'Portfolio',
        tags: ['JavaScript', 'ReactJS'],
        url: 'https://github.com/TheMiranha',
        description: 'A portfolio made to share a little about what I know how to do in the programming area',
        svg: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2'/>
      </svg>,
        developers: [{
            name: 'Lucas Miranda',
            url: 'https://github.com/TheMiranha'
        }]
    },
    {
        name: 'Notes',
        tags: ['JavaScript', 'ReactJS', 'NodeJS'],
        url: 'notes-frontend-themiranha.vercel.app',
        description: 'Manage your notes.Read and write wherever you want, share with whoever you want',
        svg: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>,
        developers: [{
            name: 'Lucas Miranda',
            url: 'https://github.com/TheMiranha'
        }]
    },
    {
        name: 'DataS',
        tags: ['JavaScript', 'ReactJS', 'Firebase'],
        url: 'https://data-s-themiranha.vercel.app/',
        description: 'Save and share your spreadsheets wherever, whenever and with whomever you want.',
        svg: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>,
        developers: [{
            name: 'Lucas Miranda',
            url: 'https://github.com/TheMiranha'
        }]
    },
]

const Projects = () => {
    return (
        <div className="bg-gray-900">
            <Header/>
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-3xl text-white font-bold">Projects</h1>
                {ProjectsArray.map((project, index) => {
                    return (
                        <Project project={project} key={`${index}`}/>
                    )
                })}
            </div>
            <Footer/>
        </div>

    )
}

export default Projects;