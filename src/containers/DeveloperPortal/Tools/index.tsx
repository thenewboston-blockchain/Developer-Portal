import React, {FC} from 'react';
import {useHistory} from 'react-router';

import {Button, Container} from 'components';
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
            <div className="Tools__tool-title">Node Deployment</div>
            <div className="Tools__tool-description">
              If you are interested in deploying and maintaining your own Node or Validator on our network, this
              detailed documentation is your starting point.
            </div>
            <Button
              className="Tools__tool-button"
              variant="outlined"
              onClick={() => history.push(ROUTES.tools.nodeDeployment)}
            >
              Learn More
            </Button>
          </div>
          <div className="Tools__tool">
            <div className="Tools__tool-title">SDKs & Libraries</div>
            <div className="Tools__tool-description">
              Are you a JavaScript or Python developer? Are you ready to develop your awesome software for thenewboston
              network? Our Developer Tools include SDKs, Libraries, and Utilities that get you started.
            </div>
            <Button
              className="Tools__tool-button"
              variant="outlined"
              onClick={() => history.push(ROUTES.tools.developerTools)}
            >
              Learn More
            </Button>
          </div>
          <div className="Tools__tool">
            <div className="Tools__tool-title">Utilities</div>
            <div className="Tools__tool-description">
              Check out these handy utilities to speed up the development process on our network and increase your
              productivity.
            </div>
            <Button
              className="Tools__tool-button"
              variant="outlined"
              onClick={() => history.push(ROUTES.tools.utilities)}
            >
              Learn More
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Tools;
