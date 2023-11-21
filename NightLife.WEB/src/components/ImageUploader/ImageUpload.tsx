import React, { useEffect, useState } from 'react';
import ImageUploading, { ImageListType } from 'react-images-uploading';
import { IUploaderProps } from './types';

const ImageUploader = (props: IUploaderProps) => {
	const { onUpload } = props;
	const [image, setImage] = useState<ImageListType>([]);

	useEffect(() => {
		let file = image[0] && image[0]?.file;
		onUpload && onUpload(file);
	}, [image]);

	const onChange = (imageList: ImageListType, addUpdateIndex: number[] | undefined) => {
		console.log(imageList, addUpdateIndex);
		setImage(imageList);
	};

	return (
		<div className="App">
			<ImageUploading value={image} onChange={onChange}>
				{({ imageList, onImageUpdate, onImageRemove, isDragging, dragProps }) => (
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
											<div
												className="image-item__btn-wrapper"
												style={{ marginBottom: '5px' }}
											>
												<button
													style={{
														width: '90px',
														height: '50px',
														backgroundColor: '#f5d7d8',
														border: 'solid 5px #f1916d',
														fontFamily: 'monospace',
														color: '#06142e',
														borderRadius: '10px',
														marginRight: '10px',
													}}
													onClick={() => onImageUpdate(index)}
												>
													Update
												</button>
												<button
													style={{
														width: '90px',
														height: '50px',
														backgroundColor: '#f5d7d8',
														border: 'solid 5px #f1916d',
														fontFamily: 'monospace',
														color: '#06142e',
														borderRadius: '10px',
													}}
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
