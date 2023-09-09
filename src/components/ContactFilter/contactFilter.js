import { StyledFilter } from './contactFilter.styled.jsx';

export const ContactFilter = ({ createVisibleContacts, changeFilter }) => {
  const onInputChange = e => {
    changeFilter(e.target.value);
  };

  return (
    <StyledFilter>
      <p>Filter: </p>
      <input type="text" placeholder="Filter" onChange={onInputChange} />
    </StyledFilter>
  );
};
