export const INITIAL_SATATE = {
  loading: false,
  Error: false,
  Data: null,
  Project: null,
  LastTabaruc: null,
  Total: null,
  Tabarucyo: null,
  Count: null,
  Top: null,
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
        Tabarucyo: action.Tabarucyo,
        Count: action.Count,
        Top: action.Top,
        Error: true,
      };

    default:
      return state;
  }
};
