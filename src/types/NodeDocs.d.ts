// Autogenerated file

export interface NodeDocs {
	miscs: NodeDocsMisc[];
	modules: NodeDocsModule[];
	classes: PurpleClass[];
	globals: NodeDocsGlobal[];
	methods: NodeDocsMethod[];
}

export interface PurpleClass {
	textRaw: string;
	type: TypeEnum;
	name: string;
	desc?: string;
	methods?: PurpleMethod[];
	properties?: ModuleElement[];
	signatures?: StickySignature[];
	source?: string;
	modules?: PurpleModule[];
	displayName?: string;
	meta?: PurpleMeta;
	[key: string]: any;
}

export interface PurpleMeta {
	added?: string[];
	changes: PurpleChange[];
}

export interface PurpleChange {
	version: string[] | string;
	'pr-url': string;
	description: string;
}

export interface PurpleMethod {
	textRaw: string;
	type: MethodType;
	name: string;
	signatures: PurpleSignature[];
	desc: string;
}

export interface PurpleSignature {
	params: PurpleParam[];
}

export interface PurpleParam {
	textRaw: string;
	name: string;
	type: ParamType;
}

export enum ParamType {
	Function = 'Function',
	Number = 'number',
	Object = 'Object',
	String = 'string',
	StringBufferUint8Array = 'string|Buffer|Uint8Array',
	StringString = 'string|string[]',
}

export enum MethodType {
	Method = 'method',
}

export interface PurpleModule {
	textRaw: string;
	name: string;
	desc: string;
	type: TypeEnum;
	displayName: string;
}

export enum TypeEnum {
	Class = 'class',
	Misc = 'misc',
	Module = 'module',
}

export interface FluffyReturn {
	textRaw: string;
	name: Name;
	type: string;
	desc?: string;
	options?: EventElement[];
}

export interface IndigoParam {
	textRaw: string;
	name: string;
	type: string;
	desc?: string;
	options?: EventElement[];
	default?: string;
}

export interface EventSignature {
	params: IndigoParam[];
	return?: EventElement;
}

export interface MethodElement {
	textRaw: string;
	name?: string;
	type?: string;
	desc?: string;
	default?: string;
	options?: MethodElement[];
	signatures?: EventSignature[];
	meta?: PurpleMeta;
	params?: ModuleElement[];
	properties?: ModuleElement[];
}

export interface StickyParam {
	textRaw: string;
	name: string;
	type: string;
	desc?: string;
	options?: MethodElement[];
}

export interface FluffySignature {
	return?: FluffyReturn;
	params: StickyParam[];
}

export interface TentacledParam {
	textRaw: string;
	name: string;
	type: string;
	desc?: string;
	options?: ModuleElement[];
}

export interface EventElement {
	textRaw: string;
	type?: string;
	name: string;
	meta?: PurpleMeta;
	signatures?: FluffySignature[];
	desc?: string;
	params?: TentacledParam[];
	modules?: PurpleModule[];
	stability?: number;
	stabilityText?: string;
	shortDesc?: string;
	options?: EventElement[];
	default?: string;
	displayName?: string;
	methods?: PropertyElement[];
}

export interface ModuleElement {
	textRaw: string;
	type?: string;
	name?: string;
	signatures?: TentacledSignature[];
	desc?: string;
	displayName?: string;
	meta?: FluffyMeta;
	events?: EventElement[];
	options?: ModuleElement[];
	default?: string;
	params?: ModuleElement[];
	miscs?: ModuleElement[];
}

export enum Name {
	Return = 'return',
}

export interface PropertyElement {
	textRaw: string;
	name?: string;
	type?: string;
	desc?: string;
	displayName?: string;
	meta?: PurpleMeta;
	params?: any[];
	signatures?: CtorSignature[];
	options?: PropertyElement[];
	default?: string;
	miscs?: PropertyElement[];
	shortDesc?: string;
	modules?: PropertyElement[];
}

export interface CtorSignature {
	params: FluffyParam[];
	return?: PurpleReturn;
}

export interface FluffyParam {
	textRaw: string;
	name: string;
	type: ParamType;
	desc?: string;
	options?: OptionElement[];
	default?: string;
}

