import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends {[key: string]: unknown}> = {[K in keyof T]: T[K]};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date-time string at UTC, such as 2007-12-03T10:15:30Z,
   *     compliant with the 'date-time' format outlined in section 5.6 of
   *     the RFC 3339 profile of the ISO 8601 standard for representation
   *     of dates and times using the Gregorian calendar.
   */
  DateTime: string;
  /** The 'Dimension' type represents dimensions as whole numeric values between `1` and `4000`. */
  Dimension: number;
  /** The 'HexColor' type represents color in `rgb:ffffff` string format. */
  HexColor: string;
  /** The 'Quality' type represents quality as whole numeric values between `1` and `100`. */
  Quality: number;
}

/** Represents a binary file in a space. An asset can be any file type. */
export interface Asset {
  contentType?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars['Int']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
}

/** Represents a binary file in a space. An asset can be any file type. */
export interface AssetContentTypeArgs {
  locale?: InputMaybe<Scalars['String']>;
}

/** Represents a binary file in a space. An asset can be any file type. */
export interface AssetDescriptionArgs {
  locale?: InputMaybe<Scalars['String']>;
}

/** Represents a binary file in a space. An asset can be any file type. */
export interface AssetFileNameArgs {
  locale?: InputMaybe<Scalars['String']>;
}

/** Represents a binary file in a space. An asset can be any file type. */
export interface AssetHeightArgs {
  locale?: InputMaybe<Scalars['String']>;
}

/** Represents a binary file in a space. An asset can be any file type. */
export interface AssetLinkedFromArgs {
  allowedLocales?: InputMaybe<InputMaybe<Scalars['String']>[]>;
}

/** Represents a binary file in a space. An asset can be any file type. */
export interface AssetSizeArgs {
  locale?: InputMaybe<Scalars['String']>;
}

/** Represents a binary file in a space. An asset can be any file type. */
export interface AssetTitleArgs {
  locale?: InputMaybe<Scalars['String']>;
}

/** Represents a binary file in a space. An asset can be any file type. */
export interface AssetUrlArgs {
  locale?: InputMaybe<Scalars['String']>;
  transform?: InputMaybe<ImageTransformOptions>;
}

/** Represents a binary file in a space. An asset can be any file type. */
export interface AssetWidthArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface AssetCollection {
  items: Maybe<Asset>[];
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
}

export interface AssetFilter {
  AND?: InputMaybe<InputMaybe<AssetFilter>[]>;
  OR?: InputMaybe<InputMaybe<AssetFilter>[]>;
  contentType?: InputMaybe<Scalars['String']>;
  contentType_contains?: InputMaybe<Scalars['String']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']>;
  contentType_in?: InputMaybe<InputMaybe<Scalars['String']>[]>;
  contentType_not?: InputMaybe<Scalars['String']>;
  contentType_not_contains?: InputMaybe<Scalars['String']>;
  contentType_not_in?: InputMaybe<InputMaybe<Scalars['String']>[]>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<InputMaybe<Scalars['String']>[]>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<InputMaybe<Scalars['String']>[]>;
  fileName?: InputMaybe<Scalars['String']>;
  fileName_contains?: InputMaybe<Scalars['String']>;
  fileName_exists?: InputMaybe<Scalars['Boolean']>;
  fileName_in?: InputMaybe<InputMaybe<Scalars['String']>[]>;
  fileName_not?: InputMaybe<Scalars['String']>;
  fileName_not_contains?: InputMaybe<Scalars['String']>;
  fileName_not_in?: InputMaybe<InputMaybe<Scalars['String']>[]>;
  height?: InputMaybe<Scalars['Int']>;
  height_exists?: InputMaybe<Scalars['Boolean']>;
  height_gt?: InputMaybe<Scalars['Int']>;
  height_gte?: InputMaybe<Scalars['Int']>;
  height_in?: InputMaybe<InputMaybe<Scalars['Int']>[]>;
  height_lt?: InputMaybe<Scalars['Int']>;
  height_lte?: InputMaybe<Scalars['Int']>;
  height_not?: InputMaybe<Scalars['Int']>;
  height_not_in?: InputMaybe<InputMaybe<Scalars['Int']>[]>;
  size?: InputMaybe<Scalars['Int']>;
  size_exists?: InputMaybe<Scalars['Boolean']>;
  size_gt?: InputMaybe<Scalars['Int']>;
  size_gte?: InputMaybe<Scalars['Int']>;
  size_in?: InputMaybe<InputMaybe<Scalars['Int']>[]>;
  size_lt?: InputMaybe<Scalars['Int']>;
  size_lte?: InputMaybe<Scalars['Int']>;
  size_not?: InputMaybe<Scalars['Int']>;
  size_not_in?: InputMaybe<InputMaybe<Scalars['Int']>[]>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<InputMaybe<Scalars['String']>[]>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<InputMaybe<Scalars['String']>[]>;
  url?: InputMaybe<Scalars['String']>;
  url_contains?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<InputMaybe<Scalars['String']>[]>;
  url_not?: InputMaybe<Scalars['String']>;
  url_not_contains?: InputMaybe<Scalars['String']>;
  url_not_in?: InputMaybe<InputMaybe<Scalars['String']>[]>;
  width?: InputMaybe<Scalars['Int']>;
  width_exists?: InputMaybe<Scalars['Boolean']>;
  width_gt?: InputMaybe<Scalars['Int']>;
  width_gte?: InputMaybe<Scalars['Int']>;
  width_in?: InputMaybe<InputMaybe<Scalars['Int']>[]>;
  width_lt?: InputMaybe<Scalars['Int']>;
  width_lte?: InputMaybe<Scalars['Int']>;
  width_not?: InputMaybe<Scalars['Int']>;
  width_not_in?: InputMaybe<InputMaybe<Scalars['Int']>[]>;
}

