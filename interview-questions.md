# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is JSX? What is one syntax difference between HTML and JSX?

Your answer:
JSX is an extension in React that allows us to use HTML and have the functionality of JavaScript. It can be used to add additional elements in the return area. One syntax difference between HTML and JSX is that JSX uses a "className" syntax and HTML uses only a "class" syntax.

Researched answer:
JSX is a markdown extension of Javascript and has similiar behaviors of HTML. JSX uses the "className" syntax to modify the look and behavior of an element. JSX is a React component that allows React to create user interfaces (the user and computer interact). A syntax difference between JSX and HTML is that JSX uses "className" syntax because the "class" syntax in HTML is already protected in JavaScript.   

2. What is yarn? What file(s) are modified when you run the command yarn in your terminal?

Your answer:
Yet
Another
Resource
Negotiator
YARN is simply a code package manager. It provides the dependencies and snippets that are required to run your code (in the git terminal input --> $ yarn add jest). Three files are modified in the active react file that was created in the terminal in order to run your code (files: yarn.lock, node_modules and package.json).  

Researched answer:
YARN is a package manager that adds all of the code snippets and dependencies for your code. It replaced the Node Package Manager (NPM), the first package manager of node.js that installed, updated and uninstalled node.js files. YARN is basically a library for web applications that runs outside of your browser.

3. What is a React component?

Your answer:
A React component is a seperate component file that is stored under the src (source) folder in a .js (JavaScript) file. When a component is created, it allows us to organize multiple functions that can be reused over and over again. You can call on components as many times as you need. Once your functions are complete, components can then be imported to one main App.js file that will hold all of the state variables, values, inputs and methods. 

Researched answer:
React components are codes that we want to reuse in a function to be able to call on a function any time we want to use the code. React components are essentially JavaScript functions. A function can contain JavaScript logic and outputs the logic that gets relayed to the browser. React components just lets us write less lines of code instead of numerous lines of repeating code. This is great because your main App.js file will appear less cluttered with code and because your component files will organize your code separately and you can reuse them in other applications.  

4. What is the difference between state values and props in React?

Your answer:
The difference between state values and props in React are that state values stores the data that determines how a component is displayed to the user. Props is short for properties in React and is just an object that has no value. 

Researched answer:
The difference between state values and props in React is that state values are special variables that store data and props are special React objects that pass information from one component to another. State values define how a component is displayed and behaves. Props just display a flow of data of behavior from a parent component to a nested component. The values in state changes as the user interacts with the application. Props however cannot be changed as the user interacts with the application. We can reference variable values in state by entering a value in JSX tags using the curly braces({value}). However, we can only pass props as an argument (in a parameter - (props)) to the component then reference the variable in props as "props.name" using the JSX curly braces tag ({props.name}). 

5. What is the DOM?

Your answer:
Document
Object
Model
DOM organizes the HTML elements like a tree and gives us a visual of those HTML elements in the browser. It reads the web page in order from top to bottom (creates a tree of events/changes). Every time your state of components changes, the DOM updates only those changes.  

Researched answer:
DOM responds to user interactions. DOM makes user interactions efficient because it responds only to specific elements that were updated and changed. When you open a website you are looking at the DOM which is the visual appearance of your code.

6. STRETCH: Which is the difference between a div tag and a span tag?

Your answer:
A div tag divides or separates a certain section/block of code of your choice (<div></div>). A div tag can be used to target certain .css stylings you want applied only to one section/block of code by creating a "className" for your div tag. For example, for a div tag you could add a dot notation followed by the "className"(i.e. <div className=""></div>) to use in a .css file. However, a span tag (<span></span>) can be used to separate and target a certain section/area in your code but it requires an "id" className (<span id="idName">text</span>) and can only be applied to a text element. Also, you would have to add a hashtag(#) symbol followed by the "id" name (#idName) in a .css file in order for your styling to be applied to the specific text elements of your choce. 

Researched answer:
A div tag is used as a container for a block of elements in HTML and can be styled by using a class or id attribute. However a span tag is an inline element that targets only part of a text or document. Any sort of value/content can be placed inside a div tag. A div tag defines a section or division in a document or code. However, a span tag can only be used to group elements together for styling purposes (i.e. change text colors, font and font size, etc) and can use class or id attributes. A div tag wraps an entire section while a span tag only highlights specific text/words (i.e. <span style="color:navy">navy</span>). 

## Looking Ahead: Terms for Next Week

1. Object-oriented programming: Object-oriented programming is a way to block off certain code that you don't want to be affected by the rest of your code when you make changes. It's a way to create data that can be changed and manipulated without affecting the application.

2. Ruby: Ruby is a scripting programming language and has many built-in methods and documentation. Ruby's style is easy to read and write. All data types are defined by class and all datatypes in Ruby are considered objects.

3. Implicit return: Implicit return is a method in Ruby that returns a result of a final line before the end of a keyword. It is a final statement inside if the method. In order to use an implicit return in Ruby you have to use a key word named "def" followed by the name of the method(use snake_case for multiple words), your code logic to be executed and the key word "end". 

For example:
def method_name
  "Signed and sealed by Evelyn"
end
//output: "Signed and sealed by Evelyn"

4. Ruby blocks: Ruby blocks are anonymous functions that are passed to a method which require additional information to change the outcome. In order to use blocks you have to create your anonymous function with a value, create a method by using a dot notation after your anonymous function name, use keywords "do" and "end" and be sure to enter your code logic in between the keywords for the code to be executed. 

For example:
num = 2

num.times do
  "hello"
end
//output: "hello", "hello"

5. Ruby hashes: Ruby hashes are a placeholder for unique keys and values. The structure is like an object in JavaScript but the output is a different syntax. A symbol such as a colon (:) is a unique identifier in Ruby hashes and is placed on the left side of the variable, the anonymous function symbol or "hashrocket" (=>) is followed by the variable key and is used to separate the values from the keys. To use Ruby hashes, create a function, use JSX curly braces, inside curly braces enter the key name followed by a colon and followed by number or string value. 

For example: 
breakfast = {eggs: 2, cheese: "2 pieces", bacon: "4 slices", bread: "2 slices"}
//output: {:eggs=>2, :cheese=> "2 pieces", bacon: "4 slices", bread: "2 slices"}