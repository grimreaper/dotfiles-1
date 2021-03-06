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

var _utilsFlatten = require('../../utils/flatten');

var _utilsFlatten2 = _interopRequireDefault(_utilsFlatten);

var _constantsMarkers = require('../../constants/markers');

var _constantsMarkers2 = _interopRequireDefault(_constantsMarkers);

function printUnionTypeAnnotation(print, node) {
  return (0, _utilsFlatten2['default'])([_constantsMarkers2['default'].openScope, _constantsMarkers2['default'].scopeIndent, node.types.map(function (t, i, arr) {
    return [i === 0 ? _constantsMarkers2['default'].scopeBreak : _constantsMarkers2['default'].scopeSpaceBreak, print(t), i < arr.length - 1 ? [_constantsMarkers2['default'].space, '|'] : _constantsMarkers2['default'].empty];
  }), _constantsMarkers2['default'].scopeDedent, _constantsMarkers2['default'].closeScope]);
}

module.exports = printUnionTypeAnnotation;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9yZXByaW50LWpzL3ByaW50ZXJzL3NpbXBsZS9wcmludFVuaW9uVHlwZUFubm90YXRpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OzRCQWFvQixxQkFBcUI7Ozs7Z0NBQ3JCLHlCQUF5Qjs7OztBQUU3QyxTQUFTLHdCQUF3QixDQUMvQixLQUFZLEVBQ1osSUFBeUIsRUFDbEI7QUFDUCxTQUFPLCtCQUFRLENBQ2IsOEJBQVEsU0FBUyxFQUNqQiw4QkFBUSxXQUFXLEVBQ25CLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHO1dBQUssQ0FDNUIsQ0FBQyxLQUFLLENBQUMsR0FBRyw4QkFBUSxVQUFVLEdBQUcsOEJBQVEsZUFBZSxFQUN0RCxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQ1IsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsOEJBQVEsS0FBSyxFQUFFLEdBQUcsQ0FBQyxHQUFHLDhCQUFRLEtBQUssQ0FDMUQ7R0FBQSxDQUFDLEVBQ0YsOEJBQVEsV0FBVyxFQUNuQiw4QkFBUSxVQUFVLENBQ25CLENBQUMsQ0FBQztDQUNKOztBQUVELE1BQU0sQ0FBQyxPQUFPLEdBQUcsd0JBQXdCLENBQUMiLCJmaWxlIjoicHJpbnRVbmlvblR5cGVBbm5vdGF0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNS1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBsaWNlbnNlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgaW5cbiAqIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBmbG93XG4gKi9cblxuaW1wb3J0IHR5cGUge0xpbmVzLCBQcmludH0gZnJvbSAnLi4vLi4vdHlwZXMvY29tbW9uJztcbmltcG9ydCB0eXBlIHtVbmlvblR5cGVBbm5vdGF0aW9ufSBmcm9tICdhc3QtdHlwZXMtZmxvdyc7XG5cbmltcG9ydCBmbGF0dGVuIGZyb20gJy4uLy4uL3V0aWxzL2ZsYXR0ZW4nO1xuaW1wb3J0IG1hcmtlcnMgZnJvbSAnLi4vLi4vY29uc3RhbnRzL21hcmtlcnMnO1xuXG5mdW5jdGlvbiBwcmludFVuaW9uVHlwZUFubm90YXRpb24oXG4gIHByaW50OiBQcmludCxcbiAgbm9kZTogVW5pb25UeXBlQW5ub3RhdGlvbixcbik6IExpbmVzIHtcbiAgcmV0dXJuIGZsYXR0ZW4oW1xuICAgIG1hcmtlcnMub3BlblNjb3BlLFxuICAgIG1hcmtlcnMuc2NvcGVJbmRlbnQsXG4gICAgbm9kZS50eXBlcy5tYXAoKHQsIGksIGFycikgPT4gW1xuICAgICAgaSA9PT0gMCA/IG1hcmtlcnMuc2NvcGVCcmVhayA6IG1hcmtlcnMuc2NvcGVTcGFjZUJyZWFrLFxuICAgICAgcHJpbnQodCksXG4gICAgICBpIDwgYXJyLmxlbmd0aCAtIDEgPyBbbWFya2Vycy5zcGFjZSwgJ3wnXSA6IG1hcmtlcnMuZW1wdHksXG4gICAgXSksXG4gICAgbWFya2Vycy5zY29wZURlZGVudCxcbiAgICBtYXJrZXJzLmNsb3NlU2NvcGUsXG4gIF0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHByaW50VW5pb25UeXBlQW5ub3RhdGlvbjtcbiJdfQ==