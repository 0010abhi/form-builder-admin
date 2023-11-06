import React, { useState } from 'react';
import './App.css';
import FormFieldMetadata from './components/FormFieldMetadata';

function App() {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [fields, setfields] = useState([{
    fieldType: '',
    name: '',
    label: '',
    placeholder: '',
  }]);

  function createForm() {
    const body = {
      name,
      desc,
      data: fields,
    }
    console.log('>>> create form', body);

    fetch({
      method: 'POST',
      url: 'http://localhost:3001/api/form/create'
    }).then((sucRes) => {
      console.log('>>> sucRes', sucRes);
    }, (errRes) => {
      console.log('>>> errRes', errRes);
    }).catch((err) => {
      console.log('>>> err', err);
    })
  }

  return (
    <div className="App" class="container mx-auto px-4">
      <h1 className="text-3xl font-bold">
        Create Form Metadata
      </h1>
      <div className="m-8">
        <input onChange={(e) => setName(e.target.value)} name="formName" placeholder='Form Name' />
        <input onChange={(e) => setDesc(e.target.value)} name="description" placeholder='Description' />
      </div>
      <div>
        <FormFieldMetadata fields={fields} setfields={setfields} />
      </div>
      <button type='button' onClick={createForm} class="btn btn-primary bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:shadow-md">
        Create
      </button>
    </div>
  );
}

export default App;
