import React, { useEffect, useState } from 'react'
import { baseUrl } from './urls'

const App = () => {

  const [email, setEmail] = useState("")
  const [pass, setPassword] = useState("")


  const register = async () => {
    try {


    const myHeaders = new Headers()
    myHeaders.append("Content-Type","application/json")

    const raw = JSON.stringify({
      "email":email ,
      "password":pass
    })

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        redirect: "follow",
        body : raw
      }

      const res = await fetch(
        '${baseUrl}/learner/register',
        requestOptions
      )
      const result = await res.json()
      console.log(result)
    }

    catch (error) {
      console.log(error);
    }

  }


  return (
    <div>

<input type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
<input type='password' value={pass} onChange={(e)=>setPassword(e.target.value)}/>
<button onClick={register}>
  Submit
</button>

    </div>
  )
}

export default App
