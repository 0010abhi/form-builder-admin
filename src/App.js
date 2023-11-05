import React, {useState} from 'react';
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
    <div className="App">
      <h2>
        Create Form Metadata
      </h2>
      <div>
        <input onChange={(e) => setName(e.target.value)} name="formName" placeholder='Form Name' />
        <input onChange={(e) => setDesc(e.target.value)} name="description" placeholder='Description' />
      </div>
      <div>
        <FormFieldMetadata fields={fields} setfields={setfields} />
      </div>
      <button onClick={createForm}>Create</button>
    </div>
  );
}

export default App;
