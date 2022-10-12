export const SEARCH_SKILLS_REQUEST = 'SEARCH_SKILLS_REQUEST';
export const SEARCH_SKILLS_FAILURE = 'SEARCH_SKILLS_FAILURE';
export const SEARCH_SKILLS_SUCCESS = 'SEARCH_SKILLS_SUCCESS';
export const SEARCH_SKILLS_CLEAR = 'SEARCH_SKILLS_CLEAR';
export const CHANGE_SEARCH_FIELD   = 'CHANGE_SEARCH_FIELD';


export const searchSkillsRequest = (search) => ({
  type: SEARCH_SKILLS_REQUEST,
  payload: {search},
});

export const searchSkillsFailure = (error) => ({
  type: SEARCH_SKILLS_FAILURE,
  payload: {error},
});

export const searchSkillsSuccess = (items) => ({
  type: SEARCH_SKILLS_SUCCESS,
  payload: {items},
});

export const searchSkillsClear = () => ({
  type: SEARCH_SKILLS_CLEAR,
});

export const changeSearchField = (search) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: {search},
});