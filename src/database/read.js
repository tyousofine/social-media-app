import { collection, getDocs, where, query, doc, getDoc } from "firebase/firestore";
import { db } from './config';

/**
 * Loads all the documents from posts collection
 * @returns 
 * Array with the posts
 */
export async function load() {
    try {
        const quarySnapshot = await getDocs(collection(db, 'posts'))
        return processQuerySnapshot(quarySnapshot);
    }
    catch (error) {

        throw new Error('Failed to load the database')
    }
}

/**
 * Load all promoted documents from the posts colelctions
 * @returns
 * Array with the posts 
 */
export async function loadPromoted() {
    try {
        const q = query(collection(db, "posts"), where("promote", "==", true));
        const querySnapshot = await getDocs(q);
        return processQuerySnapshot(querySnapshot);
    }
    catch (error) {
        throw new Error('SFailed to query database')
    }
}

/**
 * Converts a firebase query snapshot into an array
 * @param {object} qS
 * the query snpahsot returned by the firebase 
 * @returns
 * Array with the data 
 */
function processQuerySnapshot(qS) {
    const data = [];
    qS.forEach((doc) => {
        data.push({
            ...doc.data(),
            id: doc.id
        })
    })
    return data
}


/**
 * Load single doc quering doc id from firebase
 * @param {*} id 
 * @returns 
 * A single doc object
 */
export async function loadByID(id) {
    console.log('load id:', id);

    try {
        const docRef = doc(db, "posts", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return docSnap.data();
        } else {
            return null;
        }
    }
    catch (error) {
        throw new Error('could not find document')
    }

}