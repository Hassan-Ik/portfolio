const AboutMe = ({ name , bio, skills }) => {

    const bioParagraphs = bio.split("\n").filter((p) => p.trim() !== "");

    return (
        <section id='about' className="w-full bg-gray-900 py-12 text-white">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center px-6">
                {/* Left Side - Image */}
                <div className="relative w-full overflow-hidden rounded-2xl shadow-lg">
                <h2 className="text-4xl font-bold">{name}</h2>
                    <div className="mt-4 text-gray-300 space-y-3">
                        {bioParagraphs.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                        </div>
                </div>

                {/* Right Side - About Me */}
                <div>
                    

                    {/* Skills */}
                    <div className="mt-6">
                        <h3 className="text-xl font-semibold mb-2">Skills</h3>
                        <div className="flex flex-wrap gap-4">
                            {skills.map((skill, idx) => (
                                <span 
                                    key={idx} 
                                    className={`px-3 py-1 text-sm rounded-lg shadow-md ${skill.color}`}
                                >
                                    {skill.name}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;