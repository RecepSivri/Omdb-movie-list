
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {searchMovies} from '../../redux/movieSlice'
import { IMovie } from '../../models/models';
function MainPageComponent() {
  const dispatch = useAppDispatch();
  const movies = useAppSelector(state => state.movie.movies)
  useEffect(() => {
    dispatch(searchMovies({name:'ring', page:2
  }))
  },[])
  return (
    <div className='column-layout-start'>
      {
      movies.map((item: IMovie) => {
        return <>{item.Title}</>
      })
      }
    </div>
  );
}

export default MainPageComponent;
