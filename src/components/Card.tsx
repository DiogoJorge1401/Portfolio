import profile from '../images/me.png'

import { FaGithub, FaDiscord, FaLinkedin } from 'react-icons/fa'
import { SiAnilist } from 'react-icons/si'

export const Card = () => {
  return (
    <div className="w-full">
      <div
        className="
        flex flex-col justify-center max-w-xs
        mx-auto bg-white shadow-xl rounded-xl
        p-5
        "
      >
        <div className="image">
          <img
            src={profile}
            alt="profile_photo"
            className="w-36 mx-auto rounded-full shadow-xl drop-shadow-sm"
          />
        </div>
        <div className="text-center mt-5">
          <p className="text-xl text-gray-900 sm:text-2xl">Diogo Jorge</p>

          <p
            className="
          text-xs text-gray-600 pt-2 
          pb-4 px-5 w-auto
          sm:text-base inline-block border-b-2
          "
          >
            ReactJs and NodeJs Developer
          </p>

          <div className="flex items-center justify-center mt-4 ">
            <a
              href="https://github.com/diogojorge1401"
              className="
              text-xl rounded-full
              p-1 m-1 sm:m-2 sm:p-2
              hover:text-white text-gray-800 hover:bg-gray-800
              transition-colors duration-500
              "
            >
              <FaGithub />
              <span className="sr-only">Github</span>
            </a>

            <a
              href="https://discord.com/invite/KZmDrSDB5U"
              className="
              text-xl rounded-full
              p-1 m-1 sm:m-2 sm:p-2
              text-dc-blue bg-white
              hover:text-white hover:bg-dc-blue
              transition-colors duration-500
              "
            >
              <FaDiscord />
              <span className="sr-only">Discord</span>
            </a>

            <a
              href="https://www.linkedin.com/in/diogo-jorge-br/"
              className="
              text-xl rounded-full
              p-1 m-1 sm:m-2 sm:p-2
              text-ld-blue bg-white
              hover:text-white hover:bg-ld-blue
              transition-colors duration-500
              "
            >
              <FaLinkedin />
              <span className="sr-only">Linkedin</span>
            </a>

            <a
              href="https://anilist.co/user/DiogoJorge1401/"
              className="
              text-xl rounded-full
              p-1 m-1 sm:m-2 sm:p-2
              hover:text-white hover:bg-al-blue
              text-al-blue bg-white
              transition-colors duration-500
              "
            >
              <SiAnilist />
              <span className="sr-only">Anilist</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
