/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PerformerEditInput, TargetTypeEnum, OperationEnum, VoteStatusEnum, VoteTypeEnum, GenderEnum, HairColorEnum, EyeColorEnum, EthnicityEnum, BreastTypeEnum, FingerprintAlgorithm } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: PerformerEdit
// ====================================================

export interface PerformerEdit_performerEdit_comments_user {
  __typename: "User";
  id: string;
  name: string;
}

export interface PerformerEdit_performerEdit_comments {
  __typename: "EditComment";
  id: string;
  user: PerformerEdit_performerEdit_comments_user | null;
  date: GQLTime;
  comment: string;
}

export interface PerformerEdit_performerEdit_votes_user {
  __typename: "User";
  id: string;
  name: string;
}

export interface PerformerEdit_performerEdit_votes {
  __typename: "EditVote";
  user: PerformerEdit_performerEdit_votes_user | null;
  date: GQLTime;
  vote: VoteTypeEnum;
}

export interface PerformerEdit_performerEdit_user {
  __typename: "User";
  id: string;
  name: string;
}

export interface PerformerEdit_performerEdit_target_Tag_category {
  __typename: "TagCategory";
  id: string;
  name: string;
}

export interface PerformerEdit_performerEdit_target_Tag {
  __typename: "Tag";
  id: string;
  name: string;
  description: string | null;
  deleted: boolean;
  category: PerformerEdit_performerEdit_target_Tag_category | null;
  aliases: string[];
}

export interface PerformerEdit_performerEdit_target_Performer_tattoos {
  __typename: "BodyModification";
  location: string;
  description: string | null;
}

export interface PerformerEdit_performerEdit_target_Performer_piercings {
  __typename: "BodyModification";
  location: string;
  description: string | null;
}

export interface PerformerEdit_performerEdit_target_Performer_urls_site {
  __typename: "Site";
  id: string;
  name: string;
  icon: string;
}

export interface PerformerEdit_performerEdit_target_Performer_urls {
  __typename: "URL";
  url: string;
  site: PerformerEdit_performerEdit_target_Performer_urls_site;
}

export interface PerformerEdit_performerEdit_target_Performer_images {
  __typename: "Image";
  id: string;
  url: string;
  width: number;
  height: number;
}

export interface PerformerEdit_performerEdit_target_Performer {
  __typename: "Performer";
  id: string;
  name: string;
  disambiguation: string | null;
  deleted: boolean;
  aliases: string[];
  gender: GenderEnum | null;
  birth_date: string | null;
  age: number | null;
  /**
   * Height in cm
   */
  height: number | null;
  hair_color: HairColorEnum | null;
  eye_color: EyeColorEnum | null;
  ethnicity: EthnicityEnum | null;
  country: string | null;
  career_end_year: number | null;
  career_start_year: number | null;
  breast_type: BreastTypeEnum | null;
  waist_size: number | null;
  hip_size: number | null;
  band_size: number | null;
  cup_size: string | null;
  tattoos: PerformerEdit_performerEdit_target_Performer_tattoos[] | null;
  piercings: PerformerEdit_performerEdit_target_Performer_piercings[] | null;
  urls: PerformerEdit_performerEdit_target_Performer_urls[];
  images: PerformerEdit_performerEdit_target_Performer_images[];
  is_favorite: boolean;
}

export interface PerformerEdit_performerEdit_target_Studio_child_studios {
  __typename: "Studio";
  id: string;
  name: string;
}

export interface PerformerEdit_performerEdit_target_Studio_parent {
  __typename: "Studio";
  id: string;
  name: string;
}

export interface PerformerEdit_performerEdit_target_Studio_urls_site {
  __typename: "Site";
  id: string;
  name: string;
  icon: string;
}

export interface PerformerEdit_performerEdit_target_Studio_urls {
  __typename: "URL";
  url: string;
  site: PerformerEdit_performerEdit_target_Studio_urls_site;
}

export interface PerformerEdit_performerEdit_target_Studio_images {
  __typename: "Image";
  id: string;
  url: string;
  height: number;
  width: number;
}

export interface PerformerEdit_performerEdit_target_Studio {
  __typename: "Studio";
  id: string;
  name: string;
  child_studios: PerformerEdit_performerEdit_target_Studio_child_studios[];
  parent: PerformerEdit_performerEdit_target_Studio_parent | null;
  urls: PerformerEdit_performerEdit_target_Studio_urls[];
  images: PerformerEdit_performerEdit_target_Studio_images[];
  deleted: boolean;
  is_favorite: boolean;
}

export interface PerformerEdit_performerEdit_target_Scene_urls_site {
  __typename: "Site";
  id: string;
  name: string;
  icon: string;
}

export interface PerformerEdit_performerEdit_target_Scene_urls {
  __typename: "URL";
  url: string;
  site: PerformerEdit_performerEdit_target_Scene_urls_site;
}

export interface PerformerEdit_performerEdit_target_Scene_images {
  __typename: "Image";
  id: string;
  url: string;
  width: number;
  height: number;
}

export interface PerformerEdit_performerEdit_target_Scene_studio {
  __typename: "Studio";
  id: string;
  name: string;
}

export interface PerformerEdit_performerEdit_target_Scene_performers_performer {
  __typename: "Performer";
  id: string;
  name: string;
  disambiguation: string | null;
  deleted: boolean;
  gender: GenderEnum | null;
  aliases: string[];
}

export interface PerformerEdit_performerEdit_target_Scene_performers {
  __typename: "PerformerAppearance";
  /**
   * Performing as alias
   */
  as: string | null;
  performer: PerformerEdit_performerEdit_target_Scene_performers_performer;
}

