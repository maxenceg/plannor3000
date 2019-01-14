// @flow
// export type FormValues = {
//   username?: string,
//   password?: string,
// };

// export type StateProps = {
//   loginError?: ?string,
// };

// export type DispatchProps = {
//   login: (values: FormValues) => Dispatch<LoginUserRequestAction>,
// };

// type Props = StateProps & DispatchProps;

export const validateForm = values => {
  const errors = {};
  if (!values.username) {
    errors.username = 'Username required';
  }
  return errors;
};

export const mapPropsToValues = () => ({
  username: '',
  password: '',
});

export const handleSubmit = (values, { props }) => {
  props.login(values);
};
