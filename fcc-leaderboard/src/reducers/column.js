import C from '../constants'

const columnReducer = (state="", action) => {
  return (action.type === CHANGE) ?
          action.column:
          state
};

export default columnReducer