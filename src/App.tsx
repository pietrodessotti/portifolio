import { AppRoutes } from './Routes';

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
