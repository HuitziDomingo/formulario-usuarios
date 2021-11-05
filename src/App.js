import { useState } from 'react'
import useFormulario from './hooks/useFormulario'
import Input from './components/Input'
import Card from './components/Card'
import Container from './components/Container'
import Button from './components/Button'

function App() {

  const [users, setUsers] = useState([])
  const [form, handleChange, reset] = useFormulario({ name: '', lastname: '', email: '' })

  const submit = e => {
    e.preventDefault()
    setUsers([
      ...users,
      form
    ])
    reset()
  }

  console.log(form, users)

  return (
    <div style={{ marginTop: '13%'}}>
      <Container>
        <Card>
          <div style={{ padding: 20 }}>
            <form onSubmit={submit} >
              <Input label="Nombre" name="name" value={form.name} onChange={handleChange} />
              <Input label="Apellido" name="lastname" value={form.lastname} onChange={handleChange} />
              <Input label="Correo" name="email" value={form.email} onChange={handleChange} />
              <Button>
                <button type="submit">Enviar</button>
              </Button>
            </form>
          </div>
        </Card>
        <Card>
          <ul>
            {
              users.map(x => (
                <li key={x.email} >{`${x.name} // ${x.lastname} // ${x.email}`}</li>
              ))
            }
          </ul>
        </Card>
      </Container>
    </div>
  );
}

export default App;
