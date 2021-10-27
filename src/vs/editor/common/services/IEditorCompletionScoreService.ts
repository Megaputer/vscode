/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { FuzzyScorer } from "vs/base/common/filters";
import { createDecorator } from "vs/platform/instantiation/common/instantiation";

export const IEditorCompletionScoreService = createDecorator<IEditorCompletionScoreService>('completionScoreService');

export interface IEditorCompletionScoreService {
	readonly _serviceBrand: undefined;

	registerCompletionScoreMethod(fuzzyScorer: FuzzyScorer): void;
	getScorer(): FuzzyScorer | undefined;
}

export class EditorCompletionScoreServiceImpl implements IEditorCompletionScoreService {
	declare readonly _serviceBrand: undefined;
	private scorer?: FuzzyScorer;

	registerCompletionScoreMethod(fuzzyScorer: FuzzyScorer): void {
		this.scorer = fuzzyScorer;
	}

	getScorer(): FuzzyScorer | undefined {
		return this.scorer;
	}

}
