import {
  getDoc,
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  collection,
  getDocs,
} from 'firebase/firestore';
import { db } from '../Config/Firebase';
// import toast, { Toaster } from 'react-hot-toast';

const useFirestore = () => {
  const userCollectionRef = collection(db, 'giphy');

  const checkIfUserExist = async (email) => {
    const data = await getDocs(userCollectionRef);
    const userExist = data.docs.find((doc) => doc.id === email);
    return userExist ? true : false;
  };

  const getGifsData = async (email) => {
    const gifRef = doc(db, 'memes', email);
    try {
      const response = await getDoc(gifRef);
      return response.data().gifs;
    } catch (error) {
      console.log(error);
    }
  };

  const addGifData = async (email, title, src) => {
    const gifRef = doc(db, 'memes', email);
    try {
      updateDoc(gifRef, {
        gifs: arrayUnion({
          title,
          src,
        }),
      }).then(() => {
        console.log('Document successfully updated!');
      });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteGifData = async (email, title, src) => {
    const gifRef = doc(db, 'memes', email);
    try {
      updateDoc(gifRef, {
        gifs: arrayRemove({
          title,
          src,
        }),
      }).then(() => {
        console.log('Document successfully deleted!');
      });
    } catch (error) {
      console.log(error);
    }
  };

  const checkGifExistence = async (
    email,
    src,
    title
  ) => {
    const gifRef = doc(db, 'memes', email);
    getDoc(gifRef)
      .then((data) => {
        // return data.data()!.gifs.find((gif: any) => gif.src === src);
        // console.log(data.data()!.gifs.find((gif: any) => gif.src === src));
        const exist = data.data().gifs.find((gif) => gif.src === src);
        if (exist) {
          deleteGifData(email, title, src);
        //   toast.error('Gif removed from Favourites!');
        } else {
          addGifData(email, title, src);
        //   toast.success('Gif added to Favourites!');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const checkExistence = async (arrays, src) => {
    const exist = arrays.find((gif) => gif.src === src);
    return exist;
    // console.log(exist ? true : false);
  };

  return { getGifsData, addGifData, deleteGifData, checkGifExistence };
};

export default useFirestore;