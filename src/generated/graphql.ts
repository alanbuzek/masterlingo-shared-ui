export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  Upload: any;
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type Content = {
  __typename?: 'Content';
  addedFlashcards?: Maybe<Scalars['Int']>;
  author?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  dueFlashcards?: Maybe<Scalars['Int']>;
  firstReadTime?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  imageUrl?: Maybe<Scalars['String']>;
  language: Scalars['ID'];
  lastReadTime?: Maybe<Scalars['Date']>;
  publishedAt?: Maybe<Scalars['Date']>;
  title: Scalars['String'];
  url: Scalars['String'];
};

export type ContentFilterInput = {
  format?: InputMaybe<ContentFormat>;
  search?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<ContentType>;
};

export enum ContentFormat {
  Epub = 'EPUB',
  Pdf = 'PDF',
  PlainText = 'PLAIN_TEXT',
  Website = 'WEBSITE',
  WebArticle = 'WEB_ARTICLE',
  YtVideo = 'YT_VIDEO'
}

export type ContentMeta = {
  __typename?: 'ContentMeta';
  languageId: Scalars['ID'];
  totalCount: Scalars['Int'];
};

export type ContentMetaInput = {
  languageId: Scalars['ID'];
};

export enum ContentType {
  DailyContent = 'DAILY_CONTENT',
  ManualUserImport = 'MANUAL_USER_IMPORT',
  ReadByUser = 'READ_BY_USER'
}

export type CountByState = {
  __typename?: 'CountByState';
  state: FlashcardState;
  total: Scalars['Int'];
};

export type CreateFlashcardInput = {
  context?: InputMaybe<Scalars['String']>;
  localDate: Scalars['Date'];
  notes?: InputMaybe<Scalars['String']>;
  original: Scalars['String'];
  originalLanguageId: Scalars['ID'];
  partOfSpeech?: InputMaybe<PartOfSpeech>;
  sourceUrl?: InputMaybe<Scalars['String']>;
  translations: Array<Scalars['String']>;
  transliteration?: InputMaybe<Scalars['String']>;
};

export type DailyLearningActivity = {
  __typename?: 'DailyLearningActivity';
  learningPoints: Scalars['Int'];
  localDate: Scalars['Date'];
  streakCompleted: Scalars['Boolean'];
};

export type DailyRepetitionTotal = {
  __typename?: 'DailyRepetitionTotal';
  date: Scalars['Date'];
  streakCompleted?: Maybe<Scalars['Boolean']>;
  total: Scalars['Int'];
};

export type ExtensionConfig = {
  __typename?: 'ExtensionConfig';
  altHighlight: Scalars['Boolean'];
  altTrigger: Scalars['Boolean'];
  buttonTrigger: Scalars['Boolean'];
  extensionOn: Scalars['Boolean'];
  highlightOnPage: Scalars['Boolean'];
  id: Scalars['ID'];
  sawAddFlashcardTuto?: Maybe<Scalars['Boolean']>;
  ttsExisting: Scalars['Boolean'];
  ttsNew: Scalars['Boolean'];
  user: Scalars['ID'];
};

export type ExtensionConfigInput = {
  altHighlight: Scalars['Boolean'];
  altTrigger: Scalars['Boolean'];
  buttonTrigger: Scalars['Boolean'];
  extensionOn: Scalars['Boolean'];
  highlightOnPage: Scalars['Boolean'];
  sawAddFlashcardTuto?: InputMaybe<Scalars['Boolean']>;
  ttsExisting: Scalars['Boolean'];
  ttsNew: Scalars['Boolean'];
};

export type File = {
  __typename?: 'File';
  encoding: Scalars['String'];
  filename: Scalars['String'];
  mimetype: Scalars['String'];
};

