"use strict";function getKey(e){return Object.keys(e)[0]}function getValue(e){return e[getKey(e)]}function massageSort(e){if(!Array.isArray(e))throw new Error("invalid sort json - should be an array");return e.map(function(e){if("string"==typeof e){var t={};return t[e]="asc",t}return e})}function isCombinationalField(e){return combinationFields.indexOf(e)>-1}function mergeGtGte(e,t,n){"undefined"==typeof n.$eq&&("undefined"!=typeof n.$gte?"$gte"===e?t>n.$gte&&(n.$gte=t):t>=n.$gte&&(delete n.$gte,n.$gt=t):"undefined"!=typeof n.$gt?"$gte"===e?t>n.$gt&&(delete n.$gt,n.$gte=t):t>n.$gt&&(n.$gt=t):n[e]=t)}function mergeLtLte(e,t,n){"undefined"==typeof n.$eq&&("undefined"!=typeof n.$lte?"$lte"===e?t<n.$lte&&(n.$lte=t):t<=n.$lte&&(delete n.$lte,n.$lt=t):"undefined"!=typeof n.$lt?"$lte"===e?t<n.$lt&&(delete n.$lt,n.$lte=t):t<n.$lt&&(n.$lt=t):n[e]=t)}function mergeNe(e,t){"$ne"in t?t.$ne.push(e):t.$ne=[e]}function mergeEq(e,t){delete t.$gt,delete t.$gte,delete t.$lt,delete t.$lte,delete t.$ne,t.$eq=e}function mergeAndedSelectors(e){var t={};return e.forEach(function(e){Object.keys(e).forEach(function(n){var r=e[n];if("object"!=typeof r&&(r={$eq:r}),isCombinationalField(n))r instanceof Array?t[n]=r.map(function(e){return mergeAndedSelectors([e])}):t[n]=mergeAndedSelectors([r]);else{var i=t[n]=t[n]||{};Object.keys(r).forEach(function(e){var t=r[e];return"$gt"===e||"$gte"===e?mergeGtGte(e,t,i):"$lt"===e||"$lte"===e?mergeLtLte(e,t,i):"$ne"===e?mergeNe(t,i):"$eq"===e?mergeEq(t,i):void(i[e]=t)})}})}),t}function massageSelector(e){var t=utils.clone(e),n=!1;"$and"in t&&(t=mergeAndedSelectors(t.$and),n=!0),"$not"in t&&(t.$not=mergeAndedSelectors([t.$not]));for(var r=Object.keys(t),i=0;i<r.length;i++){var l=r[i],o=t[l];"object"!=typeof o?o={$eq:o}:"$ne"in o&&!n&&(o.$ne=[o.$ne]),t[l]=o}return t}function massageIndexDef(e){return e.fields=e.fields.map(function(e){if("string"==typeof e){var t={};return t[e]="asc",t}return e}),e}function getKeyFromDoc(e,t){for(var n=[],r=0;r<t.def.fields.length;r++){var i=getKey(t.def.fields[r]);n.push(e[i])}return n}function filterInclusiveStart(e,t,n){for(var r=n.def.fields,i=0,l=e.length;l>i;i++){var o=e[i],s=getKeyFromDoc(o.doc,n);if(1===r.length)s=s[0];else for(;s.length>t.length;)s.pop();if(Math.abs(collate.collate(s,t))>0)break}return i>0?e.slice(i):e}function reverseOptions(e){var t=utils.clone(e);return delete t.startkey,delete t.endkey,delete t.inclusive_start,delete t.inclusive_end,"endkey"in e&&(t.startkey=e.endkey),"startkey"in e&&(t.endkey=e.startkey),"inclusive_start"in e&&(t.inclusive_end=e.inclusive_start),"inclusive_end"in e&&(t.inclusive_start=e.inclusive_end),t}function validateIndex(e){var t=e.fields.filter(function(e){return"asc"===getValue(e)});if(0!==t.length&&t.length!==e.fields.length)throw new Error("unsupported mixed sorting")}function validateFindRequest(e){if("object"!=typeof e.selector)throw new Error("you must provide a selector when you find()");var t=Object.keys(e.selector),n=e.sort?massageSort(e.sort).map(getKey):[];if(!utils.oneSetIsSubArrayOfOther(t,n))throw new Error("conflicting sort and selector fields");for(var r=e.selector.$and||[e.selector],i=0;i<r.length;i++){var l=r[i],o=Object.keys(l);if(0===o.length)throw new Error("invalid empty selector")}}function parseField(e){for(var t=[],n="",r=0,i=e.length;i>r;r++){var l=e[r];"."===l?r>0&&"\\"===e[r-1]?n=n.substring(0,n.length-1)+".":(t.push(n),n=""):n+=l}return t.push(n),t}function getUserFields(e,t){var n,r=Object.keys(e),i=t?t.map(getKey):[];return n=r.length>i.length?r:i,0===i.length?{fields:n}:(n=n.sort(function(e,t){var n=i.indexOf(e);-1===n&&(n=Number.MAX_VALUE);var r=i.indexOf(t);return-1===r&&(r=Number.MAX_VALUE),r>n?-1:n>r?1:0}),{fields:n,sortOrder:t.map(getKey)})}var utils=require("../../utils"),collate=require("pouchdb-collate"),combinationFields=["$or","$nor","$not"];module.exports={getKey:getKey,getValue:getValue,massageSort:massageSort,massageSelector:massageSelector,validateIndex:validateIndex,validateFindRequest:validateFindRequest,reverseOptions:reverseOptions,filterInclusiveStart:filterInclusiveStart,massageIndexDef:massageIndexDef,parseField:parseField,getUserFields:getUserFields,isCombinationalField:isCombinationalField};
