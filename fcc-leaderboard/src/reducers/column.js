import C from '../constants'

const columnReducer = (state="", action) => {
  return (action.type === C.CHANGE) ?
          action.column:
          state
};

export default columnReducer