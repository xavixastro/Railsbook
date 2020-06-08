# Railsbook

Railsbook was inspired by Facebook, a social media network that allows users to 
connect with friends, upload photos and share content with their friends.

<img src="https://github.com/xavixastro/Railsbook/blob/master/app/assets/demo/signup_page.png?raw=true" width="800" height="500" title="Railsbook">



## Demo

Try it yourself! You can access the live demo here: [Railsbook Live](https://railsbook-aa.herokuapp.com/)

## Technologies Used

* Ruby on Rails
* JavaScript
* PostgreSQL
* React 
* Redux
* AWS S3
  
## Features

### Friending

User can add friends and post on their walls! 

![Alt Text](https://github.com/xavixastro/Railsbook/blob/master/app/assets/demo/friending.gif?raw=true)

### Photo Upload

Users can upload a profile photo just by hovering over the image avatar on their profile and clicking 'Update'

![Alt Text](https://github.com/xavixastro/Railsbook/blob/master/app/assets/demo/photoUpload.gif?raw=true)

## Code Snippets

The following code handles the main functionality for the friending/unfriending button. I use Redux state to keep track 
of the user IDs for whom there are pending friend requests, avoiding unnecessary queries to the database.


```javascript
    render(){

        const {currentUser, profileUser} = this.props

        let button;

        //Already friends
        if (currentUser.friend_ids.includes(profileUser.id)) {
            button = <button onClick={this.remove_friend}>Remove Friend</button>
        //Friend request pending to be accepted by current user
        } else if (currentUser.received_friend_ids.includes(profileUser.id)) {
            button = <button onClick={this.accept_request}>Accept Request</button>
        //Friend request pending to be accepted by profile user
        } else if (currentUser.sent_friend_ids.includes(profileUser.id)) {
            button = <button onClick={this.cancel_request}>Requested</button>
        //Not friends
        } else {
            button = <button onClick={this.send_request}>Add Friend</button>
        }

        return(
            <div>
                {button}
            </div>
        )
    }
```


