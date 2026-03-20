import {useState, useEffect} from 'react'

function About(){
    const fullText="Hi I am Vishal !!"
    const [displayText, setDisplayText]= useState("")
   
    useEffect(()=> {
        let index=0
        let deleting=false

        const timer= setInterval(()=>{
            if(!deleting){
                setDisplayText(fullText.slice(0,index+1))
                index++
                if(index === fullText.length){
                    deleting=true
                    setTimeout(() =>{}, 2000)
                }
            } else {
                setDisplayText(fullText.slice(0, index-1))
                index--
                if(index === 0){
                    deleting=false
                }
            }
        }, 200)
        return
    }, [])

    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-8 text-center">
        <div className="flex flex-col items-center gap-4">
            <span className="text-6xl font-bold text-green-400 min-h-[80px] block">
                {displayText}
                <span className="cursor">|</span>
            </span>
            <span className="text-3xl text-gray-300">Front End Developer</span>
            <p className="text-xl text-gray-400 max-w-2xl mt-4">I am a passionate front-end developer with experience in creating responsive and user-friendly web applications.</p>
        </div>
        <div className="flex gap-4 mt-8">
            <a href="#Projects" className="bg-green-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-green-300">
                View Projects</a>
            <a href="#" className="border border-green-400 text-green-400 px-6 py-3 rounded-lg hover:bg-green-400 hover:text-gray-900">
                Download CV</a>
        </div>
        </div>
    )
}

export default About