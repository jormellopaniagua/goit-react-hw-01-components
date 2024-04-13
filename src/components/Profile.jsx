import PropTypes from 'prop-types';
import Perfil from './styledComponents/profile';
import Description from './styledComponents/description';
import Avatar from './styledComponents/avatar';
import { Component } from 'react';
import UserName from './styledComponents/name';
import Stats from './styledComponents/stats';
import Stat from './styledComponents/stat';
import StatLabel from './styledComponents/statLabel';
import Listado from './styledComponents/listado';

export default class Profile extends Component {
  render() {
    return (
      <Perfil class="profile">
        <Description class="description">
          <Avatar src={this.props.avatar} alt="User avatar" class="avatar" />
          <UserName class="name">{this.props.username}</UserName>
          <p class="tag">@{this.props.tag}</p>
          <p class="location">{this.props.location}</p>
        </Description>
        <Listado>
          <Stats class="stats">
            <Stat>
              <StatLabel class="label">Followers</StatLabel>
              <span class="quantity">{this.props.stats.followers}</span>
            </Stat>
            <Stat>
              <StatLabel class="label">Views</StatLabel>
              <span class="quantity">{this.props.stats.views}</span>
            </Stat>
            <Stat>
              <StatLabel class="label">Likes</StatLabel>
              <span class="quantity">{this.props.stats.likes}</span>
            </Stat>
          </Stats>
        </Listado>
      </Perfil>
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
