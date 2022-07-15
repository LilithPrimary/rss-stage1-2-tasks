import './styles/normalize.css';
import './style.css';
import Cards from './components/model/Cards';

const start = new Cards();
start.fillCards();
console.log(start.cards);