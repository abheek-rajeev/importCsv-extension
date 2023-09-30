function onOpen(){
  SpreadsheetApp.getUi()
    .createMenu("Import CSV")
    .addItem("Drop CSV(sidebar)","sideBarImportCsv")
    .addItem("Drop CSV(popup)","popupImportCsv")
    .addToUi()
}

function sideBarImportCsv(){
  // fuction to create a sidebar
  // SpreadsheetApp.getActive().toast("import a csv file"); 
  const html=HtmlService.createTemplateFromFile("importCsvSidebar").evaluate();
    html.setTitle("Import a CSV File");
  SpreadsheetApp.getUi().showSidebar(html)
}
function popupImportCsv(){
  var template = HtmlService.createTemplateFromFile('importCsvPopup');
  const html=template.evaluate()
    .setWidth(600) // You can adjust the width and height as needed
    .setHeight(300);
  SpreadsheetApp.getUi().showModalDialog(html,'Import a CSV File');
}