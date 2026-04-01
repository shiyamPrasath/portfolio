import { FaLinkedin, FaBehance, FaPhoneAlt } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 bg-white text-center border-t border-gray-100">
      <div className="max-w-3xl mx-auto animate-fade-in-up">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Let's work together
        </h2>
        <p className="text-xl text-gray-600 mb-10 max-w-xl mx-auto">
          Currently open for freelance projects and full-time opportunities. Drop me a line if you want to collaborate or just say hi!
        </p>
        <a 
          href="mailto:shiyamprasath092000@gmail.com" 
          className="inline-flex items-center justify-center px-8 py-4 bg-[#B05B2F] text-white font-medium rounded-full shadow-lg hover:bg-[#8D4925] hover:-translate-y-1 transition-all text-lg mb-16"
        >
          Send an Email &rarr;
        </a>
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 text-gray-500 font-medium tracking-wide">
          <a href="https://www.linkedin.com/in/shiyam-prasath2000/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#0077B5] hover:-translate-y-0.5 transition-all">
            <FaLinkedin size={20} />
            <span>LinkedIn</span>
          </a>
          <a href="https://www.behance.net/shiyamprasath" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#1769ff] hover:-translate-y-0.5 transition-all">
            <FaBehance size={20} />
            <span>Behance</span>
          </a>
          <a href="tel:+918925141264" className="flex items-center gap-2 hover:text-gray-900 hover:-translate-y-0.5 transition-all">
            <FaPhoneAlt size={18} />
            <span>+91 8925141264</span>
          </a>
        </div>
      </div>
    </section>
  )
}
