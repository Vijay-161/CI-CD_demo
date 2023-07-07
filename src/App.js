import logo from './logo.svg';
import './App.css';
import Skills from './components/Skills';
import Users from './components/Users';

function App() {
  const skills = [
    {id:1, name: "vijay"},
    {id:2, name: "writing"},
    {id:3, name: "reading"}
]
const handleDelete = (userId) =>{
  alert(userId)
}
  return (
    // <Skills skills={skills}/>
    <Users handleDelete={handleDelete}/>
  );
}

export default App;
