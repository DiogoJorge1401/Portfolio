import { FaArrowRight } from 'react-icons/fa'

export const ContactMe = () => {
  return (
    <div className="max-w-lg w-full text-center pt-36 pb-10 mx-auto">
      <h1 className="text-2xl sm:text-4xl">Interested in working together ?</h1>
      <a href="mailto:me.diogojorge1401@gmail.com">
        <span className="mt-8 inline-block bg-black text-white text-base md:text-xl py-4 px-7 cursor-pointer">
          <div className="flex items-center">
              <span className="mr-3">Get in touch</span>
              <FaArrowRight/>
          </div>
        </span>           
      </a>
    </div>
  )
}
