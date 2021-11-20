var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var getAverageScore = function (mediaList) {
    if (mediaList.length == 0) {
        return 0;
    }
    var sum = 0;
    mediaList.forEach(function (m) { return sum += m.score; });
    return sum / mediaList.length;
};
var manageTags = function (tags, addTags, removeTags) {
    var newTags = __spreadArray([], tags, true);
    if (addTags) {
        addTags.forEach(function (tag) {
            if (!tags.find(function (addTag) { return addTag.id === tag.id; })) {
                newTags.push(tag);
            }
        });
    }
    if (removeTags) {
        removeTags.forEach(function (tag) {
            if (newTags.find(function (removeTag) { return removeTag.id === tag.id; })) {
                newTags = newTags.filter(function (t) { return t.id === tag.id; });
            }
        });
    }
    return newTags;
};
var getCommonSource = function (mediaList) {
    var commonSource = null;
    for (var _i = 0, _a = mediaList.map(function (m) { return m.source; }); _i < _a.length; _i++) {
        var source = _a[_i];
        if (commonSource === null) {
            commonSource = source;
        }
        else if (commonSource !== source) {
            return null;
        }
    }
    return commonSource;
};
export { getAverageScore, manageTags, getCommonSource };
//# sourceMappingURL=DomainHelpers.js.map