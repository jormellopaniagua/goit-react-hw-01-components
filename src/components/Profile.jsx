import PropTypes from 'prop-types';
import './Profile.css'; //  importar el archivo de estilos CSS para el componente Profile

import { Component } from 'react';

export default class Profile extends Component {
  /* constructor(props) {
    super(props);

    this.state = {};
  }*/

  render() {
    return (
      <div class="profile">
        <div class="description">
          <img src={this.props.avatar} alt="User avatar" class="avatar" />
          <p class="name">{this.props.username}</p>
          <p class="tag">@{this.props.tag}</p>
          <p class="location">{this.props.location}</p>
        </div>

        <ul class="stats">
          <li>
            <span class="label">Followers</span>
            <span class="quantity">{this.props.stats.followers}</span>
          </li>
          <li>
            <span class="label">Views</span>
            <span class="quantity">{this.props.stats.views}</span>
          </li>
          <li>
            <span class="label">Likes</span>
            <span class="quantity">{this.props.stats.likes}</span>
          </li>
        </ul>
      </div>
    );
  }
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
