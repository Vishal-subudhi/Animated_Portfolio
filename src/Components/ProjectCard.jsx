function ProjectCard({title,description,tech,link}){
    return (
        <div className="bg-grey-800 border border-gray-400 rounded-xl p-6 flex flex-col gap-4 hover:border-green-400 transition-all duration-300">
            <h3 className="font-semibold text-lg text-white">{title}</h3>
            <div className="gap-2 flex flex-wrap">
                {tech.map((t,index)=>(
                    <span key={index} className="bg-gray-700 text-green-400 text-xs px-3 py-1 border border-gray-600 rounded-full">
                        {t}</span>
                ))}
            </div>
            <p className="text-sm text-gray-400 flex-1">{description}</p>
            <a href={link} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline ">
                View Project
            </a>
        </div>
    )
}

export default ProjectCard