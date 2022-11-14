import { useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import './App.scss';

import { Navbar } from './routes/Navbar/Navbar.component';
import { LandingPage } from './routes/LandingPage/LandingPage.component';
import { Me } from './routes/Me/Me.component';
import { CreateIdea } from './routes/CreateIdea/CreateIdea.component';
import { Settings } from './routes/Settings/Settings.component';
import { Idea } from './routes/Idea/Idea.component';
import { UserTokenContext } from "./contexts/UserToken.context";
import { LoadingSpinner } from "./components/LoadingSpinner/LoadingSpinner.component";
import { UserContext } from "./contexts/User.context";

import weeevIcon from './assets/images/weeev-icon.png';

function App() {
  const { isLoadingUserToken } = useContext(UserTokenContext);
  const { isFetchingUser } = useContext(UserContext);

  if (isLoadingUserToken || isFetchingUser) {
    return (
      <div className='InitialLoadingScreen bg-b-white'>
        <LoadingSpinner size='120px' borderWidth='3px' />
        <img className='weeev-icon' src={weeevIcon} />
      </div>
    );
  }
  return (
    <div className='App bg-n-white flex'>
        <Routes>
          <Route path='/' element={<Navbar />} >
            <Route index element={<LandingPage />} />
            <Route path='me/' element={<Me />} />
            <Route path='create-idea/' element={<CreateIdea />} />
            <Route path='settings/' element={<Settings />} />
            <Route path='idea/:ideaId' element={<Idea />} />
            <Route path='idea/' element={<h1>nothing here</h1>} />
          </Route>
        </Routes>
    </div>
  );
}

export default App;

// !!!!!!!!!! PRÓXIMO PASSO: INPUT VALIDATION E PAGINATION !!!!!!!!!