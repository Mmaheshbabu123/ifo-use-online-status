import { useState, useEffect } from 'react';

const useOnlineStatus = (
  initialPopupStyle = {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  initialPopupContentStyle = {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '5px',
    textAlign: 'center'
  },
  offlineAction = () => console.log('User is offline. Performing offline action...'),
  onlineAction = () => console.log('User is online. Performing online action...')
) => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      setShowPopup(false);
      onlineAction();
    };

    const handleOffline = () => {
      setIsOnline(false);
      setShowPopup(true);
      offlineAction();
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [offlineAction, onlineAction]);

  return { isOnline, showPopup, initialPopupStyle, initialPopupContentStyle, setShowPopup };
};

export default useOnlineStatus;
