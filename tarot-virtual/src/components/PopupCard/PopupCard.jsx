import React from 'react';
import { BASE_URL } from '../../constants/url';
import { DetailsContainer, PopupCardContainer, PopupTexts } from './styled';

function PopupCard({ trigger, setTrigger, card }) {
    const handleClose = () => {
        setTrigger(false);
    };

    return trigger ? (
        <PopupCardContainer onClick={handleClose}>
            <DetailsContainer>
                <img src={`${BASE_URL}/${card.image}`} alt={card.name} />
                <PopupTexts>
                    <h3>{card.name}</h3>
                    <p>{card.description}</p>
                </PopupTexts>
            </DetailsContainer>
        </PopupCardContainer>
    ) : null;
}

export default PopupCard;