import React from 'react'

const Project = (props) => {
   
    console.log("PROPS", props)
    const project = props.proj;
    if (props.length === 0) {
        return (<div>loading...</div>)
    }
    else {
        return (
        <div className="box">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            
        </div>
    )}
}

export default Project