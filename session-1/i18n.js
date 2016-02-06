const dict = {
  es: {
    'days ago': 'hace %{count} días'
  },
  en: {
    'days ago': '%{count} days ago'
  }
};

const i18n = (strings, args) => {
  const key = strings.join('').trim();
  return dict[culture][key].replace('%{count}', args);
};

var culture = 'es';
console.log(i18n`${8} days ago`);

culture = 'en';
console.log(i18n`${8} days ago`);