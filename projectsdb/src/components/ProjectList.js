import React, {useEffect, useState} from 'react'
import axios from 'axios';
import Project from './Project'

const ProjectList = () => {

    const [ project, setProject ] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4567/api/projects')
        .then(res => {
            console.log(res.data)
            setProject(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <div className="flexy">
            {project.map((proj, index) => {
                return <Project proj={proj} key={index} />
            })}
        </div>
    )
}

export default ProjectList