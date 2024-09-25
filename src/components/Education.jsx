import { EducationData } from "../data/EducationData"

export const Education = () => {
    return (
        <div className="mx-auto px-4">

            <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">Curso y Certificados</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    EducationData.map((item, index) => (

                        <div key={index} className="bg-gray-50 px-6 py-10 rounded-md flex flex-col justify-between">
                            <h4 className="font-semibold text-gray-700 text-lg mb-4">{item.title}</h4>
                            <p className="font-semibold text-gray-500 text-sm mb-4">{item.date}</p>
                            <img className="mb-5" src={item.img} alt={item.img} />
                            <div className="relative">
                                <a className="font-semibold text-white py-3 px-5 rounded-lg bg-orange-400 hover:bg-orange-600" href={item.url}>Ver Certificado</a>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}
