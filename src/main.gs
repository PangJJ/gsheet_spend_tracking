function onEdit(e) {
  if (e.range.getRow() == 5 && e.range.getColumn() == 1 ) {
    if (e.range.getValue()) {
      insertData();
    } 
    e.range.setValue(false);
  }
}

function insertData() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const inputData = readDataFromSheet(spreadsheet, "UI");
  const dataSheet = spreadsheet.getSheetByName("data");

  const dayMonthYear = getDayMonthYear();
  const rowData = [
    dayMonthYear.day,
    dayMonthYear.month,
    Utilities.formatDate(dayMonthYear.ref_date, "Asia/Singapore", "dd/MM")
  ].concat(inputData);

  dataSheet.appendRow(rowData)

  // set format for dd and mm
  dataSheet.getRange(dataSheet.getLastRow(), 1, 1, 2).setNumberFormat([['00']]);
  // set format for currency
  dataSheet.getRange(dataSheet.getLastRow(), 5, 1, 1).setNumberFormat([['$0.00']]);
}

function readDataFromSheet(spreadsheet, sheetName) {
  const inputSheet = spreadsheet.getSheetByName(sheetName);
  return inputSheet.getRange("D2:D5").getValues().flat();
}

function getDayMonthYear(){
  const refDate = new Date();
  const formattedDate = Utilities.formatDate(refDate, "GMT+8", "dd/MM");
  const dayOfMonth = formattedDate.substring(0, 2);
  return {
    day: dayOfMonth,
    month: refDate.getMonth()+1,
    year: refDate.getFullYear(),
    day_month: formattedDate,
    ref_date: refDate
  }
}
