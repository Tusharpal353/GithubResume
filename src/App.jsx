
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Form from './Components/Form';


import Resume from './Components/Resume/Resume';
import  { useState } from 'react';
import GitHubCalendar from 'react-github-calendar';
import Repo from './Components/Form/Repo';


function App() {


  const [formData,setFormData]=useState(null);




  return (
   /*  <FinalResume/> */
  /*   <Provider store={appStore}> */
    <BrowserRouter>
    <Routes>

      <Route path='/' element={   <Form setFormData={setFormData}/>}></Route>
      <Route path='/resume' element={<Resume formData={formData} />}></Route>
      <Route path='/git' element={<Repo/>}></Route>
     
    </Routes>
    
    
    </BrowserRouter>
  /*   </Provider> */
  );
}

export default App;
