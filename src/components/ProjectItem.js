import React from "react";

function ProjectItem({ name, about, technologies }) {
  console.log(technologies)
  const technologiesList = technologies.map((technology) =>
    <span key={technology}>{technology}</span>
  );
  
    
  
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        { technologiesList }
      </div>
    </div>
  );
}

export default ProjectItem;
