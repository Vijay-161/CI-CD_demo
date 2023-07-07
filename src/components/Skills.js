import { useEffect, useState } from "react"


export default function Skills({skills}) {
  const [loggedIn, setLoggedIn] = useState(false)
  useEffect(()=>{
    setLoggedIn(true)
  }, [])
  return (
    <div>
        <h2>List of Skills</h2>
      <ul>
        {skills.map(skill =>(
            <li key={skill.id}>{skill.name}</li>
        ))}
      </ul>

      {loggedIn ? (<button>Start working</button>): (<button>login</button>)}
    </div>
  )
}
