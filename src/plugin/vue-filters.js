import Vue from "vue";

//titlecase - Capitalize first letter of each word
Vue.filter('titlecase', function(val){
    if (!val) {
        return '';
    }else{
        return val.replace(/\b\w/g, first => first.toLocaleUpperCase()) 
    }
})

Vue.filter('formatDate', function (value, format, locale = 'en-US') {
    if (!value) return '';
  
    const date = new Date(value);
  
    const options = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: false // Use 24-hour format
    };
  
    const formatter = new Intl.DateTimeFormat(locale, options);
    const formattedDate = formatter.format(date);
  
    return formattedDate;
  });