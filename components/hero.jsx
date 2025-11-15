import profileImage from '../src/assets/inowei.png'

export default function Hero() {
  return (
    <section id="hero" className="h-screen flex items-center py-10 px-6 justify-between bg-gray-100">
      <div className=" text-left max-w-2xl">
        <h1 className="text-4xl font-bold">Hi, <span className="text-blue-500">I'm Inowei</span></h1>
        <h2 className="text-2xl font-bold">A Frontend Developer</h2>
        <p className="text-lg text-gray-600">I build exceptional and accessible digital experiences for the web. Focused on creating responsive, user-friendly interfaces.</p>
      </div>
      <div className="  max-w-100 max-h-100 border-2 border-blue-500 rounded-full">
        <img src={profileImage} alt="Inowei" className=" rounded-full shadow-lg object-cover w-100 h-100" />
      </div>
    </section>
  );
}