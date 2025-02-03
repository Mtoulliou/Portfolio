import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <div className="fixed">
        <header className="bg-slate-200 fixed top-0 left-0 w-full z-50">
          <nav className="space-x-8 px-4 py-3 sm:px-6 justify-between justify-start sm:flex">
            <div className="flex items-center">
              <h1 className="ml-2 text-black"><b className="text-bold">Mattéo</b> Toulliou</h1>
            </div>
            <div className="flex items-center space-x-8 justify-between">
              <a href="#about" className="text-sm font-medium text-black hover:text-gray-600">
          about
              </a>
              <a href="#projects" className="text-sm font-medium text-black hover:text-gray-600">
          projects
              </a>
              <a href="#contact" className="text-sm font-medium text-black hover:text-gray-600">
          contact
              </a>
            </div>
          </nav>
        </header>
      </div>
      <main className="bg-slate-200">
        <div id="about" className="flex flex-col items-center justify-center h-screen max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left">
            <div className="md:mr-8 flex flex-col items-center md:items-start">
              <p className="self-start text-left mt-2 text-lg sm:text-xl md:text-2xl text-black">about</p>
              <h1 className="mt-4 text-2xl sm:text-3xl md:text-4xl text-black font-bold">Aspiring Cloud Engineer | Tech Explorer</h1>
              <p className="mt-2 text-lg sm:text-xl md:text-2xl text-black">Currently working at Equans Digital as a Network Technician,
                while studying Networks, Development, and Cloud Computing at IUT Béziers.</p>
            </div>
            <div className="flex items-center justify-center mt-4 md:mt-0 object-contain">
              <Image src="/photo.png" alt="Profile" className="md:w-96 md:h-48 sm:w-24 sm:h-24 object-cover" width={192} height={192} />
            </div>
          </div>
        </div>
        <div id="projects"></div>
        <div className="flex flex-col items-center justify-center h-screen max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8" id="about">
        <p className="self-start text-left mt-2 text-lg sm:text-xl md:text-2xl text-black">projects</p>
        <ul>
          <li className="mt-2 text-lg sm:text-xl md:text-2xl text-black">projet github 1</li>
          <li className="mt-2 text-lg sm:text-xl md:text-2xl text-black">projet github 2</li>
          <li className="mt-2 text-lg sm:text-xl md:text-2xl text-black">projet github 3</li>
          <li className="mt-2 text-lg sm:text-xl md:text-2xl text-black">projet github 4</li>
        </ul>
        </div>

        <div className="flex flex-col items-center justify-center h-screen max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8" id="contact">
          <p className="self-start text-left mt-2 text-lg sm:text-xl md:text-2xl text-black">contact</p>
          <h2 className="mt-8 text-2xl sm:text-3xl md:text-4xl text-black font-bold">Contact</h2>
          <p className="mt-2 text-lg sm:text-xl md:text-2xl text-black">You can contact me at <a href="mailto:matteo.meze@gmail.com" className="text-blue-500">matteo.meze@gmail.com</a></p>
        </div>
      </main>
    </div>
  );
}
