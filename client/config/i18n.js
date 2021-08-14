const getLang = function () {
  const lang = navigator.languages && navigator.languages[0] ||
    navigator.language ||
    navigator.browserLanguage ||
    navigator.userLanguage ||
    'en-US'

  return lang
};

i18n.setLocale(getLang());
console.log(i18n.getLocale());
CurrentLocale = new ReactiveVar(i18n.getLocale());
LocaleShort = new ReactiveVar('en');
Translate = i18n.createReactiveTranslator();

Tracker.autorun(function () {
  const language = localStorage.getItem('language');

  if (!language) {
    return;
  }

  CurrentLocale.set(language);
});

Tracker.autorun(function () {
  const language = CurrentLocale.get();

  if (!language) {
    return;
  }

  const lang = language.slice(0, 2);

  localStorage.setItem('language', language);
  i18n.setLocale(language);
  document.documentElement.setAttribute('lang', lang);
  LocaleShort.set(lang);
});

Template.registerHelper('currentLocale', function () {
  return CurrentLocale;
});

Template.registerHelper('_lang', function () {
  return LocaleShort;
});

Template.registerHelper('_', function (...datas) {
  return Translate(...datas, { _purify: true });
});