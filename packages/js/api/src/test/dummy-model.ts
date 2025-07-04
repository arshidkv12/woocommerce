/**
 * Internal dependencies
 */
import { Model } from '../models';

/**
 * A dummy model that can be used in test files.
 */
export class DummyModel extends Model {
	public name = '';

	public constructor( partial?: Partial< DummyModel > ) {
		super();
		Object.assign( this, partial );
	}
}

// Suppress 'Your test suite must contain at least one test.' failure for this file.
test.skip( 'skip', () => {} );
