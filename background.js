// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

let checkArabic = ( character ) => {
  var RTL = ['ا','ب','پ','ت','س','ج','چ','ح','خ','د','ذ','ر','ز','ژ','س','ش','ص','ض','ط','ظ','ع','غ','ف','ق','ک','گ','ل','م','ن','و','ه','ی'];
  return RTL.indexOf( character ) > -1;
}

let sheet = (() => {
let style = document.createElement("style");
style.appendChild(document.createTextNode(""));
document.head.appendChild(style);
return style.sheet;
})();

let checkPost = () => {
  let post = document.getElementsByClassName('postArticle-content')[0];
  if(post && post.textContent && post.textContent.length && checkArabic(post.textContent[0])) {
     sheet.insertRule(".postArticle-content { direction: rtl !important }");
     sheet.insertRule(".postArticle-content .u-paddingLeft15 { padding-right: 15px !important }");
  }
};

// document.onload = () => { checkPost() };
setTimeout(checkPost, 100);
