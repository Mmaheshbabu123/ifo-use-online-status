# ifo-use-online-status

A custom React hook and component to track and display the online/offline status of a user. This package also allows for customization of styles and actions when the user goes online or offline.

## Installation

You can install this package via npm:

```bash
npm install ifo-use-online-status
```
# Usage
#Basic Usage

To use the ifo-use-online-status package, import the OnlineStatus component and use it in your React application:
```jsx
import React from 'react';
import OnlineStatus from 'ifo-use-online-status';

const App = () => {
  return (
    <div className="App">
      <h1>Check User Online Status</h1>
      <OnlineStatus />
    </div>
  );
};

export default App;
```
Custom Styles and Actions

You can pass custom styles and actions to the OnlineStatus component. Here is an example:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import OnlineStatus from 'ifo-use-online-status';

const callOffline = () => {
  console.log('User is offline. Performing offline action...');
};

const callOnline = () => {
  console.log('User is online. Performing online action...');
};

const App = () => {
  const popupStyle = {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  const popupContentStyle = {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '5px',
    textAlign: 'center'
  };

  return (
    <div className="App">
      <h1>Check User Online Status</h1>
      <OnlineStatus
        popupStyle={popupStyle}
        popupContentStyle={popupContentStyle}
        offlineAction={callOffline}
        onlineAction={callOnline}
        showText={true} // Show the online/offline text
      />
      <OnlineStatus
        popupStyle={popupStyle}
        popupContentStyle={popupContentStyle}
        offlineAction={callOffline}
        onlineAction={callOnline}
        showText={false} // Hide the online/offline text
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
```
Contributing

Author: Mahesh

Thanks for downloading package
License

This project is licensed under the MIT License. See the LICENSE file for more details.
Readme




