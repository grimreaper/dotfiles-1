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

var _commonPrintCommaSeparatedNodes = require('../common/printCommaSeparatedNodes');

var _commonPrintCommaSeparatedNodes2 = _interopRequireDefault(_commonPrintCommaSeparatedNodes);

function printTypeParameterDeclaration(print, node) {
  return (0, _utilsFlatten2['default'])(['<', (0, _commonPrintCommaSeparatedNodes2['default'])(print, node.params), '>']);
}

module.exports = printTypeParameterDeclaration;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9yZXByaW50LWpzL3ByaW50ZXJzL3NpbXBsZS9wcmludFR5cGVQYXJhbWV0ZXJEZWNsYXJhdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7NEJBYW9CLHFCQUFxQjs7Ozs4Q0FDSixvQ0FBb0M7Ozs7QUFFekUsU0FBUyw2QkFBNkIsQ0FDcEMsS0FBWSxFQUNaLElBQThCLEVBQ3ZCO0FBQ1AsU0FBTywrQkFBUSxDQUNiLEdBQUcsRUFDSCxpREFBeUIsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsRUFDNUMsR0FBRyxDQUNKLENBQUMsQ0FBQztDQUNKOztBQUVELE1BQU0sQ0FBQyxPQUFPLEdBQUcsNkJBQTZCLENBQUMiLCJmaWxlIjoicHJpbnRUeXBlUGFyYW1ldGVyRGVjbGFyYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE1LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIGxpY2Vuc2UgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBpblxuICogdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGZsb3dcbiAqL1xuXG5pbXBvcnQgdHlwZSB7TGluZXMsIFByaW50fSBmcm9tICcuLi8uLi90eXBlcy9jb21tb24nO1xuaW1wb3J0IHR5cGUge1R5cGVQYXJhbWV0ZXJEZWNsYXJhdGlvbn0gZnJvbSAnYXN0LXR5cGVzLWZsb3cnO1xuXG5pbXBvcnQgZmxhdHRlbiBmcm9tICcuLi8uLi91dGlscy9mbGF0dGVuJztcbmltcG9ydCBwcmludENvbW1hU2VwYXJhdGVkTm9kZXMgZnJvbSAnLi4vY29tbW9uL3ByaW50Q29tbWFTZXBhcmF0ZWROb2Rlcyc7XG5cbmZ1bmN0aW9uIHByaW50VHlwZVBhcmFtZXRlckRlY2xhcmF0aW9uKFxuICBwcmludDogUHJpbnQsXG4gIG5vZGU6IFR5cGVQYXJhbWV0ZXJEZWNsYXJhdGlvbixcbik6IExpbmVzIHtcbiAgcmV0dXJuIGZsYXR0ZW4oW1xuICAgICc8JyxcbiAgICBwcmludENvbW1hU2VwYXJhdGVkTm9kZXMocHJpbnQsIG5vZGUucGFyYW1zKSxcbiAgICAnPicsXG4gIF0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHByaW50VHlwZVBhcmFtZXRlckRlY2xhcmF0aW9uO1xuIl19