export interface PerformerEdit_performerEdit_target_Scene_fingerprints {
  __typename: "Fingerprint";
  hash: string;
  algorithm: FingerprintAlgorithm;
  duration: number;
  submissions: number;
  user_submitted: boolean;
  created: GQLTime;
  updated: GQLTime;
}

export interface PerformerEdit_performerEdit_target_Scene_tags {
  __typename: "Tag";
  id: string;
  name: string;
  description: string | null;
  aliases: string[];
}

export interface PerformerEdit_performerEdit_target_Scene {
  __typename: "Scene";
  id: string;
  release_date: string | null;
  title: string | null;
  deleted: boolean;
  details: string | null;
  director: string | null;
  code: string | null;
  duration: number | null;
  urls: PerformerEdit_performerEdit_target_Scene_urls[];
  images: PerformerEdit_performerEdit_target_Scene_images[];
  studio: PerformerEdit_performerEdit_target_Scene_studio | null;
  performers: PerformerEdit_performerEdit_target_Scene_performers[];
  fingerprints: PerformerEdit_performerEdit_target_Scene_fingerprints[];
  tags: PerformerEdit_performerEdit_target_Scene_tags[];
}

export type PerformerEdit_performerEdit_target = PerformerEdit_performerEdit_target_Tag | PerformerEdit_performerEdit_target_Performer | PerformerEdit_performerEdit_target_Studio | PerformerEdit_performerEdit_target_Scene;

export interface PerformerEdit_performerEdit_details_TagEdit_category {
  __typename: "TagCategory";
  id: string;
  name: string;
}

export interface PerformerEdit_performerEdit_details_TagEdit {
  __typename: "TagEdit";
  name: string | null;
  description: string | null;
  added_aliases: string[] | null;
  removed_aliases: string[] | null;
  category: PerformerEdit_performerEdit_details_TagEdit_category | null;
}

export interface PerformerEdit_performerEdit_details_PerformerEdit_added_urls_site {
  __typename: "Site";
  id: string;
  name: string;
  icon: string;
}

export interface PerformerEdit_performerEdit_details_PerformerEdit_added_urls {
  __typename: "URL";
  url: string;
  site: PerformerEdit_performerEdit_details_PerformerEdit_added_urls_site;
}

export interface PerformerEdit_performerEdit_details_PerformerEdit_removed_urls_site {
  __typename: "Site";
  id: string;
  name: string;
  icon: string;
}

export interface PerformerEdit_performerEdit_details_PerformerEdit_removed_urls {
  __typename: "URL";
  url: string;
  site: PerformerEdit_performerEdit_details_PerformerEdit_removed_urls_site;
}

export interface PerformerEdit_performerEdit_details_PerformerEdit_added_tattoos {
  __typename: "BodyModification";
  location: string;
  description: string | null;
}

export interface PerformerEdit_performerEdit_details_PerformerEdit_removed_tattoos {
  __typename: "BodyModification";
  location: string;
  description: string | null;
}

export interface PerformerEdit_performerEdit_details_PerformerEdit_added_piercings {
  __typename: "BodyModification";
  location: string;
  description: string | null;
}

export interface PerformerEdit_performerEdit_details_PerformerEdit_removed_piercings {
  __typename: "BodyModification";
  location: string;
  description: string | null;
}

export interface PerformerEdit_performerEdit_details_PerformerEdit_added_images {
  __typename: "Image";
  id: string;
  url: string;
  width: number;
  height: number;
}

export interface PerformerEdit_performerEdit_details_PerformerEdit_removed_images {
  __typename: "Image";
  id: string;
  url: string;
  width: number;
  height: number;
}

export interface PerformerEdit_performerEdit_details_PerformerEdit {
  __typename: "PerformerEdit";
  name: string | null;
  disambiguation: string | null;
  added_aliases: string[] | null;
  removed_aliases: string[] | null;
  gender: GenderEnum | null;
  added_urls: PerformerEdit_performerEdit_details_PerformerEdit_added_urls[] | null;
  removed_urls: PerformerEdit_performerEdit_details_PerformerEdit_removed_urls[] | null;
  birthdate: string | null;
  ethnicity: EthnicityEnum | null;
  country: string | null;
  eye_color: EyeColorEnum | null;
  hair_color: HairColorEnum | null;
  /**
   * Height in cm
   */
  height: number | null;
  cup_size: string | null;
  band_size: number | null;
  waist_size: number | null;
  hip_size: number | null;
  breast_type: BreastTypeEnum | null;
  career_start_year: number | null;
  career_end_year: number | null;
  added_tattoos: PerformerEdit_performerEdit_details_PerformerEdit_added_tattoos[] | null;
  removed_tattoos: PerformerEdit_performerEdit_details_PerformerEdit_removed_tattoos[] | null;
  added_piercings: PerformerEdit_performerEdit_details_PerformerEdit_added_piercings[] | null;
  removed_piercings: PerformerEdit_performerEdit_details_PerformerEdit_removed_piercings[] | null;
  added_images: (PerformerEdit_performerEdit_details_PerformerEdit_added_images | null)[] | null;
  removed_images: (PerformerEdit_performerEdit_details_PerformerEdit_removed_images | null)[] | null;
  draft_id: string | null;
}

export interface PerformerEdit_performerEdit_details_StudioEdit_added_urls_site {
  __typename: "Site";
  id: string;
  name: string;
  icon: string;
}

export interface PerformerEdit_performerEdit_details_StudioEdit_added_urls {
  __typename: "URL";
  url: string;
  site: PerformerEdit_performerEdit_details_StudioEdit_added_urls_site;
}

export interface PerformerEdit_performerEdit_details_StudioEdit_removed_urls_site {
  __typename: "Site";
  id: string;
  name: string;
  icon: string;
}

export interface PerformerEdit_performerEdit_details_StudioEdit_removed_urls {
  __typename: "URL";
  url: string;
  site: PerformerEdit_performerEdit_details_StudioEdit_removed_urls_site;
}

