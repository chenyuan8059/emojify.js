var emojis = { ':)': '😊', ':(': '😡', ':D': '😁', ';)': '😉', ':*': '😘', '*)': '😍', ':P': '😝', ';P': '😜', ":'(": '😢', 'X(': '😣', ':O': '😱', ':o': '😲', ':/': '😩', ':|': '😔' };

// Emojifies a string
function emojify(str)
{
  // Replace all the emoticons
  for (var emoji in emojis)
  {
    str = str.replace(new RegExp(emoji_escape(emoji), 'g'), emojis[emoji]);
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
