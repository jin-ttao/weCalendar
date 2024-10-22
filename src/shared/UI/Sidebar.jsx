import PropTypes from 'prop-types';

function Sidebar({ children }) {
  return (
    <div>
      <p>Sidebar</p>
      {children}
    </div>
  );
}

export default Sidebar;

Sidebar.propTypes = {
  children: PropTypes.node,
};
