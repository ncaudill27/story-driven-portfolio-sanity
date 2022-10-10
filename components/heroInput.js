import React from "react";
import { FormField } from "@sanity/base/components";
import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { Text, Tooltip, Card, Box } from "@sanity/ui";
import { useRef } from "react";

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

  return (
    <FormField
      description={type.description}
      title={type.title}
      compareValue={compareValue}
      __unstable_markers={markers}
      __unstable_presence={presence}
    >
      <Card padding={4} border radius={2}>
        <Tooltip
          placement="top"
          content={
            <Box padding={5} margin={5}>
              <Text muted>
                To change Hero reorder the Images field below and place the
                desired photo in the first position
              </Text>
            </Box>
          }
        >
          {heroImage ? (
            <img
              ref={ref}
              src={urlFor(heroImage).fit("clip").url()}
              style={{ width: "100%" }}
            />
          ) : (
            <Text>This project does not have any images yet!</Text>
          )}
        </Tooltip>
      </Card>
    </FormField>
  );
}

export default React.forwardRef(CustomHeroInput);
