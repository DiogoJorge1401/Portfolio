import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiNodedotjs,
  SiTypescript,
  SiReact,
  SiExpress,
  SiTailwindcss,
  SiJest
} from 'react-icons/si'

export const Skills = () => {
  return (
    <div
      className="
      max-w-3xl mx-auto flex flex-col 
      items-center justify-center py-12
      mt-32
      "
      id="tech"
    >
      <p className="text-2xl text-black sm:text-xl md:text-2xl pt-4 font-bold">
        Techs I Use
      </p>
      <div className="flex flex-wrap justify-center items-center pt-2">
        <div className="flex flex-col w-40 py-8 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52 cursor-pointer">
          <SiHtml5 color="#e44d26" className="mx-auto text-2xl sm:text-4xl" />
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">
            HTML5
          </p>
        </div>
        <div className="flex flex-col w-40 py-8 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52 cursor-pointer">
          <SiCss3 color="#264de4" className="mx-auto text-2xl sm:text-4xl" />
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">
            CSS3
          </p>
        </div>
        <div className="flex flex-col w-40 py-8 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52 cursor-pointer">
          <SiJavascript
            color="#f7df1e"
            className="mx-auto text-2xl sm:text-4xl"
            style={{ backgroundColor: 'black' }}
          />
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">
            Javascript
          </p>
        </div>
        <div className="flex flex-col w-40 py-8 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52 cursor-pointer">
          <SiTypescript
            color="#007acc"
            className="mx-auto text-2xl sm:text-4xl"
          />
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">
            Typescript
          </p>
        </div>
        <div className="flex flex-col w-40 py-8 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52 cursor-pointer">
          <SiNodedotjs
            color="#3e863d"
            className="mx-auto text-2xl sm:text-4xl"
          />
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">
            NodeJS
          </p>
        </div>
        <div className="flex flex-col w-40 py-8 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52 cursor-pointer">
          <SiReact color="#61dafb" className="mx-auto text-2xl sm:text-4xl" />
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">
            ReactJS
          </p>
        </div>
        <div className="flex flex-col w-40 py-8 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52 cursor-pointer">
          <SiExpress color="#353535" className="mx-auto text-2xl sm:text-4xl" />
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">
            Express
          </p>
        </div>
        <div className="flex flex-col w-40 py-8 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52 cursor-pointer">
          <SiTailwindcss
            color="#07b6d5"
            className="mx-auto text-2xl sm:text-4xl"
          />
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">
            TailwindCSS
          </p>
        </div>
        <div className="flex flex-col w-40 py-8 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52 cursor-pointer">
          <SiJest color="#99425b" className="mx-auto text-2xl sm:text-4xl" />
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">
            Jest
          </p>
        </div>
      </div>
    </div>
  )
}
