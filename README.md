jQuery Social Sidebars
=============

Animated social sidebars with jQuery.
This simple script is useable for creating social bars on your site's left side.

####Installation:

   - create a div inside your body tag.

```
 <div id="socialside"></div>
```

 - include css/social.css file into your header

```
 <link rel="stylesheet" type="text/css" href="css/social.css" />
```
>*Note:*
>If you want the social bars scrolling with your page, set position under "#socialside" to *absolute*,
>on the other hand, if you want them on a fix position, leave it on *fixed*.
>You can adjust its' vertical position, with changing value of *top*.

 - include jQuery files into your header too.
     **(Important! Include files in this ordering!)**

``` 
<script src="js/jquery-2.1.0.min.js" type="text/javascript"></script>
```
```
<script src="js/jquery-ui.min.js" type="text/javascript"></script>
```
```
<script src="js/socialbars.js" type="text/javascript"></script>
```

 - edit socialbars.js:
        
>After "var social=..." line every brackets represents ONE social bar.
Just fill the brackets with some data and let the magic happen!
        
Here is a sample how to fill the brackets:

```
["Bar label", "link to your profile", "bar background color", "bar logo"]
```
        
*The optimal bar logo size is 30px * 30px.*
        
####Icons:
Social icons by Desing Deck (http://www.designdeck.co.uk/a/1252) is already included.
        