export interface AssetLinkingCollections {
  authorCollection?: Maybe<AuthorCollection>;
  entryCollection?: Maybe<EntryCollection>;
}

export interface AssetLinkingCollectionsAuthorCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface AssetLinkingCollectionsEntryCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export type AssetOrder =
  | 'contentType_ASC'
  | 'contentType_DESC'
  | 'fileName_ASC'
  | 'fileName_DESC'
  | 'height_ASC'
  | 'height_DESC'
  | 'size_ASC'
  | 'size_DESC'
  | 'sys_firstPublishedAt_ASC'
  | 'sys_firstPublishedAt_DESC'
  | 'sys_id_ASC'
  | 'sys_id_DESC'
  | 'sys_publishedAt_ASC'
  | 'sys_publishedAt_DESC'
  | 'sys_publishedVersion_ASC'
  | 'sys_publishedVersion_DESC'
  | 'url_ASC'
  | 'url_DESC'
  | 'width_ASC'
  | 'width_DESC';

/** [See type definition](https://app.contentful.com/spaces/xlgl5pdkgxf5/content_types/author) */
export type Author = Entry & {
  biography?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  createdEntriesCollection?: Maybe<AuthorCreatedEntriesCollection>;
  linkedFrom?: Maybe<AuthorLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  profilePhoto?: Maybe<Asset>;
  sys: Sys;
  website?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/xlgl5pdkgxf5/content_types/author) */
export interface AuthorBiographyArgs {
  locale?: InputMaybe<Scalars['String']>;
}

/** [See type definition](https://app.contentful.com/spaces/xlgl5pdkgxf5/content_types/author) */
export interface AuthorCreatedEntriesCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

/** [See type definition](https://app.contentful.com/spaces/xlgl5pdkgxf5/content_types/author) */
export interface AuthorLinkedFromArgs {
  allowedLocales?: InputMaybe<InputMaybe<Scalars['String']>[]>;
}

/** [See type definition](https://app.contentful.com/spaces/xlgl5pdkgxf5/content_types/author) */
export interface AuthorNameArgs {
  locale?: InputMaybe<Scalars['String']>;
}

/** [See type definition](https://app.contentful.com/spaces/xlgl5pdkgxf5/content_types/author) */
export interface AuthorProfilePhotoArgs {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}

/** [See type definition](https://app.contentful.com/spaces/xlgl5pdkgxf5/content_types/author) */
export interface AuthorWebsiteArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface AuthorCollection {
  items: Maybe<Author>[];
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
}

export interface AuthorCreatedEntriesCollection {
  items: Maybe<Post>[];
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
}

