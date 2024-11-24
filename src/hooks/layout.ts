import React, {DependencyList, useEffect, useRef} from 'react';

const useDidMountEffect = (action: () => void, dependecy: DependencyList) => {
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) action();
    else didMount.current = true;
  }, dependecy);
};

export default useDidMountEffect;
