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

function printForStatement(print, node) {
  var wrap = function wrap(x) {
    return (0, _wrappersSimpleWrapStatement2['default'])(print, node, x);
  };

  var parts = [_constantsMarkers2['default'].hardBreak, 'for (', _constantsMarkers2['default'].openScope, _constantsMarkers2['default'].scopeIndent];
  parts.push(_constantsMarkers2['default'].scopeBreak);
  if (node.init) {
    var init = node.init;
    parts.push(print(init));
  }
  parts.push(';');
  parts.push(_constantsMarkers2['default'].scopeBreak);
  if (node.test) {
    var test = node.test;
    parts = parts.concat([_constantsMarkers2['default'].space, print(test)]);
  }
  parts.push(';');
  parts.push(_constantsMarkers2['default'].scopeBreak);
  if (node.update) {
    var update = node.update;
    parts = parts.concat([_constantsMarkers2['default'].space, print(update)]);
    // We only need an additional one if there was an update, otherwise we
    // just ended with a scopeBreak.
    parts.push(_constantsMarkers2['default'].scopeBreak);
  }
  parts = parts.concat([_constantsMarkers2['default'].scopeDedent, _constantsMarkers2['default'].closeScope, ')', _constantsMarkers2['default'].space, print(node.body)]);
  return wrap(parts);
}

