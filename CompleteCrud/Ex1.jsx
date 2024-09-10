import React, { useState } from 'react'

const Ex1 = () => {
  const [state, setstate] = useState({
    u: "",
    p: "",
    id: Date.now(),
    list: []
  })
  let { u, p, id, list } = state
  let handleChange = (e) => {
    let { name, value } = e.target
    setstate({ ...state, [name]: value })
  }
  let handleSubmit = (e) => {
    e.preventDefault()
    let newObj = {
      u: state.u,
      p: state.p,
      id: state.id
    }
    setstate({
      p: "",
      u: "",
      id: Date.now(),
      list: [...state.list, newObj]
    })
    // console.log(state)
  }
  let handleDelete = (id) => {
    let newArr = state.list.filter((val, i) => {
      return val.id != id
    })
    // console.log(newArr)
    setstate({ ...state, list: newArr })
  }
  let handeleUpdate = (id) => {
    let objToUpdate = state.list.find((val, i) => {
      return val.id == id
    })
    let newArr = state.list.filter((val, i) => {
      return val.id != id
    })
    setstate({
      u: objToUpdate.u,
      p: objToUpdate.p,
      id: objToUpdate.id,
      list: newArr
    })

  }

  return (
    <div>
      <form action="">

        <input type="text" name='u' value={u} onChange={handleChange} placeholder='username' />

        <input type="text" name='p' value={p} onChange={handleChange} placeholder='password' />
        
        <button onClick={handleSubmit}>Submit</button>
      </form>
      <div>
        {state.list.length > 0 && state.list.map((val, i) => {
          return (
            <div key={i} style={{ border: "1px solid", margin: "10px", padding: "10px" }}>
              <p>username  : {val.u}</p>
              <p>password  : {val.p}</p>
              <p>id : {val.id}</p>
              <button onClick={() => { handleDelete(val.id) }}>Delete</button>
              <button onClick={() => { handeleUpdate(val.id) }}>Update</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Ex1