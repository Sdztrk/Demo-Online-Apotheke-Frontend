import React from 'react';
import { mount } from 'cypress-react-unit-test'; // Import mount from cypress-react-unit-test
import ComplaintCards from '../../../src/components/cards/ComplaintCards'; // Adjust the path accordingly
import img from "../../../src/helpers/images/complaintImages/Schlafen.jpg";

describe('ComplaintCards Component', () => {
  it('renders correctly with props', () => {
    const category = {
      complaint: 'Schlafen',
      href: '/Sleep',
      image: img, // Provide a dummy image path for testing
    };

    mount(<ComplaintCards category={category} />); // Mount the component with the provided props

    // Assert that the link is present and has the correct href
    cy.get('a').should('have.attr', 'href', category.href);

    // Assert that the image is present and has the correct alt text and src
    cy.get('img').should('have.attr', 'alt', category.complaint);
    cy.get('img').should('have.attr', 'src', category.image);

    // Assert that the complaint text is rendered correctly
    cy.contains('h5', category.complaint).should('be.visible');
  });
});
