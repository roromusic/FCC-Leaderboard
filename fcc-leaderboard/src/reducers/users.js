import C from '../constants'

const usersReducer = (state = [], action) => {
  return (action.type === C.UPDATE) ?
          action.users:
          state
};

export default usersReducer