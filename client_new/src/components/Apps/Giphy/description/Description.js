import { Link } from "react-router-dom";

import "./description.css";

const Description = () => {
  return (
    <div className="giphy-description">
      <h2>Giphy</h2>
      <div className="description-links-wrapper">
        <ul>
          <li className="active">
            <Link to={`/`}>Description</Link>
          </li>
          <li>
            <Link to={`/`}>Permission</Link>
          </li>
          <li>
            <Link to={`/`}>Security & Compliance</Link>
          </li>
        </ul>
      </div>
      <div className="description-text">
        <p>
          Giphy lets you search the world’s library of animated GIFs, making it
          easy to find and share them on the web. This integration will enable
          the giphy slash command for your team. Example: typing “giphy cats
          will display a cat GIF in your channel.
        </p>
      </div>
    </div>
  );
};

export default Description;
