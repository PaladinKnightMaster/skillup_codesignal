```
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Discovery from './Discovery';

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* Define the routes for "/" and "/discovery" paths as routes */}
        {/* TODO: Each route should render its corresponding component when its path is matched in the URL: / to Home  and /discovery to Discovery */}
        {/* Use 'element' prop to specify what component should be rendered */}
        {/* Make sure to put all Route elements inside Routes element */}
        <nav>
          {/* TODO: Add Links for navigation, with 'to' prop pointing to the respective paths */}
        </nav>
      </div>
    </BrowserRouter>
  );
}

// TODO: Export the App component as the default export
```
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Discovery from './Discovery';

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* Define the routes for "/" and "/discovery" paths as routes */}
        {/* TODO: Each route should render its corresponding component when its path is matched in the URL: / to Home  and /discovery to Discovery */}
        {/* Use 'element' prop to specify what component should be rendered */}
        {/* Make sure to put all Route elements inside Routes element */}
        <nav>
          {/* TODO: Add Links for navigation, with 'to' prop pointing to the respective paths */}
        </nav>
      </div>
    </BrowserRouter>
  );
}

// TODO: Export the App component as the default export