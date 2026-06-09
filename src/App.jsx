import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import MainRouter from '../MainRouter';
const App = () => {
return (
<Router>
<MainRouter />
</Router>
);
};
export default App;
