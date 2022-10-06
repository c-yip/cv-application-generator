import './App.css';
import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  const [data, setData] = React.useState({
    firstName: 'John', middle: 'A.', lastName: 'Doe', phone: '6664206969', email: 'j.doe@gmail.com', location: 'Los Angeles, CA', linkedIn: 'https://www.linkedin.com/in/doejohn/',
    objective: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  });
  
  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setData(prevData => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value
    }));
    console.log(data);
  }

  return (
    <div className="App">
      <Header />
      <Content 
        handleChange={handleChange}
        data={data}
      />
      <Footer />
    </div>
  );
}

export default App;
