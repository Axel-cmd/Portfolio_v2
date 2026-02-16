import type { Experience } from "@/types";

// voir le code utilisé pour le composant experience en card : https://ryan.prebuiltui.com/
const ExperienceCardJSX = ({ experience }: { experience: Experience }) => {
    return (
        <div className="hover:bg-secondary/50 rounded-xl border p-4 transition-colors duration-300 ease-in-out">

            <div
            className="bg-muted flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-lg p-2"
            aria-hidden="true"
            >
            <img
                src={experience.logo}
                alt=""
                width="40"
                height="40"
                className="h-10 w-10 object-contain"
            />
            </div>
            <div className="min-w-0 flex-1">
            <h3 className="text-foreground font-semibold">{experience.jobTitle}</h3>
            <p className="text-muted-foreground text-sm">{experience.company}</p>
            <p className="text-muted-foreground mt-1 text-sm">
                {experience.dateStart} - {experience.dateEnd}
            </p>
            </div>
        </div>
        // <article
        //     className="border-border bg-card flex flex-col gap-3 rounded-lg border p-4 shadow-sm sm:flex-row sm:items-center sm:gap-4"
        //     aria-label={`${experience.jobTitle} at ${experience.company}`}
        // >
        // </article>
    )
}

export default ExperienceCardJSX;