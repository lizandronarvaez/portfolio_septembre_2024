import { ProjectsData } from '../data/ProjectsData'

export const Projects = () => {
    return (

        <div className="mx-auto px-4 mb-20">

            <div className="flex flex-col lg:flex-row justify-between">
                <div className="mb-10 lg:mb-0">
                    <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">Proyectos</h1>
                    <p className="font-normal text-gray-500 text-xs md:text-base">En esta sección te dejaré una lista de mis proyectos mas importantes</p>
                </div>

                <div className="space-y-24">
                    {ProjectsData.map((project, i) => (

                        <div key={i} className="flex justify-end space-x-6">
                            <h1 className="font-normal text-gray-500 text-3xl md:text-4xl">{i + 1}</h1>
                            <span className="w-28 h-0.5 bg-orange-300 mt-5"></span>
                            <div className='w-1/2 h-full'>
                                <div className='mb-5'>
                                    <h1 className="font-normal text-gray-700 text-2xl md:text-4xl mb-5">{project.title}</h1>
                                    <p className="font-normal text-gray-500 text-sm md:text-base">{project.description}</p>
                                </div>
                                <a className='text-white font-bold rounded-lg py-3 px-5 bg-orange-400 hover:bg-orange-600' href={project.url} target='_blank'>Visitar</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}
