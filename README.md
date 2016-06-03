# PolymerFirebase_BasicNodeApp
![homePageScreenShot](md_img/homePageScreenShot.png)

# View this project live
[My project](https://< your project name >.firebaseapp.com/)
* Live as of 2June16

## Information
* Created from a [web tutorial](https://codelabs.developers.google.com/codelabs/polymer-firebase-pwa/index.html?index=..%2F..%2Fio2016#0)

## Content
### Sign in with google/account creation
![googleSignin](md_img/googleSignin.png)

### Create Notes
![noteExample](md_img/noteExample.png)

### allows "on the line" or "off the line" support
![offline](md_img/offline.png)

### Looks like a native app on android
<img src="md_img/Android_pageIcon.png" alt="Android_pageIcon" style="width: 200px;"/>
<img src="md_img/Android_splashScreen.png" alt="Android_splashScreen.png" style="width: 200px;"/>
<img src="md_img/Android_inApp.png" alt="Android_inApp.png" style="width: 200px;"/>

*note* that the previously created note syncs


## Motivation
* Use *up to date* elements
* Gain polymer experience
* Gain firebase experience

## keywords
Progressive web application, Google, polymer, "there's an element for that", firebase

## Notes
* Modifications needed to work
  * index.html
    * api-key="< your API-key >"
    * auth-domain="< your auth-domain >"
    * database-url="< your database-url >"
  * .firebaserc
    * "default": "< your project name >"
