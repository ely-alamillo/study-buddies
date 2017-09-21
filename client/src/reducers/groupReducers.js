const groupReducers = (groups = [], action) => {
  switch (action.type) {
    case 'SHOW_GROUPS':
      return action.payload.data;
    case 'SHOW_GROUPS_ERROR':
      return { err: 'could get groups'};
    case 'ADD_GROUP':
    console.log('add group: ', action.payload.data.studyGroups);
      return action.payload.data.studyGroups
    case 'ADD_GROUP_ERROR':
      return { err: 'could not create group'};
    default:
      return groups;
  }
};

export default groupReducers;
