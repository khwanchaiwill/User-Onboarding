import React , {useState, useEffect} from 'react';
import FormMember from './Component/Forms'
import './App.css';
import axios from 'axios';
import * as Yup from 'yup';
import formSchema from './validation/formSchema';
import MemberHolder from './Component/Memberhandle'




const initialFormValues = {
  flname: '',
  username: '',
  email: '',
  password: '',
  gender: '',
  role: '',
  term: {
    terms:false,
  },
  interested: {
    movie: false,
    games: false,
    coding: false,
    travel: false,
  },
  // img: '',
}
const initialError = {
  flname: '',
  username: '',
  email: '',
  password: '',
  gender: '',
  role: '',
}
const initialMembers = []
const intialDisabled = true

function App() {
  const [member, setMember] = useState(initialMembers);
  const [formValues, setFromValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialError);
  const [disabled, setDisabled] = useState(intialDisabled);
  
  useEffect(() => {
    const getUser = () => {
    axios.get('https://reqres.in/api/users')
    .then( res =>{
      setMember(res.data)
    })
    .catch(err => {
      console.log('Booooo!!! You will see me if it not right path')
    })
  }
  }, [])
  

  const postNewMember = newMember =>{
    axios.post('https://reqres.in/api/users', newMember)
    .then( res => {
      setMember([...member, res.data])
    })
    .catch(err => {
      debugger
    })
    .finally(() => {
      setFromValues(initialFormValues)
    })
  }

  const inputChange = event => {
    const { name, value } = event.target
    Yup
      .reach(formSchema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: ""
        })
      })
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        })
      })
      setFromValues({
        ...formValues,
        [name]: value
      })
  }
  const checkboxChange = event => {
    const {name, checked} = event.target
    setFromValues({
      ...formValues,
      term: {
        ...formValues.term,
        [name]: checked,
      },
      interested: {
        ...formValues.interested,
        [name]: checked,
      }
    })
  }
  const onSubmit = event => {
    event.preventDefault()

    const newMember = { 
      ...formValues,
      interested: Object.keys(formValues.interested)
      .filter(interestedName =>(formValues.interested[interestedName] === true))
    }
   postNewMember(newMember)
  }

  useEffect(() =>  {
    formSchema.isValid(formValues).then(valid => {
      setDisabled(!valid)
    })
  }, [formValues])
  return (
    <div className="App">
      <header className="App-header">
        <h2>Register the new Member</h2>
      </header>
      <div className="App-container">
        <FormMember
          values={formValues}
          inputChange={inputChange}
          checkboxChange={checkboxChange}
          onSubmit={onSubmit}
          disabled={disabled}
          errors={formErrors}
          />
      </div>
      <div className="App-second-container">
        <h1 style={{color:'#FF00FF' }}>Show member</h1>
      {
        member.map(mem =>{
           return <MemberHolder key={mem.id} info={mem} />
        })
       
      }
      </div>
    
    </div>
  );
}

export default App;
