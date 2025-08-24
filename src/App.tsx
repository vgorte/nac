import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard/Dashboard';
import Builds from './pages/Builds/Builds';
import MemberList from './pages/MemberList/MemberList';
import NotFound from './pages/NotFound/NotFound';
import { config } from './config/config';

function App() {
  return (
    <Router basename={config.getBasePath()}>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/builds" element={<Builds />} />
          <Route path="/members" element={<MemberList />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
