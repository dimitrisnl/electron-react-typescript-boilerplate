import produce, { Draft } from 'immer';
import { createContext, useContext } from 'react';

export const initialState: State = {
  something: null,
};

export const reducer = produce((draft: Draft<State>, action: Action) => {
  switch (action.type) {
    case 'SOMETHING/SET':
      draft.something = action.payload.something;
      break;
    default:
      break;
  }
});

const defaultDispatch: React.Dispatch<Action> = () => initialState;

export const AppContext = createContext({
  state: initialState,
  dispatch: defaultDispatch,
});

export const useAppContext = () => useContext(AppContext);
