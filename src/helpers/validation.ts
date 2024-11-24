export function emptyValidation(variable: any) {
  return !variable;
}

export function emailValidation(variable: string) {
  return !variable
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
}

export function initFormError<T>(currErr: T, keyName: keyof T) {
  const tempObject = {...currErr};
  delete tempObject[keyName];
  return tempObject;
}

export function multipleValidation(
  validations: Array<Boolean>,
  negativeFeedbacks: Array<string>,
) {
  for (let i = 0; i < validations.length && i < negativeFeedbacks.length; i++) {
    if (validations[i]) {
      return negativeFeedbacks[i];
    }
  }
  return '';
}

export function checkIsFormError(errors: Record<string, string>) {
  return Object.keys(errors).filter(s => errors[s]).length > 0;
}
