import C from './constants'

export const changeSelected = (column) => {
  return {
    type: C.CHANGE,
    column: column
  }
}

export const updateUsers = (users) => {
  return {
    type: C.UPDATE,
    users: users
  }
}