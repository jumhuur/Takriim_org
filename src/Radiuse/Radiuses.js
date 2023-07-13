export const INITIAL_SATATE = {
  loading: false,
  Error: false,
  Data: null,
  Project: null,
  LastTabaruc: null,
  Total: null,
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
        Project: action.Project,
        Total: action.Total,
        Error: true,
      };

    default:
      return state;
  }
};
