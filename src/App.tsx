import ReactGA from 'react-ga';
import { AppRoutes } from './Routes';

  const TRACKING_ID = "G-HM63V4GPC6"; // OUR_TRACKING_ID
  ReactGA.initialize(TRACKING_ID);

/**
 * @export
 * @component
 * @name App
 *
 * @description
 * Responsável pelo componente de App
 * da aplicação.
 */
function App() {
  return (
    <div className="bg-dark-blue text-white">
      <AppRoutes />
    </div>
  );
}

export default App;
