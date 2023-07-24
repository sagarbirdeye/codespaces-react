import React from 'react';
import './MovieTrailerDetails.css';

const MovieTrailerDetails = (props) => {
    const { movie } = props

    const movieGenre = movie.EventGenre.split('|')
  return (
    <div className='container trailer-container-details'>
        <div className='row'>
            <div className='col-md-4'>
                <h1>{movie.EventTitle}</h1>
                <p className='movie-language-name'>{movie.EventLanguage}</p>
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
                            <div className='likes-main-wrapper'>
                                <div className='likes-image-wrapper'>
                                    <img src='likeIcon.svg'/>
                                </div>
                                <div className='likes-text-wrapper'>
                                    <span>{movie.ratings.wtsPerc} %</span>
                                    <span>{movie.ratings.wtsCount} votes</span>
                                </div>
                            </div>
                            <div className='release-date-container likes-main-wrapper'>
                                <div className='likes-image-wrapper'>
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
                                <div className='likes-text-wrapper'>
                                    <span>{movie.DispReleaseDate.split(',')[0]}</span>
                                    <span>{movie.DispReleaseDate.split(',')[1]}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='movie-watch-rating-container'>
                    <div className='watch-rating-container'>
                        <div className='watching-rating-text'>
                            <div className='watching-image'>
                                <img src='likeIcon.svg'/>
                            </div>
                            <span>Will Watch</span>
                            <small>({movie.wtsCount})</small>
                        </div>
                        <div className='watching-rating-text wont-watch-wrapper'>
                            <div className='watching-image'>
                                <img src='likeIcon.svg'/>
                            </div>
                            <span>Won't Watch</span>
                            <small>({movie.dwtsCount})</small>
                        </div>
                        <div className='watching-rating-text may-be-wrapper'>
                            <div className='watching-image'>
                                <img src='likeIcon.svg'/>
                            </div>
                            <span>Maybe</span>
                            <small>({movie.maybeCount})</small>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default MovieTrailerDetails