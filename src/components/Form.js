import React from 'react'
import { useHistory } from 'react-router'
import { setBmiState } from '../action'
import { useSelector, useDispatch } from 'react-redux'

export default function Form() {
  const data = useSelector((state) => state.bmiState.data)
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target
    dispatch(setBmiState)({ ...data, [name]: value })
  }


  const history = useHistory();

  const handleSubmit = (e) => {
    e.prevenDefault();
    if (!data.name) return;
    history.push("./app")
  }

  const records = JSON.parse(localStorage.getItem('data'))
  const finalRecords = records.slice(-5)

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" onChange={handleChange} />
        <button type="submit" >submit</button>
      </form>
      {finalRecords.map((data) =>
        <li >{data.name}</li>
      )}
    </>
  )
}