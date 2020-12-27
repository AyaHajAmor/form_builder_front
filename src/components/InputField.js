import React from 'react'
import { useDispatch } from 'react-redux'
import { changeFieldValue } from '../actions/form'
const InputField = ({ name, index, type, value ,id }) => {
  const dispatch = useDispatch()
  return (
    <div className="row form-group">
      <div className="col-auto">
        <label>{name}</label>
      </div>
      <div className="col-lg">
        <input
          type="text"
          className="form-control"
          name={name}
          value={value}
          type={type}
          onChange={(event) => {
            dispatch(changeFieldValue(index, event.target.value))
          }}
        />
      </div>
    </div>
  )
}

export default InputField