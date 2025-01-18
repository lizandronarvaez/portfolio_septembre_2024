import ImgMe from "../../public/img/me.png"
import LogoNav from "../../public/assets/LogoNav.svg"
import Arrow from "../../public/assets/Arrow_down.svg"
import { GetEnviroment } from "../utils/GetEnviroment"
export const About = () => {
    const { VITE_URL_CV } = GetEnviroment();
    const scrollToTech = () => {
        const element = document.getElementById("tech");
        if (element) element.scrollIntoView({ behavior: "smooth" });
    }
    return (
        <div className='text-center py-5 md:py-14'>
            <nav className="flex justify-between mb-20 border-b-2 py-2 px-3">
                <img className="w-8 md:w-14" src={LogoNav} alt={LogoNav} />
                <button
                    onClick={() => window.open(VITE_URL_CV)}
                    className="flex items-end py-3 px-5 text-xs md:text-xl md:px-9 md:py-4 rounded-md bg-blue-600 text-gray-50 font-semibold hover:bg-blue-900 transition ease-linear duration-500"
                >
                    Descargar CV
                    <img className="ml-2 w-5 h-5 animate-bounce" src={Arrow} alt={Arrow} />
                </button>
            </nav>
            <div className="px-5 mb-14">
                <div className="flex justify-center">
                    <img className="rounded-full w-1/2 md:w-1/6" src={ImgMe} alt={ImgMe} />
                </div>
                <h5 className='mt-5 text-lg md:text-2xl font-medium text-gray-600 uppercase mb-8'>Lizandro Narváez</h5>
                <h1 className='text-4xl md:text-7xl text-gray-900 mb-8'>Full-Stack Developer</h1>
                <div className="mb-10 mx-auto">
                    <p className="text-gray-600 text-lg md:text-xl">
                        Disfruto creando aplicaciones y herramientas para facilitar el trabajo a las personas.
                    </p>
                </div>
                <div className="flex flex-col items-center">
                    <button
                        onClick={scrollToTech}
                        className="flex items-center px-5 py-3 md:px-9 md:py-4 mb-4 rounded-md bg-blue-600 text-gray-50 font-semibold hover:bg-blue-900 transition ease-linear duration-500">
                        Conoce más de mí
                        <img className="ml-2 w-5 h-5 animate-bounce" src={Arrow} alt={Arrow} />
                    </button>
                </div>
            </div>
        </div>
    )
}
