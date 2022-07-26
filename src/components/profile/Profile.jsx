import PropTypes from 'prop-types';
import css from './Profile.module.css';
import container from '../otherStyles/SectionContainer.module.css';
export default function Profile({
  username,
  tag,
  location,
  avatar = 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png',
  stats,
}) {
  return (
    <section className={container.section}>
      <div className={container.contents}>
        <div className={css.user}>
          <img className={css.avatar} src={avatar} alt="User avatar" />
          <p className={css.name}>{username}</p>
          <p className={css.tag}>{tag}</p>
          <p>{location}</p>
        </div>

        <ul className={css.stats}>
          <li>
            <span className={css.label}>Followers</span>
            <span>{stats.followers}</span>
          </li>
          <li>
            <span className={css.label}>Views</span>
            <span>{stats.views}</span>
          </li>
          <li>
            <span className={css.label}>Likes</span>
            <span>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
  // followers: PropTypes.number.isRequired,
  // views: PropTypes.number.isRequired,
  // likes: PropTypes.number.isRequired,
};
