function Navbar(){
    return (
        <nav className="flex items-center justify-between p-6 bg-green-200">
            <span className="font-bold text-xl text-Teal">Vishal Subudhi</span>
                <div className="flex gap-6">
                    <a href="#About" className="text-gray-600 hover:text-teal-600">About</a>
                    <a href="#Skills" className="text-gray-600 hover:text-teal-600">Skills</a>
                    <a href="#Experiance" className="text-gray-600 hover:text-teal-600">Experiance</a>
                    <a href="#Projects" className="text-gray-600 hover:text-teal-600">Projects</a>
                    <a href="#Contact" className="text-gray-600 hover:text-teal-600">Contact</a>
                </div>
        </nav>
    )
}

export default Navbar