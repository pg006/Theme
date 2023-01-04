import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import Creatable from "react-select/creatable";
import Select from "react-select";
import {
  CustomisedSelectorOptions,
  GroupFilterOptions,
  Groupeddata1,
  MultiCustomisedSelectorOptions,
  groupeddata,
  mutipleSelectOptions,
} from "./Mock";

// Multiple Select Styles START

// Basic MutipleSelect

export const MutipleSelect = () => {
  const [selected, setSelected] = useState([]);
  return (
    <MultiSelect
      value={selected}
      onChange={setSelected}
      labelledBy="Select"
      disableSearch={true}
      options={mutipleSelectOptions}
    />
  );
};

// Disabled MutipleSelect

export const DisabledMutipleSelect = () => {
  const [selected, setSelected] = useState([]);
  return (
    <MultiSelect
      value={selected}
      onChange={setSelected}
      labelledBy="Select"
      disableSearch={true}
      options={mutipleSelectOptions}
      disabled={true}
    />
  );
};

//   Single Group Disabled MutipleSelect
export const SingleGroup = () => {
  const [selected, setSelected] = useState([]);
  return (
    <div>
      <Creatable
        classNamePrefix="Select2"
        options={groupeddata}
        value={selected}
        onChange={setSelected}
      />
    </div>
  );
};

// Multiple items with Group Option

export const MultipleGroup = () => {
  const [selected, setSelected] = useState([]);

  return (
    <div>
      <Creatable
        isMulti
        classNamePrefix="Select2"
        options={groupeddata}
        value={selected}
        onChange={setSelected}
      />
    </div>
  );
};

// Group-Option Filter

export const GroupFilterOption = () => {
  const [selected, setSelected] = useState([]);
  return (
    <MultiSelect
      value={selected}
      className="multi-select"
      onChange={setSelected}
      labelledBy="Select"
      disableSearch={true}
      options={GroupFilterOptions}
    />
  );
};

// Group-Option MutipleSelect
export const GroupMultipleOption = () => {
  const [selected, setSelected] = useState([]);

  return (
    <div>
      <Creatable
        isMulti
        classNamePrefix="Select2"
        options={Groupeddata1}
        value={selected}
        onChange={setSelected}
      />
    </div>
  );
};

// Single Custom Style

export const CustomisedSelector = () => {
  const styles = {
    option: (provided, state) => ({
      fontWeight: state.isSelected ? "bold" : "normal",
      ...provided,
      color: "black",
      backgroundColor: state.isSelected ? state.data.color : state.data.color,
      fontSize: state.selectProps.myFontSize,
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color: state.data.color,
      fontSize: state.selectProps.myFontSize,
    }),
  };

  return (
    <Select
      classNamePrefix="Select2"
      options={CustomisedSelectorOptions}
      styles={styles}
    />
  );
};

// Multiple coustom Style

export const MultipleCoustomSelector = () => {
  const styles = {
    option: (provided, state) => ({
      ...provided,
      fontWeight: state.isSelected ? "bold" : "normal",
      color: "black",
      backgroundColor: state.data.color,
      fontSize: state.selectProps.myFontSize,
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color: state.data.color,
      fontSize: state.selectProps.myFontSize,
    }),
  };
  return (
    <div>
      <Select
        classNamePrefix="Select2"
        isMulti
        onChange={(e) => console.log(e)}
        options={MultiCustomisedSelectorOptions}
        styles={styles}
      />
    </div>
  );
};
// Multiple Select Styles END
