/**
 * College Path — Create Drive folder + Google Intake Form
 * -------------------------------------------------------
 * HOW TO RUN:
 * 1. https://script.google.com/ → New project
 * 2. Delete any default code; paste THIS entire file
 * 3. Save → select function createCollegePathIntake → Run
 * 4. Approve permissions (Drive, Forms, Spreadsheets; Gmail optional)
 * 5. Executions → click the run → Logs (or View → Logs)
 * 6. Copy "Form (public)" URL → paste into index.html as GOOGLE_FORM_URL
 *
 * Account: amir.katzir.email@gmail.com
 */

function createCollegePathIntake() {
  var folderName = 'College Path — Business';
  var formTitle = 'College Path: Interest Request';

  var folder = findOrCreateFolder_(folderName);
  var formsFolder = findOrCreateSubfolder_(folder, 'Intake Form & Responses');

  var form = FormApp.create(formTitle);
  form.setDescription(
    'Ready to take the next step? Fill out this form to express interest in College Path advising ' +
    'with Amir Katzir (Bay Area high school & UC-focused planning). After you submit, book a ' +
    '45-minute session ($40) on Calendly.\n\n' +
    'Educational consulting only — no admission results are guaranteed.'
  );
  form.setCollectEmail(true);
  form.setProgressBar(true);
  // Correct method name: setConfirmationMessage (not setConfirmMessage)
  form.setConfirmationMessage(
    'Thanks — your interest form was received. Please book your 45-minute session ($40) on Calendly ' +
    '(link on the website Contact page). You can also email amir.katzir.email@gmail.com.'
  );

  form.addTextItem()
    .setTitle('Full Name')
    .setRequired(true);

  form.addTextItem()
    .setTitle('Email')
    .setRequired(true);

  form.addTextItem()
    .setTitle('Phone (optional)')
    .setRequired(false);

  form.addTextItem()
    .setTitle('Current High School or College/University')
    .setRequired(true);

  form.addTextItem()
    .setTitle('City / School District (e.g. Palo Alto / PAUSD)')
    .setRequired(false);

  form.addMultipleChoiceItem()
    .setTitle('What is your current academic stage?')
    .setRequired(true)
    .setChoiceValues([
      '9th grade',
      '10th grade',
      '11th grade',
      '12th grade / applying now',
      'Community college (transfer path)',
      'Other'
    ])
    .showOtherOption(true);

  form.addTextItem()
    .setTitle('What is your intended major (or top 1–2 options)?')
    .setRequired(false);

  form.addParagraphTextItem()
    .setTitle(
      'Who are you, academically and beyond? Tell us about your studies and what you\'re ' +
      'involved in outside of the classroom — a few sentences is plenty.'
    )
    .setRequired(true);

  form.addCheckboxItem()
    .setTitle('Which of these areas do you need the most support with? (Select all that apply)')
    .setRequired(true)
    .setChoiceValues([
      'Building a school / campus list',
      'Major selection strategy',
      'Course selection / dual enrollment planning',
      'AP vs dual enrollment balance',
      'IGETC / transfer requirements',
      'TAG (Transfer Admission Guarantee) planning',
      'Personal Insight Questions (PIQ) topic strategy',
      'Extracurricular / activities framing',
      'Letters of recommendation strategy',
      'Understanding UC cost & timeline tradeoffs',
      'Early graduation planning',
      'Other'
    ]);

  form.addMultipleChoiceItem()
    .setTitle('Who is filling out this form?')
    .setRequired(true)
    .setChoiceValues(['Student', 'Parent / guardian', 'Both together']);

  form.addParagraphTextItem()
    .setTitle('Is there anything specific you\'d like to talk about in the first session?')
    .setRequired(false);

  form.addMultipleChoiceItem()
    .setTitle('How did you hear about College Path?')
    .setRequired(false)
    .setChoiceValues(['Personal website / blog', 'Friend or family', 'School community', 'Other'])
    .showOtherOption(true);

  // Move form into folder (modern Drive API)
  var formFile = DriveApp.getFileById(form.getId());
  formFile.moveTo(formsFolder);

  // Linked spreadsheet for responses
  var ss = SpreadsheetApp.create(formTitle + ' — Responses');
  form.setDestination(FormApp.DestinationType.SPREADSHEET, ss.getId());
  DriveApp.getFileById(ss.getId()).moveTo(formsFolder);

  var publishedUrl = form.getPublishedUrl();
  var editUrl = form.getEditUrl();
  var folderUrl = folder.getUrl();

  Logger.log('===== SUCCESS =====');
  Logger.log('Drive folder: ' + folderUrl);
  Logger.log('Form (public / paste into site): ' + publishedUrl);
  Logger.log('Form (edit): ' + editUrl);
  Logger.log('Responses spreadsheet is in the same Drive folder.');

  try {
    MailApp.sendEmail({
      to: Session.getActiveUser().getEmail(),
      subject: 'College Path intake form created',
      body:
        'Folder:\n' + folderUrl + '\n\n' +
        'Public form URL (GOOGLE_FORM_URL):\n' + publishedUrl + '\n\n' +
        'Edit form:\n' + editUrl + '\n'
    });
  } catch (e) {
    Logger.log('Email skip (ok): ' + e.message);
  }

  // Also show in a popup when run from the editor
  try {
    SpreadsheetApp.getUi(); // may fail outside sheets
  } catch (ignore) {}

  return {
    folderUrl: folderUrl,
    formUrl: publishedUrl,
    editUrl: editUrl
  };
}

function findOrCreateFolder_(name) {
  var it = DriveApp.getFoldersByName(name);
  if (it.hasNext()) {
    return it.next();
  }
  return DriveApp.createFolder(name);
}

function findOrCreateSubfolder_(parent, name) {
  var it = parent.getFoldersByName(name);
  if (it.hasNext()) {
    return it.next();
  }
  return parent.createFolder(name);
}