module.exports = printForStatement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9yZXByaW50LWpzL3ByaW50ZXJzL3NpbXBsZS9wcmludEZvclN0YXRlbWVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Z0NBYW9CLHlCQUF5Qjs7OzsyQ0FDbkIscUNBQXFDOzs7O0FBRS9ELFNBQVMsaUJBQWlCLENBQUMsS0FBWSxFQUFFLElBQWtCLEVBQVM7QUFDbEUsTUFBTSxJQUFJLEdBQUcsU0FBUCxJQUFJLENBQUcsQ0FBQztXQUFJLDhDQUFjLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0dBQUEsQ0FBQzs7QUFFaEQsTUFBSSxLQUFLLEdBQUcsQ0FDViw4QkFBUSxTQUFTLEVBQ2pCLE9BQU8sRUFDUCw4QkFBUSxTQUFTLEVBQ2pCLDhCQUFRLFdBQVcsQ0FDcEIsQ0FBQztBQUNGLE9BQUssQ0FBQyxJQUFJLENBQUMsOEJBQVEsVUFBVSxDQUFDLENBQUM7QUFDL0IsTUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO0FBQ2IsUUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztBQUN2QixTQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0dBQ3pCO0FBQ0QsT0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNoQixPQUFLLENBQUMsSUFBSSxDQUFDLDhCQUFRLFVBQVUsQ0FBQyxDQUFDO0FBQy9CLE1BQUksSUFBSSxDQUFDLElBQUksRUFBRTtBQUNiLFFBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7QUFDdkIsU0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FDbkIsOEJBQVEsS0FBSyxFQUNiLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FDWixDQUFDLENBQUM7R0FDSjtBQUNELE9BQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDaEIsT0FBSyxDQUFDLElBQUksQ0FBQyw4QkFBUSxVQUFVLENBQUMsQ0FBQztBQUMvQixNQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7QUFDZixRQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0FBQzNCLFNBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQ25CLDhCQUFRLEtBQUssRUFDYixLQUFLLENBQUMsTUFBTSxDQUFDLENBQ2QsQ0FBQyxDQUFDOzs7QUFHSCxTQUFLLENBQUMsSUFBSSxDQUFDLDhCQUFRLFVBQVUsQ0FBQyxDQUFDO0dBQ2hDO0FBQ0QsT0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FDbkIsOEJBQVEsV0FBVyxFQUNuQiw4QkFBUSxVQUFVLEVBQ2xCLEdBQUcsRUFDSCw4QkFBUSxLQUFLLEVBQ2IsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FDakIsQ0FBQyxDQUFDO0FBQ0gsU0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Q0FDcEI7O0FBRUQsTUFBTSxDQUFDLE9BQU8sR0FBRyxpQkFBaUIsQ0FBQyIsImZpbGUiOiJwcmludEZvclN0YXRlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgbGljZW5zZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGluXG4gKiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAZmxvd1xuICovXG5cbmltcG9ydCB0eXBlIHtGb3JTdGF0ZW1lbnR9IGZyb20gJ2FzdC10eXBlcy1mbG93JztcbmltcG9ydCB0eXBlIHtMaW5lcywgUHJpbnR9IGZyb20gJy4uLy4uL3R5cGVzL2NvbW1vbic7XG5cbmltcG9ydCBtYXJrZXJzIGZyb20gJy4uLy4uL2NvbnN0YW50cy9tYXJrZXJzJztcbmltcG9ydCB3cmFwU3RhdGVtZW50IGZyb20gJy4uLy4uL3dyYXBwZXJzL3NpbXBsZS93cmFwU3RhdGVtZW50JztcblxuZnVuY3Rpb24gcHJpbnRGb3JTdGF0ZW1lbnQocHJpbnQ6IFByaW50LCBub2RlOiBGb3JTdGF0ZW1lbnQpOiBMaW5lcyB7XG4gIGNvbnN0IHdyYXAgPSB4ID0+IHdyYXBTdGF0ZW1lbnQocHJpbnQsIG5vZGUsIHgpO1xuXG4gIGxldCBwYXJ0cyA9IFtcbiAgICBtYXJrZXJzLmhhcmRCcmVhayxcbiAgICAnZm9yICgnLFxuICAgIG1hcmtlcnMub3BlblNjb3BlLFxuICAgIG1hcmtlcnMuc2NvcGVJbmRlbnQsXG4gIF07XG4gIHBhcnRzLnB1c2gobWFya2Vycy5zY29wZUJyZWFrKTtcbiAgaWYgKG5vZGUuaW5pdCkge1xuICAgIGNvbnN0IGluaXQgPSBub2RlLmluaXQ7XG4gICAgcGFydHMucHVzaChwcmludChpbml0KSk7XG4gIH1cbiAgcGFydHMucHVzaCgnOycpO1xuICBwYXJ0cy5wdXNoKG1hcmtlcnMuc2NvcGVCcmVhayk7XG4gIGlmIChub2RlLnRlc3QpIHtcbiAgICBjb25zdCB0ZXN0ID0gbm9kZS50ZXN0O1xuICAgIHBhcnRzID0gcGFydHMuY29uY2F0KFtcbiAgICAgIG1hcmtlcnMuc3BhY2UsXG4gICAgICBwcmludCh0ZXN0KSxcbiAgICBdKTtcbiAgfVxuICBwYXJ0cy5wdXNoKCc7Jyk7XG4gIHBhcnRzLnB1c2gobWFya2Vycy5zY29wZUJyZWFrKTtcbiAgaWYgKG5vZGUudXBkYXRlKSB7XG4gICAgY29uc3QgdXBkYXRlID0gbm9kZS51cGRhdGU7XG4gICAgcGFydHMgPSBwYXJ0cy5jb25jYXQoW1xuICAgICAgbWFya2Vycy5zcGFjZSxcbiAgICAgIHByaW50KHVwZGF0ZSksXG4gICAgXSk7XG4gICAgLy8gV2Ugb25seSBuZWVkIGFuIGFkZGl0aW9uYWwgb25lIGlmIHRoZXJlIHdhcyBhbiB1cGRhdGUsIG90aGVyd2lzZSB3ZVxuICAgIC8vIGp1c3QgZW5kZWQgd2l0aCBhIHNjb3BlQnJlYWsuXG4gICAgcGFydHMucHVzaChtYXJrZXJzLnNjb3BlQnJlYWspO1xuICB9XG4gIHBhcnRzID0gcGFydHMuY29uY2F0KFtcbiAgICBtYXJrZXJzLnNjb3BlRGVkZW50LFxuICAgIG1hcmtlcnMuY2xvc2VTY29wZSxcbiAgICAnKScsXG4gICAgbWFya2Vycy5zcGFjZSxcbiAgICBwcmludChub2RlLmJvZHkpLFxuICBdKTtcbiAgcmV0dXJuIHdyYXAocGFydHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHByaW50Rm9yU3RhdGVtZW50O1xuIl19