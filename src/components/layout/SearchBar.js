import TextField from "@mui/material/TextField";

const SearchBar = ({ setSearchQuery, setFocus }) => (
  <>
    <TextField
      id="search-bar"
      data-cy="search-bar-input" // Add data-cy attribute for Cypress test
      className="text"
      onInput={(e) => {
        setSearchQuery(e.target.value);
      }}
      label="Nach Medikamente suchen"
      variant="outlined"
      placeholder="Suchen"
      sx={{
        width: { xs: "95%", sm: "95%", md: "60%", lg: "40%" },
        display: { xs: "none", sm: "none", md: "flex" }
      }}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
    />
  </>
);

export default SearchBar;