export interface PerformerEdit_performerEdit_details_StudioEdit_parent_child_studios {
  __typename: "Studio";
  id: string;
  name: string;
}

export interface PerformerEdit_performerEdit_details_StudioEdit_parent_parent {
  __typename: "Studio";
  id: string;
  name: string;
}

export interface PerformerEdit_performerEdit_details_StudioEdit_parent_urls_site {
  __typename: "Site";
  id: string;
  name: string;
  icon: string;
}

export interface PerformerEdit_performerEdit_details_StudioEdit_parent_urls {
  __typename: "URL";
  url: string;
  site: PerformerEdit_performerEdit_details_StudioEdit_parent_urls_site;
}

export interface PerformerEdit_performerEdit_details_StudioEdit_parent_images {
  __typename: "Image";
  id: string;
  url: string;
  height: number;
  width: number;
}

export interface PerformerEdit_performerEdit_details_StudioEdit_parent {
  __typename: "Studio";
  id: string;
  name: string;
  child_studios: PerformerEdit_performerEdit_details_StudioEdit_parent_child_studios[];
  parent: PerformerEdit_performerEdit_details_StudioEdit_parent_parent | null;
  urls: PerformerEdit_performerEdit_details_StudioEdit_parent_urls[];
  images: PerformerEdit_performerEdit_details_StudioEdit_parent_images[];
  deleted: boolean;
  is_favorite: boolean;
}

export interface PerformerEdit_performerEdit_details_StudioEdit_added_images {
  __typename: "Image";
  id: string;
  url: string;
  width: number;
  height: number;
}

export interface PerformerEdit_performerEdit_details_StudioEdit_removed_images {
  __typename: "Image";
  id: string;
  url: string;
  width: number;
  height: number;
}

export interface PerformerEdit_performerEdit_details_StudioEdit {
  __typename: "StudioEdit";
  name: string | null;
  /**
   * Added and modified URLs
   */
  added_urls: PerformerEdit_performerEdit_details_StudioEdit_added_urls[] | null;
  removed_urls: PerformerEdit_performerEdit_details_StudioEdit_removed_urls[] | null;
  parent: PerformerEdit_performerEdit_details_StudioEdit_parent | null;
  added_images: (PerformerEdit_performerEdit_details_StudioEdit_added_images | null)[] | null;
  removed_images: (PerformerEdit_performerEdit_details_StudioEdit_removed_images | null)[] | null;
}

export interface PerformerEdit_performerEdit_details_SceneEdit_added_urls_site {
  __typename: "Site";
  id: string;
  name: string;
  icon: string;
}

export interface PerformerEdit_performerEdit_details_SceneEdit_added_urls {
  __typename: "URL";
  url: string;
  site: PerformerEdit_performerEdit_details_SceneEdit_added_urls_site;
}

export interface PerformerEdit_performerEdit_details_SceneEdit_removed_urls_site {
  __typename: "Site";
  id: string;
  name: string;
  icon: string;
}

export interface PerformerEdit_performerEdit_details_SceneEdit_removed_urls {
  __typename: "URL";
  url: string;
  site: PerformerEdit_performerEdit_details_SceneEdit_removed_urls_site;
}

export interface PerformerEdit_performerEdit_details_SceneEdit_studio_child_studios {
  __typename: "Studio";
  id: string;
  name: string;
}

export interface PerformerEdit_performerEdit_details_SceneEdit_studio_parent {
  __typename: "Studio";
  id: string;
  name: string;
}

export interface PerformerEdit_performerEdit_details_SceneEdit_studio_urls_site {
  __typename: "Site";
  id: string;
  name: string;
  icon: string;
}

export interface PerformerEdit_performerEdit_details_SceneEdit_studio_urls {
  __typename: "URL";
  url: string;
  site: PerformerEdit_performerEdit_details_SceneEdit_studio_urls_site;
}

export interface PerformerEdit_performerEdit_details_SceneEdit_studio_images {
  __typename: "Image";
  id: string;
  url: string;
  height: number;
  width: number;
}

export interface PerformerEdit_performerEdit_details_SceneEdit_studio {
  __typename: "Studio";
  id: string;
  name: string;
  child_studios: PerformerEdit_performerEdit_details_SceneEdit_studio_child_studios[];
  parent: PerformerEdit_performerEdit_details_SceneEdit_studio_parent | null;
  urls: PerformerEdit_performerEdit_details_SceneEdit_studio_urls[];
  images: PerformerEdit_performerEdit_details_SceneEdit_studio_images[];
  deleted: boolean;
  is_favorite: boolean;
}

export interface PerformerEdit_performerEdit_details_SceneEdit_added_performers_performer_tattoos {
  __typename: "BodyModification";
  location: string;
  description: string | null;
}

export interface PerformerEdit_performerEdit_details_SceneEdit_added_performers_performer_piercings {
  __typename: "BodyModification";
  location: string;
  description: string | null;
}

export interface PerformerEdit_performerEdit_details_SceneEdit_added_performers_performer_urls_site {
  __typename: "Site";
  id: string;
  name: string;
  icon: string;
}

export interface PerformerEdit_performerEdit_details_SceneEdit_added_performers_performer_urls {
  __typename: "URL";
  url: string;
  site: PerformerEdit_performerEdit_details_SceneEdit_added_performers_performer_urls_site;
}

export interface PerformerEdit_performerEdit_details_SceneEdit_added_performers_performer_images {
  __typename: "Image";
  id: string;
  url: string;
  width: number;
  height: number;
}