export interface AuthorFilter {
  AND?: InputMaybe<InputMaybe<AuthorFilter>[]>;
  OR?: InputMaybe<InputMaybe<AuthorFilter>[]>;
  biography?: InputMaybe<Scalars['String']>;
  biography_contains?: InputMaybe<Scalars['String']>;
  biography_exists?: InputMaybe<Scalars['Boolean']>;
  biography_in?: InputMaybe<InputMaybe<Scalars['String']>[]>;
  biography_not?: InputMaybe<Scalars['String']>;
  biography_not_contains?: InputMaybe<Scalars['String']>;
  biography_not_in?: InputMaybe<InputMaybe<Scalars['String']>[]>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  createdEntriesCollection_exists?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<InputMaybe<Scalars['String']>[]>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<InputMaybe<Scalars['String']>[]>;
  profilePhoto_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  website?: InputMaybe<Scalars['String']>;
  website_contains?: InputMaybe<Scalars['String']>;
  website_exists?: InputMaybe<Scalars['Boolean']>;
  website_in?: InputMaybe<InputMaybe<Scalars['String']>[]>;
  website_not?: InputMaybe<Scalars['String']>;
  website_not_contains?: InputMaybe<Scalars['String']>;
  website_not_in?: InputMaybe<InputMaybe<Scalars['String']>[]>;
}

export interface AuthorLinkingCollections {
  entryCollection?: Maybe<EntryCollection>;
  postCollection?: Maybe<PostCollection>;
}

export interface AuthorLinkingCollectionsEntryCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface AuthorLinkingCollectionsPostCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export type AuthorOrder =
  | 'name_ASC'
  | 'name_DESC'
  | 'sys_firstPublishedAt_ASC'
  | 'sys_firstPublishedAt_DESC'
  | 'sys_id_ASC'
  | 'sys_id_DESC'
  | 'sys_publishedAt_ASC'
  | 'sys_publishedAt_DESC'
  | 'sys_publishedVersion_ASC'
  | 'sys_publishedVersion_DESC'
  | 'website_ASC'
  | 'website_DESC';

/** [See type definition](https://app.contentful.com/spaces/xlgl5pdkgxf5/content_types/category) */
export type Category = Entry & {
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<CategoryLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  sys: Sys;
};

/** [See type definition](https://app.contentful.com/spaces/xlgl5pdkgxf5/content_types/category) */
export interface CategoryDescriptionArgs {
  locale?: InputMaybe<Scalars['String']>;
}

/** [See type definition](https://app.contentful.com/spaces/xlgl5pdkgxf5/content_types/category) */
export interface CategoryLinkedFromArgs {
  allowedLocales?: InputMaybe<InputMaybe<Scalars['String']>[]>;
}

/** [See type definition](https://app.contentful.com/spaces/xlgl5pdkgxf5/content_types/category) */
export interface CategoryNameArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface CategoryCollection {
  items: Maybe<Category>[];
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
}

export interface CategoryFilter {
  AND?: InputMaybe<InputMaybe<CategoryFilter>[]>;
  OR?: InputMaybe<InputMaybe<CategoryFilter>[]>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<InputMaybe<Scalars['String']>[]>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<InputMaybe<Scalars['String']>[]>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<InputMaybe<Scalars['String']>[]>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<InputMaybe<Scalars['String']>[]>;
  sys?: InputMaybe<SysFilter>;
}

export interface CategoryLinkingCollections {
  entryCollection?: Maybe<EntryCollection>;
  postCollection?: Maybe<PostCollection>;
}

export interface CategoryLinkingCollectionsEntryCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface CategoryLinkingCollectionsPostCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export type CategoryOrder =
  | 'name_ASC'
  | 'name_DESC'
  | 'sys_firstPublishedAt_ASC'
  | 'sys_firstPublishedAt_DESC'
  | 'sys_id_ASC'
  | 'sys_id_DESC'
  | 'sys_publishedAt_ASC'
  | 'sys_publishedAt_DESC'
  | 'sys_publishedVersion_ASC'
  | 'sys_publishedVersion_DESC';

export interface ContentfulMetadata {
  tags: Maybe<ContentfulTag>[];
}

export interface ContentfulMetadataFilter {
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars['Boolean']>;
}

export interface ContentfulMetadataTagsFilter {
  id_contains_all?: InputMaybe<InputMaybe<Scalars['String']>[]>;
  id_contains_none?: InputMaybe<InputMaybe<Scalars['String']>[]>;
  id_contains_some?: InputMaybe<InputMaybe<Scalars['String']>[]>;
}

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export interface ContentfulTag {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
}

