// @ts-ignore
import React from 'react';
import { shallow } from 'enzyme';
import { Button } from "../common/Button";

describe('Button Component', () => {

    it('renders without crashing', () => {
        shallow(<Button label='btn-test' />);
    });

});
