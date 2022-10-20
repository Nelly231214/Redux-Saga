import React from 'react'

function ReadOnlyRow({contact, handleEditClick, handleDeleteClick}) {
  return (
    <tr className="nbody">
      <td>{contact.name}</td>
      <td>{contact.surname}</td>
      <td>{contact.age}</td>
      <td>{contact.profesion}</td>
      <td>
        <button type="button" onClick={(event)=> handleEditClick(event, contact)}>Խմբագրել</button>
        <button type="button" onClick={()=>handleDeleteClick(contact.id)}>Ջնջել</button>
      </td>
    </tr>
  )
}

export default ReadOnlyRow