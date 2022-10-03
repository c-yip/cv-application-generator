import './App.css';
import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  const [data, setData] = React.useState({
    firstName: '', middle: '', lastName: '', phone: '', email: '', location: '', linkedIn: '',
    objective: '', 
    employerName: '', employerCity: '', employerState: '', jobTitle: '', jobBullet: '', jobStartDate: '', jobEndDate: '', jobCurrent: false,
    skillTitle: '', skillDescription: '',
    projectTitle: '', projectLink: '', projectRepo: '', projectDescription: '', projectDescriptionBullet: '',
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
