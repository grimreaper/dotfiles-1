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

var _wrappersSimpleWrapStatement = require('../../wrappers/simple/wrapStatement');

var _wrappersSimpleWrapStatement2 = _interopRequireDefault(_wrappersSimpleWrapStatement);

function printWithStatement(print, node) {
  var wrap = function wrap(x) {
    return (0, _wrappersSimpleWrapStatement2['default'])(print, node, x);
  };
  return wrap([_constantsMarkers2['default'].hardBreak, 'with (', _constantsMarkers2['default'].openScope, _constantsMarkers2['default'].scopeIndent, _constantsMarkers2['default'].scopeBreak, print(node.object), _constantsMarkers2['default'].scopeBreak, _constantsMarkers2['default'].scopeDedent, _constantsMarkers2['default'].closeScope, ')', _constantsMarkers2['default'].space, print(node.body)]);
}

module.exports = printWithStatement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9yZXByaW50LWpzL3ByaW50ZXJzL3NpbXBsZS9wcmludFdpdGhTdGF0ZW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O2dDQWFvQix5QkFBeUI7Ozs7MkNBQ25CLHFDQUFxQzs7OztBQUUvRCxTQUFTLGtCQUFrQixDQUFDLEtBQVksRUFBRSxJQUFtQixFQUFTO0FBQ3BFLE1BQU0sSUFBSSxHQUFHLFNBQVAsSUFBSSxDQUFHLENBQUM7V0FBSSw4Q0FBYyxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztHQUFBLENBQUM7QUFDaEQsU0FBTyxJQUFJLENBQUMsQ0FDViw4QkFBUSxTQUFTLEVBQ2pCLFFBQVEsRUFDUiw4QkFBUSxTQUFTLEVBQ2pCLDhCQUFRLFdBQVcsRUFDbkIsOEJBQVEsVUFBVSxFQUNsQixLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUNsQiw4QkFBUSxVQUFVLEVBQ2xCLDhCQUFRLFdBQVcsRUFDbkIsOEJBQVEsVUFBVSxFQUNsQixHQUFHLEVBQ0gsOEJBQVEsS0FBSyxFQUNiLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQ2pCLENBQUMsQ0FBQztDQUNKOztBQUVELE1BQU0sQ0FBQyxPQUFPLEdBQUcsa0JBQWtCLENBQUMiLCJmaWxlIjoicHJpbnRXaXRoU3RhdGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNS1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBsaWNlbnNlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgaW5cbiAqIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBmbG93XG4gKi9cblxuaW1wb3J0IHR5cGUge0xpbmVzLCBQcmludH0gZnJvbSAnLi4vLi4vdHlwZXMvY29tbW9uJztcbmltcG9ydCB0eXBlIHtXaXRoU3RhdGVtZW50fSBmcm9tICdhc3QtdHlwZXMtZmxvdyc7XG5cbmltcG9ydCBtYXJrZXJzIGZyb20gJy4uLy4uL2NvbnN0YW50cy9tYXJrZXJzJztcbmltcG9ydCB3cmFwU3RhdGVtZW50IGZyb20gJy4uLy4uL3dyYXBwZXJzL3NpbXBsZS93cmFwU3RhdGVtZW50JztcblxuZnVuY3Rpb24gcHJpbnRXaXRoU3RhdGVtZW50KHByaW50OiBQcmludCwgbm9kZTogV2l0aFN0YXRlbWVudCk6IExpbmVzIHtcbiAgY29uc3Qgd3JhcCA9IHggPT4gd3JhcFN0YXRlbWVudChwcmludCwgbm9kZSwgeCk7XG4gIHJldHVybiB3cmFwKFtcbiAgICBtYXJrZXJzLmhhcmRCcmVhayxcbiAgICAnd2l0aCAoJyxcbiAgICBtYXJrZXJzLm9wZW5TY29wZSxcbiAgICBtYXJrZXJzLnNjb3BlSW5kZW50LFxuICAgIG1hcmtlcnMuc2NvcGVCcmVhayxcbiAgICBwcmludChub2RlLm9iamVjdCksXG4gICAgbWFya2Vycy5zY29wZUJyZWFrLFxuICAgIG1hcmtlcnMuc2NvcGVEZWRlbnQsXG4gICAgbWFya2Vycy5jbG9zZVNjb3BlLFxuICAgICcpJyxcbiAgICBtYXJrZXJzLnNwYWNlLFxuICAgIHByaW50KG5vZGUuYm9keSksXG4gIF0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHByaW50V2l0aFN0YXRlbWVudDtcbiJdfQ==