/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

/* eslint-disable object-curly-newline */

'use strict';

// MODULES //

var tape = require( 'tape' );
var Float64Array = require( '@stdlib/array-float64' );
var ArrayBuffer = require( '@stdlib/array-buffer' );
var unshift = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof unshift, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided either an array, typed array, or an array-like object', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		function noop() {},
		new Date(),
		new RegExp( '.+' ), // eslint-disable-line prefer-regex-literals
		{},
		{ 'length': null },
		{ 'length': -1 },
		{ 'length': 3.14 }
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			unshift( value, 1.0 );
		};
	}
});

tape( 'the function adds one or more elements to an array', function test( t ) {
	var expected;
	var arr;
	var out;

	arr = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	out = unshift( arr, 6.0 );

	t.strictEqual( out, arr, 'returns input array' );

	expected = [ 6.0, 1.0, 2.0, 3.0, 4.0, 5.0 ];
	t.deepEqual( arr, expected, 'deep equal' );

	out = unshift( arr, 7.0, 8.0 );

	expected = [ 7.0, 8.0, 6.0, 1.0, 2.0, 3.0, 4.0, 5.0 ];
	t.deepEqual( arr, expected, 'deep equal' );

	t.end();
});

tape( 'the function adds one or more elements to an array-like object', function test( t ) {
	var expected;
	var arr;
	var out;

	arr = {
		'length': 0
	};
	out = unshift( arr, 1.0 );

	t.strictEqual( out, arr, 'returns input collection' );

	expected = {
		'length': 1,
		'0': 1.0
	};
	t.deepEqual( arr, expected, 'deep equal' );

	out = unshift( arr, 2.0, 3.0 );

	expected = {
		'length': 3,
		'0': 2.0,
		'1': 3.0,
		'2': 1.0
	};
	t.deepEqual( arr, expected, 'deep equal' );

	t.end();
});

tape( 'the function adds one or more elements to a typed array', function test( t ) {
	var expected;
	var arr;
	var out;
	var i;

	arr = new Float64Array();
	out = unshift( arr, 1.0 );

	t.notEqual( out, arr, 'does not return input array (new view)' );

	expected = new Float64Array( [ 1.0 ] );
	for ( i = 0; i < expected.length; i++ ) {
		t.strictEqual( out[ i ], expected[ i ], 'has expected value for element '+i );
	}

	out = unshift( out, 2.0, 3.0, 4.0 );

	expected = new Float64Array( [ 2.0, 3.0, 4.0, 1.0 ] );
	for ( i = 0; i < expected.length; i++ ) {
		t.strictEqual( out[ i ], expected[ i ], 'has expected value for element '+i );
	}

	out = unshift( out, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0 );

	expected = new Float64Array([
		5.0,
		6.0,
		7.0,
		8.0,
		9.0,
		10.0,
		11.0,
		12.0,
		13.0,
		14.0,
		2.0,
		3.0,
		4.0,
		1.0
	]);
	for ( i = 0; i < expected.length; i++ ) {
		t.strictEqual( out[ i ], expected[ i ], 'has expected value for element '+i );
	}

	t.end();
});

tape( 'the function adds one or more elements to a typed array (preallocated buffer)', function test( t ) {
	var expected;
	var buf;
	var arr;
	var out;
	var i;

	buf = new ArrayBuffer( 64000 );
	arr = new Float64Array( buf, 64000, 0 );
	out = unshift( arr, 1.0 );

	t.notEqual( out, arr, 'does not return input array (new view)' );

	expected = new Float64Array( [ 1.0 ] );
	for ( i = 0; i < expected.length; i++ ) {
		t.strictEqual( out[ i ], expected[ i ], 'has expected value for element '+i );
	}
	t.strictEqual( out.buffer, arr.buffer, 'same underlying buffer' );

	out = unshift( out, 2.0, 3.0, 4.0 );

	expected = new Float64Array( [ 2.0, 3.0, 4.0, 1.0 ] );
	for ( i = 0; i < expected.length; i++ ) {
		t.strictEqual( out[ i ], expected[ i ], 'has expected value for element '+i );
	}
	t.strictEqual( out.buffer, arr.buffer, 'same underlying buffer' );

	out = unshift( out, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0 );

	expected = new Float64Array([
		5.0,
		6.0,
		7.0,
		8.0,
		9.0,
		10.0,
		11.0,
		12.0,
		13.0,
		14.0,
		2.0,
		3.0,
		4.0,
		1.0
	]);
	for ( i = 0; i < expected.length; i++ ) {
		t.strictEqual( out[ i ], expected[ i ], 'has expected value for element '+i );
	}
	t.strictEqual( out.buffer, arr.buffer, 'same underlying buffer' );

	t.end();
});

