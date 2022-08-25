import Header from './Header';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <div className='container'>
        <button className='add-btn'>Add</button>
        <div className='grid-container head-section'>
          <span className='grid-item name-heading'>Name</span>
          <span className='grid-item phone-heading'>Phone</span>
        </div>
      </div>
    </div>
  );
}

export default App;
