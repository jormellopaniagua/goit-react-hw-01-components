import PropTypes from 'prop-types';
//import './FriendList.css'; //importar el archivo de estilos CSS para el componente Profile

import { Component } from 'react';
import Friends from './styledComponents/friends';
import FriendGroup from './styledComponents/friendList';
import FriendCard from './styledComponents/friendCard';
import OnlineStatus from './styledComponents/onlineStatus';
import OfflineStatus from './styledComponents/offlineStatus';

export default class FriendList extends Component {
  render() {
    const { friends } = this.props;
    return (
      <Friends>
        <FriendGroup className="friend-list">
          {friends.map(({ id, avatar, name, isOnline }) => (
            <FriendCard key={id} className="item">
              {/* Renderiza el estado con el color correspondiente */}
              {isOnline ? (
                <OnlineStatus className="status">.</OnlineStatus>
              ) : (
                <OfflineStatus className="status">.</OfflineStatus>
              )}
              <img
                className="avatar"
                src={avatar}
                alt="User avatar"
                width="48"
              />
              <p className="name">{name}</p>
            </FriendCard>
          ))}
        </FriendGroup>
      </Friends>
    );
  }
}
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
