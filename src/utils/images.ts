import imageCompression from 'browser-image-compression'

export const compressImage = async (img: File) => {
  try {
    return await imageCompression(img, { maxSizeMB: 2, maxWidthOrHeight: 1200 })
  } catch (err) {
    console.warn('Image could not be compressed. Returning original image.')
    return img
  }
}

export const getImageBase64Url = async (img: File) => {
  if (img.type.split('/')[0] === 'image') {
    return await imageCompression.getDataUrlFromFile(img)
  } else {
    return ''
  }
}