export type Flashcard = {
  __typename?: 'Flashcard';
  addedInContent?: Maybe<Scalars['ID']>;
  beforeRelearningInterval?: Maybe<Scalars['Int']>;
  context?: Maybe<Scalars['String']>;
  createdAt: Scalars['String'];
  currentInterval: Scalars['Int'];
  dueDate?: Maybe<Scalars['Date']>;
  ease: Scalars['Float'];
  id: Scalars['ID'];
  intervalModifier: Scalars['Float'];
  notes?: Maybe<Scalars['String']>;
  nounGender?: Maybe<NounGender>;
  original: Scalars['String'];
  originalLanguage: Scalars['ID'];
  partOfSpeech?: Maybe<PartOfSpeech>;
  sourceUrl?: Maybe<Scalars['String']>;
  state: FlashcardState;
  translationLanguage: Scalars['ID'];
  translations: Array<Scalars['String']>;
  transliteration?: Maybe<Scalars['String']>;
  user: User;
};

export type FlashcardFilterInput = {
  nounGender?: InputMaybe<NounGender>;
  partOfSpeech?: InputMaybe<PartOfSpeech>;
  search?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<FlashcardState>;
};

export type FlashcardRepetition = {
  __typename?: 'FlashcardRepetition';
  createdAt: Scalars['String'];
  flashcard: Scalars['ID'];
  id: Scalars['ID'];
  language: Scalars['ID'];
  localDate?: Maybe<Scalars['Date']>;
  nextInterval: Scalars['Int'];
  nextState: FlashcardState;
  response?: Maybe<RepetitionResponse>;
  user: Scalars['ID'];
};

export type FlashcardRepetitionPayload = {
  __typename?: 'FlashcardRepetitionPayload';
  createdAt: Scalars['String'];
  flashcard: Flashcard;
  id: Scalars['ID'];
  language: Scalars['ID'];
  localDate?: Maybe<Scalars['Date']>;
  nextInterval: Scalars['Int'];
  nextState: FlashcardState;
  response?: Maybe<RepetitionResponse>;
  user: Scalars['ID'];
};

export enum FlashcardState {
  Graduated = 'GRADUATED',
  Learning = 'LEARNING',
  Mastered = 'MASTERED',
  New = 'NEW',
  Relearning = 'RELEARNING'
}

export type FlashcardUpdateInput = {
  notes: Scalars['String'];
  original: Scalars['String'];
  partOfSpeech?: InputMaybe<PartOfSpeech>;
  translations: Array<Scalars['String']>;
};

export type FlashcardsMeta = {
  __typename?: 'FlashcardsMeta';
  byStateCount: Array<CountByState>;
  dueCount: Scalars['Int'];
  languageId: Scalars['ID'];
  totalCount: Scalars['Int'];
};

export type FlashcardsMetaInput = {
  languageId: Scalars['ID'];
};

export type FormSubmission = {
  formId: Scalars['String'];
  jsonValues: Scalars['String'];
};

export type FormSubmissionResult = {
  __typename?: 'FormSubmissionResult';
  success?: Maybe<Scalars['Boolean']>;
};

export type GetLearningActivitySummaryInput = {
  languageId: Scalars['ID'];
  localDate: LocalDateInput;
};

export type GetRepetitionInput = {
  fromDate?: InputMaybe<Scalars['Date']>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  toDate?: InputMaybe<Scalars['Date']>;
};

export type Language = {
  __typename?: 'Language';
  code: Scalars['String'];
  createdAt?: Maybe<Scalars['String']>;
  description: Scalars['String'];
  englishName: Scalars['String'];
  flag?: Maybe<File>;
  hasNounGenders: Scalars['Boolean'];
  id: Scalars['ID'];
  noWordBoundaries?: Maybe<Scalars['Boolean']>;
  originalName: Scalars['String'];
  ranking?: Maybe<Scalars['Int']>;
};

export type LanguageInput = {
  code: Scalars['String'];
  description: Scalars['String'];
  englishName: Scalars['String'];
  flag?: InputMaybe<Scalars['String']>;
  hasNounGenders: Scalars['Boolean'];
  originalName: Scalars['String'];
};

export enum LearnMode {
  Flashcard = 'Flashcard',
  FlashcardContext = 'FlashcardContext',
  FlashcardContextReversed = 'FlashcardContextReversed',
  FlashcardReversed = 'FlashcardReversed',
  MultiChoice = 'MultiChoice',
  MultiChoiceAudio = 'MultiChoiceAudio',
  MultiChoiceReversed = 'MultiChoiceReversed'
}

export type LearnPreferences = {
  __typename?: 'LearnPreferences';
  allowedModes?: Maybe<Array<Maybe<LearnMode>>>;
};

