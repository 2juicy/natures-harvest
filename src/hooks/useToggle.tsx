import { useState, useCallback } from "react";

export type Set = (arg0: boolean) => void;
export type Toggle = () => void;

export default function useToggle(
  initialValue = false
): [boolean, Set, Toggle] {
  const [value, setValue] = useState(initialValue);

  const setBoolean = useCallback(
    (value: boolean) => setValue(value),
    [setValue]
  );

  const toggleValue = useCallback(
    () => setValue(currentValue => !currentValue),
    [setValue]
  );

  return [value, setBoolean, toggleValue];
}
