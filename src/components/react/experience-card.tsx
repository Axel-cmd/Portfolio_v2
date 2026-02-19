import type { Experience } from "@/types";

// voir le code utilisé pour le composant experience en card : https://ryan.prebuiltui.com/
const ExperienceCardJSX = ({ experience }: { experience: Experience }) => {
    return (
        <div className="w-full border p-6 rounded-xl">
            <div className="flex flex-col md:flex-row items-start gap-3 md:items-center justify-between w-full text-gray-500">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                        <img alt="Sr. Software engineer"
                        loading="lazy" width="25" height="25" decoding="async" data-nimg="1" style={{color:"transparent"}}
                        src={experience.logo}></img>
                    </div>
                    <div>
                        <h3 className="text-base font-medium text-foreground">{experience.jobTitle}</h3>
                        <div className="text-muted-foreground" >{experience.company}</div>
                    </div>
                </div>
                <div className="text-muted-foreground text-sm">{experience.dateStart} - {experience.dateEnd}</div>
            </div>
            { experience.description && (
                <div className="mt-6 text-muted-foreground text-sm">
                    {experience.description}
                </div>
            )}
            { experience.tasks && (
                <ul className="list-disc px-5 mt-6 text-muted-foreground text-sm space-y-2">
                    {experience.tasks.map((task, index) => (
                        <li key={index}>{task}</li>
                    ))}
                </ul>
            )}
            { experience.skills && (
                <div className="mt-6 text-muted-foreground text-sm w-full flex flex-wrap gap-1">
                    {experience.skills.map((skill, index) => (
                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium" key={index}>{skill}</span>
                    ))}
                </div>
            )}
        </div>
    )
}

export default ExperienceCardJSX;