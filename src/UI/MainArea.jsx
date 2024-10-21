import PropTypes from 'prop-types';

function MainArea({ children }) {
  return (
    <div>
      <p>MainArea</p>
      {children}
    </div>
  );
}

export default MainArea;

MainArea.propTypes = {
  children: PropTypes.node,
};
