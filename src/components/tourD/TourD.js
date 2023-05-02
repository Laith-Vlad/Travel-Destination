
import Header from '../header/header';
import { useParams } from 'react-router-dom';
import { useState } from 'react';


function TourDetails(props){
    const { id } = useParams() 
console.log(id)
    const city =props.DATA.find(city => city.id === id);

    const [showMore, setShowMore] = useState(false);

    const handleShowMoreClick = () => {
        setShowMore(!showMore);
    }

    return (
        <>
            <Header></Header>
            <div className='cityy'>
                    <p> {showMore ? city.info :`${city.info.slice(0,230)}` } </p>
                <button className='but' onClick={handleShowMoreClick}>{showMore ? 'see less' : 'see more'}</button>
            </div>
        </>
    )
}
export default TourDetails;