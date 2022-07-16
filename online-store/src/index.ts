import './styles/normalize.css';
import './style.css';
import Cards from './components/model/Cards';
import DrawCards from './components/view/drawCards';
import Controller from './components/controller/Controller';

const cards = new Cards();
cards.fillCards();
const start = new DrawCards(cards.cards);
start.draw();

const startTracking = new Controller(cards);
startTracking.startTracking();
