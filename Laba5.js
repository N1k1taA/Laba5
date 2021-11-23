var collectionBut = [].slice.call(document.getElementsByClassName('but'));
var collectionNewsContent = [].slice.call(document.getElementsByClassName('newContent'));
var collectionNews = [].slice.call(document.getElementsByClassName('content'));
var clickElem = document.getElementById('clickElem');
const body = document.getElementsByTagName("body")[0];
var openElem;

clickElem.hidden = true;
clickElem.onclick = function() {
  if(openElem != null)
  {
    collectionNewsContent[collectionBut.indexOf(openElem)].hidden = true;
    for (var news of collectionNews) {
      news.style.opacity = '1';
    }
  }clickElem.hidden = true;
}

for (var newsContent of collectionNewsContent) {
  newsContent.hidden = true;
}

for (var but of collectionBut){
  but.onclick = function() {
    collectionNewsContent[collectionBut.indexOf(this)].hidden = false;
    for (var news of collectionNews) {
      news.style.opacity = '0.5';
    }
    clickElem.hidden = false;
    openElem = this;
  }
}