export interface Entry {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
}

export interface EntryCollection {
  items: Maybe<Entry>[];
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
}

export interface EntryFilter {
  AND?: InputMaybe<InputMaybe<EntryFilter>[]>;
  OR?: InputMaybe<InputMaybe<EntryFilter>[]>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
}

export type EntryOrder =
  | 'sys_firstPublishedAt_ASC'
  | 'sys_firstPublishedAt_DESC'
  | 'sys_id_ASC'
  | 'sys_id_DESC'
  | 'sys_publishedAt_ASC'
  | 'sys_publishedAt_DESC'
  | 'sys_publishedVersion_ASC'
  | 'sys_publishedVersion_DESC';

export type ImageFormat =
  | 'AVIF'
  /** JPG image format. */
  | 'JPG'
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  | 'JPG_PROGRESSIVE'
  /** PNG image format */
  | 'PNG'
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  | 'PNG8'
  /** WebP image format. */
  | 'WEBP';

export type ImageResizeFocus =
  /** Focus the resizing on the bottom. */
  | 'BOTTOM'
  /** Focus the resizing on the bottom left. */
  | 'BOTTOM_LEFT'
  /** Focus the resizing on the bottom right. */
  | 'BOTTOM_RIGHT'
  /** Focus the resizing on the center. */
  | 'CENTER'
  /** Focus the resizing on the largest face. */
  | 'FACE'
  /** Focus the resizing on the area containing all the faces. */
  | 'FACES'
  /** Focus the resizing on the left. */
  | 'LEFT'
  /** Focus the resizing on the right. */
  | 'RIGHT'
  /** Focus the resizing on the top. */
  | 'TOP'
  /** Focus the resizing on the top left. */
  | 'TOP_LEFT'
  /** Focus the resizing on the top right. */
  | 'TOP_RIGHT';

export type ImageResizeStrategy =
  /** Crops a part of the original image to fit into the specified dimensions. */
  | 'CROP'
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  | 'FILL'
  /** Resizes the image to fit into the specified dimensions. */
  | 'FIT'
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  | 'PAD'
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  | 'SCALE'
  /** Creates a thumbnail from the image. */
  | 'THUMB';

export interface ImageTransformOptions {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars['HexColor']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']>;
}

/** [See type definition](https://app.contentful.com/spaces/xlgl5pdkgxf5/content_types/post) */
export type Post = Entry & {
  authorCollection?: Maybe<PostAuthorCollection>;
  body?: Maybe<Scalars['String']>;
  categoryCollection?: Maybe<PostCategoryCollection>;
  comments?: Maybe<Scalars['Boolean']>;
  contentfulMetadata: ContentfulMetadata;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  excerpt?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<PostLinkingCollections>;
  slug?: Maybe<Scalars['String']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/xlgl5pdkgxf5/content_types/post) */
export interface PostAuthorCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

/** [See type definition](https://app.contentful.com/spaces/xlgl5pdkgxf5/content_types/post) */
export interface PostBodyArgs {
  locale?: InputMaybe<Scalars['String']>;
}

/** [See type definition](https://app.contentful.com/spaces/xlgl5pdkgxf5/content_types/post) */
export interface PostCategoryCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

/** [See type definition](https://app.contentful.com/spaces/xlgl5pdkgxf5/content_types/post) */
export interface PostCommentsArgs {
  locale?: InputMaybe<Scalars['String']>;
}

/** [See type definition](https://app.contentful.com/spaces/xlgl5pdkgxf5/content_types/post) */
export interface PostCreatedAtArgs {
  locale?: InputMaybe<Scalars['String']>;
}

/** [See type definition](https://app.contentful.com/spaces/xlgl5pdkgxf5/content_types/post) */
export interface PostDescriptionArgs {
  locale?: InputMaybe<Scalars['String']>;
}

/** [See type definition](https://app.contentful.com/spaces/xlgl5pdkgxf5/content_types/post) */
export interface PostExcerptArgs {
  locale?: InputMaybe<Scalars['String']>;
}

/** [See type definition](https://app.contentful.com/spaces/xlgl5pdkgxf5/content_types/post) */
export interface PostLinkedFromArgs {
  allowedLocales?: InputMaybe<InputMaybe<Scalars['String']>[]>;
}

