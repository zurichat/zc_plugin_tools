import { GreenBtn, WhiteBtn } from '../buttons/button';
import Logo from '../logo/logo';

import './descriptionAction.css';

const DescriptionAction = () => {
  return (
    <div className="action-section">
      <Logo />
      <div className="btn-wrapper">
        <GreenBtn>Add to Zuri Chat</GreenBtn>
        <WhiteBtn>Learn more</WhiteBtn>
      </div>
    </div>
  );
};

export default DescriptionAction;
