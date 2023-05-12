# **Rock, Paper, Scissors, Lizard, Spock**

A classic game brought to us by the hit TV show: The Big Bang Theory. A spin off on the still popular game of Rock, Paper, Scissors. The site hopes to entertain mostly a younger audience and get them familiar with the concepts of the game.

## **Features**

### **Existing features**

#### - **Title**

Introduces the user to the name of the game, and basic instructions urging them to try it out.

![title](/assets/images/title.png)

#### - **Controls**

The interactive elements where the user chooses which gesture he or she wants to challenge the computer.

![buttons](/assets/images/buttons.png)

#### - **Game-Area**

At first the rules of the game are displayed to show which gesture takes and is taken by other gestures. Then when the user starts the game by choosing a gesture, the images change, showing which gesture was chosen by the user and which gesture was chosen by the computer. This is the main element of the site. 

![game-area](/assets/images/game-area.png)

It also shows the player score and computer score to keep tabs on whether the user is winning or not. The score is updated after each click on a gesture, starting the game. Here is also an element which declares who is the winner of the game.

![game-area2](/assets/images/game-area2.png)

#### - **Rules Refresh Button**

If the user wants to get reacquainted with the rules of the game one simply pushes the button at the bottom of the site to get the initial introductory images to reappear in the game-area.

![Rules Refresh Button](/assets/images/rules-refresh-button.png)

### **Features Left to Implement**

#### - **Highscore**

A highscore element would increase the competitive aspect of the game and consequently the level of fun but it would require back-end code to store highscore data. 

## **Testing**

The site has passed through the appropriate testing channels without any problems. The Dev-tools Lighthouse test rewarded the site with high marks, testifying to its accessible and user-friendly layout.

![Dev Tools Lighthouse](/assets/images/lighthouse.png)

Save for some unadded or superfluous semicolons the validator testing did not discover any unsolved bugs or significant errors. 

### **Validator Testing**

#### - HTML
- No errors were returned when passing through the official [w3c validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fmartin-kod.github.io%2Frock-paper-scissors-lizard-spock%2F).

#### - CSS
- No errors were returned when passing through the official [(jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fmartin-kod.github.io%2Frock-paper-scissors-lizard-spock%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en).

#### - JavaScript
- No significant errors were returned when passing through [Jshint](https://jshint.com/).

## **Deployment**

The site was deployed to GitHub pages. The steps to deploy are as follows:
- In the GitHub repository, navigate to the Settings tab and then the Pages tab
- From the source section drop-down menu, select the Master Branch
- Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

Live link to the site can be found [here](https://martin-kod.github.io/rock-paper-scissors-lizard-spock/).

## **Credits**

### **Content**

- The buttons and game-area in index.html as well as the const variables, eventListeners and runGame function were taken from the Code Institure tutorial on Portfolio 2 Project Scope.

### **Media**

- The grouped image was taken from [this site](https://www.google.com/url?sa=i&url=https%3A%2F%2Fbigbangtheory.fandom.com%2Fwiki%2FRock%2C_Paper%2C_Scissors%2C_Lizard%2C_Spock&psig=AOvVaw2sH20bsQFiYWX81tjWc6vk&ust=1683969640980000&source=images&cd=vfe&ved=0CAQQjB1qFwoTCKDZjvS57_4CFQAAAAAdAAAAABAE).

- The individual images were taken from [this site](https://www.google.com/url?sa=i&url=https%3A%2F%2Fgithub.com%2Ftopics%2Frock-paper-scissors-lizard-spock%3Fl%3Dhtml&psig=AOvVaw2sH20bsQFiYWX81tjWc6vk&ust=1683969640980000&source=images&cd=vfe&ved=0CAQQjB1qFwoTCKDZjvS57_4CFQAAAAAdAAAAABAJ).



Attribute Buttons, game-area in HTML and const variables, eventListeners and runGame function to CI tutorial of Portfolia Project Scope