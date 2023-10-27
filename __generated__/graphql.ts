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
export type MakeEmpty<T extends {[key: string]: unknown}, K extends keyof T> = {
  [_ in K]?: never;
};
export type Incremental<T> =
  | T
  | {[P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never};
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: {input: string; output: string};
  String: {input: string; output: string};
  Boolean: {input: boolean; output: boolean};
  Int: {input: number; output: number};
  Float: {input: number; output: number};
  DateTime: {input: string; output: string};
  Dimension: {input: number; output: number};
  HexColor: {input: string; output: string};
  Quality: {input: number; output: number};
}

/** Represents a binary file in a space. An asset can be any file type. */
export interface Asset {
  contentType?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  fileName?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars['Int']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
}

/** Represents a binary file in a space. An asset can be any file type. */
export interface AssetContentTypeArgs {
  locale?: InputMaybe<Scalars['String']['input']>;
}

/** Represents a binary file in a space. An asset can be any file type. */
export interface AssetDescriptionArgs {
  locale?: InputMaybe<Scalars['String']['input']>;
}

/** Represents a binary file in a space. An asset can be any file type. */
export interface AssetFileNameArgs {
  locale?: InputMaybe<Scalars['String']['input']>;
}

/** Represents a binary file in a space. An asset can be any file type. */
export interface AssetHeightArgs {
  locale?: InputMaybe<Scalars['String']['input']>;
}

/** Represents a binary file in a space. An asset can be any file type. */
export interface AssetLinkedFromArgs {
  allowedLocales?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
}

/** Represents a binary file in a space. An asset can be any file type. */
export interface AssetSizeArgs {
  locale?: InputMaybe<Scalars['String']['input']>;
}

/** Represents a binary file in a space. An asset can be any file type. */
export interface AssetTitleArgs {
  locale?: InputMaybe<Scalars['String']['input']>;
}

/** Represents a binary file in a space. An asset can be any file type. */
export interface AssetUrlArgs {
  locale?: InputMaybe<Scalars['String']['input']>;
  transform?: InputMaybe<ImageTransformOptions>;
}

/** Represents a binary file in a space. An asset can be any file type. */
export interface AssetWidthArgs {
  locale?: InputMaybe<Scalars['String']['input']>;
}

export interface AssetCollection {
  items: Maybe<Asset>[];
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
}

export interface AssetFilter {
  AND?: InputMaybe<InputMaybe<AssetFilter>[]>;
  OR?: InputMaybe<InputMaybe<AssetFilter>[]>;
  contentType?: InputMaybe<Scalars['String']['input']>;
  contentType_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentType_in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  contentType_not?: InputMaybe<Scalars['String']['input']>;
  contentType_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_not_in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  fileName_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  fileName_in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  fileName_not?: InputMaybe<Scalars['String']['input']>;
  fileName_not_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_not_in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  height?: InputMaybe<Scalars['Int']['input']>;
  height_exists?: InputMaybe<Scalars['Boolean']['input']>;
  height_gt?: InputMaybe<Scalars['Int']['input']>;
  height_gte?: InputMaybe<Scalars['Int']['input']>;
  height_in?: InputMaybe<InputMaybe<Scalars['Int']['input']>[]>;
  height_lt?: InputMaybe<Scalars['Int']['input']>;
  height_lte?: InputMaybe<Scalars['Int']['input']>;
  height_not?: InputMaybe<Scalars['Int']['input']>;
  height_not_in?: InputMaybe<InputMaybe<Scalars['Int']['input']>[]>;
  size?: InputMaybe<Scalars['Int']['input']>;
  size_exists?: InputMaybe<Scalars['Boolean']['input']>;
  size_gt?: InputMaybe<Scalars['Int']['input']>;
  size_gte?: InputMaybe<Scalars['Int']['input']>;
  size_in?: InputMaybe<InputMaybe<Scalars['Int']['input']>[]>;
  size_lt?: InputMaybe<Scalars['Int']['input']>;
  size_lte?: InputMaybe<Scalars['Int']['input']>;
  size_not?: InputMaybe<Scalars['Int']['input']>;
  size_not_in?: InputMaybe<InputMaybe<Scalars['Int']['input']>[]>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  url?: InputMaybe<Scalars['String']['input']>;
  url_contains?: InputMaybe<Scalars['String']['input']>;
  url_exists?: InputMaybe<Scalars['Boolean']['input']>;
  url_in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  url_not?: InputMaybe<Scalars['String']['input']>;
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  url_not_in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  width?: InputMaybe<Scalars['Int']['input']>;
  width_exists?: InputMaybe<Scalars['Boolean']['input']>;
  width_gt?: InputMaybe<Scalars['Int']['input']>;
  width_gte?: InputMaybe<Scalars['Int']['input']>;
  width_in?: InputMaybe<InputMaybe<Scalars['Int']['input']>[]>;
  width_lt?: InputMaybe<Scalars['Int']['input']>;
  width_lte?: InputMaybe<Scalars['Int']['input']>;
  width_not?: InputMaybe<Scalars['Int']['input']>;
  width_not_in?: InputMaybe<InputMaybe<Scalars['Int']['input']>[]>;
}

