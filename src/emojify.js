/**
 * ====================================
 *          Emojify.js
 * ===================================
 *
 * Author.......: Michael Rouse
 * Language.....: JavaScript
 * Date.........: March 2016
 *
 * Description..: This JavaScript library allows you to quickly use unicode emojis with a simple syntax
 */
(function(){
  var emojify = function(prefix, suffix){
    // Default variables
    prefix = (prefix === undefined) ? ':' : prefix;
    suffix = (suffix === undefined) ? ':' : suffix;

    // Do not break scope
    if (this === HTMLElement || this === NodeList || this === HTMLCollection)
    {
      return new emojify(prefix, suffix);
    }

    // Remember parent element
    this.parent = this;

    // List of emojis
    this.emojis = {
               'smile': '1F60A',
               'frown': '1F621',
             'pouting': '1F621',
                'grin': '1F600',
            'grinning': '1F600',
            'bigsmile': '1F604',
            'laughcry': '1F602',
                'wink': '1F609',
                'kiss': '1F617',
            'kisswink': '1F618',
           'hearteyes': '1F60D',
           'tongueout': '1F61B',
       'tongueoutwink': '1F61C',
                 'cry': '1F622',
              'crying': '1F622',
               'angry': '1F623',
              'scream': '1F631',
            'schocked': '1F632',
                'gasp': '1F632',
            'unamused': '1F612',
            'confused': '1F615',
        'noexpression': '1F611',
      'smilewithhorns': '1F608',
            'relieved': '1F60C',
          'sunglasses': '1F60E',
             'worried': '1F61F',
             'fearful': '1F628',
             'triumph': '1F624',
            'sleeping': '1F634',
               'dizzy': '1F635',
             'nomouth': '1F636',
          'blankstare': '1F636',
         'medicalmask': '1F637',
                'halo': '1F607',
               'angel': '1F607',
          'tonguelick': '1F60B',
           'delicious': '1F60B',
    };


    /**
     * Function.....: Replace Emojis
     * Author.......: Michael Rouse
     * Parameters...: elem - the element to replace emojis in
     * Description..: This function will take an element and replace text-emojis inside of it with the unicode emoji
     */
    this.replaceEmojis = function(elem)
    {
      var html = elem.innerHTML;

      // Replace emojis with the unicode value
      for (var emoji in this.emojis)
      {
        html = html.replace(new RegExp(prefix+emoji+suffix, 'g'), '&#x'+this.emojis[emoji]+';');
      }

      return html;
    };  // End this.replaceEmojis


    /**
     * Function.....: Replace
     * Author.......: Michael Rouse
     * Description..: This function is responsible for calling replaceList and updating elements
     */
    this.replace = function()
    {
      // Perform on a list of elements
      if(this.parent instanceof NodeList || this.parent instanceof HTMLCollection)
      {
        // Replace in every element in the parent nodelist
        for (var i = 0; i < this.parent.length; i++)
        {
          this.parent[i].innerHTML = this.replaceEmojis(this.parent[i]);
        }
      }
      else
      {
        // Parent is just one single HTMLElement
        this.parent.innerHTML = this.replaceEmojis(this.parent);
      }

      return;
    }; // End this.replace


    // Constructor
    this.replace();

    return this;
  }; // End emojify()


  // Initialize the library
  if (!HTMLElement.prototype.emojify)
  {
    HTMLElement.prototype.emojify = emojify;
  }
  if (!NodeList.prototype.emojify)
  {
    NodeList.prototype.emojify = emojify;
  }
  if (!HTMLCollection.prototype.emojify)
  {
    HTMLCollection.prototype.emojify = emojify;
  }
}());