export interface PerformerEdit_performerEdit_details_SceneEdit_added_performers_performer {
  __typename: "Performer";
  id: string;
  name: string;
  disambiguation: string | null;
  deleted: boolean;
  aliases: string[];
  gender: GenderEnum | null;
  birth_date: string | null;
  age: number | null;
  /**
   * Height in cm
   */
  height: number | null;
  hair_color: HairColorEnum | null;
  eye_color: EyeColorEnum | null;
  ethnicity: EthnicityEnum | null;
  country: string | null;
  career_end_year: number | null;
  career_start_year: number | null;
  breast_type: BreastTypeEnum | null;
  waist_size: number | null;
  hip_size: number | null;
  band_size: number | null;
  cup_size: string | null;
  tattoos: PerformerEdit_performerEdit_details_SceneEdit_added_performers_performer_tattoos[] | null;
  piercings: PerformerEdit_performerEdit_details_SceneEdit_added_performers_performer_piercings[] | null;
  urls: PerformerEdit_performerEdit_details_SceneEdit_added_performers_performer_urls[];
  images: PerformerEdit_performerEdit_details_SceneEdit_added_performers_performer_images[];
  is_favorite: boolean;
}

export interface PerformerEdit_performerEdit_details_SceneEdit_added_performers {
  __typename: "PerformerAppearance";
  performer: PerformerEdit_performerEdit_details_SceneEdit_added_performers_performer;
  /**
   * Performing as alias
   */
  as: string | null;
}

export interface PerformerEdit_performerEdit_details_SceneEdit_removed_performers_performer_tattoos {
  __typename: "BodyModification";
  location: string;
  description: string | null;
}

export interface PerformerEdit_performerEdit_details_SceneEdit_removed_performers_performer_piercings {
  __typename: "BodyModification";
  location: string;
  description: string | null;
}

export interface PerformerEdit_performerEdit_details_SceneEdit_removed_performers_performer_urls_site {
  __typename: "Site";
  id: string;
  name: string;
  icon: string;
}

export interface PerformerEdit_performerEdit_details_SceneEdit_removed_performers_performer_urls {
  __typename: "URL";
  url: string;
  site: PerformerEdit_performerEdit_details_SceneEdit_removed_performers_performer_urls_site;
}

export interface PerformerEdit_performerEdit_details_SceneEdit_removed_performers_performer_images {
  __typename: "Image";
  id: string;
  url: string;
  width: number;
  height: number;
}

export interface PerformerEdit_performerEdit_details_SceneEdit_removed_performers_performer {
  __typename: "Performer";
  id: string;
  name: string;
  disambiguation: string | null;
  deleted: boolean;
  aliases: string[];
  gender: GenderEnum | null;
  birth_date: string | null;
  age: number | null;
  /**
   * Height in cm
   */
  height: number | null;
  hair_color: HairColorEnum | null;
  eye_color: EyeColorEnum | null;
  ethnicity: EthnicityEnum | null;
  country: string | null;
  career_end_year: number | null;
  career_start_year: number | null;
  breast_type: BreastTypeEnum | null;
  waist_size: number | null;
  hip_size: number | null;
  band_size: number | null;
  cup_size: string | null;
  tattoos: PerformerEdit_performerEdit_details_SceneEdit_removed_performers_performer_tattoos[] | null;
  piercings: PerformerEdit_performerEdit_details_SceneEdit_removed_performers_performer_piercings[] | null;
  urls: PerformerEdit_performerEdit_details_SceneEdit_removed_performers_performer_urls[];
  images: PerformerEdit_performerEdit_details_SceneEdit_removed_performers_performer_images[];
  is_favorite: boolean;
}

export interface PerformerEdit_performerEdit_details_SceneEdit_removed_performers {
  __typename: "PerformerAppearance";
  performer: PerformerEdit_performerEdit_details_SceneEdit_removed_performers_performer;
  /**
   * Performing as alias
   */
  as: string | null;
}

export interface PerformerEdit_performerEdit_details_SceneEdit_added_tags_category {
  __typename: "TagCategory";
  id: string;
  name: string;
}

export interface PerformerEdit_performerEdit_details_SceneEdit_added_tags {
  __typename: "Tag";
  id: string;
  name: string;
  description: string | null;
  deleted: boolean;
  category: PerformerEdit_performerEdit_details_SceneEdit_added_tags_category | null;
  aliases: string[];
}

export interface PerformerEdit_performerEdit_details_SceneEdit_removed_tags_category {
  __typename: "TagCategory";
  id: string;
  name: string;
}

export interface PerformerEdit_performerEdit_details_SceneEdit_removed_tags {
  __typename: "Tag";
  id: string;
  name: string;
  description: string | null;
  deleted: boolean;
  category: PerformerEdit_performerEdit_details_SceneEdit_removed_tags_category | null;
  aliases: string[];
}

export interface PerformerEdit_performerEdit_details_SceneEdit_added_images {
  __typename: "Image";
  id: string;
  url: string;
  width: number;
  height: number;
}

export interface PerformerEdit_performerEdit_details_SceneEdit_removed_images {
  __typename: "Image";
  id: string;
  url: string;
  width: number;
  height: number;
}

export interface PerformerEdit_performerEdit_details_SceneEdit_added_fingerprints {
  __typename: "Fingerprint";
  hash: string;
  algorithm: FingerprintAlgorithm;
  duration: number;
}

export interface PerformerEdit_performerEdit_details_SceneEdit_removed_fingerprints {
  __typename: "Fingerprint";
  hash: string;
  algorithm: FingerprintAlgorithm;
  duration: number;
}

