import React from 'react';
import Select from 'react-select';

const customStyles = {
  menuList: (provided, state) => ({
    ...provided,
    textAlign: 'left',
    marginLeft: '5px',
  }),
  option: (styles, { data, isFocused, isSelected }) => {
    console.log(data);
    return {
      ...styles,
      fontWeight: data.label.includes('SuperOne') ? 'bold' : 'normal',
      color: isSelected ? 'White' : 'black',
    };
  },
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';
    return { ...provided, opacity, transition };
  },
};

export default function SimpleSelect({
  func,
  label,
  id,
  values,
  default_value_index,
}) {
  const handleChange = (event) => {
    func(event.value, id);
  };

  return (
    <>
      <label
        for={id}
        style={{ display: 'flex', fontSize: '15px', fontWeight: 'bold' }}
      >
        {label}
      </label>
      <div>
        <Select
          id={id}
          isSearchable={false}
          defaultValue={values[default_value_index]}
          options={values}
          onChange={handleChange}
          styles={customStyles}
          placeholder={label}
        />
      </div>
    </>
  );
}
