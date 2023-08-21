import { useState, useEffect } from 'react';

const useIsMobile = () => {
	const [isMobile, setIsMobile] = useState(window.innerWidth < 720);

	const handleResize = () => {
		if (window.innerWidth < 720) {
			setIsMobile(true);
		} else {
			setIsMobile(false);
		}
	};

	useEffect(() => {
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return isMobile;
};

export default useIsMobile;
