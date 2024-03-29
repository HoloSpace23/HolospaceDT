import type { SqlConditionFieldNode } from './conditions/field-condition.js';
import type { SqlConditionGeoNode } from './conditions/geo-condition.js';
import type { SqlConditionNumberNode } from './conditions/number-condition.js';
import type { SqlConditionSetStringNode } from './conditions/set-string-condition.js';
import type { SqlConditionStringNode } from './conditions/string-condition.js';
import type { SqlConditionSetNumberNode } from './conditions/set-number-condition.js';

/**
 * Condition to filter rows.
 * Various condition types are supported, each depending on a specific datatype.
 * The condition can also be negated on this level.
 */
export interface AbstractSqlQueryConditionNode {
	type: 'condition';
	condition:
		| SqlConditionStringNode
		| SqlConditionNumberNode
		| SqlConditionGeoNode
		| SqlConditionSetStringNode
		| SqlConditionSetNumberNode
		| SqlConditionFieldNode;
	negate: boolean;
}