export interface PerformerEdit_performerEdit_details_SceneEdit {
  __typename: "SceneEdit";
  title: string | null;
  details: string | null;
  added_urls: PerformerEdit_performerEdit_details_SceneEdit_added_urls[] | null;
  removed_urls: PerformerEdit_performerEdit_details_SceneEdit_removed_urls[] | null;
  date: string | null;
  studio: PerformerEdit_performerEdit_details_SceneEdit_studio | null;
  /**
   * Added or modified performer appearance entries
   */
  added_performers: PerformerEdit_performerEdit_details_SceneEdit_added_performers[] | null;
  removed_performers: PerformerEdit_performerEdit_details_SceneEdit_removed_performers[] | null;
  added_tags: PerformerEdit_performerEdit_details_SceneEdit_added_tags[] | null;
  removed_tags: PerformerEdit_performerEdit_details_SceneEdit_removed_tags[] | null;
  added_images: (PerformerEdit_performerEdit_details_SceneEdit_added_images | null)[] | null;
  removed_images: (PerformerEdit_performerEdit_details_SceneEdit_removed_images | null)[] | null;
  added_fingerprints: PerformerEdit_performerEdit_details_SceneEdit_added_fingerprints[] | null;
  removed_fingerprints: PerformerEdit_performerEdit_details_SceneEdit_removed_fingerprints[] | null;
  duration: number | null;
  director: string | null;
  code: string | null;
  draft_id: string | null;
}

export type PerformerEdit_performerEdit_details = PerformerEdit_performerEdit_details_TagEdit | PerformerEdit_performerEdit_details_PerformerEdit | PerformerEdit_performerEdit_details_StudioEdit | PerformerEdit_performerEdit_details_SceneEdit;

export interface PerformerEdit_performerEdit_old_details_TagEdit_category {
  __typename: "TagCategory";
  id: string;
  name: string;
}

export interface PerformerEdit_performerEdit_old_details_TagEdit {
  __typename: "TagEdit";
  name: string | null;
  description: string | null;
  category: PerformerEdit_performerEdit_old_details_TagEdit_category | null;
}

export interface PerformerEdit_performerEdit_old_details_PerformerEdit {
  __typename: "PerformerEdit";
  name: string | null;
  disambiguation: string | null;
  gender: GenderEnum | null;
  birthdate: string | null;
  ethnicity: EthnicityEnum | null;
  country: string | null;
  eye_color: EyeColorEnum | null;
  hair_color: HairColorEnum | null;
  /**
   * Height in cm
   */
  height: number | null;
  cup_size: string | null;
  band_size: number | null;
  waist_size: number | null;
  hip_size: number | null;
  breast_type: BreastTypeEnum | null;
  career_start_year: number | null;
  career_end_year: number | null;
}

export interface PerformerEdit_performerEdit_old_details_StudioEdit_parent_child_studios {
  __typename: "Studio";
  id: string;
  name: string;
}

export interface PerformerEdit_performerEdit_old_details_StudioEdit_parent_parent {
  __typename: "Studio";
  id: string;
  name: string;
}

export interface PerformerEdit_performerEdit_old_details_StudioEdit_parent_urls_site {
  __typename: "Site";
  id: string;
  name: string;
  icon: string;
}

export interface PerformerEdit_performerEdit_old_details_StudioEdit_parent_urls {
  __typename: "URL";
  url: string;
  site: PerformerEdit_performerEdit_old_details_StudioEdit_parent_urls_site;
}

export interface PerformerEdit_performerEdit_old_details_StudioEdit_parent_images {
  __typename: "Image";
  id: string;
  url: string;
  height: number;
  width: number;
}

export interface PerformerEdit_performerEdit_old_details_StudioEdit_parent {
  __typename: "Studio";
  id: string;
  name: string;
  child_studios: PerformerEdit_performerEdit_old_details_StudioEdit_parent_child_studios[];
  parent: PerformerEdit_performerEdit_old_details_StudioEdit_parent_parent | null;
  urls: PerformerEdit_performerEdit_old_details_StudioEdit_parent_urls[];
  images: PerformerEdit_performerEdit_old_details_StudioEdit_parent_images[];
  deleted: boolean;
  is_favorite: boolean;
}

export interface PerformerEdit_performerEdit_old_details_StudioEdit {
  __typename: "StudioEdit";
  name: string | null;
  parent: PerformerEdit_performerEdit_old_details_StudioEdit_parent | null;
}

export interface PerformerEdit_performerEdit_old_details_SceneEdit_added_urls_site {
  __typename: "Site";
  id: string;
  name: string;
  icon: string;
}

export interface PerformerEdit_performerEdit_old_details_SceneEdit_added_urls {
  __typename: "URL";
  url: string;
  site: PerformerEdit_performerEdit_old_details_SceneEdit_added_urls_site;
}

export interface PerformerEdit_performerEdit_old_details_SceneEdit_removed_urls_site {
  __typename: "Site";
  id: string;
  name: string;
  icon: string;
}

export interface PerformerEdit_performerEdit_old_details_SceneEdit_removed_urls {
  __typename: "URL";
  url: string;
  site: PerformerEdit_performerEdit_old_details_SceneEdit_removed_urls_site;
}

export interface PerformerEdit_performerEdit_old_details_SceneEdit_studio_child_studios {
  __typename: "Studio";
  id: string;
  name: string;
}

export interface PerformerEdit_performerEdit_old_details_SceneEdit_studio_parent {
  __typename: "Studio";
  id: string;
  name: string;
}

export interface PerformerEdit_performerEdit_old_details_SceneEdit_studio_urls_site {
  __typename: "Site";
  id: string;
  name: string;
  icon: string;
}

export interface PerformerEdit_performerEdit_old_details_SceneEdit_studio_urls {
  __typename: "URL";
  url: string;
  site: PerformerEdit_performerEdit_old_details_SceneEdit_studio_urls_site;
}

export interface PerformerEdit_performerEdit_old_details_SceneEdit_studio_images {
  __typename: "Image";
  id: string;
  url: string;
  height: number;
  width: number;
}

