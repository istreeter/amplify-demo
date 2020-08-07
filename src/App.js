import React, { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import './App.css';

const updateAttributes = async () => {
  const user = await Auth.currentAuthenticatedUser();
  Auth.updateUserAttributes(user, {'custom:plg_custom_attr_1': 'xyz'});
}

function App() {
  const [user, setUser] = useState(undefined);
  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then(user => setUser(user))
      .catch(() => setUser(undefined));
  }, []);

  return (
    <div className="App">
      <button onClick={() => Auth.federatedSignIn({provider: "Google"})}>Sign In with Google</button>
      <button onClick={() => Auth.federatedSignIn()}>Sign In</button>
      <button onClick={() => Auth.signOut()}>Sign Out</button>
      <button onClick={updateAttributes}>Update attributes</button>
      { user && <pre>{JSON.stringify(user, null, 2)}</pre>}
    </div>
  );
}

export default App;
