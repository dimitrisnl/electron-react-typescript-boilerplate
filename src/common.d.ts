interface State {
  something: string | null;
}

type Action =
  | { type: 'SOMETHING/SET'; payload: { something: string } }
  | { type: 'SOMETHING_ELSE/SET'; payload: { something: number } };
