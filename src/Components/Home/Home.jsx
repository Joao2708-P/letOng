import './Home.css'
import ferramentas from '../../assets/ferramentas.png'

function Home() {

    return(
        <div className='config'>
            <div className='content-home'>
                <h1>Site em obra </h1>
                <img className="ferramentas" src={ferramentas} alt=""/>
            </div>
        </div>
    )
}

export default Home