const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    margin: '10px 5px',
    padding: 7,
    MozBoxShadow: '2px 2px 10px #cccccc',
    WebkitBoxShadow: '2px 2px 10px #cccccc',
    boxShadow: '2px 2px 10px #cccccc',
    borderRadius: 5,
    width: '20%',
  },
  columnHeader: {
    flex: '0 1 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  grid: {
    position: 'relative',
    flex: '1 1 auto',
    marginTop: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    overflow: 'none',
  },
  gridItem: {
    display: 'inline-grid',
    width: '100%',
  },
};

export default styles;