export interface PerformerEdit_performerEdit_old_details_SceneEdit_studio {
  __typename: "Studio";
  id: string;
  name: string;
  child_studios: PerformerEdit_performerEdit_old_details_SceneEdit_studio_child_studios[];
  parent: PerformerEdit_performerEdit_old_details_SceneEdit_studio_parent | null;
  urls: PerformerEdit_performerEdit_old_details_SceneEdit_studio_urls[];
  images: PerformerEdit_performerEdit_old_details_SceneEdit_studio_images[];
  deleted: boolean;
  is_favorite: boolean;
}

export interface PerformerEdit_performerEdit_old_details_SceneEdit_added_performers_performer_tattoos {
  __typename: "BodyModification";
  location: string;
  description: string | null;
}

export interface PerformerEdit_performerEdit_old_details_SceneEdit_added_performers_performer_piercings {
  __typename: "BodyModification";
  location: string;
  description: string | null;
}

export interface PerformerEdit_performerEdit_old_details_SceneEdit_added_performers_performer_urls_site {
  __typename: "Site";
  id: string;
  name: string;
  icon: string;
}

export interface PerformerEdit_performerEdit_old_details_SceneEdit_added_performers_performer_urls {
  __typename: "URL";
  url: string;
  site: PerformerEdit_performerEdit_old_details_SceneEdit_added_performers_performer_urls_site;
}

export interface PerformerEdit_performerEdit_old_details_SceneEdit_added_performers_performer_images {
  __typename: "Image";
  id: string;
  url: string;
  width: number;
  height: number;
}

export interface PerformerEdit_performerEdit_old_details_SceneEdit_added_performers_performer {
  __typename: "Performer";
  id: string;
  name: string;
  disambiguation: string | null;
  deleted: boolean;
  aliases: string[];
  gender: GenderEnum | null;
  birth_date: string | null;
  age: number | null;
  /**
   * Height in cm
   */
  height: number | null;
  hair_color: HairColorEnum | null;
  eye_color: EyeColorEnum | null;
  ethnicity: EthnicityEnum | null;
  country: string | null;
  career_end_year: number | null;
  career_start_year: number | null;
  breast_type: BreastTypeEnum | null;
  waist_size: number | null;
  hip_size: number | null;
  band_size: number | null;
  cup_size: string | null;
  tattoos: PerformerEdit_performerEdit_old_details_SceneEdit_added_performers_performer_tattoos[] | null;
  piercings: PerformerEdit_performerEdit_old_details_SceneEdit_added_performers_performer_piercings[] | null;
  urls: PerformerEdit_performerEdit_old_details_SceneEdit_added_performers_performer_urls[];
  images: PerformerEdit_performerEdit_old_details_SceneEdit_added_performers_performer_images[];
  is_favorite: boolean;
}

export interface PerformerEdit_performerEdit_old_details_SceneEdit_added_performers {
  __typename: "PerformerAppearance";
  performer: PerformerEdit_performerEdit_old_details_SceneEdit_added_performers_performer;
  /**
   * Performing as alias
   */
  as: string | null;
}

export interface PerformerEdit_performerEdit_old_details_SceneEdit_removed_performers_performer_tattoos {
  __typename: "BodyModification";
  location: string;
  description: string | null;
}

export interface PerformerEdit_performerEdit_old_details_SceneEdit_removed_performers_performer_piercings {
  __typename: "BodyModification";
  location: string;
  description: string | null;
}

export interface PerformerEdit_performerEdit_old_details_SceneEdit_removed_performers_performer_urls_site {
  __typename: "Site";
  id: string;
  name: string;
  icon: string;
}

export interface PerformerEdit_performerEdit_old_details_SceneEdit_removed_performers_performer_urls {
  __typename: "URL";
  url: string;
  site: PerformerEdit_performerEdit_old_details_SceneEdit_removed_performers_performer_urls_site;
}

export interface PerformerEdit_performerEdit_old_details_SceneEdit_removed_performers_performer_images {
  __typename: "Image";
  id: string;
  url: string;
  width: number;
  height: number;
}

export interface PerformerEdit_performerEdit_old_details_SceneEdit_removed_performers_performer {
  __typename: "Performer";
  id: string;
  name: string;
  disambiguation: string | null;
  deleted: boolean;
  aliases: string[];
  gender: GenderEnum | null;
  birth_date: string | null;
  age: number | null;
  /**
   * Height in cm
   */
  height: number | null;
  hair_color: HairColorEnum | null;
  eye_color: EyeColorEnum | null;
  ethnicity: EthnicityEnum | null;
  country: string | null;
  career_end_year: number | null;
  career_start_year: number | null;
  breast_type: BreastTypeEnum | null;
  waist_size: number | null;
  hip_size: number | null;
  band_size: number | null;
  cup_size: string | null;
  tattoos: PerformerEdit_performerEdit_old_details_SceneEdit_removed_performers_performer_tattoos[] | null;
  piercings: PerformerEdit_performerEdit_old_details_SceneEdit_removed_performers_performer_piercings[] | null;
  urls: PerformerEdit_performerEdit_old_details_SceneEdit_removed_performers_performer_urls[];
  images: PerformerEdit_performerEdit_old_details_SceneEdit_removed_performers_performer_images[];
  is_favorite: boolean;
}

export interface PerformerEdit_performerEdit_old_details_SceneEdit_removed_performers {
  __typename: "PerformerAppearance";
  performer: PerformerEdit_performerEdit_old_details_SceneEdit_removed_performers_performer;
  /**
   * Performing as alias
   */
  as: string | null;
}

export interface PerformerEdit_performerEdit_old_details_SceneEdit_added_tags_category {
  __typename: "TagCategory";
  id: string;
  name: string;
}

