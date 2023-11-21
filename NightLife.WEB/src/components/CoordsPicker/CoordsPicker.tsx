import { useEffect } from 'react';
import { useCesium } from 'resium';
import * as Cesium from 'cesium';
import { useDispatch } from 'react-redux';
import { setMapPosition } from '../../redux/action-creators/places-action-creators';

const CoordsPicker = () => {
	const { viewer } = useCesium();

	const dispatch = useDispatch();
	useEffect(() => {
		if (viewer) { 
            viewer.scene.canvas.addEventListener('mousemove', function (e) {
				let ellipsoid = viewer.scene.globe.ellipsoid;
				let cartesian = viewer.camera.pickEllipsoid(
					new Cesium.Cartesian3(e.clientX, e.clientY),
					ellipsoid
				);
				if (cartesian) {
					let cartographic = ellipsoid.cartesianToCartographic(cartesian);
					let longitudeString = Cesium.Math.toDegrees(
						cartographic.longitude
					).toFixed(5);
					let latitudeString = Cesium.Math.toDegrees(
						cartographic.latitude
					).toFixed(5);

					dispatch(
						setMapPosition({
							lon: +longitudeString,
							lat: +latitudeString,
						})
					);
				}
			});
		}

	}, [viewer]);

	return <div className=""></div>;
};

export { CoordsPicker };
