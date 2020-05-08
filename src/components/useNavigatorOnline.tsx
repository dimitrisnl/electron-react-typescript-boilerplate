import { useEffect, useState } from 'react';

const useNavigatorOnline = () => {
  const [value, setValue] = useState(window.navigator.onLine);

  useEffect(() => {
    function handleOnlineStatus() {
      setValue(window.navigator.onLine);
    }

    window.addEventListener('online', handleOnlineStatus);
    window.addEventListener('offline', handleOnlineStatus);

    return () => {
      window.removeEventListener('online', handleOnlineStatus);
      window.removeEventListener('offline', handleOnlineStatus);
    };
  }, []);

  const isOnline = value === true;
  const isOffline = value === false;

  return { isOnline, isOffline };
};

export default useNavigatorOnline;
