import React, {FC} from 'react';
import {useHistory} from 'react-router';

import {Button, Container, EmojiIcon, EmojiType} from 'components';
import {ROUTES} from 'constants/routes';
import './Tools.scss';

const Tools: FC = () => {
  const history = useHistory();
  return (
    <div className="Tools">
      <Container className="Tools__container">
        <div className="Tools__title">Tools</div>
        <div className="Tools__content-container">
          <div className="Tools__tool">
            <EmojiIcon color="#F9C200" emoji={EmojiType.Gear} marginBottom={24} />
            <div className="Tools__tool-title">APIs</div>
            <div className="Tools__tool-description">
              This is the core of our technical documentation. If you develop in languages other than JavaScript and
              Python, or if you prefer to work in Vanilla JavaScript or plain Python without using our SDKs and
              Libraries, this is your starting point.
            </div>
            <Button className="Tools__tool-button" variant="outlined" onClick={() => history.push(ROUTES.tools.apis)}>
              Learn More
            </Button>
          </div>
          <div className="Tools__tool">
            <EmojiIcon color="#4F52FF" emoji={EmojiType.Web} marginBottom={24} />
            <div className="Tools__tool-title">SDKs & Libraries</div>
            <div className="Tools__tool-description">
              Are you a JavaScript or Python developer? Are you ready to develop your awesome software for thenewboston
              network? Our SDKs and Libraries will help you get started.
            </div>
            <Button className="Tools__tool-button" variant="outlined" onClick={() => history.push(ROUTES.tools.sdks)}>
              Learn More
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Tools;
