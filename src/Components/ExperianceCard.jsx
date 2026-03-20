function ExperianceCard({titles, company, duration, points}){
    return (
        <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8 max-w-2xl mx-auto mb-8">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-white">{titles}</h3>
                <span className="text-green-400 text-sm font-medium">{duration}</span>
            </div>
            <p className="text-gray-400 font-medium mb-4">{company}</p>
            <ul className="flex flex-col gap-3">
                {points.map((point,index)=>(
                    <li key={index} className="flex items-start gap-2 text-gray-300 text-sm">
                        <span className="text-green-400 mt-1">✓</span>
                        {point}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ExperianceCard