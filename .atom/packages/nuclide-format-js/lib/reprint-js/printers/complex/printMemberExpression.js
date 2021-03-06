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

var _wrappersSimpleWrapExpression = require('../../wrappers/simple/wrapExpression');

var _wrappersSimpleWrapExpression2 = _interopRequireDefault(_wrappersSimpleWrapExpression);

function printMemberExpression(print, node, context) {
  var wrap = function wrap(x) {
    return (0, _wrappersSimpleWrapExpression2['default'])(print, node, x);
  };

  if (node.computed) {
    return wrap([print(node.object), '[', _constantsMarkers2['default'].openScope, _constantsMarkers2['default'].scopeIndent, _constantsMarkers2['default'].scopeBreak, print(node.property), _constantsMarkers2['default'].scopeBreak, _constantsMarkers2['default'].scopeDedent, _constantsMarkers2['default'].closeScope, ']']);
  } else {
    return wrap([print(node.object), '.', print(node.property)]);
  }
}

module.exports = printMemberExpression;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9yZXByaW50LWpzL3ByaW50ZXJzL2NvbXBsZXgvcHJpbnRNZW1iZXJFeHByZXNzaW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztnQ0Fhb0IseUJBQXlCOzs7OzRDQUNsQixzQ0FBc0M7Ozs7QUFFakUsU0FBUyxxQkFBcUIsQ0FDNUIsS0FBWSxFQUNaLElBQXNCLEVBQ3RCLE9BQWdCLEVBQ1Q7QUFDUCxNQUFNLElBQUksR0FBRyxTQUFQLElBQUksQ0FBRyxDQUFDO1dBQUksK0NBQWUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7R0FBQSxDQUFDOztBQUVqRCxNQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7QUFDakIsV0FBTyxJQUFJLENBQUMsQ0FDVixLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUNsQixHQUFHLEVBQ0gsOEJBQVEsU0FBUyxFQUNqQiw4QkFBUSxXQUFXLEVBQ25CLDhCQUFRLFVBQVUsRUFDbEIsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFDcEIsOEJBQVEsVUFBVSxFQUNsQiw4QkFBUSxXQUFXLEVBQ25CLDhCQUFRLFVBQVUsRUFDbEIsR0FBRyxDQUNKLENBQUMsQ0FBQztHQUNKLE1BQU07QUFDTCxXQUFPLElBQUksQ0FBQyxDQUNWLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQ2xCLEdBQUcsRUFDSCxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUNyQixDQUFDLENBQUM7R0FDSjtDQUNGOztBQUVELE1BQU0sQ0FBQyxPQUFPLEdBQUcscUJBQXFCLENBQUMiLCJmaWxlIjoicHJpbnRNZW1iZXJFeHByZXNzaW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNS1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBsaWNlbnNlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgaW5cbiAqIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBmbG93XG4gKi9cblxuaW1wb3J0IHR5cGUge0NvbnRleHQsIExpbmVzLCBQcmludH0gZnJvbSAnLi4vLi4vdHlwZXMvY29tbW9uJztcbmltcG9ydCB0eXBlIHtNZW1iZXJFeHByZXNzaW9ufSBmcm9tICdhc3QtdHlwZXMtZmxvdyc7XG5cbmltcG9ydCBtYXJrZXJzIGZyb20gJy4uLy4uL2NvbnN0YW50cy9tYXJrZXJzJztcbmltcG9ydCB3cmFwRXhwcmVzc2lvbiBmcm9tICcuLi8uLi93cmFwcGVycy9zaW1wbGUvd3JhcEV4cHJlc3Npb24nO1xuXG5mdW5jdGlvbiBwcmludE1lbWJlckV4cHJlc3Npb24oXG4gIHByaW50OiBQcmludCxcbiAgbm9kZTogTWVtYmVyRXhwcmVzc2lvbixcbiAgY29udGV4dDogQ29udGV4dCxcbik6IExpbmVzIHtcbiAgY29uc3Qgd3JhcCA9IHggPT4gd3JhcEV4cHJlc3Npb24ocHJpbnQsIG5vZGUsIHgpO1xuXG4gIGlmIChub2RlLmNvbXB1dGVkKSB7XG4gICAgcmV0dXJuIHdyYXAoW1xuICAgICAgcHJpbnQobm9kZS5vYmplY3QpLFxuICAgICAgJ1snLFxuICAgICAgbWFya2Vycy5vcGVuU2NvcGUsXG4gICAgICBtYXJrZXJzLnNjb3BlSW5kZW50LFxuICAgICAgbWFya2Vycy5zY29wZUJyZWFrLFxuICAgICAgcHJpbnQobm9kZS5wcm9wZXJ0eSksXG4gICAgICBtYXJrZXJzLnNjb3BlQnJlYWssXG4gICAgICBtYXJrZXJzLnNjb3BlRGVkZW50LFxuICAgICAgbWFya2Vycy5jbG9zZVNjb3BlLFxuICAgICAgJ10nLFxuICAgIF0pO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB3cmFwKFtcbiAgICAgIHByaW50KG5vZGUub2JqZWN0KSxcbiAgICAgICcuJyxcbiAgICAgIHByaW50KG5vZGUucHJvcGVydHkpLFxuICAgIF0pO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcHJpbnRNZW1iZXJFeHByZXNzaW9uO1xuIl19