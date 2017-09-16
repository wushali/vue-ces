let getters={
  getNav:(state)=>{
    return state.bNav;
  },
  getFoot:(state)=>{
    return state.bFoot;
  },
  getLoading:(state)=>{
    return state.bLoading;
  },
  getSession:(state)=>{
    return state.session
}
};
export default getters;