export interface AssetLinkingCollections {
  authorCollection?: Maybe<AuthorCollection>;
  entryCollection?: Maybe<EntryCollection>;
}

export interface AssetLinkingCollectionsAuthorCollectionArgs {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<
    InputMaybe<AssetLinkingCollectionsAuthorCollectionOrder>[]
  >;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
}

export interface AssetLinkingCollectionsEntryCollectionArgs {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
}

export type AssetLinkingCollectionsAuthorCollectionOrder =
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
  biography?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  createdEntriesCollection?: Maybe<AuthorCreatedEntriesCollection>;
  linkedFrom?: Maybe<AuthorLinkingCollections>;
  name?: Maybe<Scalars['String']['output']>;
  profilePhoto?: Maybe<Asset>;
  sys: Sys;
  website?: Maybe<Scalars['String']['output']>;
};

/** [See type definition](https://app.contentful.com/spaces/xlgl5pdkgxf5/content_types/author) */
export interface AuthorBiographyArgs {
  locale?: InputMaybe<Scalars['String']['input']>;
}

/** [See type definition](https://app.contentful.com/spaces/xlgl5pdkgxf5/content_types/author) */
export interface AuthorCreatedEntriesCollectionArgs {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<InputMaybe<AuthorCreatedEntriesCollectionOrder>[]>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PostFilter>;
}

/** [See type definition](https://app.contentful.com/spaces/xlgl5pdkgxf5/content_types/author) */
export interface AuthorLinkedFromArgs {
  allowedLocales?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
}

/** [See type definition](https://app.contentful.com/spaces/xlgl5pdkgxf5/content_types/author) */
export interface AuthorNameArgs {
  locale?: InputMaybe<Scalars['String']['input']>;
}

/** [See type definition](https://app.contentful.com/spaces/xlgl5pdkgxf5/content_types/author) */
export interface AuthorProfilePhotoArgs {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
}

/** [See type definition](https://app.contentful.com/spaces/xlgl5pdkgxf5/content_types/author) */
export interface AuthorWebsiteArgs {
  locale?: InputMaybe<Scalars['String']['input']>;
}

export interface AuthorCollection {
  items: Maybe<Author>[];
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
}

export interface AuthorCreatedEntriesCollection {
  items: Maybe<Post>[];
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
}

export type AuthorCreatedEntriesCollectionOrder =
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

export interface AuthorFilter {
  AND?: InputMaybe<InputMaybe<AuthorFilter>[]>;
  OR?: InputMaybe<InputMaybe<AuthorFilter>[]>;
  biography?: InputMaybe<Scalars['String']['input']>;
  biography_contains?: InputMaybe<Scalars['String']['input']>;
  biography_exists?: InputMaybe<Scalars['Boolean']['input']>;
  biography_in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  biography_not?: InputMaybe<Scalars['String']['input']>;
  biography_not_contains?: InputMaybe<Scalars['String']['input']>;
  biography_not_in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  createdEntries?: InputMaybe<CfPostNestedFilter>;
  createdEntriesCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  profilePhoto_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  website?: InputMaybe<Scalars['String']['input']>;
  website_contains?: InputMaybe<Scalars['String']['input']>;
  website_exists?: InputMaybe<Scalars['Boolean']['input']>;
  website_in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  website_not?: InputMaybe<Scalars['String']['input']>;
  website_not_contains?: InputMaybe<Scalars['String']['input']>;
  website_not_in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
}

