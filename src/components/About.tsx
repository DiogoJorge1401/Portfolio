import ScrollIntoView from 'react-scroll-into-view'
import { FaChevronDown } from 'react-icons/fa'

export const About = () => {
  return (
    <div className="max-w-3xl mt-16 mx-auto">
      <p className="text-2xl text-black md:text-4xl font-bold text-center">
        Hey ✌️
      </p>
      <p className="text-base sm:text-xl text-center text-gray-600 leading-relaxed mt-4">
        {/* Estudo desenvolvimento web, apaixonado por NodeJS e ReactJS. Também
        gosto de participar em projetos de código aberto. */}
        I study web development, passionate about NodeJS and ReactJS. I also
        enjoy participating in open source projects.
        {/* Meu nome é Diogo Jorge, tenho 17 anos, moro atualmente em Votuporanga-SP
        Brasil. Estou no 3° Ano do Ensino Médio ETIM Infonet. Iniciei com
        a programação em 2021. Atualmente estudo desenvolvimento web, apaixonado
        por NodeJS e ReactJS. Também gosto de participar em projetos de código
        aberto. */}
      </p>
      <ScrollIntoView selector="#tech">
        <div className="mx-auto pt-12 mt-20 sm:mt-32 xl:mt-28">
          <FaChevronDown className="animate-bounce-2 mx-auto text-3xl text-sky-500 cursor-pointer" />
        </div>
      </ScrollIntoView>
    </div>
  )
}
