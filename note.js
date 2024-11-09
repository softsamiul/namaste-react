/*
-----------------------------------
Episode - 1:

1. What is CDN? Why do we use CDN?
Ans: CDN stands for Content Delivery Network.

2. What is crossorigin Attribute?
Ans: Go here - > https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/crossorigin

3. What is the diffrence between https://unpkg.com/react@18/umd/react.development.js and https://unpkg.com/react@18/umd/react.production.min.js?

4. If we have anything inside id=root in index.html what happen after react.render?
Ans: Those valus will be replaced with the content provided by react.

5. How many arguments is accepted by React.createElement() ? How can we pass multiple child inside React.CreateElement() ?
Ans: Theree arguments, i) html elemet type like div, span, h1, etc.., ii) A object which takes as attribute and iii) children.
Send them inside an array if we have multiple child.

6. What is a rect element?
Ans: It's a simple object and react covert this into a html element.

--------------------------------------------------------
Episode - 2:

#Parcel
- Dev Build
- Local server
- HMR - Hot Module Replacement
- File watching algorithm - written in c++
- Caching - Faster Builds
- Image Optimization
- Minification of files
- Bundling
- Compressing
- Consistent hashing
- Code spliting
- Diffrential bundling - to support older browser
- Diagnostic
- Error handling
- HTTps
- Tree Shaking
- Diffrent dev and prod bundles


-----------------------------------
Episode - 3:
- React Element
- DOM Elements
- JSX - Not HTML, HTML like Syntax
- React.createElement => JS Object => HTMLElement(render)
- JSX => Babel transpile it to React.createElement => JS Object => HTMLElement(render)
- Babel

- React Component
    i)Class based component - Old
        A JS class which will return some jsx/rect elememnt
    ii) Functional Component - New
        A function which will retrun some jsx/react element.


- Component Composition - Nothing the process of using one component inside another component
- cross site scripting => JSX will take care of this



Brand name: TastyTap
Ttag line: Tap into tasty!
Primary color: #FF5722
Secondary Color: #4CAF50
Regular Color: #FAF3E0




----------------------------------------------------
useEffect:
If no dependency array => everycomponent render call useEffect
If dependency array empty => useEffect is called on only initial render and just once
If there dependency array => UseEffect is called every time that array variable get update

UseState:
- Never call useState inside body 
- it's only used to create local state variable insive functional component
- Define useTate variable at the top of component
- Never define any useState inside any condition like if block, loop, function

-----------------------------------
React Router DOM

Two types of routing
1) Client side routing - No network call for routing, just loading the component 
2) Server side routing - make a netwrok call and getting result from server and reload the whole page

 ----------------------------------------
 Class Component:

 - A JS class which have a render method which return some jsx is called as class component.

 Why we write super()
 

class UserClass extends React.Componenent {

}

Class life cycle
- constructor => render => componentDidMount 

Parent child= parent constructor -> parent render => If there any child then child constructor => child render => child componentDidMount , once child completely mounted then => parent componentDidMount


ComponentDidMount: 

------------------
Class comp life cycle
--------Mount--------
- Constructor 
    - Dummy and set the states with dummy data
- Render 
    - first render dummy data
- componentDidMount
    <APi call >
    <this.setState>
----- Update -------
render (api data)
html update with new fetched data
componentDidUpdate
----Unmounting-----
componentWillunmount




----------------------
Sinngle Responsibility - 
Use hooks


Chunking
code spliting
dynamic bundling
bundling on demand
logical separation of bundle
Lazy loading
On demand loading

Suspense component



*/