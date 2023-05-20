import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from '../../Providers/AuthProviders';
import AddaToy from './AddaToy';
import AllToys from './AllToys';
import MyToys from './MyToys';

const App = () => {
  const [toysData, setToysData] = useState([]);

  useEffect(() => {
    fetchToysData();
  }, []);

  const fetchToysData = async () => {
    try {
      const response = await fetch(
        'https://assignment-11-server-theta-wheat.vercel.app/toys'
      );
      const data = await response.json();
      setToysData(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route exact path="/alltoys">
            <AllToys toysData={toysData} />
          </Route>
          <Route exact path="/mytoys" component={MyToys} />
          <Route exact path="/addatoy" component={AddaToy} />
        </Switch>
      </AuthProvider>
    </Router>
  );
};

export default App;

