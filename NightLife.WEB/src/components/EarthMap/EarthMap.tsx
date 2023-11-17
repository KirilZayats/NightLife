import { Viewer } from 'resium';

export { Viewer } from 'resium';

const EarthMap = () => {
	const viewerProps = {
		infoBox: false,
		timeline: false,
		navigationHelpButton: false,
		selectionIndicator: false,
		animation: false,
		shouldAnimate: false,
		geocoder: false,
		homeButton: false,
		vrButton: false,
		imageryProvider: false,
	};


	return (
		<Viewer
			style={{
				width: '70%',
			}}
			full
			{...viewerProps}
		></Viewer>
	);
};

export { EarthMap };
