import React, {FC} from 'react';
import {useHistory} from 'react-router';

import {Button, Container, EmojiIcon, EmojiType} from 'components';
import {ROUTES} from 'constants/routes';
import './DeveloperPortalCards.scss';

const DeveloperPortalCards: FC = () => {
  const history = useHistory();

  return (
    <div className="DeveloperPortalCards">
      <Container className="DeveloperPortalCards__container">
        <div className="DeveloperPortalCards__card">
          <EmojiIcon color="#FF928E" emoji={EmojiType.Paper} marginBottom={24} />
          <div className="DeveloperPortalCards__card-title">Living Whitepaper</div>
          <div className="DeveloperPortalCards__card-description">
            Our living whitepaper is a constantly evolving set of technical docs about thenewboston blockchain
            architecture, including its Governance model. This is a must-read for all developers on thenewboston
            blockchain.
          </div>
          <Button
            className="DeveloperPortalCards__card-button"
            variant="outlined"
            onClick={() => history.push(ROUTES.whitepaper.home)}
          >
            Learn More
          </Button>
        </div>
        <div className="DeveloperPortalCards__card">
          <EmojiIcon color="#2DA15D" emoji={EmojiType.Bulb} marginBottom={24} />
          <div className="DeveloperPortalCards__card-title">Projects</div>
          <div className="DeveloperPortalCards__card-description">
            Earn coins by building apps, games, tools, and other software for thenewboston network. Learn how to submit
            your project proposal, or study how other community members structure their own projects.
          </div>
          <Button
            className="DeveloperPortalCards__card-button"
            variant="outlined"
            onClick={() => history.push(ROUTES.projects.home)}
          >
            Learn More
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default DeveloperPortalCards;
