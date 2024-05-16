
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {searchMovies} from '../../redux/movieSlice'
import { IColumn } from '../../models/models';
import './mainPage.scss'
import '../../App.css'
import Table from '../../components/table/table';
function MainPageComponent() {
  const dispatch = useAppDispatch();
  const data = useAppSelector(state => state.movie)
  const {movies, pageNum, total} = data;
  const columns: IColumn[] = [
    {header: 'Title', section: 'Title'},
    {header: 'Type', section: 'Type'},
    {header: 'ImdbID', section: 'imdbID'},
    {header: 'Year', section: 'Year'}
  ]
  useEffect(() => {
    dispatch(searchMovies({name:'ring', page:2
  }))
  },[])
  return (
    <div style={{width: '80%'}} className=''>
      <Table data={movies} pageNum={pageNum} total={total} columns={columns}/>
    </div>
  );
}

export default MainPageComponent;
