import React from 'react'
import { useParams } from "react-router-dom";   

export default function ProjectsPage({prs}) {
    const { projectID } = useParams();
    const theProject = prs.find((eachPr)=> {
        return eachPr.id === projectID
    });

    return (
        <div className='project-details'>
            <h2>{theProject.name}</h2>
            <p>Budget: {theProject.budget}</p>
            <p>Year: {theProject.year}</p>

        </div>
    )
}
