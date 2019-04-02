//I. Binding
  //A. call: passes in parameters one after another (this, plus parameters)
    //1. invokes the function
  //B. bind: returns a new instance of that function that is bound to the new this
    //1. same structure as call
     2. var boundfn = fn.bind(obj); --> boundfn()
  //C. apply: takes an array for extra arguements (this, [...aditional arguements])
    //1. invokes the function

//II. Model, View, Controller
  //A. It's a way of structuring the app/ architectural pattern (regardless of what program or framework you are using)
    //1. Model layer-
      //a. manages the state of the program
      //b. can have many views
    //2. View layer- can have many controllers,
      //a. reflects the state of the model, through components
      //a. not all views have controlllers
    //3. Controller layer-
      //a. changes state based on user interactions/input
      //b. through event listeners (functions)
  //B. Browser sends request to controller (from user) -->
  //controller updates/manipulates model --> updates/manipulates view

// Event Listeners = functions that change the state of the model per event (user interaction)
// DOM = node
// model does too much work and depends on both view and controller (directly and indirectly)
// React is a view library

// Architectural patterns: Object orientated programming, Peer to peer


//depricated react methods
// componentWillUpdate --> shouldComponentUpdate
// componentWillMount --> getDerivedStateFromProps
// compononentWillReceiveProps --> getDerivedStateFromProps

// componentDidUnmount: clicking on a link to leave a site

// Functional vs Class components --> class = obj (use "this")
  // Functional - Good for simple content
  // Class - Good for just about anything else (user input, complex, )
    // Can use 'state'(React system)
    // Understands lifecycle events
// react passes data from parent to child component (one-way)


// Synchronous means you have to wait until one function to finish so that the next one can go (one after another)
// Asynchronous is when you don't know when the first function will finish so you can do something while it finishes

// Promises && Callbacks === Asynchronous
function callbackExample(params) {
  return new Promise(function(reject, resolve) {
    if (err) { reject() }
    resolve();})

  })
}

promiseExample().then().catch(err => throw new Error('broken code'))


function promiseExample(params) {
  console.log('starting slow promise');
  return new Promise(function(reject, resolve) {
    if (err) { reject() }
    resolve();
  })
}

fetch(url)
  .then(response.something) // Define response type (JSON, Headers, Status code)
  .then(data) //
// Functional - Good for simple content

fetch('http...')
  .then(response => response.json())
  .then(data => console.log(JSON.stringify(data)))

const test = () => {
   setTimeout(() => {axios
   (`API/${}`)
  //.then(res) => (console.log(res.data))
  .then({data}) => (console.log(data))
  .catch(err) => (console.log(err))
   }, 5000)
}
ll

//axios: promise based HTTP client for the browser(frontEnd) and node.js(backEnd)

  axios.get('/user',)
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    })

//Function types
  //Anonymous function
    // stores function in variable
    // var x = function(){return 5};

// Intro to Node
  // Node is a JS interpreter (environment where you can execute code)
  // node + <file> to run the node on terminal
  // require() and module.exports.
  // app.js is where you run your components(main server)

var result = 0;
  result.push(num);
  while (num <= 100) {
    result.push(num * 2)
  }

//Frontend
  //React/Angular
//Backend
  //NodeJS/ExpressJS
//Database
  // Mysql
    // database management system





//Asynchronous NodeJS
  // non-blocking (can do things while waiting for something else to complete)
// interact with real-time weather APIs
