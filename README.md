# Eat Me

Eat Me is a native iOS app that helps users keep track of their food's expiration dates to reduce food waste. It was built in 8 days using React Native.

### Contributors

[Sean Blundell](https://github.com/Simba14) |
[Pete Wilkins](https://github.com/petewilkins) |
[Jessica Rodriguez](https://github.com/j-rods) |
[Magnus Holm](https://github.com/mghlm)


![alt text](http://i.imgur.com/6WTJeRP.jpg)


### How to demo the app

**1. Install node (if you haven't already)**
```
$ brew install node
```
**2. Clone and update repo**
```
$ git clone git@github.com:Simba14/EatMe.git
$ cd EatMe
$ npm install
```
If you encounter any errors, update note and try again
```
$ npm update
```

**3. Download xcode**

- [Download Xcode here along with other useful tools](http://www.preparetocode.io/pick-your-os/)

**4. Set up simulator**

- Make sure you're in the EatMe directory

```
$ react-native run-ios
```

**5. Have fun!**




<!-- ### Screenshots

![alt text](http://i.imgur.com/MHGWpCJ.jpg)
![alt text](http://i.imgur.com/q12DKzb.jpg)
![alt text](http://i.imgur.com/h6mzXEj.jpg)
![alt text](http://i.imgur.com/HLaPsrl.jpg)
![alt text](http://i.imgur.com/LjMCIdi.jpg)
![alt text](http://i.imgur.com/QJ94vNF.jpg) -->


### Technologies used

- [React Native](https://facebook.github.io/react-native/)
(Main language used to built the app.)

- [Jest](https://facebook.github.io/jest/)
(Testing framework)

- [Realm](https://realm.io/)
(Used to set up local databases to store information about food items)

- [FlexBox](https://facebook.github.io/react-native/docs/flexbox.html)
(Used to style the app)

- [UPC Database API](https://www.upcdatabase.com/)
(API used for looking up food items based on Barcode information)

- [Food2Fork API](http://food2fork.com/about/api)
(API used for looking up recipes based on user's current food items)

### Acknowledgements

[Stephen Grider](https://www.udemy.com/user/sgslo/) from Udmey.

### Future Additions

- Android version

### Screenshots

![alt text](http://i.imgur.com/zWJ4DDu.jpg)

<!-- ### Gif demo

![](http://i.imgur.com/Pc5UGK9.gif) -->

### User stories for MVP:

```
As a user
So that I can keep track of my food items
I want to be able to add an item to a new list
```
```
As a user
So I know when my food expire
I want to be able to specify a date when adding an item
```
```
As a user
So that I can check which food items I currently have
I want to be able to view a list of items
```
```
As a user
So that I can see what items expire first
I want to be able to view them sorted after date
```
```
As a user
So that I don’t accidentally eat expired food
I want items that has reached the expiration date to be highlighted
```
```
As a user
So that I can keep my list updated
I want to be able to delete an item
```

### User stories for more features
```
As a user
So that I can add my items quicker
I want to be able to scan their barcode
```
```
As a user
So that I can easily get my soon-to-be expired items used
I want to be able to look up recipes based on those items
```
```
As a user
So that I can get reminded of what items goes bad
I want to receive a notification in the morning
```
```
As a user
So that I can keep track of how much of my food goes to waste
I want to be able to specify whether an item was binned or eaten when deleted
```
