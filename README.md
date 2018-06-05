# angular-material-skeleton
Skeleton Angular Project

After installing Node.js, use NPM (which comes along with Node.js) 
to install Angular CLI:

npm install -g @angular/cli

Create an Angular Project
Having both Node.js and Angular CLI correctly installed on your 
computer, you can use the following command to set up a new Angular 
project:

# create a new Angular project under angular-material-tutorial
ng new <project name> --style=scss


ROOT_DIR=$(pwd)/<project name>

# move into it
cd $ROOT_DIR

# Install Angular Material
To install Angular Material as a dependency of your project, 
run the following command:

npm install @angular/material @angular/cdk


# Angular Material Theme
After installing Angular Material, you will configure a theme 
that defines what colors will be used in your Angular Material 
components. To configure the basic theme, open the src/styles.css 
file and paste the following code in it:

@import "~@angular/material/prebuilt-themes/indigo-pink.css";


# Angular Material Gesture

npm install hammerjs

After installing it, add the following line at the top of the src/main.ts file:

import 'hammerjs'; 

# Material Icons
Another cool thing to add to your project is the Material Icons library.
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">



# Importing Material Components
The first thing you will do is to create a new file called material.module.ts 
in the ./src/app directory. Inside this file, you will add the following code:

// ... other import statements ...
import {MaterialModule} from './material.module';

@NgModule({
  // ... declarations property ...
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  // ... providers and bootstrap properties ...
})
export class AppModule {}