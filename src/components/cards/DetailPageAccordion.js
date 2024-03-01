import React from 'react';
import { Typography, Accordion, AccordionSummary, AccordionDetails, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const DetailPageAccordion = ({ product }) => {
  const { description, pregnancyNotification, sideEffects, applicationMethod } = product;

  return (
    <Box sx={{ mx: { sx: 0, sm: 10, md: 20, lg:40, xl:60 }, mt:5}}>
      <Accordion className="accordion">
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="description-content" id="description-header" className="accordion-summary">
          <Typography variant="h6" className="accordion-title">Beschreibung</Typography>
        </AccordionSummary>
        <AccordionDetails className="accordion-details">
          <Typography className="accordion-description">{description}</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="accordion">
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="pregnancyNotification-content" id="pregnancyNotification-header" className="accordion-summary">
          <Typography variant="h6" className="accordion-title">Schwangerschaftshinweis</Typography>
        </AccordionSummary>
        <AccordionDetails className="accordion-details">
          <Typography className="accordion-pregnancyNotification">{pregnancyNotification}</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="accordion">
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="sideEffects-content" id="sideEffects-header" className="accordion-summary">
          <Typography variant="h6" className="accordion-title">Nebenwirkungen</Typography>
        </AccordionSummary>
        <AccordionDetails className="accordion-details">
          <Typography className="accordion-sideEffects">{sideEffects}</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="accordion">
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="applicationMethod-content" id="applicationMethod-header" className="accordion-summary">
          <Typography variant="h6" className="accordion-title">Anwendungsmethode</Typography>
        </AccordionSummary>
        <AccordionDetails className="accordion-details">
          <Typography className="accordion-applicationMethod">{applicationMethod}</Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default DetailPageAccordion;