export interface OptionElement {
	textRaw: string;
	name: string;
	type: string;
	desc?: string;
	default?: string;
}

export interface PurpleReturn {
	textRaw: string;
	name: Name;
	type: string;
	desc?: string;
}

export interface FluffyMeta {
	added?: string[];
	changes: FluffyChange[];
}

export interface FluffyChange {
	version: string;
	'pr-url': string;
	description: string;
}

export interface TentacledSignature {
	params: OptionElement[];
	return?: PurpleReturn;
}

export interface StickySignature {
	params: PurpleParam[];
	desc: string;
}

export interface NodeDocsGlobal {
	textRaw: string;
	type: GlobalType;
	name: string;
	meta?: PurpleMeta;
	desc: string;
	methods?: GlobalMethod[];
	properties?: GlobalProperty[];
	classes?: GlobalClass[];
	source: Source;
	introduced_in?: string;
	modules?: ModuleElement[];
}

export interface GlobalClass {
	textRaw: string;
	type: TypeEnum;
	name: string;
	meta?: PurpleMeta;
	desc?: string;
	classMethods?: EventElement[];
	events?: PurpleEvent[];
	properties?: PurpleProperty[];
	methods?: FluffyMethod[];
}

export interface PurpleEvent {
	textRaw: string;
	type: EventType;
	name: string;
	meta: PurpleMeta;
	params: ModuleElement[];
	desc: string;
}

export enum EventType {
	Event = 'event',
}

export interface FluffyMethod {
	textRaw: string;
	type: MethodType;
	name: string;
	meta: PurpleMeta;
	signatures: IndigoSignature[];
	desc: string;
	stability?: number;
	stabilityText?: MethodStabilityText;
}

export interface IndigoSignature {
	params: MethodElement[];
	return?: MethodElement;
}

export enum MethodStabilityText {
	DeprecatedUseSubpathPatternsInstead = 'Deprecated: Use subpath patterns instead.',
	Experimental = 'Experimental',
}

export interface PurpleProperty {
	textRaw: string;
	type: string;
	name: string;
	meta: PurpleMeta;
	desc: string;
}

export interface GlobalMethod {
	textRaw: string;
	type: MethodType;
	name: string;
	meta: PurpleMeta;
	signatures: IndigoSignature[];
	desc: string;
	modules?: ModuleElement[];
	stability?: number;
	stabilityText?: string;
}

export interface GlobalProperty {
	textRaw: string;
	type: string;
	name: string;
	meta?: EventMeta;
	desc?: string;
	methods?: EventElement[];
	stability?: number;
	stabilityText?: string;
	properties?: PropertyElement[];
	modules?: PropertyElement[];
}

export interface EventMeta {
	added?: string[];
	changes: TentacledChange[];
	deprecated?: string[];
}

export interface TentacledChange {
	version: string[] | string;
	'pr-url'?: string;
	description: string;
	commit?: string;
}

export enum Source {
	DocAPIGlobalsMd = 'doc/api/globals.md',
	DocAPIProcessMd = 'doc/api/process.md',
}

export enum GlobalType {
	Global = 'global',
}

export interface NodeDocsMethod {
	textRaw: string;
	type: MethodType;
	name: string;
	meta?: PurpleMeta;
	stability?: number;
	stabilityText?: string;
	signatures: PurpleSignature[];
	desc: string;
	source: Source;
}

export interface NodeDocsMisc {
	textRaw: string;
	name: string;
	introduced_in: string;
	type: TypeEnum;
	desc?: string;
	miscs: PurpleMisc[];
	source: string;
	stability?: number;
	stabilityText?: MiscStabilityText;
	classes?: PurpleClass[];
	globals?: MiscGlobal[];
	methods?: EventElement[];
	meta?: PurpleMeta;
	properties?: MiscProperty[];
}

export interface MiscGlobal {
	textRaw: string;
	type: GlobalType;
	name: string;
	meta: PurpleMeta;
	desc: string;
	methods?: EventElement[];
	properties?: PropertyElement[];
	classes?: GlobalClass[];
}

export interface PurpleMisc {
	textRaw: string;
	name: string;
	desc?: string;
	type: TypeEnum;
	displayName?: string;
	meta?: PurpleMeta;
	modules?: MiscModule[];
	stability?: number;
	stabilityText?: string;
	miscs?: PurpleClass[];
	properties?: MethodElement[];
}

