import PropTypes from 'prop-types';
import container from '../otherStyles/SectionContainer.module.css';
import css from './Statistics.module.css';
export default function Statistics({ title, stats }) {
  return (
    <section className={container.section}>
      <div className={container.contents}>
        {title && <h2 className={css.title}>Upload stats</h2>}
        <ul className={css['stat-list']}>
          {stats.map(({ id, label, percentage }) => {
            return (
              <li key={id} className={css.item}>
                <span className={css.label}>{label}</span>
                <span className={css.percentage}>{percentage}%</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

Statistics.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};
