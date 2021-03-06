

/**
 * Completely flattens an array of arrays.
 */
function flatten(arr_) {
  // For some reason, Flow hits a recursion limit when trying to typecheck this. Get out with `any`.
  var arr = arr_;
  while (arr.some(function (el) {
    return Array.isArray(el);
  })) {
    arr = Array.prototype.concat.apply([], arr);
  }
  return arr;
}

/*
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 *
 * 
 */

module.exports = flatten;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yZXByaW50LWpzL3V0aWxzL2ZsYXR0ZW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFlQSxTQUFTLE9BQU8sQ0FBSSxJQUFvQixFQUFZOztBQUVsRCxNQUFJLEdBQVEsR0FBRyxJQUFJLENBQUM7QUFDcEIsU0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQUEsRUFBRTtXQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO0dBQUEsQ0FBQyxFQUFFO0FBQ3hDLE9BQUcsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0dBQzdDO0FBQ0QsU0FBUSxHQUFHLENBQU87Q0FDbkI7Ozs7Ozs7Ozs7OztBQUVELE1BQU0sQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDIiwiZmlsZSI6ImZsYXR0ZW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE1LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIGxpY2Vuc2UgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBpblxuICogdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGZsb3dcbiAqL1xuXG50eXBlIE5lc3RlZEFycmF5PFQ+ID0gQXJyYXk8VCB8IE5lc3RlZEFycmF5PFQ+PjtcblxuLyoqXG4gKiBDb21wbGV0ZWx5IGZsYXR0ZW5zIGFuIGFycmF5IG9mIGFycmF5cy5cbiAqL1xuZnVuY3Rpb24gZmxhdHRlbjxUPihhcnJfOiBOZXN0ZWRBcnJheTxUPik6IEFycmF5PFQ+IHtcbiAgLy8gRm9yIHNvbWUgcmVhc29uLCBGbG93IGhpdHMgYSByZWN1cnNpb24gbGltaXQgd2hlbiB0cnlpbmcgdG8gdHlwZWNoZWNrIHRoaXMuIEdldCBvdXQgd2l0aCBgYW55YC5cbiAgbGV0IGFycjogYW55ID0gYXJyXztcbiAgd2hpbGUgKGFyci5zb21lKGVsID0+IEFycmF5LmlzQXJyYXkoZWwpKSkge1xuICAgIGFyciA9IEFycmF5LnByb3RvdHlwZS5jb25jYXQuYXBwbHkoW10sIGFycik7XG4gIH1cbiAgcmV0dXJuIChhcnI6IGFueSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZmxhdHRlbjtcbiJdfQ==