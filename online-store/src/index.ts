import './styles/normalize.css';
import './style.css';
import Cards from './components/model/Cards';
import DrawCards from './components/view/DrawCards';
import Controller from './components/controller/Controller';
// import { slider } from './components/slider/slider';


const cards = new Cards();
cards.fillCards();
const start = new DrawCards(cards.cards);
start.draw();

const startTracking = new Controller(cards);
startTracking.startTracking();

// slider();