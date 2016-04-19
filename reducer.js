const initialState = {
  flag: false
}

export default function (state = initialState, action) {
  switch (action.type) {
    case 'SET_FLAG':
      return {...state, flag: !state.flag}
    default:
      return state
  }
}

export function setFlag() {
  return {
    type: 'SET_FLAG'
  }
}
