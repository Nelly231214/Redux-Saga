import React, { useState, useEffect, Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { nanoid } from "nanoid"
import "./Nelly.css"
// import data from "./nelly-data.json"
import ReadOnlyRow from './Components/ReadOnlyRow'
import EditableRow from './Components/EditableRow'
import {getDataPeople} from "./redux/actions/getApi"
import {deleteDataPeople} from "./redux/actions/getApi"

export default function Nelly() {
  const [contacts, setContacts] = useState([])
  const [addFormData, setAddFormData] = useState({
    name: "",
    surname: "",
    age: "",
    profesion: "",
  })
  const [editFormData, setEditFormData] = useState({
    name: "",
    surname: "",
    age: "",
    profesion: "",
  })
  const [editContactId, setEditContactId] = useState(null)
  const dispatch=useDispatch();
  const people1=useSelector(store=>store.getPeople.people)
  useEffect(()=>{
    dispatch(getDataPeople())
  }, [])
  
  const handleAddFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name")
    const fieldValue = event.target.value
    const newFormData = { ...addFormData }
    newFormData[fieldName] = fieldValue
    setAddFormData(newFormData)
  }
  const handleEditFormChange = (event) => {
    event.preventDefault()
    const fieldName = event.target.getAttribute("name")
    const fieldValue = event.target.value
    const newFormData = { ...editFormData }
    newFormData[fieldName] = fieldValue
    setEditFormData(newFormData)
  }
  const handleAddFormSubmit = (event) => {
    event.preventDefault()
    const newContact = {
      id: nanoid(),
      name: addFormData.name,
      surname: addFormData.surname,
      age: addFormData.age,
      profesion: addFormData.profesion,
    }
    const newContacts = [...contacts, newContact]
    setContacts(newContacts)
  }
  const handleEditFormSubmit = (event) => {
    event.preventDefault()
    const editedContact = {
      id: editContactId,
      name: editFormData.name,
      surname: editFormData.surname,
      age: editFormData.age,
      profesion: editFormData.profesion
    }
    const newContacts = [...contacts]
    const index = contacts.findIndex((contact) => contact.id === editContactId)
    newContacts[index] = editedContact
    setContacts(newContacts)
    setEditContactId(null)
  }
  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id)
    const formValues = {
      name: contact.name,
      surname: contact.surname,
      age: contact.age,
      profesion: contact.profesion,
    }
    setEditFormData(formValues)
  }
  const handleCancelClick = () => {
    setEditContactId(null)
  }
  const handleDeleteClick= (id) => {
    console.log(id,222)
    dispatch(deleteDataPeople(id))

  }
  return (
    
    <div className="crud-container">
       <h2 className='ntitle'>Ավելացնել տվյալներ</h2>
      <form className='nform' onSubmit={handleAddFormSubmit}>
        <input type="text"
          name="name"
          placeholder="Անուն..."
          required="required"
          onChange={handleAddFormChange}
        />
        <input type="text"
          name="surname"
          placeholder="Ազգանուն ..."
          required="required"
          onChange={handleAddFormChange}
        />
        <input type="text"
          name="age"
          placeholder="Տարիք ..."
          required="required"
          onChange={handleAddFormChange}
        />
        <input type="text"
          name="profesion"
          placeholder="Մասնագիտություն ..."
          required="required"
          onChange={handleAddFormChange}
        />
        <button typa="submit">Ավելացնել</button>
      </form>
      <h2 className="ntitle">Աշխարհի ամենահայտնի հայերը</h2>
      <form className="nform" onSubmit={handleEditFormSubmit}>
        <table className="ntable">
          <thead>
            <tr className="nhead">
              <th>Անուն</th>
              <th>Ազգանուն</th>
              <th>Ծնված</th>
              <th>Մասնագիտություն</th>
              <th>Գործողություններ</th>
            </tr>
          </thead>
          <tbody>
            {people1.map((contact) =>
              <Fragment key={contact.id}>
                {editContactId === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick }
                  />
                ) : (
                  <ReadOnlyRow contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            )}
          </tbody>
        </table>
      </form >
    </div>
  )
}
