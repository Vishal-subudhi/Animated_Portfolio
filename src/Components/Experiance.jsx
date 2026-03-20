import ExperianceCard from "./ExperianceCard"
import useScrollAnimation from "../hooks/useScrollAnimation"

function Experiance(){
    const ref=useScrollAnimation()
    const experiances=[
        {
            title:"Senior Project Engineer",
            company:"Wipro",
            duration:"2021-Present",
            points:[
                "Worked on a banking project",
                "Worked on an AI project",
                "Currently working on a pharma project"
            ]
        }
    ]

    return (
        <section ref={ref} className="fade-in py-16 px-8 bg-gray-900">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Experiance</h2>
            <div>
                {experiances.map((exp, index)=>(
                    <ExperianceCard
                        key={index}
                        titles={exp.title}
                        company={exp.company}
                        duration={exp.duration}
                        points={exp.points}
                    />
                ))}
            </div>

        </section>
    )
}

export default Experiance