/** [See type definition](https://app.contentful.com/spaces/xlgl5pdkgxf5/content_types/post) */
export interface PostSlugArgs {
  locale?: InputMaybe<Scalars['String']>;
}

/** [See type definition](https://app.contentful.com/spaces/xlgl5pdkgxf5/content_types/post) */
export interface PostTitleArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface PostAuthorCollection {
  items: Maybe<Author>[];
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
}

export interface PostCategoryCollection {
  items: Maybe<Category>[];
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
}

export interface PostCollection {
  items: Maybe<Post>[];
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
}

export interface PostFilter {
  AND?: InputMaybe<InputMaybe<PostFilter>[]>;
  OR?: InputMaybe<InputMaybe<PostFilter>[]>;
  authorCollection_exists?: InputMaybe<Scalars['Boolean']>;
  body?: InputMaybe<Scalars['String']>;
  body_contains?: InputMaybe<Scalars['String']>;
  body_exists?: InputMaybe<Scalars['Boolean']>;
  body_in?: InputMaybe<InputMaybe<Scalars['String']>[]>;
  body_not?: InputMaybe<Scalars['String']>;
  body_not_contains?: InputMaybe<Scalars['String']>;
  body_not_in?: InputMaybe<InputMaybe<Scalars['String']>[]>;
  categoryCollection_exists?: InputMaybe<Scalars['Boolean']>;
  comments?: InputMaybe<Scalars['Boolean']>;
  comments_exists?: InputMaybe<Scalars['Boolean']>;
  comments_not?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  createdAt_exists?: InputMaybe<Scalars['Boolean']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  createdAt_in?: InputMaybe<InputMaybe<Scalars['DateTime']>[]>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  createdAt_not_in?: InputMaybe<InputMaybe<Scalars['DateTime']>[]>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<InputMaybe<Scalars['String']>[]>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<InputMaybe<Scalars['String']>[]>;
  excerpt?: InputMaybe<Scalars['String']>;
  excerpt_contains?: InputMaybe<Scalars['String']>;
  excerpt_exists?: InputMaybe<Scalars['Boolean']>;
  excerpt_in?: InputMaybe<InputMaybe<Scalars['String']>[]>;
  excerpt_not?: InputMaybe<Scalars['String']>;
  excerpt_not_contains?: InputMaybe<Scalars['String']>;
  excerpt_not_in?: InputMaybe<InputMaybe<Scalars['String']>[]>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_exists?: InputMaybe<Scalars['Boolean']>;
  slug_in?: InputMaybe<InputMaybe<Scalars['String']>[]>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<InputMaybe<Scalars['String']>[]>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<InputMaybe<Scalars['String']>[]>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<InputMaybe<Scalars['String']>[]>;
}

export interface PostLinkingCollections {
  authorCollection?: Maybe<AuthorCollection>;
  entryCollection?: Maybe<EntryCollection>;
}

export interface PostLinkingCollectionsAuthorCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface PostLinkingCollectionsEntryCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export type PostOrder =
  | 'comments_ASC'
  | 'comments_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'slug_ASC'
  | 'slug_DESC'
  | 'sys_firstPublishedAt_ASC'
  | 'sys_firstPublishedAt_DESC'
  | 'sys_id_ASC'
  | 'sys_id_DESC'
  | 'sys_publishedAt_ASC'
  | 'sys_publishedAt_DESC'
  | 'sys_publishedVersion_ASC'
  | 'sys_publishedVersion_DESC';

export interface Query {
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  author?: Maybe<Author>;
  authorCollection?: Maybe<AuthorCollection>;
  category?: Maybe<Category>;
  categoryCollection?: Maybe<CategoryCollection>;
  entryCollection?: Maybe<EntryCollection>;
  post?: Maybe<Post>;
  postCollection?: Maybe<PostCollection>;
}

export interface QueryAssetArgs {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}

export interface QueryAssetCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<InputMaybe<AssetOrder>[]>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetFilter>;
}

export interface QueryAuthorArgs {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}

export interface QueryAuthorCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<InputMaybe<AuthorOrder>[]>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AuthorFilter>;
}

export interface QueryCategoryArgs {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}

