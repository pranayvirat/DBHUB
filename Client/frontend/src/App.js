import './App.css';
import  Navbar from'./components/Navbar'
import bg from './logos/bgImage.jpeg'
function App() {
  return (
    <div>
      <Navbar />

    <div className="container">
      <article>
      <h1>What is DB HUB?</h1>
      A place where you can access multiple Database System hubs.
      </article>
    </div>
    <img src={bg} alt="bg" style={{
            background:"rgba(0,0,0,0.5)",
            // filter:"brightness(0.4)",
            opacity:"0.3",
            width: '100%',
            height: '100%',
            // maxHeight: '40000px',
            // position: 'relative',
            // backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}/>
      </div>
  );
}

export default App;
