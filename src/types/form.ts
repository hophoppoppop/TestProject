export type registerErrors = {
  username?: string;
} & loginErrors;

export type loginErrors = {
  email?: string;
  password?: string;
  api?: string;
};
