import React, { useEffect, useState } from 'react';

export default function FieldTypeDropdown() {
    const [fieldTypes, setFieldTypes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/api/field-type')
            .then(res => res.json())
            .then((sucRes) => {
                console.log('>>> suc', sucRes);
                setFieldTypes(sucRes);
            }, (errRes) => {
                console.log('>>> error', errRes);
            })
            .catch((err) => {
                console.log('>>> err', err);
            })
    }, []);

    return <select name="fieldTypes">
        {
            fieldTypes.map((fieldType, index) => (<option key={index} value={fieldType.id}>{fieldType.name}</option>))
        }
    </select>
}