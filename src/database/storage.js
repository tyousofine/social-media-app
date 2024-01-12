import { app } from './config';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import uuid from 'react-uuid';

export const storage = getStorage(app);


export async function uploadPicture(file) {
    console.log('file: ', file)

    try {
        const storage = getStorage();
        // the uuid wasnt working for me here?????
        // const storageRef = ref(storage, randomId() + '--' + file.name);
        const storageRef = ref(storage, uuid() + '--' + file.name)

        const snapshot = await uploadBytes(storageRef, file)
        const url = await getDownloadURL(snapshot.ref);
        console.log('url from inside db file: ', url)

        return url;
    }
    catch (error) {
        console.log('picrue upload error: ', error)
        return null;
    };
}
