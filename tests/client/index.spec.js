import React from 'react';
// import Home from '../../client/src/pageComponents/HomePage.jsx'
import App from '../../client/src/index.jsx';
import { shallow } from 'enzyme'


describe('Home Item', () => {
  const wrapper = shallow(<Home />);

  it('should contain the ClanCreator page', () => {
    expect(wrapper.find('.clanSearchBox')).to.have.length(1)

  })

})


// describe('App item', () => {
//   const wrapper = shallow(<App />);

//   it('should contain the Home page', () => {
//     expect(wrapper.contains(<Home />)).to.equal(true);
//   });

//   it('Should contain the Login page', () => {
//     expect(wrapper.contains(<Login />)).to.equal(true);
//   })
// });
