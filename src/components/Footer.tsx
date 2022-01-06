import { FaGithub, FaDiscord, FaLinkedin } from 'react-icons/fa'
import { SiAnilist } from 'react-icons/si'
export const Footer = () => {
  return (
    <div className="py-5 border-t-4">
      <div className="flex justify-center mt-4">
        <a
          target="_blank"
          href="https://github.com/diogojorge1401"
          className="
              text-xl rounded-full
              p-1 m-1 sm:m-2 sm:p-2
              hover:text-white text-gray-800 hover:bg-gray-800
              transition-colors duration-500
              " rel="noreferrer"
        >
          <FaGithub />
          <span className="sr-only">Github</span>
        </a>

        <a
          target="_blank"
          href="https://discord.com/invite/KZmDrSDB5U"
          className="
              text-xl rounded-full
              p-1 m-1 sm:m-2 sm:p-2
              text-dc-blue bg-white
              hover:text-white hover:bg-dc-blue
              transition-colors duration-500
              " rel="noreferrer"
        >
          <FaDiscord />
          <span className="sr-only">Discord</span>
        </a>

        <a
          target="_blank"
          href="https://www.linkedin.com/in/diogo-jorge-br/"
          className="
              text-xl rounded-full
              p-1 m-1 sm:m-2 sm:p-2
              text-ld-blue bg-white
              hover:text-white hover:bg-ld-blue
              transition-colors duration-500
              " rel="noreferrer"
        >
          <FaLinkedin />
          <span className="sr-only">Linkedin</span>
        </a>

        <a
          target="_blank"
          href="https://anilist.co/user/DiogoJorge1401/"
          className="
              text-xl rounded-full
              p-1 m-1 sm:m-2 sm:p-2
              hover:text-white hover:bg-al-blue
              text-al-blue bg-white
              transition-colors duration-500
              " rel="noreferrer"
        >
          <SiAnilist />
          <span className="sr-only">Anilist</span>
        </a>
      </div>
      <div className="flex justify-center mt-4">
        <p className="text-black mb-4">
          Made with
          <span className="mx-2" role="link" aria-label="heart">
            💙
          </span>
          by{' '}
          <a
            target="_blank"
            className="text-sky-500 hover:underline"
            href="mailto:me.diogojorge1401@gmail.com" rel="noreferrer"
          >
            Diogo Jorge
          </a>
        </p>
      </div>
    </div>
  )
}
