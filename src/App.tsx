import './App.css'

function App() {
  return (
    <div className="construction-container">
      <div className="construction-content">
        <div className="construction-icon">
          🚧
        </div>
        <h1 className="construction-title">Site em Construção</h1>
        <p className="construction-message">
          Estamos trabalhando duro para trazer algo incrível para você.
        </p>
        <p className="construction-submessage">
          Em breve estaremos de volta com novidades!
        </p>
        <div className="construction-loader">
          <div className="loader-bar"></div>
        </div>
      </div>
    </div>
  )
}

export default App