export interface PerformerEdit_performerEdit_old_details_SceneEdit_added_tags {
  __typename: "Tag";
  id: string;
  name: string;
  description: string | null;
  deleted: boolean;
  category: PerformerEdit_performerEdit_old_details_SceneEdit_added_tags_category | null;
  aliases: string[];
}

export interface PerformerEdit_performerEdit_old_details_SceneEdit_removed_tags_category {
  __typename: "TagCategory";
  id: string;
  name: string;
}

export interface PerformerEdit_performerEdit_old_details_SceneEdit_removed_tags {
  __typename: "Tag";
  id: string;
  name: string;
  description: string | null;
  deleted: boolean;
  category: PerformerEdit_performerEdit_old_details_SceneEdit_removed_tags_category | null;
  aliases: string[];
}

export interface PerformerEdit_performerEdit_old_details_SceneEdit_added_images {
  __typename: "Image";
  id: string;
  url: string;
  width: number;
  height: number;
}

export interface PerformerEdit_performerEdit_old_details_SceneEdit_removed_images {
  __typename: "Image";
  id: string;
  url: string;
  width: number;
  height: number;
}

export interface PerformerEdit_performerEdit_old_details_SceneEdit_added_fingerprints {
  __typename: "Fingerprint";
  hash: string;
  algorithm: FingerprintAlgorithm;
  duration: number;
}

export interface PerformerEdit_performerEdit_old_details_SceneEdit_removed_fingerprints {
  __typename: "Fingerprint";
  hash: string;
  algorithm: FingerprintAlgorithm;
  duration: number;
}

export interface PerformerEdit_performerEdit_old_details_SceneEdit {
  __typename: "SceneEdit";
  title: string | null;
  details: string | null;
  added_urls: PerformerEdit_performerEdit_old_details_SceneEdit_added_urls[] | null;
  removed_urls: PerformerEdit_performerEdit_old_details_SceneEdit_removed_urls[] | null;
  date: string | null;
  studio: PerformerEdit_performerEdit_old_details_SceneEdit_studio | null;
  /**
   * Added or modified performer appearance entries
   */
  added_performers: PerformerEdit_performerEdit_old_details_SceneEdit_added_performers[] | null;
  removed_performers: PerformerEdit_performerEdit_old_details_SceneEdit_removed_performers[] | null;
  added_tags: PerformerEdit_performerEdit_old_details_SceneEdit_added_tags[] | null;
  removed_tags: PerformerEdit_performerEdit_old_details_SceneEdit_removed_tags[] | null;
  added_images: (PerformerEdit_performerEdit_old_details_SceneEdit_added_images | null)[] | null;
  removed_images: (PerformerEdit_performerEdit_old_details_SceneEdit_removed_images | null)[] | null;
  added_fingerprints: PerformerEdit_performerEdit_old_details_SceneEdit_added_fingerprints[] | null;
  removed_fingerprints: PerformerEdit_performerEdit_old_details_SceneEdit_removed_fingerprints[] | null;
  duration: number | null;
  director: string | null;
  code: string | null;
}

export type PerformerEdit_performerEdit_old_details = PerformerEdit_performerEdit_old_details_TagEdit | PerformerEdit_performerEdit_old_details_PerformerEdit | PerformerEdit_performerEdit_old_details_StudioEdit | PerformerEdit_performerEdit_old_details_SceneEdit;

export interface PerformerEdit_performerEdit_merge_sources_Tag_category {
  __typename: "TagCategory";
  id: string;
  name: string;
}

export interface PerformerEdit_performerEdit_merge_sources_Tag {
  __typename: "Tag";
  id: string;
  name: string;
  description: string | null;
  deleted: boolean;
  category: PerformerEdit_performerEdit_merge_sources_Tag_category | null;
  aliases: string[];
}

export interface PerformerEdit_performerEdit_merge_sources_Performer_tattoos {
  __typename: "BodyModification";
  location: string;
  description: string | null;
}

export interface PerformerEdit_performerEdit_merge_sources_Performer_piercings {
  __typename: "BodyModification";
  location: string;
  description: string | null;
}

export interface PerformerEdit_performerEdit_merge_sources_Performer_urls_site {
  __typename: "Site";
  id: string;
  name: string;
  icon: string;
}

export interface PerformerEdit_performerEdit_merge_sources_Performer_urls {
  __typename: "URL";
  url: string;
  site: PerformerEdit_performerEdit_merge_sources_Performer_urls_site;
}

export interface PerformerEdit_performerEdit_merge_sources_Performer_images {
  __typename: "Image";
  id: string;
  url: string;
  width: number;
  height: number;
}

export interface PerformerEdit_performerEdit_merge_sources_Performer {
  __typename: "Performer";
  id: string;
  name: string;
  disambiguation: string | null;
  deleted: boolean;
  aliases: string[];
  gender: GenderEnum | null;
  birth_date: string | null;
  age: number | null;
  /**
   * Height in cm
   */
  height: number | null;
  hair_color: HairColorEnum | null;
  eye_color: EyeColorEnum | null;
  ethnicity: EthnicityEnum | null;
  country: string | null;
  career_end_year: number | null;
  career_start_year: number | null;
  breast_type: BreastTypeEnum | null;
  waist_size: number | null;
  hip_size: number | null;
  band_size: number | null;
  cup_size: string | null;
  tattoos: PerformerEdit_performerEdit_merge_sources_Performer_tattoos[] | null;
  piercings: PerformerEdit_performerEdit_merge_sources_Performer_piercings[] | null;
  urls: PerformerEdit_performerEdit_merge_sources_Performer_urls[];
  images: PerformerEdit_performerEdit_merge_sources_Performer_images[];
  is_favorite: boolean;
}

export interface PerformerEdit_performerEdit_merge_sources_Studio_child_studios {
  __typename: "Studio";
  id: string;
  name: string;
}

