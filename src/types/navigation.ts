import {Transaction} from '../mock/mockDataTransactions';
import {
  ROOT_MAIN,
  SCREEN_HOME,
  SCREEN_TRANSACTION_DETAILS,
  SCREEN_PROFILE_MAIN,
  SCREEN_EDIT_PROFILE,
  STACK_HOME,
  STACK_PROFILE,
} from '../res/routes';

export type RootStackParamList = {
  [ROOT_MAIN]: undefined;
};

export type MainTabParamList = {
  [STACK_HOME]: undefined;
  [STACK_PROFILE]: undefined;
};

export type HomeStackParamList = {
  [SCREEN_HOME]: undefined;
  [SCREEN_TRANSACTION_DETAILS]: {
    item: Transaction;
  };
};

export type ProfileStackParamList = {
  [SCREEN_PROFILE_MAIN]: undefined;
  [SCREEN_EDIT_PROFILE]: undefined;
};
