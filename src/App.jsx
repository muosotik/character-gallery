import { useState } from 'react'        
import { Routes, Route, Link } from 'react-router-dom' 
import HomePage from './pages/HomePage'
import AddPage from './pages/AddPage'
import AboutPage from './pages/AboutPage'
import './index.css'


const initialCharacters = [
  {
    id: 1,
    name: 'Лунный кот',
    imageUrl: 'https://placekitten.com/300/300',
    story: 'Таинственный кот из лунного света.'
  },
  {
    id: 2,
    name: 'Древний дуб',
    imageUrl: 'https://picsum.photos/id/104/300/300',
    story: 'Хранитель леса, помнит всё.'
  }
]

function App() {

  const [characters, setCharacters] = useState(initialCharacters)

  const addCharacter = (newCharacter) => {
    setCharacters([...characters, { ...newCharacter, id: Date.now() }])
  }

  return (
    <div className="app">
      {/* Шапка сайта с навигацией */}
      <header className="header">
        <div className="logo">🎨 ArtCharacters</div>
        <nav className="nav">
          <Link to="/">Главная</Link>
          <Link to="/add">Добавить персонажа</Link>
          <Link to="/about">О проекте</Link>
        </nav>
      </header>

      {/* Основной контент — здесь отображаются разные страницы в зависимости от URL */}
      <main className="main">
        <Routes>
          <Route path="/" element={<HomePage characters={characters} />} />
          <Route path="/add" element={<AddPage onAdd={addCharacter} />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>

      {/* Подвал сайта */}
      <footer className="footer">
        <p>© 2026 Галерея персонажей. Все права защищены.</p>
      </footer>
    </div>
  )
}

export default App