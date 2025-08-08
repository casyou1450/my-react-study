//다크모드 리듀서
const initialState = {
  isDarkMode:false,
}
const darkModeReducer = (state,action) => {
  switch (action.type){
    case 'TOGGLE_MODE' :
      return {...state , isDarkMode : !state.isDarkMode};
    default :
       return state;
  }
}

export {initialState,darkModeReducer} 