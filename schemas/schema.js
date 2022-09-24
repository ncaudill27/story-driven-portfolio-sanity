// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

import home from "./pages/home";
import contact from "./pages/contact";
import analog from './pages/analog'
import digital from './pages/digital'
import film from './pages/film'

import project from "./documents/project";

import mainImage from "./objects/mainImage";
import decoratedText from "./objects/decoratedText";
import element from "./objects/element";
import contactPoints from "./objects/contactPoints";
import secondHero from "./objects/secondHero";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    home,
    contact,
    analog,
    digital,
    film,
    project,
    mainImage,
    decoratedText,
    element,
    contactPoints,
    secondHero,
  ]),
});
