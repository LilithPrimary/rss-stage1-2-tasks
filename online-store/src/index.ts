import './styles/normalize.css';
import './style.css';
import Cards from './components/model/Cards';
import Controller from './components/controller/Controller';

const cards = new Cards();
cards.fillCards();

const startTracking = new Controller(cards);
startTracking.startTracking();