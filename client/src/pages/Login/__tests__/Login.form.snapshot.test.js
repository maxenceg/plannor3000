// @flow
import React from 'react';
import { shallow } from 'enzyme';

import InnerLoginForm from '../Login.form';

describe('The form component', () => {
  it('should render correctly with no error', () => {
    const props = { errors: {}, touched: {}, isSubmitting: false };
    const tree = shallow(<InnerLoginForm {...props} />);
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly when submitting', () => {
    const props = { errors: {}, touched: {}, isSubmitting: true };
    const tree = shallow(<InnerLoginForm {...props} />);
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly with errors', () => {
    const props = { errors: {username: 'Username is required'}, touched: {username: true}, isSubmitting: false };
    const tree = shallow(<InnerLoginForm {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
