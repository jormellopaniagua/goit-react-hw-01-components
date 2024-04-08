import PropTypes from 'prop-types';
import './FriendList.css'; //importar el archivo de estilos CSS para el componente Profile

import { Component } from 'react';

export default class FriendList extends Component {
  render() {
    const { friends } = this.props;
    return (
      <div>
        <h1>FRIENDS</h1>
        <ul className="friend-list">
          {friends.map(({ id, avatar, name, isOnline }) => (
            <li key={id} className="item">
              <span class="status">
                {isOnline ? 'status online' : 'status offline'}
              </span>
              <img
                className="avatar"
                src={avatar}
                alt="User avatar"
                width="48"
              />
              <p className="name">{name}</p>
            </li>
          ))}
        </ul>
      </div>
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
