import { useState, useCallback } from "react";

export default function useToggle(initialValue: boolean): [boolean, any] {
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
