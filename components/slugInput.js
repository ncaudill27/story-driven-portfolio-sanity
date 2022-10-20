import React from "react";
import { FormField } from "@sanity/base/components";
import { TextInput } from "@sanity/ui";
import PatchEvent, { set, unset } from "@sanity/form-builder/PatchEvent";
import { useCallback } from "react";

function CustomHeroInput(props, ref) {
  const {
    type,
    markers,
    presence,
    compareValue,
    readOnly,
    onFocus,
    onBlur,
    onChange,
  } = props;

  const value = props.parent.name
    ? props.parent.name
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/[\s_-]+/g, "-")
        .replace(/^-+|-+$/g, "")
    : "";

  const handleChange = useCallback((e) => {
    console.log(e.currentTarget.value);
    onChange(PatchEvent.from(value ? set(value) : unset()));
  });
  return (
    <FormField
      description={type.description}
      title={type.title}
      compareValue={compareValue}
      __unstable_markers={markers}
      __unstable_presence={presence}
    >
      <TextInput
        ref={ref}
        onChange={handleChange}
        value={value}
        readOnly={readOnly}
        onFocus={onFocus}
        onBlur={onBlur}
        disabled
      />
    </FormField>
  );
}

export default React.forwardRef(CustomHeroInput);
