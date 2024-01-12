// this is hub file for db files
// or we can import them directl from the files themselves
// this extra step may couse slowdown in large applications, so the recommended way is doing withot this extra stoep


// import { load, loadByID } from './read';
// import { save, update } from './write';

// export { load, loadByID, save, update };


// this is shorthand for the same as above
export { load, loadByID, loadPromoted } from './read';
export { save, update, remove } from './write';
export { uploadPicture } from './storage';