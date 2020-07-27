import React from 'react';
import { Auth } from 'aws-amplify';
import './App.css';

const updateAttributes = async () => {
  const user = await Auth.currentAuthenticatedUser();
  Auth.updateUserAttributes(user, {'nickname': 'xyz'});
}

function App() {
  return (
    <div className="App">
      <button onClick={() => Auth.federatedSignIn({provider: "Google"})}>Sign In with Google</button>
      <button onClick={() => Auth.federatedSignIn()}>Sign In</button>
      <button onClick={() => Auth.signOut()}>Sign Out</button>
      <button onClick={updateAttributes}>Update attributes</button>
    </div>
  );
}

export default App;
