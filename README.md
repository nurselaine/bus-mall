# Lab 11: Bus Mall

## Problem Domain
You’ve been hired by a startup called BusMall. BusMall wants to do market analysis on proposed products to test their potential customer interest… before actually putting them into the catalog.BusMall wants you to build an app that displays potential products to individuals in focus groups (three products at a time, side-by-side-by-side)

The app’s purpose is to have the group members choose which product, of the three displayed images, that they would be most likely to purchase, and then store, calculate, and visually display the resulting data. You have been instructed to not allow any results to be shown to users until there have been a total of **25 selections** made.

The marketing team is not only interested in the total number of clicks, but also the percentage of times that an item was clicked when it was shown. So, you’ll also need to keep track of how many times each image is displayed and do the calculations.

## Recap:
Create a catalog of items that allows user to pick most popular and view items by popularity 

## What do we need?

## Global Variable
- Array to store objects
- total vote count - 25
- Windows to DOM

## Constructor
- Catalog Objects
  - Properties
    - votes
    - views
    - name
    - img
  - Array to hold catalog items

## Executable Code 
- Random image generator function
  - Will get three random img from array 
- DOM References
  - images
  - button
  - DOM manipulation to create list
- Event Listener
  - clicks: On img to add votes, each click will rerender three new images
  - Button: display results - only after 25 votes 

## Stringify data

## Add storage for application to remeber previous results of user votes
1. Create an array of objects [{},{},{}]
2. Stringify data: JSON>stringy(array of data) -- needs to be completed added to local storage 
  - cannot stringify methods/prototypes
3. Create key in local storage: 
let stringifiedData = JSON.strinigy(array of data);

## What is JSON 
- A database 
- local storage may be useful to test storage 
- not best use of storage because of storing private data 
- Local storage is unique to users computer 