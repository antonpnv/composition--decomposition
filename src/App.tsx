import { Header } from './components/Header';
import { NewsList } from './components/NewsList';
import { Weather } from './components/Weather';
import { Sidebar } from './components/Sidebar';
import { Advertisement } from './components/Advertisement';
import './App.css';

/**
 * App: Основной компонент приложения
 */

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <div className="main__content">
        <div className="left__column">
          <Weather />
          <NewsList />
        </div>
        <div className="right__column">
          <Advertisement />
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default App;
