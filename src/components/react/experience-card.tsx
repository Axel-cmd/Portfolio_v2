import type { Experience } from "@/types";
import { FaQuestionCircle } from "react-icons/fa";

// voir le code utilisé pour le composant experience en card : https://ryan.prebuiltui.com/
const ExperienceCardJSX = ({ experience }: { experience: Experience }) => {
    return (
        <div className="w-full border p-6 rounded-xl">
            <div className="flex flex-col md:flex-row items-start gap-3 md:items-center justify-between w-full text-gray-500">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
                    <div>
                        {/* ajout de l'image ici */}
                    </div>
                    <div>
                        <h3 className="text-base font-medium text-gray-800">{experience.jobTitle}</h3>
                        <div>{experience.company}</div>
                    </div>
                </div>
                <div>{experience.dateStart} - {experience.dateEnd}</div>
            </div>
        </div>
    )
}

export default ExperienceCardJSX;