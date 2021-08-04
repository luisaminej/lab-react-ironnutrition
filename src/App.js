import logo from './logo.svg';
import './App.css';
import FoodBox from './components/FoodBox';
import foods from './foods.json'
import SearchBar from './components/SearchBar';
import AddFood from './components/AddFood';
import FoodList from './components/FoodList';


function App() {
  return (
    <div className="App">
      <FoodList />
      
    </div>
  );
}

export default App;
