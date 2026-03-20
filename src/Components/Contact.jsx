import useScrollAnimation from "../hooks/useScrollAnimation"

function Contact(){
    const ref=useScrollAnimation()
    return (
        <section ref={ref} className="fade-in bg-gray-900 py-10 px-4">
            <h2 className="text-2xl font-bold text-white text-center mb-9">Get in touch</h2>
            <div className="max-w-2xl mx-auto bg-gray-800 rounder-2xl p-6 border border-gray-700">
            <form>
                <div className="flex flex-col gap-2 mt-2">
                <label htmlFor="Fname" className="text-gray-400 text-sm">First Name<span className="text-red-500 font-bold">*</span></label>
                <input type="text" id="Fname" placeholder="First Name" required className="bg-gray-700 text-white rounded-lg 
                px-3 py-2 border border-gray-600 focus:outline-none focus:border-green-400 text-sm"></input>
                </div>
                <div className="flex flex-col gap-2">
                <label htmlFor="Lname" className="text-gray-400 text-sm">Last Name<span className="text-red-500 font-bold">*</span></label>
                <input type="text" id="Lname" placeholder="Last Name" required className="bg-gray-700 text-white rounded-lg
                px-3 py-2 border border-gray-600 focus:outline-none focus:border-green-400 text-sm"></input>
                </div>
                <div className="flex flex-col gap-2">
                <label htmlFor="Email" className="text-gray-400 text-sm">Email<span className="text-red-500 font-bold">*</span></label>
                <input type="text" id="email" placeholder="Email" required className="bg-gray-700 text-white rounded-lg
                px-3 py-2 border border-gray-600 focus:outline-none focus:border-green-400 text-sm"></input>
                </div>
                <button type="submit" className="bg-green-400 text-gray-900 font-semibold rounded-lg px-3 py-2 hover:bg-green-300 
                transition-all duration-300 mt-2">Send Message</button>
            </form>
            </div>
            <div className="flex flex-row justify-center gap-6 border-t border-gray-700 pt-8">
            <a href="mailto:vishalsubudhi9@gmail.com" className="text-gray-400 hover:text-green-400 transition-colors text-sm">Email Me</a>
            <a href="tel:7809080100" className="text-gray-400 hover:text-green-400 transition-colors text-sm">Call Me</a>
            <a href="https://www.linkedin.com/in/vishal-subudhi/" className="text-gray-400 hover:text-green-400 transition-colors text-sm">LinkedIn</a>
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">Resume</a>
            </div>
            <span className="flex flex-col items-center justify-center">
                <p className="text-center text-gray-500 text-sm mt-5">&copy; Designed and Developed by Vishal Subudhi. All Rights Reserved.</p>
            </span>
        </section>
    )
}

export default Contact