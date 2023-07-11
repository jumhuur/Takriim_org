export const INITIAL_SATATE = {
  loading: false,
  Error: false,
  Data: null,
};

export const ACTIONS = {
  GET_DATA: "GET",
};

export const lastTabaruc = (state, action) => {
  switch (action.type) {
    case ACTIONS.GET_DATA:
      return {
        loading: true,
        Data: action.payload,
        Error: true,
      };

    default:
      return state;
  }
};
