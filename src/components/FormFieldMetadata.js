import React, { useState } from 'react';
import FieldTypeDropdown from './FieldTypeDropdown';

export default function FormFieldMetadata({ fields, setfields }) {
    function addFieldsRow() {
        const fieldsArray = [...fields];
        fieldsArray.push({
            fieldType: 1,
            name: '',
            label: '',
            placeholder: '',
        });
        setfields(fieldsArray);
    }

    function setTableColumnData(value, index, dataKey) {
        const fieldsArray = [...fields];
        fieldsArray[index][dataKey] = value
        setfields(fieldsArray);
    }

    return <table class="table-auto">
        <tr>
            <th>Field Type</th>
            <th>Name</th>
            <th>Label</th>
            <th>Placeholder</th>
            <th>Action</th>
        </tr>
        {
            fields.map((field, index) => (
                <tr key={index}>
                    <td><FieldTypeDropdown /></td>
                    <td><input
                        onChange={(e) => setTableColumnData(e.target.value, index, 'name')}
                        name={`field-${index}-name`}
                        value={field.name} /></td>
                    <td><input
                        onChange={(e) => setTableColumnData(e.target.value, index, 'label')}
                        name={`field-${index}-label`}
                        value={field.label} /></td>
                    <td><input
                        onChange={(e) => setTableColumnData(e.target.value, index, 'placeholder')}
                        name={`field-${index}-placeholder`}
                        value={field.placeholder} /></td>
                    <td>
                        <button onClick={addFieldsRow}>Add</button>
                        <button>Delete</button>
                    </td>
                </tr>
            ))
        }
    </table>
}