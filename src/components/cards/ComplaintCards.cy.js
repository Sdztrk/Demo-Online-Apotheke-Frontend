import React from 'react';
import { mount } from 'cypress-react-unit-test'; // Import mount from cypress-react-unit-test
import ComplaintCards from './ComplaintCards'; // Adjust the path accordingly

describe('<ComplaintCards />', () => {
  it('renders', () => {
    const category = {
      complaint: 'Schlafen',
      href: '/Sleep',
      image: 'path/to/image.jpg', // Provide a dummy image path for testing
    };

    // Mount the ComplaintCards component with the provided category prop
    mount(<ComplaintCards category={category} />);
  });
});