export interface AuthorLinkingCollections {
  entryCollection?: Maybe<EntryCollection>;
  postCollection?: Maybe<PostCollection>;
}

export interface AuthorLinkingCollectionsEntryCollectionArgs {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
}

export interface AuthorLinkingCollectionsPostCollectionArgs {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<InputMaybe<AuthorLinkingCollectionsPostCollectionOrder>[]>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
}

export type AuthorLinkingCollectionsPostCollectionOrder =
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
  description?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<CategoryLinkingCollections>;
  name?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};

/** [See type definition](https://app.contentful.com/spaces/xlgl5pdkgxf5/content_types/category) */
export interface CategoryDescriptionArgs {
  locale?: InputMaybe<Scalars['String']['input']>;
}

/** [See type definition](https://app.contentful.com/spaces/xlgl5pdkgxf5/content_types/category) */
export interface CategoryLinkedFromArgs {
  allowedLocales?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
}

/** [See type definition](https://app.contentful.com/spaces/xlgl5pdkgxf5/content_types/category) */
export interface CategoryNameArgs {
  locale?: InputMaybe<Scalars['String']['input']>;
}

export interface CategoryCollection {
  items: Maybe<Category>[];
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
}

export interface CategoryFilter {
  AND?: InputMaybe<InputMaybe<CategoryFilter>[]>;
  OR?: InputMaybe<InputMaybe<CategoryFilter>[]>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  sys?: InputMaybe<SysFilter>;
}

export interface CategoryLinkingCollections {
  entryCollection?: Maybe<EntryCollection>;
  postCollection?: Maybe<PostCollection>;
}

export interface CategoryLinkingCollectionsEntryCollectionArgs {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
}

export interface CategoryLinkingCollectionsPostCollectionArgs {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<
    InputMaybe<CategoryLinkingCollectionsPostCollectionOrder>[]
  >;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
}

export type CategoryLinkingCollectionsPostCollectionOrder =
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
  tags_exists?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface ContentfulMetadataTagsFilter {
  id_contains_all?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  id_contains_none?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  id_contains_some?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
}

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export interface ContentfulTag {
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
}

export interface Entry {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
}

export interface EntryCollection {
  items: Maybe<Entry>[];
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
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
  backgroundColor?: InputMaybe<Scalars['HexColor']['input']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']['input']>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']['input']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']['input']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']['input']>;
}

/** [See type definition](https://app.contentful.com/spaces/xlgl5pdkgxf5/content_types/post) */
export type Post = Entry & {
  authorCollection?: Maybe<PostAuthorCollection>;
  body?: Maybe<Scalars['String']['output']>;
  categoryCollection?: Maybe<PostCategoryCollection>;
  comments?: Maybe<Scalars['Boolean']['output']>;
  contentfulMetadata: ContentfulMetadata;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  excerpt?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<PostLinkingCollections>;
  slug?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};

/** [See type definition](https://app.contentful.com/spaces/xlgl5pdkgxf5/content_types/post) */
export interface PostAuthorCollectionArgs {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<InputMaybe<PostAuthorCollectionOrder>[]>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AuthorFilter>;
}

/** [See type definition](https://app.contentful.com/spaces/xlgl5pdkgxf5/content_types/post) */
export interface PostBodyArgs {
  locale?: InputMaybe<Scalars['String']['input']>;
}

/** [See type definition](https://app.contentful.com/spaces/xlgl5pdkgxf5/content_types/post) */
export interface PostCategoryCollectionArgs {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<InputMaybe<PostCategoryCollectionOrder>[]>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CategoryFilter>;
}

