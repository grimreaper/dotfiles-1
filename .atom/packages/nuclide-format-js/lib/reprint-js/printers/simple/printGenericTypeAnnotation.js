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

function printGenericTypeAnnotation(print, node) {
  return (0, _utilsFlatten2['default'])([print(node.id), node.typeParameters ? print(node.typeParameters) : _constantsMarkers2['default'].empty]);
}

module.exports = printGenericTypeAnnotation;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9yZXByaW50LWpzL3ByaW50ZXJzL3NpbXBsZS9wcmludEdlbmVyaWNUeXBlQW5ub3RhdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7NEJBYW9CLHFCQUFxQjs7OztnQ0FDckIseUJBQXlCOzs7O0FBRTdDLFNBQVMsMEJBQTBCLENBQ2pDLEtBQVksRUFDWixJQUEyQixFQUNwQjtBQUNQLFNBQU8sK0JBQVEsQ0FDYixLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUNkLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyw4QkFBUSxLQUFLLENBQ2pFLENBQUMsQ0FBQztDQUNKOztBQUVELE1BQU0sQ0FBQyxPQUFPLEdBQUcsMEJBQTBCLENBQUMiLCJmaWxlIjoicHJpbnRHZW5lcmljVHlwZUFubm90YXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE1LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIGxpY2Vuc2UgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBpblxuICogdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGZsb3dcbiAqL1xuXG5pbXBvcnQgdHlwZSB7R2VuZXJpY1R5cGVBbm5vdGF0aW9ufSBmcm9tICdhc3QtdHlwZXMtZmxvdyc7XG5pbXBvcnQgdHlwZSB7TGluZXMsIFByaW50fSBmcm9tICcuLi8uLi90eXBlcy9jb21tb24nO1xuXG5pbXBvcnQgZmxhdHRlbiBmcm9tICcuLi8uLi91dGlscy9mbGF0dGVuJztcbmltcG9ydCBtYXJrZXJzIGZyb20gJy4uLy4uL2NvbnN0YW50cy9tYXJrZXJzJztcblxuZnVuY3Rpb24gcHJpbnRHZW5lcmljVHlwZUFubm90YXRpb24oXG4gIHByaW50OiBQcmludCxcbiAgbm9kZTogR2VuZXJpY1R5cGVBbm5vdGF0aW9uLFxuKTogTGluZXMge1xuICByZXR1cm4gZmxhdHRlbihbXG4gICAgcHJpbnQobm9kZS5pZCksXG4gICAgbm9kZS50eXBlUGFyYW1ldGVycyA/IHByaW50KG5vZGUudHlwZVBhcmFtZXRlcnMpIDogbWFya2Vycy5lbXB0eSxcbiAgXSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcHJpbnRHZW5lcmljVHlwZUFubm90YXRpb247XG4iXX0=