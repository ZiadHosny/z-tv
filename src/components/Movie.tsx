import { useState, useEffect } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { arrayUnion, doc, updateDoc, getDoc } from 'firebase/firestore';
import { MovieType } from '../utils/types';

export const Movie = ({ item }: { item: MovieType }) => {
  const [like, setLike] = useState(false);

  const { user } = UserAuth();
  const movieID = doc(db, 'users', `${user?.email}`);

  const saveShow = async () => {
    if (user?.email) {
      setLike(!like);

      if (!like) {
        console.log('like');
        await updateDoc(movieID, {
          savedShows: arrayUnion({
            id: item.id,
            title: item.title,
            img: item.backdrop_path,
          }),
        });
      } else {
        try {
          let dataFromDB = await getDoc(movieID);
          const result = dataFromDB.data()?.savedShows.filter((e: any) => {
            return item.id !== e.id;
          });

          await updateDoc(movieID, { savedShows: result });
        } catch (error) {
          console.log(error);
        }
      }
    } else {
      alert('please log in to save a movie');
    }
  };

  const find = async () => {
    if (user?.email) {
      let dataFromDB = await getDoc(movieID);
      let find = dataFromDB.data()?.savedShows.find((e: any) => {
        return e.id === item.id;
      });
      if (find) {
        return true;
      } else {
        return false;
      }
    }
  };

  useEffect(() => {
    find().then((e: any) => {
      setLike(e);
    });
  }, [find]);

  return (
    <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
      <img
        className="w-full h-auto block"
        src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
        alt={item.title}
      />
      <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
        <p className="whitespace-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
          {item.title}
        </p>
        <p onClick={saveShow}>
          {like ? (
            <FaHeart className="absolute top-4 left-4 text-gray-300" />
          ) : (
            <FaRegHeart className="absolute top-4 left-4 text-gray-300" />
          )}
        </p>
      </div>
    </div>
  );
};
