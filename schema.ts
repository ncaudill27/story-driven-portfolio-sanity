import type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
} from "sanity-codegen";

export type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
};

/**
 * Home Page
 *
 *
 */
export interface HomePage extends SanityDocument {
  _type: "homePage";

  /**
   * Hero Image — `mainImage`
   *
   *
   */
  heroBanner?: MainImage;

  /**
   * Lead Paragraph — `decoratedText`
   *
   *
   */
  leadParagraph?: DecoratedText;

  /**
   * Featured Work — `array`
   *
   *
   */
  featuredWork?: Array<SanityKeyedReference<Project>>;
}

/**
 * Contact Page
 *
 *
 */
export interface ContactPage extends SanityDocument {
  _type: "contactPage";

  /**
   * Self Portrait — `mainImage`
   *
   *
   */
  brettPortrait?: MainImage;

  /**
   * Bio — `decoratedText`
   *
   *
   */
  bio?: DecoratedText;

  /**
   * Contact Points — `contactPoints`
   *
   *
   */
  contactPoints?: ContactPoints;
}

/**
 * Project
 *
 *
 */
export interface Project extends SanityDocument {
  _type: "project";

  /**
   * Name — `string`
   *
   *
   */
  name?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Media Type — `string`
   *
   *
   */
  mediaType?: "analog" | "digital" | "film";

  /**
   * Hero — `mainImage`
   *
   *
   */
  hero?: MainImage;

  /**
   * Second Hero — `secondHero`
   *
   *
   */
  secondHero?: SecondHero;

  /**
   * Brief Description — `decoratedText`
   *
   * This will be the summary of the project seen from its preview on the home screen. In addition to being a value that will help SEO.
   */
  brief?: DecoratedText;

  /**
   * Intro — `decoratedText`
   *
   * First paragraph viewers will see when they visit a project. If possible it would be nice to make it different from the Brief description but if not wanted or possible this value will default to a copy of the Brief description.
   */
  intro?: DecoratedText;

  /**
   * Subject — `decoratedText`
   *
   * A thoughtful description of the people/place/thing being photographed.
   */
  subject?: DecoratedText;

  /**
   * Elements of shoot — `array`
   *
   *
   */
  elements?: Array<SanityKeyed<Element>>;

  /**
   * Images — `array`
   *
   *
   */
  images?: Array<SanityKeyed<MainImage>>;
}

export type MainImage = {
  _type: "mainImage";
  asset: SanityReference<SanityImageAsset>;
  crop?: SanityImageCrop;
  hotspot?: SanityImageHotspot;

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Alternative text — `string`
   *
   * Important for SEO and accessiblity.
   */
  alt?: string;
};

export type DecoratedText = Array<SanityKeyed<SanityBlock>>;

export type Element = {
  _type: "element";
  /**
   * Element — `string`
   *
   *
   */
  name?: string;

  /**
   * Description — `decoratedText`
   *
   * This field will create a little blurb of text to populate the story view.
   */
  description?: DecoratedText;
};

export type ContactPoints = {
  _type: "contactPoints";
  /**
   * Email — `string`
   *
   *
   */
  email?: string;

  /**
   * Phone — `string`
   *
   *
   */
  phone?: string;

  /**
   * Twitter — `string`
   *
   *
   */
  twitter?: string;

  /**
   * Instagram — `string`
   *
   *
   */
  instagram?: string;

  /**
   * Facebook — `string`
   *
   *
   */
  facebook?: string;
};

export type SecondHero = {
  _type: "secondHero";
  /**
   * secondHeroImage — `mainImage`
   *
   *
   */
  secondHeroImage?: MainImage;
};

export type Documents = HomePage | ContactPage | Project;
