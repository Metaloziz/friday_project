import { ProfileActionType } from '../ProfileType';

import { setErrorMessage } from 'store/actions';
import { ExampleActionsType, RegistrationActionType } from 'types/actions';
import { LoginActionType } from 'types/actions/LoginActionsType';

export type AllAppActionsType =
  | LoginActionType
  | RegistrationActionType
  | AppActionsType
  | ExampleActionsType
  | ProfileActionType;

export type AppActionsType = SetErrorMessageType;

export type SetErrorMessageType = ReturnType<typeof setErrorMessage>;
