/*
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 *
 * 
 */

/**
 * Converts a position given as {row, column} to a single number which is the
 * index the cursor appears in the source string.
 *
 * index is given such that source.slice(0, index) is the precise  string that
 * occurs before the cursor, and source.slice(index) is the string that occurs
 * after the cursor.
 */
function getRawPosition(source, position) {
  return source.split('\n').reduce(function (curr, line, i) {
    if (i < position.row) {
      return curr + line.length + 1;
    } else if (i === position.row) {
      return curr + position.column;
    } else {
      return curr;
    }
  }, 0);
}

module.exports = getRawPosition;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91cGRhdGUtY3Vyc29yL2dldFJhd1Bvc2l0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCQSxTQUFTLGNBQWMsQ0FDckIsTUFBYyxFQUNkLFFBQXVDLEVBQy9CO0FBQ1IsU0FBTyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FDOUIsVUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBSztBQUNqQixRQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsR0FBRyxFQUFFO0FBQ3BCLGFBQU8sSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0tBQy9CLE1BQU0sSUFBSSxDQUFDLEtBQUssUUFBUSxDQUFDLEdBQUcsRUFBRTtBQUM3QixhQUFPLElBQUksR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO0tBQy9CLE1BQU07QUFDTCxhQUFPLElBQUksQ0FBQztLQUNiO0dBQ0YsRUFDRCxDQUFDLENBQ0YsQ0FBQztDQUNIOztBQUVELE1BQU0sQ0FBQyxPQUFPLEdBQUcsY0FBYyxDQUFDIiwiZmlsZSI6ImdldFJhd1Bvc2l0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNS1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBsaWNlbnNlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgaW5cbiAqIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBmbG93XG4gKi9cblxuLyoqXG4gKiBDb252ZXJ0cyBhIHBvc2l0aW9uIGdpdmVuIGFzIHtyb3csIGNvbHVtbn0gdG8gYSBzaW5nbGUgbnVtYmVyIHdoaWNoIGlzIHRoZVxuICogaW5kZXggdGhlIGN1cnNvciBhcHBlYXJzIGluIHRoZSBzb3VyY2Ugc3RyaW5nLlxuICpcbiAqIGluZGV4IGlzIGdpdmVuIHN1Y2ggdGhhdCBzb3VyY2Uuc2xpY2UoMCwgaW5kZXgpIGlzIHRoZSBwcmVjaXNlICBzdHJpbmcgdGhhdFxuICogb2NjdXJzIGJlZm9yZSB0aGUgY3Vyc29yLCBhbmQgc291cmNlLnNsaWNlKGluZGV4KSBpcyB0aGUgc3RyaW5nIHRoYXQgb2NjdXJzXG4gKiBhZnRlciB0aGUgY3Vyc29yLlxuICovXG5mdW5jdGlvbiBnZXRSYXdQb3NpdGlvbihcbiAgc291cmNlOiBzdHJpbmcsXG4gIHBvc2l0aW9uOiB7cm93OiBudW1iZXIsIGNvbHVtbjogbnVtYmVyfSxcbik6IG51bWJlciB7XG4gIHJldHVybiBzb3VyY2Uuc3BsaXQoJ1xcbicpLnJlZHVjZShcbiAgICAoY3VyciwgbGluZSwgaSkgPT4ge1xuICAgICAgaWYgKGkgPCBwb3NpdGlvbi5yb3cpIHtcbiAgICAgICAgcmV0dXJuIGN1cnIgKyBsaW5lLmxlbmd0aCArIDE7XG4gICAgICB9IGVsc2UgaWYgKGkgPT09IHBvc2l0aW9uLnJvdykge1xuICAgICAgICByZXR1cm4gY3VyciArIHBvc2l0aW9uLmNvbHVtbjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjdXJyO1xuICAgICAgfVxuICAgIH0sXG4gICAgMCxcbiAgKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRSYXdQb3NpdGlvbjtcbiJdfQ==