import Navbar from './components/Navbar.jsx'
import AddExpence from './components/AddExpence.jsx'
import AllExpence from './components/AllExpence.jsx'
import ListExpence from './components/ListExpence.jsx'

function App() {

  return (
    <>
    <Navbar/>
      <div className="lg:w-[80%] mx-auto">
        <AddExpence/>
       <AllExpence/>
       <ListExpence/>

      </div>
    
    </>
  )
}

export default App