tape( 'the function adds one or more elements to a typed array (offset view)', function test( t ) {
	var expected;
	var arr;
	var buf;
	var out;
	var i;

	buf = new ArrayBuffer( 32 );
	arr = new Float64Array( buf, 2*8, 0 ); // 8 bytes per double
	out = unshift( arr, 1.0 );

	t.notEqual( out, arr, 'does not return input array (new view)' );

	expected = new Float64Array( [ 1.0 ] );
	for ( i = 0; i < expected.length; i++ ) {
		t.strictEqual( out[ i ], expected[ i ], 'has expected value for element '+i );
	}
	t.strictEqual( out.buffer, arr.buffer, 'same underlying buffer' );

	out = unshift( out, 2.0, 3.0, 4.0 );

	expected = new Float64Array( [ 2.0, 3.0, 4.0, 1.0 ] );
	for ( i = 0; i < expected.length; i++ ) {
		t.strictEqual( out[ i ], expected[ i ], 'has expected value for element '+i );
	}
	t.notEqual( out.buffer, arr.buffer, 'new underlying buffer' );

	out = unshift( out, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0 );

	expected = new Float64Array([
		5.0,
		6.0,
		7.0,
		8.0,
		9.0,
		10.0,
		11.0,
		12.0,
		13.0,
		14.0,
		2.0,
		3.0,
		4.0,
		1.0
	]);
	for ( i = 0; i < expected.length; i++ ) {
		t.strictEqual( out[ i ], expected[ i ], 'has expected value for element '+i );
	}
	t.notEqual( out.buffer, arr.buffer, 'new underlying buffer' );

	t.end();
});

tape( 'the function adds one or more elements to a typed array (shared `ArrayBuffer`)', function test( t ) {
	var expected;
	var arr1;
	var arr2;
	var arr3;
	var buf;
	var out;
	var i;

	buf = new ArrayBuffer( 64 );

	arr1 = new Float64Array( buf, 4*8, 2 ); // 8 bytes per double
	arr2 = new Float64Array( buf, 6*8, 2 );
	arr3 = new Float64Array( buf, 8*8, 0 );

	arr1[ 0 ] = 3.14;
	arr1[ 1 ] = 6.28;

	arr2[ 0 ] = -3.14;
	arr2[ 1 ] = -6.28;

	out = unshift( arr3, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 );

	t.notEqual( out, arr3, 'does not return input array (new view)' );

	expected = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	for ( i = 0; i < expected.length; i++ ) {
		t.strictEqual( out[ i ], expected[ i ], 'has expected value for element '+i );
	}
	t.strictEqual( out.buffer, arr3.buffer, 'same underlying buffer' );

	expected = new Float64Array( [ 3.0, 4.0 ] );
	for ( i = 0; i < expected.length; i++ ) {
		t.strictEqual( arr1[ i ], expected[ i ], 'value was overwritten for element '+i );
	}
	t.strictEqual( out.buffer, arr1.buffer, 'same underlying buffer' );

	expected = new Float64Array( [ 5.0, 6.0 ] );
	for ( i = 0; i < expected.length; i++ ) {
		t.strictEqual( arr2[ i ], expected[ i ], 'value was overwritten for element '+i );
	}
	t.strictEqual( out.buffer, arr2.buffer, 'same underlying buffer' );

	t.end();
});
