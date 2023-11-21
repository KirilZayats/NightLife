import { useEffect } from 'react';
import { useCesium } from 'resium';
import * as Cesium from 'cesium';
import { useDispatch, useSelector } from 'react-redux';
import {
	setCurrentPlacePosition,
	setMapPosition,
} from '../../redux/action-creators/places-action-creators';
import { IStoreState } from '../../types';

const CoordsPicker = () => {
	const { viewer } = useCesium();

	const dispatch = useDispatch();

	const isCreatePage = useSelector(
		(store: IStoreState) => store.places.placeCreateMode
	);

	const handleDbClick = (e: any) => {
		if (viewer) {
			let ellipsoid = viewer.scene.globe.ellipsoid;
			let cartesian = viewer.camera.pickEllipsoid(
				new Cesium.Cartesian3(e.clientX, e.clientY),
				ellipsoid
			);
			viewer.entities.removeAll();
			viewer.entities.add({
				position: cartesian,
				point: {
					show: true, // default
					color: Cesium.Color.SKYBLUE, // default: WHITE
					pixelSize: 10, // default: 1
					outlineColor: Cesium.Color.YELLOW, // default: BLACK
					outlineWidth: 3, // default: 0
				},
			});

			if (cartesian) {
				let cartographic = ellipsoid.cartesianToCartographic(cartesian);
				let longitudeString = Cesium.Math.toDegrees(
					cartographic.longitude
				).toFixed(5);
				let latitudeString = Cesium.Math.toDegrees(cartographic.latitude).toFixed(
					5
				);

				dispatch(
					setCurrentPlacePosition({
						lon: +longitudeString,
						lat: +latitudeString,
					})
				);
			}
		}
	};
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
			viewer.scene.canvas.addEventListener('dblclick', handleDbClick);

			if (!isCreatePage) {
				viewer.scene.canvas.removeEventListener('dblclick', handleDbClick);
			}
		}
	}, [viewer, isCreatePage]);

	return <div className=""></div>;
};

export { CoordsPicker };
