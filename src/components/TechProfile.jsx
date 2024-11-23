import { TechProfileData } from "../data/TechProfileData"

export const TechProfile = () => {

    return (
        <div className="md:grid md:grid-cols-3 gap-6 mb-20">

            {
                TechProfileData.map((tech, i) => (
                    <div key={i} className=" p-5">
                        {/* div imagen */}
                        <h5 className="text-4xl text-center text-stone-600">{tech.title}</h5>
                        <div>
                            <img className="w-1/2 mx-auto brightness-110" src={tech.img} alt={tech.img} />
                        </div>
                    </div>
                ))
            }

        </div>
    )
}
