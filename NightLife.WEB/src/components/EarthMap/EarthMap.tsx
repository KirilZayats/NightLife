import { Viewer } from 'resium';
import styles from './EarthMap.module.scss';
import * as Cesium from 'cesium';
import { CoordsPicker } from '../CoordsPicker';

const EarthMap = () => {
	Cesium.Camera.DEFAULT_VIEW_RECTANGLE = Cesium.Rectangle.fromDegrees(20, 60, 35, 50);
	Cesium.Ion.defaultAccessToken =
		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIxYmQ0M2IwMy05ODFmLTRjODgtOWUyYS1kZGI5YTgwN2ViZDQiLCJpZCI6MTA0MzQ5LCJpYXQiOjE2ODk4Nzk3NDd9.BNp5VhSTvUono4XMbAl6ah1rb36pGPJRlBBs5F2eN08';
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
		fullscreenButton: false,
	};
	

	return (
		<div className={styles['earth-map-root']}>
			<div className={styles['earth-map__label']}>Nigh Life</div>
			<Viewer className={styles['earth-map-resium']} full {...viewerProps}>
				<CoordsPicker />
			</Viewer>
		</div>
	);
};

export { EarthMap };
