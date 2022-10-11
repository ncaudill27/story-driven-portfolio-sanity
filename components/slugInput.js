import React from "react";
import { FormField } from "@sanity/base/components";
import { TextInput } from "@sanity/ui";

function CustomHeroInput(props, ref) {
  const { type, markers, presence, compareValue, readOnly, onFocus, onBlur } =
    props;

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
        value={props.parent.name
          .toLowerCase()
          .trim()
          .replace(/[^\w\s-]/g, "")
          .replace(/[\s_-]+/g, "-")
          .replace(/^-+|-+$/g, "")}
        readOnly={readOnly}
        onFocus={onFocus}
        onBlur={onBlur}
        disabled
      />
    </FormField>
  );
}

export default React.forwardRef(CustomHeroInput);