/** [See type definition](https://app.contentful.com/spaces/xlgl5pdkgxf5/content_types/post) */
export interface PostCommentsArgs {
  locale?: InputMaybe<Scalars['String']['input']>;
}

/** [See type definition](https://app.contentful.com/spaces/xlgl5pdkgxf5/content_types/post) */
export interface PostCreatedAtArgs {
  locale?: InputMaybe<Scalars['String']['input']>;
}

/** [See type definition](https://app.contentful.com/spaces/xlgl5pdkgxf5/content_types/post) */
export interface PostDescriptionArgs {
  locale?: InputMaybe<Scalars['String']['input']>;
}

/** [See type definition](https://app.contentful.com/spaces/xlgl5pdkgxf5/content_types/post) */
export interface PostExcerptArgs {
  locale?: InputMaybe<Scalars['String']['input']>;
}

/** [See type definition](https://app.contentful.com/spaces/xlgl5pdkgxf5/content_types/post) */
export interface PostLinkedFromArgs {
  allowedLocales?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
}

/** [See type definition](https://app.contentful.com/spaces/xlgl5pdkgxf5/content_types/post) */
export interface PostSlugArgs {
  locale?: InputMaybe<Scalars['String']['input']>;
}

/** [See type definition](https://app.contentful.com/spaces/xlgl5pdkgxf5/content_types/post) */
export interface PostTitleArgs {
  locale?: InputMaybe<Scalars['String']['input']>;
}

export interface PostAuthorCollection {
  items: Maybe<Author>[];
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
}

export type PostAuthorCollectionOrder =
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

export interface PostCategoryCollection {
  items: Maybe<Category>[];
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
}

export type PostCategoryCollectionOrder =
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

export interface PostCollection {
  items: Maybe<Post>[];
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
}

export interface PostFilter {
  AND?: InputMaybe<InputMaybe<PostFilter>[]>;
  OR?: InputMaybe<InputMaybe<PostFilter>[]>;
  author?: InputMaybe<CfAuthorNestedFilter>;
  authorCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  body?: InputMaybe<Scalars['String']['input']>;
  body_contains?: InputMaybe<Scalars['String']['input']>;
  body_exists?: InputMaybe<Scalars['Boolean']['input']>;
  body_in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  body_not?: InputMaybe<Scalars['String']['input']>;
  body_not_contains?: InputMaybe<Scalars['String']['input']>;
  body_not_in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  category?: InputMaybe<CfCategoryNestedFilter>;
  categoryCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  comments?: InputMaybe<Scalars['Boolean']['input']>;
  comments_exists?: InputMaybe<Scalars['Boolean']['input']>;
  comments_not?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_in?: InputMaybe<InputMaybe<Scalars['DateTime']['input']>[]>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not_in?: InputMaybe<InputMaybe<Scalars['DateTime']['input']>[]>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  excerpt?: InputMaybe<Scalars['String']['input']>;
  excerpt_contains?: InputMaybe<Scalars['String']['input']>;
  excerpt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  excerpt_in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  excerpt_not?: InputMaybe<Scalars['String']['input']>;
  excerpt_not_contains?: InputMaybe<Scalars['String']['input']>;
  excerpt_not_in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
}

export interface PostLinkingCollections {
  authorCollection?: Maybe<AuthorCollection>;
  entryCollection?: Maybe<EntryCollection>;
}

export interface PostLinkingCollectionsAuthorCollectionArgs {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<InputMaybe<PostLinkingCollectionsAuthorCollectionOrder>[]>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
}

export interface PostLinkingCollectionsEntryCollectionArgs {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
}

export type PostLinkingCollectionsAuthorCollectionOrder =
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
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface QueryAssetCollectionArgs {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<InputMaybe<AssetOrder>[]>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetFilter>;
}

