const styles = {
  editTeamPopin: {
    maxWidth: 600,
  },
  avatarContainer: {
    verticalAlign: 'top',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    minWidth: 50,
    minHeight: 50,
    cursor: 'pointer',
    borderRadius: '50%',
    boxSizing: 'border-box',
  },
  avatar: {
    borderRadius: '50%',
    overflow: 'hidden',
  },
  avatarInTeam: {
    border: '4px solid orange',
    margin: 1,
  },
  undefinedAvatar: {
    width: 50,
    height: 50,
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    background: '#dddddd',
    textTransform: 'uppercase',
  },
  editTeamPopinFooter: {
    textAlign: 'right',
  },
  warningMessage: {
    marginBottom: 10,
  },
};

export default styles;
