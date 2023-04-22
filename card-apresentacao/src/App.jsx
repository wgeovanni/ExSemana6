import './App.css'
import Card from './components/Card'

function App() {
  return (
    <div className="App">
      <Card
        foto="./src/assets/foto2.jpg"
        nome="Willyan Geovanni Gutierres Gonçalves"
        idade="Idade: 30 anos"
        github="https://github.com/wgeovanni"
        linkedin="https://www.linkedin.com/in/willyan-geovanni/" />
    </div>
  )
}

export default App
