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

var _constantsMarkers = require('../../constants/markers');

var _constantsMarkers2 = _interopRequireDefault(_constantsMarkers);

var _commonPrintCommaSeparatedNodes = require('../common/printCommaSeparatedNodes');

var _commonPrintCommaSeparatedNodes2 = _interopRequireDefault(_commonPrintCommaSeparatedNodes);

var _wrappersSimpleWrapExpression = require('../../wrappers/simple/wrapExpression');

var _wrappersSimpleWrapExpression2 = _interopRequireDefault(_wrappersSimpleWrapExpression);

function printCallExpression(print, node) {
  var wrap = function wrap(x) {
    return (0, _wrappersSimpleWrapExpression2['default'])(print, node, x);
  };
  return wrap([print(node.callee), _constantsMarkers2['default'].noBreak, '(', (0, _commonPrintCommaSeparatedNodes2['default'])(print, node.arguments), ')']);
}

module.exports = printCallExpression;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9yZXByaW50LWpzL3ByaW50ZXJzL3NpbXBsZS9wcmludENhbGxFeHByZXNzaW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztnQ0Fhb0IseUJBQXlCOzs7OzhDQUNSLG9DQUFvQzs7Ozs0Q0FDOUMsc0NBQXNDOzs7O0FBRWpFLFNBQVMsbUJBQW1CLENBQUMsS0FBWSxFQUFFLElBQW9CLEVBQVM7QUFDdEUsTUFBTSxJQUFJLEdBQUcsU0FBUCxJQUFJLENBQUcsQ0FBQztXQUFJLCtDQUFlLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0dBQUEsQ0FBQztBQUNqRCxTQUFPLElBQUksQ0FBQyxDQUNWLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQ2xCLDhCQUFRLE9BQU8sRUFDZixHQUFHLEVBQ0gsaURBQXlCLEtBQUssRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQy9DLEdBQUcsQ0FDSixDQUFDLENBQUM7Q0FDSjs7QUFFRCxNQUFNLENBQUMsT0FBTyxHQUFHLG1CQUFtQixDQUFDIiwiZmlsZSI6InByaW50Q2FsbEV4cHJlc3Npb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE1LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIGxpY2Vuc2UgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBpblxuICogdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGZsb3dcbiAqL1xuXG5pbXBvcnQgdHlwZSB7Q2FsbEV4cHJlc3Npb259IGZyb20gJ2FzdC10eXBlcy1mbG93JztcbmltcG9ydCB0eXBlIHtMaW5lcywgUHJpbnR9IGZyb20gJy4uLy4uL3R5cGVzL2NvbW1vbic7XG5cbmltcG9ydCBtYXJrZXJzIGZyb20gJy4uLy4uL2NvbnN0YW50cy9tYXJrZXJzJztcbmltcG9ydCBwcmludENvbW1hU2VwYXJhdGVkTm9kZXMgZnJvbSAnLi4vY29tbW9uL3ByaW50Q29tbWFTZXBhcmF0ZWROb2Rlcyc7XG5pbXBvcnQgd3JhcEV4cHJlc3Npb24gZnJvbSAnLi4vLi4vd3JhcHBlcnMvc2ltcGxlL3dyYXBFeHByZXNzaW9uJztcblxuZnVuY3Rpb24gcHJpbnRDYWxsRXhwcmVzc2lvbihwcmludDogUHJpbnQsIG5vZGU6IENhbGxFeHByZXNzaW9uKTogTGluZXMge1xuICBjb25zdCB3cmFwID0geCA9PiB3cmFwRXhwcmVzc2lvbihwcmludCwgbm9kZSwgeCk7XG4gIHJldHVybiB3cmFwKFtcbiAgICBwcmludChub2RlLmNhbGxlZSksXG4gICAgbWFya2Vycy5ub0JyZWFrLFxuICAgICcoJyxcbiAgICBwcmludENvbW1hU2VwYXJhdGVkTm9kZXMocHJpbnQsIG5vZGUuYXJndW1lbnRzKSxcbiAgICAnKScsXG4gIF0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHByaW50Q2FsbEV4cHJlc3Npb247XG4iXX0=