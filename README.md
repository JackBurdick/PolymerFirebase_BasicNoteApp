# PolymerFirebase_BasicNodeApp
![homePageScreenShot](md_img/homePageScreenShot.png)

# View this project live
![My project](https://< your project name >.firebaseapp.com/)
* live as of 2June16

## Information
* Created from a [web tutorial](https://codelabs.developers.google.com/codelabs/polymer-firebase-pwa/index.html?index=..%2F..%2Fio2016#0)

## Content
### Sign in with google/account creation
![googleSignin](md_img/googleSignin.png)

### Create Notes
![noteExample](md_img/noteExample.png)

### allows "on the line" or "off the line" support
![offline](md_img/offline.png)

### Looks like a "native app" on android
[Android_pageIcon](public/md_img/Android_pageIcon.png)![Android_inApp](public/md_img/Android_inApp.png)![Android_splashScreen](public/md_img/Android_splashScreen.png)
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
