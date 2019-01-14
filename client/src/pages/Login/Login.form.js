// @flow
import React from 'react';
import { Form, Field } from 'formik';
import Input from 'components/Input';
import Button from '@material-ui/core/Button';

// declare type FormValues = {
//   username?: ?string,
//   password?: ?string,
// };

// type Props = {
//   errors: FormValues,
//   touched: {
//     username?: boolean,
//     password?: boolean,
//   },
//   isSubmitting: boolean,
// };

const InnerLoginForm = props => {
  const { errors, touched, isSubmitting } = props;

  return (
    <Form>
      <div>
        <Field
          type="text"
          name="username"
          label="Username"
          component={Input}
          error={touched.username && errors.username}
        />
      </div>
      <div>
        <Field
          type="password"
          name="password"
          label="Password"
          component={Input}
          error={touched.password && errors.password}
        />
      </div>
      <Button type="submit" color="primary" size="medium" disabled={isSubmitting} variant="outlined">
        Connect
      </Button>
    </Form>
  );
};

export default InnerLoginForm;
