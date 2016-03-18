var emojis = { 
  ':)': '1F60A',
  ':(': '1F621', 
  ':D': '1F600', 
  ":'D": '1F602',
  ":')": '1F602',
  ';)': '1F609',
  ':*': '1F617',
  '*)': '1F60D', 
  ':P': '1F61B', 
  ';P': '1F61C', 
  ":'(": '1F622',
  'X(': '1F623',
  ':O': '1F631', 
  ':o': '1F632',
  ':/': '1F612',
  ':\\': '1F615',
  ':|': '1F611',
  '': ''
  };

// Emojifies a string
function emojify(str)
{
  // Replace all the emoticons
  for (var emoji in emojis)
  {
    str = str.replace(new RegExp(emoji_escape(emoji), 'g'), '&#x' + emojis[emoji] + ';');
  }
  
  return str;
}

// Emojifies a DOM element
function emojify_dom(elem)
{
}


// Escapes special characters in the emojis 
function emoji_escape(str)
{
  return str.replace(/([()[{*+.$^\\|?])/g, '\\$1');
}
