import '../App.css';
import AllContacts from './Contacts/AllContact';
import Favourite from './Contacts/Favourite';
import Recent from './Contacts/Recent';
import UserForm from './Form/UserForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import { useState } from 'react';

function App() {
  const [allContacts, setContacts] = useState(() => []);
  const [favourite, setFavourite] = useState(()=>[]);
  return (
    <Router>
      <div className="App">
        <ul>
          <li>  <Link to="/">Home</Link>                </li>
          <li>  <Link to="/all">All Contacts</Link>     </li>
          <li>  <Link to="/favourite">Favourite</Link>  </li>
          <li>  <Link to="/recent">Recent</Link>        </li>
        </ul>

        <Switch>
          <Route path="/" exact>
            <UserForm
              allContacts={allContacts}
              setContacts={setContacts}
            />
          </Route>
          <Route path="/all">
            <AllContacts
              allContacts={allContacts}
              favourite={favourite}
              setFavourite={setFavourite}
              setContacts={setContacts}
            />
          </Route>
          <Route path="/favourite">
            <Favourite
              allContacts={allContacts}
              favourite={favourite}
              setFavourite={setFavourite}
              setContacts={setContacts}
            />
          </Route>
          <Route path="/recent">    <Recent />      </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
