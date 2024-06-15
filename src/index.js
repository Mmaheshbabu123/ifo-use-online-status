import React from 'react';
import useOnlineStatus from './useOnlineStatus';

const OnlineStatus = ({ popupStyle, popupContentStyle, offlineAction, onlineAction,showText = true  }) => {
  const {
    isOnline,
    showPopup,
    initialPopupStyle,
    initialPopupContentStyle,
    setShowPopup,

  } = useOnlineStatus(popupStyle, popupContentStyle, offlineAction, onlineAction);

  return (
    <div>
      {showText && <h1>{isOnline ? 'Online' : 'Offline'}</h1>}
      {showPopup && (
        <div style={initialPopupStyle}>
          <div style={initialPopupContentStyle}>
            <h2>You are offline!</h2>
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OnlineStatus;
