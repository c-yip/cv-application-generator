import './App.css';
import React from 'react';
import Header from './components/Header';
import Input from './components/Input';
import Preview from './components/Preview';
import Footer from './components/Footer';

function App() {
  const [data, setData] = React.useState({
    firstName: '', middle: '', lastName: '', phone: '', email: ''
  });
  
  function handleChange(event) {
    const { name, value } = event.target;
    setData(prevData => ({
      ...prevData,
      [name]: value
    }));
    console.log(data);
  }

  return (
    <div className="App">
      <Header />
      <Input 
        handleChange={handleChange}
        data={data}
      />
      <Preview />
      <Footer />
    </div>
  );
}

export default App;
