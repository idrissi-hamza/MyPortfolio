import React from 'react'

const Archived = () => {
  const projectsData=["tttt","ttttcgxb","ginijgkg","ggggg"]
  return (
    <div className="archived wrapper ">
    <h1 className="archived--title ">Other Noteworthy Projects</h1>
    <ul className="archived--projects">
      {projectsData.map((project,i) => (
        <li key={i}>
          {project}
        </li>
      ))}
    </ul>
  </div>
  )
}

export default Archived