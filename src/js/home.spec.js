import React from 'react/addons';
import Home from './home.jsx';
import Print from './print';

let TestUtils = React.addons.TestUtils;

describe('Home', function () {
    let should;

    beforeEach(() => {
        should = chai.should();
    });

    it('should render', function () {
        //when
        var home = TestUtils.renderIntoDocument(<Home name="Jimmy" />);
        var homeElement = TestUtils.findRenderedDOMComponentWithTag(home, "div").getDOMNode();

        //then
        should.exist(home);
        expect(homeElement.textContent).to.equal('Hello Jimmy!');
    });

    it('should print hello', function () {
        //given
        let sayHello = sinon.spy(Print, "sayHello");

        //when
        TestUtils.renderIntoDocument(<Home name="Jimmy" />);

        //then
        expect(sayHello).to.have.been.called;
    });
});