export interface MiscModule {
	textRaw: string;
	name: string;
	desc?: string;
	modules?: FluffyModule[];
	type: TypeEnum;
	displayName: string;
	properties?: MethodElement[];
	meta?: TentacledMeta;
	stability?: number;
	stabilityText?: MethodStabilityText;
}

export interface TentacledMeta {
	added?: string[];
	napiVersion?: number[];
	changes: StickyChange[];
	removed?: string[];
}

export interface StickyChange {
	version: string[] | string;
	'pr-url'?: string[] | string;
	description: string;
	commit?: string;
}

export interface FluffyModule {
	textRaw: string;
	name: string;
	meta?: StickyMeta;
	desc: string;
	type: TypeEnum;
	displayName: string;
	stability?: number;
	stabilityText?: MethodStabilityText;
}

export interface StickyMeta {
	changes: TentacledChange[];
	added?: string[];
	napiVersion?: number[];
}

export interface MiscProperty {
	textRaw: string;
	type: ParamType;
	name: string;
	desc: string;
	properties: EventElement[];
	methods: EventElement[];
}

export enum MiscStabilityText {
	Deprecated = 'Deprecated',
	Experimental = 'Experimental',
	Legacy = 'Legacy',
	Stable = 'Stable',
}

export interface NodeDocsModule {
	textRaw: string;
	name: string;
	introduced_in?: string;
	miscs?: ModuleMisc[];
	type: TypeEnum;
	displayName?: string;
	source: string;
	stability?: number;
	stabilityText?: MiscStabilityText;
	desc?: string;
	modules?: TentacledModule[];
	classes?: FluffyClass[];
	methods?: StickyMethod[];
	events?: MethodElement[];
	properties?: IndigoProperty[];
	meta?: IndigoMeta;
	vars?: FluffyVar[];
}

export interface FluffyClass {
	textRaw: string;
	type: TypeEnum;
	name: string;
	desc?: string;
	signatures?: IndecentSignature[];
	meta?: EventMeta;
	stability?: number;
	stabilityText?: string;
	methods?: TentacledMethod[];
	modules?: ClassModule[];
	classMethods?: ModuleElement[];
	properties?: FluffyProperty[];
	events?: FluffyEvent[];
}

export interface FluffyEvent {
	textRaw: string;
	type: EventType;
	name: string;
	meta?: EventMeta;
	params: PropertyElement[];
	desc: string;
}

export interface TentacledMethod {
	textRaw: string;
	type: MethodType;
	name: string;
	meta?: EventMeta;
	signatures: IndigoSignature[];
	desc?: string;
	stability?: number;
	stabilityText?: string;
	properties?: MethodElement[];
	methods?: PropertyElement[];
	modules?: PropertyElement[];
}

export interface ClassModule {
	textRaw: string;
	name: string;
	desc: string;
	type: TypeEnum;
	displayName: string;
	methods?: EventElement[];
	stability?: number;
	stabilityText?: string;
	ctors?: EventElement[];
	meta?: PurpleMeta;
	modules?: PropertyElement[];
}

export interface FluffyProperty {
	textRaw: string;
	name: string;
	meta?: EventMeta;
	desc?: string;
	type?: string;
	default?: string;
	shortDesc?: string;
	stability?: number;
	stabilityText?: string;
	methods?: EventElement[];
	options?: EventElement[];
}

export interface IndecentSignature {
	params: MethodElement[];
	desc?: string;
	return?: MethodElement;
}

export interface IndigoMeta {
	deprecated?: string[];
	changes: FluffyChange[];
	added?: string[];
}

export interface StickyMethod {
	textRaw: string;
	type: MethodType;
	name: string;
	meta?: EventMeta;
	signatures: HilariousSignature[];
	desc?: string;
	modules?: PropertyElement[];
	stability?: number;
	stabilityText?: string;
	methods?: PropertyElement[];
	miscs?: PropertyElement[];
	properties?: PropertyElement[];
}

export interface HilariousSignature {
	params: PropertyElement[];
	return?: PropertyElement;
}

