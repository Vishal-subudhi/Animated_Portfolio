import useScrollAnimation from "../hooks/useScrollAnimation"

function Skills(){
    const ref=useScrollAnimation()
    const skills=[
        { name: "CSS", icon: "🎨" },
        { name: "JavaScript", icon: "⚡" },
        { name: "React", icon: "⚛️" },
        { name: "Tailwind CSS", icon: "💨" },
        { name: "Git", icon: "🔧" },
        { name: "Python", icon: "🐍" },
        { name: "HTML", icon: "🌐" },
    ]
    return (
        <section ref={ref} className="fade-in py-16 px-8 bg-gray-800">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Technical Skills</h2>
            <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
                {skills.map((skill, index)=>(
                    <div key={index} className="flex items-center gap-2 bg-gray-700 text-white px-5 py-3 rounded-full border
                    border-green-400 hover:bg-green-400 hover:text-gray-900 transition-all duration-300 cursor-pointer">
                        <span className="text-xl">{skill.name}</span>
                        <span className="font-medium">{skill.icon}</span>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skills