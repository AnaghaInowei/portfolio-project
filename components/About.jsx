export default function About() {
    return (
        <>
            <section className="flex flex-col justify-center items-center text-center px-4 py-6">
                <div>
                    <h2 className="text-4xl text-blue-500 mb-5" >About Me</h2>
                    <p style={{ fontFamily: "cursive" }}>I'm a passionate frontend developer with a strong focus on creating intuitive and engaging user experiences.</p>
                </div>

                {/* skills/about */}
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* about me */}
                    <div className="text-left">
                        <h2 className="text-4xl text-blue-500 mb-5">My Story</h2>
                        <p>I'm <span className="text-blue-500" style={{ fontFamily: "cursive" }} >Inowei David Anagha,</span> a frontend developer wwith 2  years of experience building web applications.
                            I decided to go into tech cause of a recommendation since then I've a passion for design and problem-solving. 

                            I'm constantly learning and adapting to new technologies and methodologies to ensure that I'm delivering the best possible solutions for my clients and users.
                        </p>

                    
                    </div>
                </div>
            </section>
        </>
    )
}