export interface ModuleMisc {
	textRaw: string;
	name: string;
	introduced_in?: string;
	type: TypeEnum;
	desc?: string;
	miscs?: FluffyMisc[];
	meta?: PurpleMeta;
	methods?: MethodElement[];
}

export interface FluffyMisc {
	textRaw: string;
	name: string;
	type: TypeEnum;
	desc?: string;
	classes?: GlobalClass[];
	displayName?: string;
	modules?: ModuleElement[];
	meta?: PurpleMeta;
	ctors?: PropertyElement[];
	methods?: IndigoMethod[];
	examples?: ModuleElement[];
	events?: ModuleElement[];
	miscs?: ModuleElement[];
}

export interface IndigoMethod {
	textRaw: string;
	type: MethodType;
	name: string;
	meta?: PurpleMeta;
	signatures: AmbitiousSignature[];
	desc: string;
}

export interface AmbitiousSignature {
	params: ModuleElement[];
	return?: ModuleElement;
}

export interface TentacledModule {
	textRaw: string;
	name: string;
	meta?: PurpleMeta;
	desc?: string;
	type: TypeEnum;
	displayName: string;
	classes?: TentacledClass[];
	methods?: IndecentMethod[];
	properties?: StickyProperty[];
	modules?: StickyModule[];
	stability?: number;
	stabilityText?: string;
	vars?: PurpleVar[];
	miscs?: EventElement[];
}

export interface TentacledClass {
	textRaw: string;
	type: TypeEnum;
	name: string;
	desc?: string;
	meta?: IndigoMeta;
	stability?: number;
	stabilityText?: string;
	signatures?: CunningSignature[];
	properties?: TentacledProperty[];
	methods?: MethodElement[];
	events?: EventElement[];
	modules?: EventElement[];
}

export interface TentacledProperty {
	textRaw: string;
	type?: string;
	name: string;
	desc: string;
	shortDesc?: string;
	meta?: IndigoMeta;
	default?: string;
	stability?: number;
	stabilityText?: string;
	modules?: ModuleElement[];
}

export interface CunningSignature {
	params: ModuleElement[];
	desc: string;
}

export interface IndecentMethod {
	textRaw: string;
	type: MethodType;
	name: string;
	meta?: EventMeta;
	stability?: number;
	stabilityText?: string;
	signatures: MagentaSignature[];
	desc?: string;
	properties?: ModuleElement[];
	modules?: ModuleElement[];
	miscs?: ModuleElement[];
}

export interface MagentaSignature {
	params: EventElement[];
	return?: EventElement;
}

export interface StickyModule {
	textRaw: string;
	name: string;
	meta?: PurpleMeta;
	properties?: PropertyElement[];
	type: TypeEnum;
	displayName: string;
	desc?: string;
	methods?: ModuleElement[];
	modules?: PurpleClass[];
	stability?: number;
	stabilityText?: string;
	classes?: MethodElement[];
}

export interface StickyProperty {
	textRaw: string;
	type?: string;
	name: string;
	meta?: EventMeta;
	default?: string;
	desc?: string;
	shortDesc?: string;
	stability?: number;
	stabilityText?: MiscStabilityText;
	modules?: PropertyElement[];
	properties?: PropertyElement[];
	methods?: PropertyElement[];
}

export interface PurpleVar {
	textRaw: string;
	name: string;
	meta: PurpleMeta;
	type: string;
	desc: string;
	properties?: VarMethod[];
	methods?: EventElement[];
}

export interface VarMethod {
	textRaw: string;
	type: string;
	name: string;
	meta: EventMeta;
	desc: string;
	stability?: number;
	stabilityText?: string;
	signatures?: AmbitiousSignature[];
	modules?: ModuleElement[];
}

export interface IndigoProperty {
	textRaw: string;
	name: string;
	meta?: EventMeta;
	desc?: string;
	type?: string;
	options?: ModuleElement[];
	stability?: number;
	stabilityText?: string;
	shortDesc?: string;
	methods?: VarMethod[];
	properties?: ModuleElement[];
	default?: string;
}

export interface FluffyVar {
	textRaw: string;
	name: TypeEnum;
	meta: PurpleMeta;
	type: string;
	desc: string;
	properties: VarMethod[];
	methods: ModuleElement[];
}