export type LearnPreferencesInput = {
  allowedModes?: InputMaybe<Array<InputMaybe<LearnMode>>>;
};

export type LearningActivitySummary = {
  __typename?: 'LearningActivitySummary';
  currentStreak?: Maybe<Streak>;
  dailyLearningActivity: DailyLearningActivity;
  totalLearningActivity: TotalLearningActivity;
};

export enum LearningGoal {
  Hardcore = 'HARDCORE',
  High = 'HIGH',
  Low = 'LOW',
  Medium = 'MEDIUM'
}

export type LocalDateInput = {
  day: Scalars['Int'];
  month: Scalars['Int'];
  year: Scalars['Int'];
};

export type LookupInput = {
  sourceLanguageCode: Scalars['String'];
  sourceLanguageId: Scalars['ID'];
  targetLanguageCode: Scalars['String'];
  termToLookup: Scalars['String'];
};

export type LookupResult = Flashcard | TranslationPayload;

export type Mutation = {
  __typename?: 'Mutation';
  _empty?: Maybe<Scalars['String']>;
  addPageConfig?: Maybe<PageConfig>;
  createFlashcard?: Maybe<Flashcard>;
  deleteFlashcard?: Maybe<Flashcard>;
  deletePageConfig?: Maybe<PageConfig>;
  deleteUser?: Maybe<User>;
  reviewFlashcard?: Maybe<Flashcard>;
  submitForm?: Maybe<FormSubmissionResult>;
  translate?: Maybe<TranslationPayload>;
  updateExtensionConfig?: Maybe<ExtensionConfig>;
  updateFlashcard?: Maybe<Flashcard>;
  updatePageConfig?: Maybe<PageConfig>;
  updateUser?: Maybe<User>;
};


export type MutationAddPageConfigArgs = {
  input: PageConfigInput;
};


export type MutationCreateFlashcardArgs = {
  input: CreateFlashcardInput;
  isSourceReaderable?: InputMaybe<Scalars['Boolean']>;
};


export type MutationDeleteFlashcardArgs = {
  flashcardId: Scalars['ID'];
};


export type MutationDeletePageConfigArgs = {
  id: Scalars['ID'];
};


export type MutationReviewFlashcardArgs = {
  flashcardId: Scalars['ID'];
  input: ReviewFlashcardInput;
  isSourceReaderable?: InputMaybe<Scalars['Boolean']>;
  sourceUrl?: InputMaybe<Scalars['String']>;
};


export type MutationSubmitFormArgs = {
  input?: InputMaybe<FormSubmission>;
};


export type MutationTranslateArgs = {
  input: TranslationInput;
};


export type MutationUpdateExtensionConfigArgs = {
  input: ExtensionConfigInput;
};


export type MutationUpdateFlashcardArgs = {
  flashcardId: Scalars['ID'];
  input: FlashcardUpdateInput;
};


export type MutationUpdatePageConfigArgs = {
  id: Scalars['ID'];
  input: PageConfigInput;
};


export type MutationUpdateUserArgs = {
  input: UserUpdateInput;
};

export enum NounGender {
  Feminin = 'FEMININ',
  Masculine = 'MASCULINE',
  Neutral = 'NEUTRAL'
}

export type PageConfig = {
  __typename?: 'PageConfig';
  disabled: Scalars['Boolean'];
  id: Scalars['ID'];
  key: Scalars['String'];
  overrideLanguage?: Maybe<Scalars['ID']>;
};

export type PageConfigInput = {
  disabled: Scalars['Boolean'];
  key: Scalars['String'];
  overrideLanguage?: InputMaybe<Scalars['ID']>;
};

export enum PartOfSpeech {
  Adjective = 'ADJECTIVE',
  Adverb = 'ADVERB',
  Article = 'ARTICLE',
  Conjunction = 'CONJUNCTION',
  Interjection = 'INTERJECTION',
  Noun = 'NOUN',
  Preposition = 'PREPOSITION',
  Pronoun = 'PRONOUN',
  Verb = 'VERB'
}

export type PronounciationInput = {
  languageCode: Scalars['String'];
  textToPronounce: Scalars['String'];
};

