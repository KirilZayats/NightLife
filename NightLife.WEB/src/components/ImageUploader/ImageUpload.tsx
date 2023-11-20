import React, { useState } from 'react';
import ImageUploading, { ImageListType, ImageType } from 'react-images-uploading';

const ImageUploader = () => {
	const [image, setImage] = useState<ImageListType>([]);

	const onChange = (imageList: ImageListType, addUpdateIndex: number[] | undefined) => {
		console.log(imageList, addUpdateIndex);
		setImage(imageList);
	};

	return (
		<div className="App">
			<ImageUploading value={image} onChange={onChange}>
				{({
					imageList,
					onImageUpload,
					onImageUpdate,
					onImageRemove,
					isDragging,
					dragProps,
				}) => (
					// write your building UI
					<div className="upload__image-wrapper">
						<button
							style={isDragging ? { color: 'red' } : undefined}
							onClick={onImageUpload}
							{...dragProps}
						>
							Click or Drop here
						</button>
						&nbsp;
						{imageList.map((image, index) => (
							<div key={index} className="image-item">
								<img
									src={image?.dataURL}
									alt=""
									width="200"
									style={{
										display: image ? '' : 'none',
									}}
								/>
								<div className="image-item__btn-wrapper">
									<button onClick={() => onImageUpdate(index)}>
										Update
									</button>
									<button onClick={() => onImageRemove(index)}>
										Remove
									</button>
								</div>
							</div>
						))}
					</div>
				)}
			</ImageUploading>
		</div>
	);
};

export { ImageUploader };