export interface QueryAuthorArgs {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface QueryAuthorCollectionArgs {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<InputMaybe<AuthorOrder>[]>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AuthorFilter>;
}

export interface QueryCategoryArgs {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface QueryCategoryCollectionArgs {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<InputMaybe<CategoryOrder>[]>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CategoryFilter>;
}

export interface QueryEntryCollectionArgs {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<InputMaybe<EntryOrder>[]>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EntryFilter>;
}

export interface QueryPostArgs {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface QueryPostCollectionArgs {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<InputMaybe<PostOrder>[]>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PostFilter>;
}

export interface Sys {
  environmentId: Scalars['String']['output'];
  firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  publishedVersion?: Maybe<Scalars['Int']['output']>;
  spaceId: Scalars['String']['output'];
}

export interface SysFilter {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_in?: InputMaybe<InputMaybe<Scalars['DateTime']['input']>[]>;
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not_in?: InputMaybe<
    InputMaybe<Scalars['DateTime']['input']>[]
  >;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_exists?: InputMaybe<Scalars['Boolean']['input']>;
  id_in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_in?: InputMaybe<InputMaybe<Scalars['DateTime']['input']>[]>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not_in?: InputMaybe<InputMaybe<Scalars['DateTime']['input']>[]>;
  publishedVersion?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedVersion_gt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_gte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_in?: InputMaybe<InputMaybe<Scalars['Float']['input']>[]>;
  publishedVersion_lt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_lte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not_in?: InputMaybe<InputMaybe<Scalars['Float']['input']>[]>;
}

export interface CfAuthorNestedFilter {
  AND?: InputMaybe<InputMaybe<CfAuthorNestedFilter>[]>;
  OR?: InputMaybe<InputMaybe<CfAuthorNestedFilter>[]>;
  biography?: InputMaybe<Scalars['String']['input']>;
  biography_contains?: InputMaybe<Scalars['String']['input']>;
  biography_exists?: InputMaybe<Scalars['Boolean']['input']>;
  biography_in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  biography_not?: InputMaybe<Scalars['String']['input']>;
  biography_not_contains?: InputMaybe<Scalars['String']['input']>;
  biography_not_in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  createdEntriesCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  profilePhoto_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  website?: InputMaybe<Scalars['String']['input']>;
  website_contains?: InputMaybe<Scalars['String']['input']>;
  website_exists?: InputMaybe<Scalars['Boolean']['input']>;
  website_in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  website_not?: InputMaybe<Scalars['String']['input']>;
  website_not_contains?: InputMaybe<Scalars['String']['input']>;
  website_not_in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
}

export interface CfCategoryNestedFilter {
  AND?: InputMaybe<InputMaybe<CfCategoryNestedFilter>[]>;
  OR?: InputMaybe<InputMaybe<CfCategoryNestedFilter>[]>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  sys?: InputMaybe<SysFilter>;
}

export interface CfPostNestedFilter {
  AND?: InputMaybe<InputMaybe<CfPostNestedFilter>[]>;
  OR?: InputMaybe<InputMaybe<CfPostNestedFilter>[]>;
  authorCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  body?: InputMaybe<Scalars['String']['input']>;
  body_contains?: InputMaybe<Scalars['String']['input']>;
  body_exists?: InputMaybe<Scalars['Boolean']['input']>;
  body_in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  body_not?: InputMaybe<Scalars['String']['input']>;
  body_not_contains?: InputMaybe<Scalars['String']['input']>;
  body_not_in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  categoryCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  comments?: InputMaybe<Scalars['Boolean']['input']>;
  comments_exists?: InputMaybe<Scalars['Boolean']['input']>;
  comments_not?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_in?: InputMaybe<InputMaybe<Scalars['DateTime']['input']>[]>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not_in?: InputMaybe<InputMaybe<Scalars['DateTime']['input']>[]>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  excerpt?: InputMaybe<Scalars['String']['input']>;
  excerpt_contains?: InputMaybe<Scalars['String']['input']>;
  excerpt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  excerpt_in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  excerpt_not?: InputMaybe<Scalars['String']['input']>;
  excerpt_not_contains?: InputMaybe<Scalars['String']['input']>;
  excerpt_not_in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
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
  slug: Scalars['String']['input'];
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
