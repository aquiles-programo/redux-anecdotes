import anecdoteService from "../services/anecdotes";

const reducer = (state = [], action) => {
  switch (action.type) {
    case "INIT_ANECDOTES":
      return action.anecdotes;
    case "NEW_ANECDOTE":
      return state.concat(action.data);
    case "VOTE_ANECDOTE":
      const votedAnecdote = state.find((a) => a.id === action.data.id);
      return state.map((a) =>
        a.id !== action.data.id
          ? a
          : { ...votedAnecdote, votes: votedAnecdote.votes + 1 }
      );
    default:
      break;
  }

  return state;
};

export const initializeAnecdotes = (anecdotes) => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll();
    dispatch({
      type: "INIT_ANECDOTES",
      anecdotes,
    });
  };
};

export const createAnecdote = (data) => {
  return async (dispatch) => {
    const newAnecdote = await anecdoteService.addAnecdote(data);
    dispatch({
      type: "NEW_ANECDOTE",
      data: newAnecdote,
    });
  };
};

export const voteAnecdote = (id) => {
  return async (dispatch) => {
    await anecdoteService.voteAnecdote(id);
    dispatch({
      type: "VOTE_ANECDOTE",
      data: id,
    })
  }
};

export default reducer;
