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

var _wrappersSimpleWrapExpression = require('../../wrappers/simple/wrapExpression');

var _wrappersSimpleWrapExpression2 = _interopRequireDefault(_wrappersSimpleWrapExpression);

function printThisExpression(print, node) {
  var wrap = function wrap(x) {
    return (0, _wrappersSimpleWrapExpression2['default'])(print, node, x);
  };
  return wrap(['this']);
}

module.exports = printThisExpression;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9yZXByaW50LWpzL3ByaW50ZXJzL3NpbXBsZS9wcmludFRoaXNFeHByZXNzaW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs0Q0FhMkIsc0NBQXNDOzs7O0FBRWpFLFNBQVMsbUJBQW1CLENBQUMsS0FBWSxFQUFFLElBQW9CLEVBQVM7QUFDdEUsTUFBTSxJQUFJLEdBQUcsU0FBUCxJQUFJLENBQUcsQ0FBQztXQUFJLCtDQUFlLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0dBQUEsQ0FBQztBQUNqRCxTQUFPLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Q0FDdkI7O0FBRUQsTUFBTSxDQUFDLE9BQU8sR0FBRyxtQkFBbUIsQ0FBQyIsImZpbGUiOiJwcmludFRoaXNFeHByZXNzaW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNS1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBsaWNlbnNlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgaW5cbiAqIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBmbG93XG4gKi9cblxuaW1wb3J0IHR5cGUge0xpbmVzLCBQcmludH0gZnJvbSAnLi4vLi4vdHlwZXMvY29tbW9uJztcbmltcG9ydCB0eXBlIHtUaGlzRXhwcmVzc2lvbn0gZnJvbSAnYXN0LXR5cGVzLWZsb3cnO1xuXG5pbXBvcnQgd3JhcEV4cHJlc3Npb24gZnJvbSAnLi4vLi4vd3JhcHBlcnMvc2ltcGxlL3dyYXBFeHByZXNzaW9uJztcblxuZnVuY3Rpb24gcHJpbnRUaGlzRXhwcmVzc2lvbihwcmludDogUHJpbnQsIG5vZGU6IFRoaXNFeHByZXNzaW9uKTogTGluZXMge1xuICBjb25zdCB3cmFwID0geCA9PiB3cmFwRXhwcmVzc2lvbihwcmludCwgbm9kZSwgeCk7XG4gIHJldHVybiB3cmFwKFsndGhpcyddKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwcmludFRoaXNFeHByZXNzaW9uO1xuIl19