export interface PerformerEdit_performerEdit_merge_sources_Studio_parent {
  __typename: "Studio";
  id: string;
  name: string;
}

export interface PerformerEdit_performerEdit_merge_sources_Studio_urls_site {
  __typename: "Site";
  id: string;
  name: string;
  icon: string;
}

export interface PerformerEdit_performerEdit_merge_sources_Studio_urls {
  __typename: "URL";
  url: string;
  site: PerformerEdit_performerEdit_merge_sources_Studio_urls_site;
}

export interface PerformerEdit_performerEdit_merge_sources_Studio_images {
  __typename: "Image";
  id: string;
  url: string;
  height: number;
  width: number;
}

export interface PerformerEdit_performerEdit_merge_sources_Studio {
  __typename: "Studio";
  id: string;
  name: string;
  child_studios: PerformerEdit_performerEdit_merge_sources_Studio_child_studios[];
  parent: PerformerEdit_performerEdit_merge_sources_Studio_parent | null;
  urls: PerformerEdit_performerEdit_merge_sources_Studio_urls[];
  images: PerformerEdit_performerEdit_merge_sources_Studio_images[];
  deleted: boolean;
  is_favorite: boolean;
}

export interface PerformerEdit_performerEdit_merge_sources_Scene_urls_site {
  __typename: "Site";
  id: string;
  name: string;
  icon: string;
}

export interface PerformerEdit_performerEdit_merge_sources_Scene_urls {
  __typename: "URL";
  url: string;
  site: PerformerEdit_performerEdit_merge_sources_Scene_urls_site;
}

export interface PerformerEdit_performerEdit_merge_sources_Scene_images {
  __typename: "Image";
  id: string;
  url: string;
  width: number;
  height: number;
}

export interface PerformerEdit_performerEdit_merge_sources_Scene_studio {
  __typename: "Studio";
  id: string;
  name: string;
}

export interface PerformerEdit_performerEdit_merge_sources_Scene_performers_performer {
  __typename: "Performer";
  id: string;
  name: string;
  disambiguation: string | null;
  deleted: boolean;
  gender: GenderEnum | null;
  aliases: string[];
}

export interface PerformerEdit_performerEdit_merge_sources_Scene_performers {
  __typename: "PerformerAppearance";
  /**
   * Performing as alias
   */
  as: string | null;
  performer: PerformerEdit_performerEdit_merge_sources_Scene_performers_performer;
}

export interface PerformerEdit_performerEdit_merge_sources_Scene_fingerprints {
  __typename: "Fingerprint";
  hash: string;
  algorithm: FingerprintAlgorithm;
  duration: number;
  submissions: number;
  user_submitted: boolean;
  created: GQLTime;
  updated: GQLTime;
}

export interface PerformerEdit_performerEdit_merge_sources_Scene_tags {
  __typename: "Tag";
  id: string;
  name: string;
  description: string | null;
  aliases: string[];
}

export interface PerformerEdit_performerEdit_merge_sources_Scene {
  __typename: "Scene";
  id: string;
  release_date: string | null;
  title: string | null;
  deleted: boolean;
  details: string | null;
  director: string | null;
  code: string | null;
  duration: number | null;
  urls: PerformerEdit_performerEdit_merge_sources_Scene_urls[];
  images: PerformerEdit_performerEdit_merge_sources_Scene_images[];
  studio: PerformerEdit_performerEdit_merge_sources_Scene_studio | null;
  performers: PerformerEdit_performerEdit_merge_sources_Scene_performers[];
  fingerprints: PerformerEdit_performerEdit_merge_sources_Scene_fingerprints[];
  tags: PerformerEdit_performerEdit_merge_sources_Scene_tags[];
}

export type PerformerEdit_performerEdit_merge_sources = PerformerEdit_performerEdit_merge_sources_Tag | PerformerEdit_performerEdit_merge_sources_Performer | PerformerEdit_performerEdit_merge_sources_Studio | PerformerEdit_performerEdit_merge_sources_Scene;

export interface PerformerEdit_performerEdit_options {
  __typename: "PerformerEditOptions";
  /**
   * Set performer alias on scenes without alias to old name if name is changed
   */
  set_modify_aliases: boolean;
  /**
   * Set performer alias on scenes attached to merge sources to old name
   */
  set_merge_aliases: boolean;
}

export interface PerformerEdit_performerEdit {
  __typename: "Edit";
  id: string;
  target_type: TargetTypeEnum;
  operation: OperationEnum;
  status: VoteStatusEnum;
  applied: boolean;
  created: GQLTime;
  updated: GQLTime | null;
  closed: GQLTime | null;
  /**
   *  = Accepted - Rejected
   */
  vote_count: number;
  /**
   * Is the edit considered destructive.
   */
  destructive: boolean;
  comments: PerformerEdit_performerEdit_comments[];
  votes: PerformerEdit_performerEdit_votes[];
  user: PerformerEdit_performerEdit_user | null;
  /**
   * Object being edited - null if creating a new object
   */
  target: PerformerEdit_performerEdit_target | null;
  details: PerformerEdit_performerEdit_details | null;
  /**
   * Previous state of fields being modified - null if operation is create or delete.
   */
  old_details: PerformerEdit_performerEdit_old_details | null;
  /**
   * Objects to merge with the target. Only applicable to merges
   */
  merge_sources: PerformerEdit_performerEdit_merge_sources[];
  /**
   * Entity specific options
   */
  options: PerformerEdit_performerEdit_options | null;
}

export interface PerformerEdit {
  /**
   * Propose a new performer or modification to a performer
   */
  performerEdit: PerformerEdit_performerEdit;
}

export interface PerformerEditVariables {
  performerData: PerformerEditInput;
}