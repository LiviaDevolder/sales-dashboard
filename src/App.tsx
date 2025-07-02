import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
// import { DashboardTemplate } from './components/templates';

function App() {
  return (
    <ChakraProvider value={defaultSystem}>
      Dashboard
      {/* <DashboardTemplate /> */}
    </ChakraProvider>
  );
}

export default App;
