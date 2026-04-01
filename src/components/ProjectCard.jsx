import { Link } from 'react-router-dom';

export default function ProjectCard({ title, description, image, slug, delayClass, externalLink }) {
  const cardContent = (
    <>
      <div className="aspect-[4/3] w-full overflow-hidden bg-gray-100 relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
        />
      </div>
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 mb-6 flex-grow leading-relaxed text-sm md:text-base">{description}</p>
        <span className="self-start text-[#B05B2F] font-semibold flex items-center gap-2 group-hover:text-[#8D4925] transition-colors mt-auto">
          {externalLink ? 'View on Behance' : 'View Case Study'}
          <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
        </span>
      </div>
    </>
  );

  const className = `block group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-in-up outline-none focus:ring-2 focus:ring-[#B05B2F] ${delayClass}`;

  if (externalLink) {
    return (
      <a href={externalLink} target="_blank" rel="noopener noreferrer" className={className}>
        {cardContent}
      </a>
    );
  }

  return (
    <Link to={`/case-study/${slug}`} className={className}>
      {cardContent}
    </Link>
  );
}
