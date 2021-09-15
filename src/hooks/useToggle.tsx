import { useState, useCallback } from "react";

export type Toggle = (arg0: boolean) => void;

export default function useToggle(initialValue: boolean): [boolean, Toggle] {
  const [value, setValue] = useState(initialValue);

  const toggleValue = useCallback(
    (value: boolean) =>
      setValue(currentValue =>
        typeof value === "boolean" ? value : !currentValue
      ),
    [setValue]
  );

  return [value, toggleValue];
}
