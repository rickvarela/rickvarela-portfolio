import CutCalcScreenshot from '../assets/img/cut-calc.jpg';
import MeetHalfwayScreenshot from '../assets/img/meet-halfway.jpg';
import NotelystScreenshot from '../assets/img/notelyst.jpg';
import PorfolioScreenshot from '../assets/img/porfolio.jpg';

export const Projects = () => {
  return (
    <div className='site-projects' id='projects'>
      <h2>PROJECTS</h2>
      <div className='projects-list'>
        <Project
          title='CUT CALC'
          desc='Find the most efficient pattern to cut various lengths from a stock material'
          imgSrc={CutCalcScreenshot}
          liveDemoPath='/cut-calc'
          githubPath='https://github.com/rickvarela/cut-calc'
        />
        <Project
          title='MEETHALFWAY'
          desc='Enter two locations and a point of interest and find your perfect meeting location'
          imgSrc={MeetHalfwayScreenshot}
          liveDemoPath='/meet-halfway'
          githubPath='https://github.com/rickvarela/meet-halfway'
        />
        <Project
          title='NOTELYST'
          desc='A simple app to create and keep track of your notes'
          imgSrc={NotelystScreenshot}
          liveDemoPath='/notelyst'
          githubPath='https://github.com/rickvarela/notelyst'
        />
        <Project
          title='PORTFOLIO SITE'
          desc='My porfolio site you are currently visiting'
          imgSrc={PorfolioScreenshot}
          githubPath='https://github.com/rickvarela/rickvarela.github.io'
        />
      </div>
    </div>
  );
};

const Project = ({ title, desc, imgSrc, liveDemoPath, githubPath }) => {
  return (
    <div className='project'>
      <img src={imgSrc} className='project-img' alt='Project screenshot'></img>
      <h3>{title}</h3>
      <p>{desc}</p>
      <div className='project-button-wrapper'>
        {liveDemoPath && (
          <a className='project-button' href={liveDemoPath}>
            LIVE DEMO
          </a>
        )}
        <a className='project-button' href={githubPath}>
          GITHUB REPOSITORY
        </a>
      </div>
    </div>
  );
};