export type PronounciationPayload = {
  __typename?: 'PronounciationPayload';
  encodedSpeech: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  _empty?: Maybe<Scalars['String']>;
  getAllLanguages: Array<Language>;
  getAuthUser?: Maybe<User>;
  getContent: Array<Content>;
  getContentMeta: ContentMeta;
  getDailyContent: Array<Content>;
  getDetailedRepetitions: Array<FlashcardRepetitionPayload>;
  getDueFlashcards?: Maybe<Array<Maybe<Flashcard>>>;
  getFlashcard?: Maybe<Flashcard>;
  getFlashcards?: Maybe<Array<Maybe<Flashcard>>>;
  getFlashcardsMeta: FlashcardsMeta;
  getLastReadContent: Array<Content>;
  getLearningActivitySummary?: Maybe<LearningActivitySummary>;
  getPagesConfig: Array<PageConfig>;
  getRepetitionTotals: Array<DailyRepetitionTotal>;
  lookup?: Maybe<LookupResult>;
  pronounce?: Maybe<PronounciationPayload>;
};


export type QueryGetContentArgs = {
  filter?: InputMaybe<ContentFilterInput>;
  languageId: Scalars['ID'];
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type QueryGetContentMetaArgs = {
  filter: ContentFilterInput;
  input: ContentMetaInput;
};


export type QueryGetDailyContentArgs = {
  languageId: Scalars['ID'];
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type QueryGetDetailedRepetitionsArgs = {
  languageId: Scalars['ID'];
};


export type QueryGetDueFlashcardsArgs = {
  languageId: Scalars['ID'];
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type QueryGetFlashcardArgs = {
  id: Scalars['ID'];
};


export type QueryGetFlashcardsArgs = {
  filter: FlashcardFilterInput;
  languageId: Scalars['ID'];
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type QueryGetFlashcardsMetaArgs = {
  filter: FlashcardFilterInput;
  input: FlashcardsMetaInput;
};


export type QueryGetLastReadContentArgs = {
  languageId: Scalars['ID'];
};


export type QueryGetLearningActivitySummaryArgs = {
  input: GetLearningActivitySummaryInput;
};


export type QueryGetPagesConfigArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type QueryGetRepetitionTotalsArgs = {
  languageId: Scalars['ID'];
};


export type QueryLookupArgs = {
  input?: InputMaybe<LookupInput>;
};


export type QueryPronounceArgs = {
  input?: InputMaybe<PronounciationInput>;
};

export enum RepetitionResponse {
  Again = 'AGAIN',
  Easy = 'EASY',
  Good = 'GOOD',
  Mastered = 'MASTERED'
}

export type ReviewFlashcardInput = {
  localDate: Scalars['Date'];
  nextEase?: InputMaybe<Scalars['Float']>;
  nextInterval: Scalars['Int'];
  nextState: FlashcardState;
  reviewResponse: RepetitionResponse;
};

export type Streak = {
  __typename?: 'Streak';
  lastActiveDate: Scalars['Date'];
  length: Scalars['Int'];
  startDate: Scalars['Date'];
};

export type Subscription = {
  __typename?: 'Subscription';
  _empty?: Maybe<Scalars['String']>;
};

export type SuccessMessage = {
  __typename?: 'SuccessMessage';
  message: Scalars['String'];
};

export type Token = {
  __typename?: 'Token';
  token: Scalars['String'];
};

export type TotalLearningActivity = {
  __typename?: 'TotalLearningActivity';
  learningPoints: Scalars['Int'];
  level: Scalars['Int'];
};

export type TranslationInput = {
  sourceLanguageCode: Scalars['String'];
  targetLanguageCode: Scalars['String'];
  termToTranslate: Scalars['String'];
};

export type TranslationPayload = {
  __typename?: 'TranslationPayload';
  nounGender?: Maybe<NounGender>;
  pos: Array<PartOfSpeech>;
  termToTranslate: Scalars['String'];
  translations: Array<Scalars['String']>;
  transliteration?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  createdAt?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  extensionConfig: ExtensionConfig;
  extensionInstalled?: Maybe<Scalars['Boolean']>;
  filledFeedbackSurvey?: Maybe<Scalars['Boolean']>;
  firstName: Scalars['String'];
  id: Scalars['ID'];
  lastName?: Maybe<Scalars['String']>;
  learningLanguages: Array<Language>;
  masteredFlashcard?: Maybe<Scalars['Boolean']>;
  nativeLanguage?: Maybe<Language>;
  photoPublicId?: Maybe<Scalars['String']>;
  preferences?: Maybe<UserPreferences>;
  profileImageUrl?: Maybe<Scalars['String']>;
  resetToken?: Maybe<Scalars['String']>;
  resetTokenExpiry?: Maybe<Scalars['String']>;
  selectedLanguage?: Maybe<Language>;
  userPhoto?: Maybe<File>;
};

export type UserPreferences = {
  __typename?: 'UserPreferences';
  learn?: Maybe<LearnPreferences>;
  learningGoal: LearningGoal;
};

export type UserPreferencesInput = {
  learn?: InputMaybe<LearnPreferencesInput>;
};

export type UserUpdateInput = {
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  learningLanguages?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  masteredFlashcard?: InputMaybe<Scalars['Boolean']>;
  nativeLanguage?: InputMaybe<Scalars['ID']>;
  preferences?: InputMaybe<UserPreferencesInput>;
  selectedLanguage?: InputMaybe<Scalars['ID']>;
};

export type SrsFlashcardFragmentFragment = { __typename?: 'Flashcard', id: string, state: FlashcardState, ease: number, currentInterval: number, intervalModifier: number, dueDate?: any | null, beforeRelearningInterval?: number | null };

export type CreateFlashcardMutationVariables = Exact<{
  input: CreateFlashcardInput;
}>;


export type CreateFlashcardMutation = { __typename?: 'Mutation', createFlashcard?: { __typename?: 'Flashcard', id: string, original: string, originalLanguage: string, translations: Array<string>, notes?: string | null, partOfSpeech?: PartOfSpeech | null, nounGender?: NounGender | null, state: FlashcardState, ease: number, currentInterval: number, intervalModifier: number, dueDate?: any | null, beforeRelearningInterval?: number | null, sourceUrl?: string | null, context?: string | null, transliteration?: string | null } | null };

export type ReviewFlashcardMutationVariables = Exact<{
  input: ReviewFlashcardInput;
  flashcardId: Scalars['ID'];
}>;


export type ReviewFlashcardMutation = { __typename?: 'Mutation', reviewFlashcard?: { __typename?: 'Flashcard', id: string } | null };

export type UpdateFlashcardMutationVariables = Exact<{
  input: FlashcardUpdateInput;
  flashcardId: Scalars['ID'];
}>;


export type UpdateFlashcardMutation = { __typename?: 'Mutation', updateFlashcard?: { __typename?: 'Flashcard', id: string, original: string, originalLanguage: string, translations: Array<string>, notes?: string | null, partOfSpeech?: PartOfSpeech | null, nounGender?: NounGender | null } | null };

export type DeleteFlashcardMutationVariables = Exact<{
  flashcardId: Scalars['ID'];
}>;


export type DeleteFlashcardMutation = { __typename?: 'Mutation', deleteFlashcard?: { __typename?: 'Flashcard', id: string } | null };

export type SubmitFormMutationVariables = Exact<{
  input: FormSubmission;
}>;


export type SubmitFormMutation = { __typename?: 'Mutation', submitForm?: { __typename?: 'FormSubmissionResult', success?: boolean | null } | null };

export type UpdateUserMutationVariables = Exact<{
  input: UserUpdateInput;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser?: { __typename?: 'User', id: string, firstName: string, lastName?: string | null, extensionInstalled?: boolean | null, nativeLanguage?: { __typename?: 'Language', id: string, code: string, englishName: string, originalName: string } | null, selectedLanguage?: { __typename?: 'Language', id: string, code: string, englishName: string, originalName: string } | null, learningLanguages: Array<{ __typename?: 'Language', id: string, englishName: string, code: string, originalName: string }>, preferences?: { __typename?: 'UserPreferences', learningGoal: LearningGoal, learn?: { __typename?: 'LearnPreferences', allowedModes?: Array<LearnMode | null> | null } | null } | null } | null };

export type DeleteUserMutationVariables = Exact<{ [key: string]: never; }>;


export type DeleteUserMutation = { __typename?: 'Mutation', deleteUser?: { __typename?: 'User', id: string } | null };

export type ContentFragmentFragment = { __typename?: 'Content', id: string, firstReadTime?: any | null, lastReadTime?: any | null, dueFlashcards?: number | null, addedFlashcards?: number | null, language: string, imageUrl?: string | null, title: string, description?: string | null, publishedAt?: any | null, author?: string | null, url: string };

export type GetLastReadContentQueryVariables = Exact<{
  languageId: Scalars['ID'];
}>;


export type GetLastReadContentQuery = { __typename?: 'Query', getLastReadContent: Array<{ __typename?: 'Content', id: string, firstReadTime?: any | null, lastReadTime?: any | null, dueFlashcards?: number | null, addedFlashcards?: number | null, language: string, imageUrl?: string | null, title: string, description?: string | null, publishedAt?: any | null, author?: string | null, url: string }> };

export type GetDailyContentQueryVariables = Exact<{
  languageId: Scalars['ID'];
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type GetDailyContentQuery = { __typename?: 'Query', getDailyContent: Array<{ __typename?: 'Content', id: string, firstReadTime?: any | null, lastReadTime?: any | null, dueFlashcards?: number | null, addedFlashcards?: number | null, language: string, imageUrl?: string | null, title: string, description?: string | null, publishedAt?: any | null, author?: string | null, url: string }> };

export type GetContentQueryVariables = Exact<{
  languageId: Scalars['ID'];
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  filter: ContentFilterInput;
}>;


export type GetContentQuery = { __typename?: 'Query', getContent: Array<{ __typename?: 'Content', id: string, firstReadTime?: any | null, lastReadTime?: any | null, dueFlashcards?: number | null, addedFlashcards?: number | null, language: string, imageUrl?: string | null, title: string, description?: string | null, publishedAt?: any | null, author?: string | null, url: string }> };

export type GetContentMetaQueryVariables = Exact<{
  input: ContentMetaInput;
  filter: ContentFilterInput;
}>;


export type GetContentMetaQuery = { __typename?: 'Query', getContentMeta: { __typename?: 'ContentMeta', totalCount: number } };

export type FlashcardFragmentFragment = { __typename?: 'Flashcard', id: string, original: string, originalLanguage: string, translations: Array<string>, notes?: string | null, partOfSpeech?: PartOfSpeech | null, nounGender?: NounGender | null, state: FlashcardState, ease: number, currentInterval: number, intervalModifier: number, dueDate?: any | null, beforeRelearningInterval?: number | null, sourceUrl?: string | null, context?: string | null, transliteration?: string | null };

export type GetFlashcardsQueryVariables = Exact<{
  languageId: Scalars['ID'];
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  filter: FlashcardFilterInput;
}>;


export type GetFlashcardsQuery = { __typename?: 'Query', getFlashcards?: Array<{ __typename?: 'Flashcard', id: string, original: string, originalLanguage: string, translations: Array<string>, notes?: string | null, partOfSpeech?: PartOfSpeech | null, nounGender?: NounGender | null, state: FlashcardState, ease: number, currentInterval: number, intervalModifier: number, dueDate?: any | null, beforeRelearningInterval?: number | null, sourceUrl?: string | null, context?: string | null, transliteration?: string | null } | null> | null };

export type GetFlashcardQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetFlashcardQuery = { __typename?: 'Query', getFlashcard?: { __typename?: 'Flashcard', id: string, original: string, originalLanguage: string, translations: Array<string>, notes?: string | null, partOfSpeech?: PartOfSpeech | null, nounGender?: NounGender | null, state: FlashcardState, ease: number, currentInterval: number, intervalModifier: number, dueDate?: any | null, beforeRelearningInterval?: number | null, sourceUrl?: string | null, context?: string | null, transliteration?: string | null } | null };

export type GetFlashcardsMetaQueryVariables = Exact<{
  input: FlashcardsMetaInput;
  filter: FlashcardFilterInput;
}>;


export type GetFlashcardsMetaQuery = { __typename?: 'Query', getFlashcardsMeta: { __typename?: 'FlashcardsMeta', totalCount: number, dueCount: number } };

export type GetFlashcardsMetaStatsQueryVariables = Exact<{
  input: FlashcardsMetaInput;
  filter: FlashcardFilterInput;
}>;


export type GetFlashcardsMetaStatsQuery = { __typename?: 'Query', getFlashcardsMeta: { __typename?: 'FlashcardsMeta', totalCount: number, dueCount: number, byStateCount: Array<{ __typename?: 'CountByState', total: number, state: FlashcardState }> } };

export type GetDueFlashcardsQueryVariables = Exact<{
  languageId: Scalars['ID'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
}>;


export type GetDueFlashcardsQuery = { __typename?: 'Query', getDueFlashcards?: Array<{ __typename?: 'Flashcard', id: string, original: string, originalLanguage: string, translations: Array<string>, notes?: string | null, partOfSpeech?: PartOfSpeech | null, nounGender?: NounGender | null, state: FlashcardState, ease: number, currentInterval: number, intervalModifier: number, dueDate?: any | null, beforeRelearningInterval?: number | null, sourceUrl?: string | null, context?: string | null, transliteration?: string | null } | null> | null };

export type GetAllLanguagesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllLanguagesQuery = { __typename?: 'Query', getAllLanguages: Array<{ __typename?: 'Language', code: string, description: string, id: string, englishName: string, originalName: string, ranking?: number | null }> };

export type GetDetailedRepetitionsQueryVariables = Exact<{
  languageId: Scalars['ID'];
}>;


export type GetDetailedRepetitionsQuery = { __typename?: 'Query', getDetailedRepetitions: Array<{ __typename?: 'FlashcardRepetitionPayload', id: string, nextState: FlashcardState, nextInterval: number, localDate?: any | null, response?: RepetitionResponse | null, createdAt: string, flashcard: { __typename?: 'Flashcard', id: string, original: string } }> };

export type GetLearningActivitySummaryQueryVariables = Exact<{
  input: GetLearningActivitySummaryInput;
}>;


export type GetLearningActivitySummaryQuery = { __typename?: 'Query', getLearningActivitySummary?: { __typename?: 'LearningActivitySummary', dailyLearningActivity: { __typename?: 'DailyLearningActivity', learningPoints: number, localDate: any, streakCompleted: boolean }, totalLearningActivity: { __typename?: 'TotalLearningActivity', learningPoints: number, level: number }, currentStreak?: { __typename?: 'Streak', startDate: any, lastActiveDate: any, length: number } | null } | null };

export type GetRepetitionTotalsQueryVariables = Exact<{
  languageId: Scalars['ID'];
}>;


export type GetRepetitionTotalsQuery = { __typename?: 'Query', getRepetitionTotals: Array<{ __typename?: 'DailyRepetitionTotal', total: number, date: any, streakCompleted?: boolean | null }> };

export type TranslateMutationVariables = Exact<{
  input: TranslationInput;
}>;


export type TranslateMutation = { __typename?: 'Mutation', translate?: { __typename?: 'TranslationPayload', translations: Array<string>, nounGender?: NounGender | null, transliteration?: string | null } | null };

export type PronounceQueryVariables = Exact<{
  input: PronounciationInput;
}>;


export type PronounceQuery = { __typename?: 'Query', pronounce?: { __typename?: 'PronounciationPayload', encodedSpeech: string } | null };

export type AuthUserQueryVariables = Exact<{ [key: string]: never; }>;


export type AuthUserQuery = { __typename?: 'Query', getAuthUser?: { __typename?: 'User', id: string, email: string, firstName: string, lastName?: string | null, extensionInstalled?: boolean | null, profileImageUrl?: string | null, filledFeedbackSurvey?: boolean | null, masteredFlashcard?: boolean | null, nativeLanguage?: { __typename?: 'Language', id: string, code: string, englishName: string, originalName: string } | null, selectedLanguage?: { __typename?: 'Language', id: string, code: string, englishName: string, originalName: string } | null, learningLanguages: Array<{ __typename?: 'Language', id: string, englishName: string, code: string, originalName: string }>, preferences?: { __typename?: 'UserPreferences', learningGoal: LearningGoal, learn?: { __typename?: 'LearnPreferences', allowedModes?: Array<LearnMode | null> | null } | null } | null } | null };
