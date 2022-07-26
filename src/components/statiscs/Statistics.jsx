import PropTypes from 'prop-types';
export default function Statistics({ title, stats }) {
  return (
    <section>
      {title && <h2>Upload stats</h2>}
      <ul>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li key={id}>
              <span>{label}</span>
              <span>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};
