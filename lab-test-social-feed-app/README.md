React App for Social Feed Functionalities:

1. Component Structures


1.1. Feed Component

Create a functional component named Feed.
This component should display a header ("Social Feed") and render multiple
child Post components.
This component should log to console `feed component is mounted` when the
component is loaded using a React life cycle hook.




The feed component should render multiple child Post components in the following
JSX fragment

<Post message={" React is good"}/>
<Post message={" Blockchain is better"}/>


1.2. Post Component

Create a functional component named Post.
The Post component should display the post message, like button, and
comment form.

Props

Should receive Message from parent Feed component in the props object.

State Management

Use the state hook to manage the following state within the Post component:
likes: Number of likes for the post (initially set to 0).
comments: An array to hold comments and time stamp added by users.
comment: A controlled input field for the current comment being typed.

Event Handling


Implement event handlers for:
Like Button: When clicked, increment the likes count.
Comment Form Submission: When the form is submitted, add the
comment to the comments array and reset the input field.


Lab Test Submitted by: Yibeltal Aseffa
