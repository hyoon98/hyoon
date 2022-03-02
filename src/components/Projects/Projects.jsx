import './Projects.css'
import Card from './Card/Card.js'
import debttrackerimg from '../../assets/debttrackerimg.jpg'
import cartoonimg from '../../assets/cartoon.jpg'
import shoetrackerimg from '../../assets/shoetracker.png'
import { useQuery } from '@apollo/client'

const GET_PROJECTS=gql`
  {
  projects(orderBy: createdAt_DESC){
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
            <Card
              link="https://github.com/hyoon98/Debt-Tracker"
              image={debttrackerimg}
            >
              Debt Tracker
            </Card>
            <Card
              link="https://github.com/alhparsa/CSSS-Hackathon"
              image={cartoonimg}
            >
              CSSS Hackathon
            </Card>
            <Card
              link="https://github.com/hyoon98/Shoe-Tracker"
              image={shoetrackerimg}
            >
              MEC Shoe Tracker
            </Card>
          </div>
        </div>
    )
}
