import React from 'react'
import { Link } from "react-router-dom";   

export default function ProjectsPage({prs}) {
    return (
        <div className='projects'>
            {prs.map((eachProject) => {
                return <div key={eachProject.id}>
                    <Link to={`/project-details/${eachProject.id}`}>
                        <h2>{eachProject.name}</h2>
                    </Link>
                    
                    <hr />
                </div>
            })}
        </div>
    )
}
