import './Projects.css'
import Card from './Card/Card.js'
import debttrackerimg from '../../assets/debttrackerimg.jpg'
import cartoonimg from '../../assets/cartoon.jpg'
import shoetrackerimg from '../../assets/shoetracker.png'
import { useQuery, gql } from '@apollo/client'

const GET_PROJECTS=gql`
  {
  projects(orderBy: createdAt_DESC){
    id
    title
    link
    coverImage{
      url
    }
  }
}
`

export default function Projects() {
    const {loading,error,data}=useQuery(GET_PROJECTS)
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    return (
        <div className='Projects' id='projects'>
          <h3 className='project-title'>Projects</h3>
          <div className="projects-container">
            {data.projects.map((project)=>(
              <Card key={project.id} image={project.coverImage.url} link={project.link}>
                {project.title}
              </Card>
              ))
            }
          </div>
        </div>
    )
}
