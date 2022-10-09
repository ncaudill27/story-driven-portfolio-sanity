import React from "react";
import { FormField } from "@sanity/base/components";
import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { Text } from "@sanity/ui";

const client = sanityClient({
  projectId: "af3a1wel",
  dataset: "production",
});

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

function CustomHeroInput(props, ref) {
  const { type, markers, presence, compareValue } = props;
  const heroImage = props.parent.images[0]?.asset;
  console.log(ref);

  return (
    <FormField
      description={type.description}
      title={type.title}
      compareValue={compareValue}
      __unstable_markers={markers}
      __unstable_presence={presence}
    >
      {false ? (
        <img
          ref={ref}
          src={urlFor(heroImage).fit("clip").url()}
          style={{ width: "100%" }}
        />
      ) : (
        <Text>This project does not have any images yet.</Text>
      )}
    </FormField>
  );
}

export default React.forwardRef(CustomHeroInput);
