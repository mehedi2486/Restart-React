import image from './assets/cat.jpg'
function Card(){
    return(
        <div className="card">
            <img className="card-image" src={image } alt="profile picture" />
            <h2 className='card-tile'>Mehedi Hasan</h2>
            <p>I am a programmer who is learning react and i like to play video game</p>

        </div>
    )
}

export default Card;