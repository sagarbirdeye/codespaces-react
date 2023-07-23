import React from 'react';
import './MovieTrailerDetails.css';

const MovieTrailerDetails = (props) => {
    const { movie } = props

    const movieGenre = movie.EventGenre.split('|')
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-4'>
                <h1>{movie.EventTitle}</h1>
                <p>{movie.EventLanguage}</p>
                <div className='genre-pills'>
                    {movieGenre.map((genre, index) => {
                        return (
                            <span key={index} className='genre-pill'>{genre}</span>
                        )
                    })}
                </div>
                <div className='rating-releaseDate-container'>
                    <div className='likes-rating-container'>
                        <div className='likes-container'>
                            <div>
                            <img src='likeIcon.svg'/>
                            </div>
                            <div >
                                <span>{movie.ratings.wtsPerc} %</span>
                                <span>{movie.ratings.wtsCount} votes</span>
                            </div>
                            <div className='release-date-container'>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffffff" className="bi bi-calendar3" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M13 2H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0
                                        2-2V4a2 2 0 0 0-2-2zM3 1a1 1 0 0 0-1 1v10a1 1 0 0
                                        0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0
                                        0-1-1H3z"/>
                                        <path fillRule="evenodd" d="M8 5a1 1 0 0 0-1 1v5a1 1 0 1
                                        0 2 0V6a1 1 0 0 0-1-1z"/>
                                        <path
                                        d="M2.5 3h11v1h-11z"/>
                                    </svg>
                                </div>
                                <div>
                                    <span>{movie.DispReleaseDate.split(',')[0]}</span>
                                    <span>{movie.DispReleaseDate.split(',')[1]}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='movie-watch-rating-container'>
                    <div className='watch-rating-container'>
                        <div>
                            <span>Will Watch</span>
                            <span>({movie.wtsCount})</span>
                        </div>
                        <div>
                            <span>Won't Watch</span>
                            <span>({movie.dwtsCount})</span>
                        </div>
                        <div>
                            <span>Maybe</span>
                            <span>({movie.maybeCount})</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default MovieTrailerDetails