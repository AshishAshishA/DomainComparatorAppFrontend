import { actionType } from "./constants";

export const initialState = {
  searchString: "",
  suffixList: ["com", "in", "org", "house", "ac"],
  domainSuffix: "com",
  domainData: null,
  displayDomainData: null,
  layout: "card",
  // domainAvailable: true,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actionType.SET_SEARCH:
      // console.log(action.type + " -> " + action.payload);
      return {
        ...state,
        searchString: action.payload,
      };
    case actionType.SET_SUFFIX:
      // console.log(action.type + " -> " + action.payload);
      return {
        ...state,
        domainSuffix: action.payload,
      };
    case actionType.SET_SUFFIXLIST:
      // console.log(action.type + " -> " + action.payload);
      return {
        ...state,
        suffixList: action.payload,
      };
    case actionType.SET_DOMAINDATA:
      // console.log(action.type + " -> " + action.payload);
      return {
        ...state,
        domainData: action.payload,
      };
    case actionType.SET_DISPLAYDOMAINDATA:
      // console.log(action.type + " -> " + action.payload);
      return {
        ...state,
        displayDomainData: action.payload,
      };
    case actionType.SET_LAYOUT:
      // console.log(action.type + " -> " + action.payload);
      return {
        ...state,
        layout: action.payload,
      };
    // case actionType.SET_AVAILABLE:
    //   console.log(action.type + " -> " + action.payload);
    //   return {
    //     ...state,
    //     domainAvailable: action.payload,
    //   };
    default:
      return state;
  }
};
