import {useState, useEffect} from 'react';
import './App.css';
import List from './components/List'
import Form from './components/Form'
import {Sub} from './types'

interface AppState {
  subs: Array<Sub>
  newSubsNumber: number
}

const INITIAL_STATE = [
  {
    nick: 'dapelu',
    subMonths: 3,
    avatar: 'https://i.pravatar.cc/150?u=dapelu',
    description: 'Dapelu hace de moderador a veces'
  },
  {
    nick: 'sergio_serrano',
    subMonths: 6,
    avatar: 'https://i.pravatar.cc/150?u=sergio_serrano',
  }
]

function App() {
  const [subs, setSubs] = useState<AppState["subs"]>([])
  const [newSubsNumber, setNewSubsNumber] = useState<AppState["newSubsNumber"]>(0)

  useEffect(() => {
    setSubs(INITIAL_STATE)
  }, [])

const handleNewSub = (newSub: Sub): void => {
  setSubs(subs => [...subs, newSub])
}

  return (
    <div className="App">
      <h1>Nahiska Subs</h1>
      <List subs={subs} />
      <Form onNewSub={handleNewSub}/>
    </div>
  );
}

export default App;
