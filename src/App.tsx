import { DashboardTemplate } from './components/templates';
import { Provider } from './components/ui/provider';

function App() {
  return (
    <Provider>
      <DashboardTemplate />
    </Provider>
  );
}

export default App;
