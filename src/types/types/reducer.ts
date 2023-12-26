import { Action, CaseReducer, PayloadAction } from '@reduxjs/toolkit';

export type ReducerAppAction<State, Payload = void> = CaseReducer<
  State,
  Payload extends void ? Action : PayloadAction<Payload>
>;
