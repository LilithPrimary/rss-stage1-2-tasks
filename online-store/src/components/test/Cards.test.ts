import Card from '../view/CardView';
import Cards from '../model/Cards';

describe('Cards class test', () => {
  const cards = new Cards();
  beforeEach(() => {
    cards.fillCards();
  })

  const isCardInstances = (cards: Card[]) => cards.every(card => card instanceof Card);

  it('all items in Cards.cards should be instance of Card', () => {
    expect(isCardInstances(cards.cards)).toEqual(true);
  })

})