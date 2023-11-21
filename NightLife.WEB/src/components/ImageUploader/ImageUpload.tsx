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
						&nbsp;
						<div
							className=""
							style={{
								color: isDragging ? 'red' : undefined,
								height: '200px',
								width: '190px',
								border: 'solid 5px #f1916d',
								display: !imageList.length ? 'flex' : '',
								alignItems: !imageList.length ? 'center' : '',
								justifyContent: !imageList.length ? 'center' : '',
							}}
							{...dragProps}
						>
							{!imageList.length
								? 'Drop here'
								: imageList.map((image, index) => (
										<div key={index} className="image-item">
											<img
												src={image?.dataURL}
												alt={image.file?.name}
												width="190"
												height="200"
												style={{
													display: image ? '' : 'none',
												}}
											/>
											<div className="image-item__btn-wrapper">
												<button
													onClick={() => onImageUpdate(index)}
												>
													Update
												</button>
												<button
													onClick={() => onImageRemove(index)}
												>
													Remove
												</button>
											</div>
										</div>
								  ))}
						</div>
					</div>
				)}
			</ImageUploading>
		</div>
	);
};

export { ImageUploader };
