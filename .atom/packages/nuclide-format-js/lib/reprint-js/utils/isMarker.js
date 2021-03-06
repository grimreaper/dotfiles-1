function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/*
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 *
 * 
 */

var _constantsMarkers = require('../constants/markers');

var _constantsMarkers2 = _interopRequireDefault(_constantsMarkers);

var MARKER_SET = new Set();
Object.keys(_constantsMarkers2['default']).forEach(function (key) {
  MARKER_SET.add(_constantsMarkers2['default'][key]);
});

function isMarker(line) {
  return MARKER_SET.has(line);
}

module.exports = isMarker;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yZXByaW50LWpzL3V0aWxzL2lzTWFya2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztnQ0FVb0Isc0JBQXNCOzs7O0FBRTFDLElBQU0sVUFBVSxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7QUFDN0IsTUFBTSxDQUFDLElBQUksK0JBQVMsQ0FBQyxPQUFPLENBQUMsVUFBQSxHQUFHLEVBQUk7QUFDbEMsWUFBVSxDQUFDLEdBQUcsQ0FBQyw4QkFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDO0NBQzlCLENBQUMsQ0FBQzs7QUFFSCxTQUFTLFFBQVEsQ0FBQyxJQUFTLEVBQVc7QUFDcEMsU0FBTyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0NBQzdCOztBQUVELE1BQU0sQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDIiwiZmlsZSI6ImlzTWFya2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNS1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBsaWNlbnNlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgaW5cbiAqIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBmbG93XG4gKi9cblxuaW1wb3J0IG1hcmtlcnMgZnJvbSAnLi4vY29uc3RhbnRzL21hcmtlcnMnO1xuXG5jb25zdCBNQVJLRVJfU0VUID0gbmV3IFNldCgpO1xuT2JqZWN0LmtleXMobWFya2VycykuZm9yRWFjaChrZXkgPT4ge1xuICBNQVJLRVJfU0VULmFkZChtYXJrZXJzW2tleV0pO1xufSk7XG5cbmZ1bmN0aW9uIGlzTWFya2VyKGxpbmU6IGFueSk6IGJvb2xlYW4ge1xuICByZXR1cm4gTUFSS0VSX1NFVC5oYXMobGluZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNNYXJrZXI7XG4iXX0=