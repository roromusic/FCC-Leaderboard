import C from '../constants'

const usersReducer = (state = [], action) => {
  return (action.type === UPDATE) ?
          action.users:
          state
};

export default usersReducer