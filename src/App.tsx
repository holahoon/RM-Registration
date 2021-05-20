import { Link } from 'react-router-dom';
import MainRouter from 'components/router/Router';

function App() {
  return (
    <div>
      <h2>Remnant Ministry Registration</h2>

      <MainRouter>
        <button>
          <Link to='/login'>Login</Link>
        </button>
        <button>
          <Link to='/signup'>Signup</Link>
        </button>
      </MainRouter>
    </div>
  );
}

export default App;
