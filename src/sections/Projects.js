import TodoScreenshot from '../assets/img/todo-screenshot.jpg'

export const Projects = () => {
    return (
        <div className='site-projects' id='projects'>
                <h2>PROJECTS</h2>
                <div className='projects-list'>
                    <Project 
                        title='SIMPLE TODO'
                        desc='A simple app to keep track of you tasks!'
                        imgSrc={TodoScreenshot}
                    />
                </div>
        </div>
    )
}

const Project = ({title, desc, imgSrc}) => {
    return (
        <div className='project'>
            <img src={imgSrc} className='project-img' alt='Project screenshot'></img>
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
    )
}