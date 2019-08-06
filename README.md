# **UNC Assignment #11 - Friend Finder**
> Created by Matthew Farmer

## About
'Friend Finder' is an application that asks users a series of questions, sends their answers to a server where these answers are compared to those of friends on file, and receives a response from the server to show users the name and picture of their closest match.

## Walkthrough

### Home

This is the landing page for the application. Users must click the button in order to proceed to the survey.
![ Home](/demoMedia/home.png)

### Survey

Users will be asked a series of ten questions about their likes/dislikes. Upon submission, results will be submitted as a POST request and calculations performed on the back end to determine the closest match to friends on file.
![ Survey ](/demoMedia/survey.png)

### Results

Once the server determines a user's closest match, a modal will appear with the name and photo of the friend whose answers most closely match that of the user. Users will have the ability to retake the survey by clicking 'Play Again' inside the modal.
![ Results ](/demoMedia/results.png)

## Additional Information

### Technologies Used

This application is built on NodeJS and uses Express for routing. AJAX calls are also utilized to retrieve data from the custom-built API.
