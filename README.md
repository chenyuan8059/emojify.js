# Emojify.js
Short JavaScript code to easily utilize unicode emojis without memorizing, or looking up, the unicode value of each emoji.

This library has the most common, and versatile, emojis while remaining lightweight and easy to use.

## Syntax 
This library contains 32 of the most common emojis for your use, to use them simply surround the name of the emoji in colons, like ```:emojiname:```


Here is a list of the emojis names available to use, and the emoji they become: 
```
                smile -> 😊
      frown, pounting -> 😡
       grin, grinning -> 😀
             bigsmile -> 😄
             laughcry -> 😂
                 wink -> 😉
                 kiss -> 😗
            hearteyes -> 😍
            tongueout -> 😛
         tongeoutwink -> 😜
          cry, crying -> 😢
                angry -> 😣
               scream -> 😱
        gasp, shocked -> 😲
             unamused -> 😒
         noexpression -> 😑
       smilewithhorns -> 😈
             relieved -> 😌
           sunglasses -> 😎
              worried -> 😟
              fearful -> 😨
              triumph -> 😤
             sleeping -> 😴
                dizzy -> 😵
              nomouth -> 😶
           blankstare -> 😐
          medicalmask -> 😷
          halo, angel -> 😇
delicious, tonguelick -> 😋
```

## Usage 
Using this library is really simple, all you do is append ```.emojify()``` onto an HTMLElement, NodeList, or HTMLCollection of your choosing, and run it when the window loads.

```javascript
window.addEventListener('load', function(){
  document.getElementById('emoji').emojify();
});
```
This will only replace the emoji text with emojis in the element with the ID of ```emoji```


If you wanted to use emojis anywhere in the webpage, try this:
```javascript
window.addEventListener('load', function(){
  document.getElementsByTagName('body').emojify();
});
```
This will replace all the emoji names within the ```<body>``` and ```</body>``` tags.


Since this piggybacks on HTMLElement, NodeList, and HTMLCollection, that means you can use any of the following:
```javascript
document.getElementById()
document.getElementsByClassName()
document.getElementsByTagName()
document.getElementsByName()
document.querySelector()
document.querySelectorAll()
```
And any others that return a HTMLElement, NodeList, or HTMLCollection!


## Example 
See an [example on CodePen](http://codepen.io/mwrouse/pen/EKZzRX).


## License 
Distributed under the [MIT License](https://raw.githubusercontent.com/mwrouse/emojify.js/master/LICENSE)
