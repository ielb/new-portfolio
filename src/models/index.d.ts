import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type MessageMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type StackMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProjectMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SocialItemMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Message {
  readonly id: string;
  readonly name?: string;
  readonly email?: string;
  readonly message?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Message, MessageMetaData>);
  static copyOf(source: Message, mutator: (draft: MutableModel<Message, MessageMetaData>) => MutableModel<Message, MessageMetaData> | void): Message;
}

export declare class Stack {
  readonly id: string;
  readonly title?: string;
  readonly image?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Stack, StackMetaData>);
  static copyOf(source: Stack, mutator: (draft: MutableModel<Stack, StackMetaData>) => MutableModel<Stack, StackMetaData> | void): Stack;
}

export declare class Project {
  readonly id: string;
  readonly titlle?: string;
  readonly thumbnail?: string;
  readonly description?: string;
  readonly url?: string;
  readonly gitUrl?: string;
  readonly images?: (string | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Project, ProjectMetaData>);
  static copyOf(source: Project, mutator: (draft: MutableModel<Project, ProjectMetaData>) => MutableModel<Project, ProjectMetaData> | void): Project;
}

export declare class SocialItem {
  readonly id: string;
  readonly title?: string;
  readonly url?: string;
  readonly image?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<SocialItem, SocialItemMetaData>);
  static copyOf(source: SocialItem, mutator: (draft: MutableModel<SocialItem, SocialItemMetaData>) => MutableModel<SocialItem, SocialItemMetaData> | void): SocialItem;
}