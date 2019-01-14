// @flow
import React from 'react';
import { shallow } from 'enzyme';
import Root from '../Root';

describe('<Root>', () => {
  it('should render correctly', () => {
    const props = {
      children: (
        <div>
          <span>test</span>
        </div>
      ),
    };
    const tree = shallow(<Root {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
