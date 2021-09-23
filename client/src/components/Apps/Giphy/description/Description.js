import React, {useState} from 'react';

import { Link } from "react-router-dom";

import "./description.css";

const Description = () => {
  const [clicked, setClicked] = useState("desc");

  return (
    <div className="giphy-description">
      <h2>Giphy</h2>
      
      <div className="description-text">
        <p>
        Vel gravida in neque id leo senectus. Sit ac vitae turpis lectus est venenatis, varius. Proin mattis turpis sagittis sodales auctor. Mauris nunc volutpat amet fermentum praesent erat. Aliquam egestas consectetur maecenas quam sagittis, elit dignissim quam lacus. Neque tincidunt sagittis aliquam rhoncus ut volutpat turpis. Habitasse pretium, nec turpis sed. Massa et id in leo auctor id. Leo at lorem in purus. Massa malesuada tincidunt id in euismod facilisis. Porttitor justo nulla enim nisl at elit gravida. Quam commodo neque viverra ut at morbi ullamcorper eget. Arcu tristique et velit, venenatis, enim a tincidunt nulla. Mauris at quisque arcu eget.
        </p>
        {/* <p>
          Giphy lets you search the world’s library of animated GIFs, making it
          easy to find and share them on the web. This integration will enable
          the giphy slash command for your team. Example: typing “giphy cats
          will display a cat GIF in your channel.
        </p> */}
      </div>
    </div>
  );
};

export default Description;
