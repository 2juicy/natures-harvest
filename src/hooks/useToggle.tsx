import { useState } from "react";

export type Toggle = (arg0: boolean) => void;

export default function useToggle(initialValue: boolean): [boolean, Toggle] {
  const [value, setValue] = useState(initialValue);

  function toggleValue(value: boolean) {
    setValue(currentValue =>
      typeof value === "boolean" ? value : !currentValue
    );
  }

  return [value, toggleValue];
}
