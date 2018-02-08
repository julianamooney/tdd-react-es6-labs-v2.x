import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import { shallow,mount,render } from 'enzyme';
import PollSubmitButton from '../src/components/PollSubmitButton';

describe('Poll Submit Button', function() {


    it('renders without a problem', function () {
        var pollsubmitbutton = shallow(<PollSubmitButton />);
        expect(pollsubmitbutton.text()).toEqual('Go!');
    });

    it('calls handler function on click', function () {
        var handleClick = jest.fn();
        var pollsubmitbutton = TestUtils
            .renderIntoDocument(
                <PollSubmitButton
                    question={0}
                    handleClick={handleClick}
                />);

        var buttonInstance = ReactDOM.findDOMNode(pollsubmitbutton);

        TestUtils.Simulate.click(buttonInstance);

        expect(handleClick).toBeCalled();

        var numberOfCallsMadeIntoMockFunction = handleClick.mock.calls.length;

        expect(numberOfCallsMadeIntoMockFunction).toBe(1);
    });

});
