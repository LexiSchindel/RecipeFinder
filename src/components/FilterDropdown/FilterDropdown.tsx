import React from 'react';
import { MenuItem, Select } from '@material-ui/core';

type Props = {
    filterChoice: FilterOption | null;
    handleChange: Function;
}

export type FilterOption = {
    label: string;
    key: string;
    value: number;
}

export const options = [
    {label: "< 10", key: 'lt', value: 10},
    {label: ">= 10", key: 'gte', value: 10},
    {label: ">= 20", key: 'gte', value: 20},
    {label: ">= 50", key: 'gte', value: 50},
    {label: ">= 100", key: 'gte', value: 100},
]

function FilterDropdown({filterChoice, handleChange}: Props) {
    const onChange = (event: any) => {
        handleChange(options.find((op) => op.label === event.target.value));
      };

    return (
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={filterChoice?.label}
          label="Age"
          onChange={onChange}
        >
            {options.map((op) => (
                <MenuItem value={op.label}>{op.label}</MenuItem>
            ))}
        </Select>
    );
}

export default FilterDropdown;