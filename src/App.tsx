
import { useEffect } from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import {searchMovies} from './redux/movieSlice'
function App() {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(searchMovies({name:'ring', page:1}))
  },[])
  return (
    <div>
    </div>
  );
}

export default App;