export interface QueryCategoryCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<InputMaybe<CategoryOrder>[]>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CategoryFilter>;
}

export interface QueryEntryCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<InputMaybe<EntryOrder>[]>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EntryFilter>;
}

export interface QueryPostArgs {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}

export interface QueryPostCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<InputMaybe<PostOrder>[]>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PostFilter>;
}

export interface Sys {
  environmentId: Scalars['String'];
  firstPublishedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  publishedVersion?: Maybe<Scalars['Int']>;
  spaceId: Scalars['String'];
}

export interface SysFilter {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']>;
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_in?: InputMaybe<InputMaybe<Scalars['DateTime']>[]>;
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_not_in?: InputMaybe<InputMaybe<Scalars['DateTime']>[]>;
  id?: InputMaybe<Scalars['String']>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_exists?: InputMaybe<Scalars['Boolean']>;
  id_in?: InputMaybe<InputMaybe<Scalars['String']>[]>;
  id_not?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<InputMaybe<Scalars['String']>[]>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_exists?: InputMaybe<Scalars['Boolean']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_in?: InputMaybe<InputMaybe<Scalars['DateTime']>[]>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not_in?: InputMaybe<InputMaybe<Scalars['DateTime']>[]>;
  publishedVersion?: InputMaybe<Scalars['Float']>;
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']>;
  publishedVersion_gt?: InputMaybe<Scalars['Float']>;
  publishedVersion_gte?: InputMaybe<Scalars['Float']>;
  publishedVersion_in?: InputMaybe<InputMaybe<Scalars['Float']>[]>;
  publishedVersion_lt?: InputMaybe<Scalars['Float']>;
  publishedVersion_lte?: InputMaybe<Scalars['Float']>;
  publishedVersion_not?: InputMaybe<Scalars['Float']>;
  publishedVersion_not_in?: InputMaybe<InputMaybe<Scalars['Float']>[]>;
}

export interface IndexPagePostFragment {
  createdAt?: string | null;
  description?: string | null;
  slug?: string | null;
  title?: string | null;
  sys: {id: string};
}

export type ListPostsQueryQueryVariables = Exact<{[key: string]: never}>;

export interface ListPostsQueryQuery {
  postCollection?: {
    items: ({
      createdAt?: string | null;
      description?: string | null;
      slug?: string | null;
      title?: string | null;
      sys: {id: string};
    } | null)[];
  } | null;
}

export interface PagePagePostFragment {
  body?: string | null;
  title?: string | null;
  authorCollection?: {
    items: ({
      name?: string | null;
      website?: string | null;
      biography?: string | null;
      profilePhoto?: {
        description?: string | null;
        title?: string | null;
        url?: string | null;
      } | null;
    } | null)[];
  } | null;
  sys: {publishedAt?: string | null};
}

export type GetPostQueryQueryVariables = Exact<{
  slug: Scalars['String'];
}>;

export interface GetPostQueryQuery {
  postCollection?: {
    items: ({
      body?: string | null;
      title?: string | null;
      authorCollection?: {
        items: ({
          name?: string | null;
          website?: string | null;
          biography?: string | null;
          profilePhoto?: {
            description?: string | null;
            title?: string | null;
            url?: string | null;
          } | null;
        } | null)[];
      } | null;
      sys: {publishedAt?: string | null};
    } | null)[];
  } | null;
}

export const IndexPagePostFragmentDoc = gql`
  fragment IndexPagePost on Post {
    createdAt
    description
    slug
    sys {
      id
    }
    title
  }
`;
export const PagePagePostFragmentDoc = gql`
  fragment PagePagePost on Post {
    body
    authorCollection(limit: 10) {
      items {
        name
        website
        profilePhoto {
          description
          title
          url
        }
        biography
      }
    }
    sys {
      publishedAt
    }
    title
  }
`;
export const ListPostsQueryDocument = gql`
  query ListPostsQuery {
    postCollection(limit: 10, order: sys_firstPublishedAt_DESC) {
      items {
        ...IndexPagePost
      }
    }
  }
  ${IndexPagePostFragmentDoc}
`;
export const GetPostQueryDocument = gql`
  query GetPostQuery($slug: String!) {
    postCollection(limit: 2, where: {slug: $slug}) {
      items {
        ...PagePagePost
      }
    }
  }
  ${PagePagePostFragmentDoc}
`;
