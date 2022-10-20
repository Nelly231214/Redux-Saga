import React from 'react'

function EditableRow({ editFormData, handleEditFormChange,handleCancelClick }) {
    return (
        <tr className="nbody">
            <td>
                <input type="text"
                    required="required"
                    placeholder="Enter a name..."
                    name="name"
                    value= {editFormData.name}
                    onChange={handleEditFormChange}>
                </input>
            </td>
            <td>
                <input type="text"
                    name="surname"
                    placeholder="Enter a surname ..."
                    required="required"
                    value= {editFormData.surname}
                    onChange={handleEditFormChange}>
                </input>
            </td>
            <td>
                <input type="text"
                    name="age"
                    placeholder="Enter a age ..."
                    required="required"
                    value= {editFormData.age}
                    onChange={handleEditFormChange}>
                </input>
            </td>
            <td>
                <input type="text"
                    name="profesion"
                    placeholder="Enter a profesion ..."
                    required="required"
                    value= {editFormData.profesion}
                    onChange={handleEditFormChange}>
                </input>
            </td>
            <td>
                <button type="submit">Պահպանել</button>
                <button type="button" onClick={handleCancelClick}>Չեղարկել</button>
            </td>
        </tr>
    )
}

export default EditableRow