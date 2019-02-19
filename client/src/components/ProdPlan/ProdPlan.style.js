const styles = {
  headerContainer: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    overflowX: 'scroll',
    justifyContent: 'center',
  },
  columnHeadersContainer: {
    display: 'flex',
    marginLeft: 60,
    width: '100%',
    justifyContent: 'center',
  },
  planContainer: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    overflowX: 'scroll',
    justifyContent: 'center',
    flexGrow: 100,
  },
  columnsContainer: {
    display: 'flex',
    marginLeft: 60,
    width: '100%',
    overflowX: 'scroll',
    justifyContent: 'center',
    flexGrow: 100,
  },
  errorDiv: {
    display: 'flex',
    margin: '0px 5px 10px 5px',
    background: 'rgba(255, 230, 230)',
    color: 'red',
    width: '20%',
    zIndex: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    MozBoxShadow: '2px 2px 10px #cccccc',
    WebkitBoxShadow: '2px 2px 10px #cccccc',
    boxShadow: '2px 2px 10px #cccccc',
  },
  errorLabel: {
    textAlign: 'center',
    fontSize: 14,
  },
};

export default styles;
