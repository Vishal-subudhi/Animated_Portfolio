import ProjectCard from "./ProjectCard";
import useScrollAnimation from "../hooks/useScrollAnimation";

function Projects(){
    const ref= useScrollAnimation()
    const projects=[
        {
            title:"Notes App",
            description:"A simple Notes app that acted as my first project. Stepping inside the React World.",
            tech:["React","CSS"],
            link:"https://github.com/Vishal-subudhi/Notes_App"

        },{
            title:"Todo App",
            description:"A simple Todo app built as my second project.",
            tech:["React","CSS"],
            link:"http://github.com/Vishal-subudhi/ToDo_App"
        },{
            title:"Weather Buddy",
            description:"This is a Weather App where i first learned to use an API in React.",
            tech:["React","fetch API","CSS"],
            link:"https://github.com/Vishal-subudhi/WeatherBuddy"
        },{
            title:"Pricing Page",
            description:"This is where i am stepping up my game. I started using Tailwind CSS and building this page.",
            tech:["React","Tailwind CSS"],
            link:"https://github.com/Vishal-subudhi/Pricing_Page"
        },{
            title:"URL Validator",
            description:"This is my last project I build when i was in M Tech. This projects solved a key problem of the Manual QA testers.",
            tech:["React","Python","MySQL","Docker"],
            link:"https://github.com/Vishal-subudhi/URL-Validator"
        }

    ]
    return (
        <section ref={ref} className="fade-in bg-gray-600 py-8">
            <span className="flex flex-col items-center justify-between font-bold text-2xl text-white py-3">Projects</span>
            <div className="grid grid-cols-1 md:grid-cols-2 lg-grid-cols-3 gap-6 max-w-6xl mx-auto">
                {projects.map((project,index)=>(
                    <ProjectCard 
                    key={index}
                    title={project.title}
                    description={project.description}
                    tech={project.tech}
                    link={project.link}
                    />
                ))}
            </div>
        </section>
    )
}

export default Projects