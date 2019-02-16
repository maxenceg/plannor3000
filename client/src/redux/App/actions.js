export const constants = {
  TOGGLE_EDIT_TEAM_POPIN: 'TOGGLE_EDIT_TEAM_POPIN',
};

export function toggleEditTeamPopin() {
  return {
    type: constants.TOGGLE_EDIT_TEAM_POPIN,
  };
}

export default {
  toggleEditTeamPopin,
};
