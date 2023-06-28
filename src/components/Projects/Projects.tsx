import React from 'react'
import { useAppSelector } from '../../redux/store'
import { Link, NavLink } from 'react-router-dom'

const Projects = () => {

  const projects = useAppSelector(state => state.projects.projectsData)

  return (
    <>
      <main className="py-[70px] max-sm:py-[40px] px-0">
        <div className="my-0 mx-auto py-0 px-[15px] max-w-[1200px]">
          <h2 className="mb-[60px] max-sm:mb-[30px] text-[60px] max-sm:text-[40px] font-bold leading-[1.3] text-[var(--title-1)] text-center">Projects</h2>
          <ul className="flex justify-center flex-wrap gap-y-[30px] gap-x-[30px]">
            {projects.map(p => <ProjectsItemCard2 img={p.fields.image.fields.file.url} title={p.fields.title} tags={p.fields.tags} demoLink={p.fields.demoUrl} githubLink={p.fields.githubUrl} />)}
          </ul>
        </div>
      </main>
    </>
  )
}

interface IProjectsItemCard {
  img: string,
  title: string,
  tags: string[],
  demoLink: string,
  githubLink: string,

}

const ProjectsItemCard: React.FC<IProjectsItemCard> = ({ img, title }) => {
  return (
    <>
      <li className="max-w-[370px] bg-[var(--project-card-bg)] shadow-[var(--box-shadow)] rounded-[10px]">
        <a href="./project-page.html">
          <img src={img} alt="Project img" className="rounded-[10px] border-4 border-gray-300" />
          <h3 className="pt-[15px] px-[20px] pb-[25px] font-bold text-[24px] leading-[1.3] text-[var(--project-card-text)]">{title}</h3>
        </a>
      </li>
    </>
  )
}

const ProjectsItemCard2: React.FC<IProjectsItemCard> = ({ img, title, tags, demoLink, githubLink }) => {
  return (
    <>
      <li className="max-w-[370px] bg-[var(--project-card-bg)] shadow-[var(--box-shadow)] rounded-[10px]">
        
          <div className="flex flex-col justify-center items-center">
            <div className="!z-5 relative flex flex-col rounded-[20px] border border-gray-200 bg-white shadow-lg w-full !p-4 3xl:p-![18px] undefined">
              <div className="h-full w-full">
              <Link to={demoLink} target="_blank">
                <div className="relative w-full">
                  <img src={img} className="mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full" alt="" />
                </div>
                <div className="mb-3 px-1">
                  <div className="mb-2">
                    <p className="text-lg font-bold text-slate-700"> {title} </p>
                    <p className="flex flex-wrap justify-center items-center py-3 border-b-2 text-xs text-white font-medium">
                      {tags.map(el => <span className="m-1 px-1 py-1 rounded bg-indigo-500 text-white text-[12px] font-extralight cursor-default">#{el.toLowerCase()} </span>)}
                    </p>
                  </div>
                </div>
                </Link>
                <div className="flex items-center md:items-center justify-center ">
                  <Link to={githubLink} target="_blank">
                    <button className="linear rounded-l-[20px] bg-gray-900 px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-800 active:bg-brand-700">GitHub</button>
                  </Link>
                  <Link to={demoLink} target="_blank">
                  <button className="linear rounded-r-[20px] bg-indigo-900 px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-800 active:bg-brand-700">Demo</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        
      </li>
    </>
  )
}

export default Projects