/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { FuzzyScorer } from 'vs/base/common/filters';
import { createDecorator } from 'vs/platform/instantiation/common/instantiation';
import { CompletionListItemSelectionMethod } from "vs/editor/common/languages";

export const IEditorCompletionService = createDecorator<IEditorCompletionService>('completionScoreService');

export interface IEditorCompletionService {
	readonly _serviceBrand: undefined;

	registerCompletionScoreMethod(fuzzyScorer: FuzzyScorer): void;
	getScorer(): FuzzyScorer | undefined;

	registerCompletionListItemSelectorMethod(fuzzyScorer: CompletionListItemSelectionMethod): void;
	getCompletionListItemSelectorMethod(): CompletionListItemSelectionMethod | undefined;
}

export class EditorCompletionServiceImpl implements IEditorCompletionService {
	declare readonly _serviceBrand: undefined;
	private scorer?: FuzzyScorer;
	private completionListItemSelector?: CompletionListItemSelectionMethod;

	registerCompletionScoreMethod(fuzzyScorer: FuzzyScorer): void {
		this.scorer = fuzzyScorer;
	}

	getScorer(): FuzzyScorer | undefined {
		return this.scorer;
	}

	registerCompletionListItemSelectorMethod(method: CompletionListItemSelectionMethod): void {
		this.completionListItemSelector = method;
	}
	getCompletionListItemSelectorMethod(): CompletionListItemSelectionMethod | undefined {
		return this.completionListItemSelector;
	}
}
