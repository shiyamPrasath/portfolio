import ProjectCard from '../components/ProjectCard'
import work1Img from '../assets/Work1.png'
import work2Img from '../assets/work2.png'
import work3Img from '../assets/work3.png'

export default function Work() {
  const projects = [
    {
      title: "Workday Application Redesign Experience",
      description: "Problem: The current Workday application process averages 20–30 minutes due to poor resume parsing and forced, repetitive data entry.",
      image: work1Img,
      slug: "workday-redesign",
      delayClass: "delay-100",
    },
    {
      title: "GoPay Cash-In Experience Redesign",
      description: "The current cash-to-digital deposit flow is fragmented and time-consuming, requiring users to navigate multiple physical touchpoints and complex digital menus, which leads to high drop-off rates for unbanked users.",
      image: work2Img,
      slug: "gopay-redesign",
      externalLink: "https://www.behance.net/gallery/224576511/Cash-to-GoPay-(Redesign-of-GoPay)",
      delayClass: "delay-200",
    },
    {
      title: "Smart AR Helmet Interface Design",
      description: "Problem: Motorcyclists face high safety risks due to \"split-attention effect,\" where looking down at physical clusters or handlebar-mounted phones for navigation takes their eyes off the road for an average of 2–5 seconds per glance.",
      image: work3Img,
      slug: "ar-helmet-design",
      externalLink: "https://www.behance.net/gallery/224576421/A-Smart-AR-Helmet-(UIUX-case-study)",
      delayClass: "delay-300",
    }
  ];

  return (
    <section id="work" className="py-24 px-6 bg-white shrink-0 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 md:flex md:items-end md:justify-between animate-fade-in-up">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">Selected Work</h2>
            <p className="text-gray-600 text-lg max-w-xl">A collection of my recent projects focusing on problem solving through design.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((proj, idx) => (
            <ProjectCard
              key={idx}
              title={proj.title}
              description={proj.description}
              image={proj.image}
              slug={proj.slug}
              delayClass={proj.delayClass}
              externalLink={proj.externalLink}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
