import axios from 'axios';

export const getCards = (setCards) => {
    axios.get('/tarot.json')
        .then((res) => {
            setCards(res.data.cards.map(card => ({ ...card, flipCard: true })));
        })
        .catch((err) => {
            console.error(err)
        });
};