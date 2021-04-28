import Select from 'react-select';
import { Container } from './style';

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: '1px solid #222222',
    backgroundColor: state.isSelected ? '#56CCF2' : '#090909',
    color: state.isSelected ? '#F2F2F2' : '#828282',
  }),
  control: () => ({
    // none of react-select's styles are passed to <Control />

    width: 'auto',
    minWidth: '200px',
    height: '70px',
    backgroundColor: 'transparent',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContant: 'space-between',
    paddingTop: '1px',
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: 'none',
  }),
  indicatorContainer: (provided) => ({
    ...provided,
    color: '#56CCF2',
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';
    return {
      ...provided,
      opacity,
      transition,
      color: '#56CCF2',
      fontWeight: 600,
      fontSize: '24px',
      lineHeight: '64px',
      letterSpacing: '0.5px',
    };
  },
  input: (provided) => ({
    ...provided,
    backgroundColor: 'none',
    color: '#56CCF2',
    fontWeight: 600,
    fontSize: '24px',
    lineHeight: '64px',
    letterSpacing: '0.5px',
  }),
  placeholder: (provided, state) => ({
    ...provided,
    color: '#56CCF2',
    fontWeight: 600,
    fontSize: '24px',
    lineHeight: '64px',
    letterSpacing: '0.5px',
  }),
  menu: (provided, state) => ({
    ...provided,
    backgroundColor: '#090909',
  }),
};
function Dropdown({
  options,
  selectedOption,
  onChange,
  placeholder,
  isSearchable,
  isDisabled,
  autoFocus,
  isMulti,
}) {
  return (
    <Container>
      <Select
        styles={customStyles}
        value={selectedOption}
        onChange={onChange}
        options={options}
        placeholder={placeholder}
        isSearchable={isSearchable}
        isDisabled={isDisabled}
        autoFocus={autoFocus}
        isMulti={isMulti}
      />
    </Container>
  );
}

export default Dropdown;
