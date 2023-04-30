import './App.css';
import  Navbar from'./components/Navbar'
import bg from './logos/bgImage.jpeg'
function App() {
  return (
    <div >
      
      <div >
        <Navbar style={{
          zIndex:"10000000000000000"
        }}/>
       <div>

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
