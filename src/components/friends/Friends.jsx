import PropTypes from 'prop-types';
import css from './Friends.module.css';
import container from '../otherStyles/SectionContainer.module.css';

export default function FriendList({ friends }) {
  return (
    <section className={container.section}>
      <div className={container.contents}>
        <ul className={css['friend-list']}>
          {friends.map((friend, isOnline) => (
            <li key={friend.id} className={css.item}>
              <span
                className={css.status}
                style={{ backgroundColor: isOnline ? 'green' : 'red' }}
              ></span>
              <img
                className={css.avatar}
                src={friend.avatar}
                alt=""
                width="48"
              />
              <p>{friend.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
