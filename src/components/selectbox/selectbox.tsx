import React from "react";
import "./selectbox.css";

interface Props {
  defaultText: string;
  items: SelectItem[];
  selectedValue?: string;
  onChange(item: SelectItem): void;
}

interface SelectItem {
  text: string;
  value: string;
}

const SelectBox = ({ defaultText, items, selectedValue, onChange }: Props) => {
  return (
    <select
      data-testid="select-box"
      className="selectbox"
      defaultValue="-1"
      onChange={(e: any) => {
        onChange(items.find((i) => i.value === e.target.value)!);
      }}
    >
      <option value="-1">{defaultText}</option>
      {items.map((item: SelectItem) => (
        <option
          key={item.value}
          selected={item.value === selectedValue}
          value={item.value}
        >
          {item.text}
        </option>
      ))}
    </select>
  );
};

export type { SelectItem };
export default SelectBox;
