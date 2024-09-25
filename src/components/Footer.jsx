
import { ContactData } from "../data/ContactData";

export const Footer = () => {
    return (

        <div className="mx-auto px-4 py-10 mt-10">

            <div className="text-center">
                <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">Contacto</h1>
                <div className="flex items-center justify-center space-x-8">
                    {
                        ContactData.map((contact, index) => (
                            <a key={index} href={contact.url} target="_blank" className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500">
                                <img src={contact.icon} alt={contact.icon} />
                            </a>
                        ))
                    }
                </div>
            </div>

        </div>

    )
}
