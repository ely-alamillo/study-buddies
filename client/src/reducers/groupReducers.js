const groupReducers = (groups = [], action) => {
  switch (action.type) {
    case 'SHOW_GROUPS':
      return action.payload.data;
    case 'SHOW_GROUPS_ERROR':
      return { err: 'could get groups'};
    case 'ADD_GROUP':
      // console.log(action.payload.data);
      return action.payload.data.groups;
    case 'ADD_GROUP_ERROR':
      return { err: 'could not create group'};
    case 'SINGLE_GROUP':
      return action.payload.data;
    case 'USER_GROUPS':
      return action.payload.data;
    case 'DELETE_GROUP':
    // console.log(action.payload.data);
      return action.payload.data;
    default:
      return groups;
  }
};

export default groupReducers;
