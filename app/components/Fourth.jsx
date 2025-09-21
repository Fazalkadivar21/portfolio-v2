import { FaXTwitter, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6"; // add FaEnvelope here
import { Parallax } from "react-scroll-parallax";

export default function Fourth() {
  return (
    <section className="fourth-section text-white h-screen w-full flex flex-col items-center justify-center leading-none text-center p-4 md:p-0">
      <div className="w-fit">
        <Parallax speed={10}>
          <h1 className="font-[TDF] text-9xl md:text-[12rem] lg:text-[18rem] leading-[0.75]">Let's Talk</h1>
        </Parallax>
        <ul className="text-4xl md:text-4xl lg:text-[2.5rem] w-full flex items-center justify-between gap-6 md:gap-10 leading-none mt-8 md:mt-0">
          <li>
            <a
              href="http://x.com/fazalkadivar21"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors"
            >
              <FaXTwitter />
            </a>
          </li>
          <li>
            <a
              href="http://github.com/fazalkadivar21"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors"
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              href="http://linkedin.com/in/fazalkadivar21"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors"
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a
              href="mailto:fazalkadivar7@gmail.com"
              className="hover:text-gray-400 transition-colors"
            >
              <FaEnvelope />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
