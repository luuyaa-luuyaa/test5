import React from "react";
import './home.css'
import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div className="nuur">
            <div className="read-more1">
                <div className="r1">
                <Link to={'/read'}>Readmore</Link>
                </div>
                <div className="r2">
                    <img src="https://blog.depositphotos.com/wp-content/uploads/2020/04/Photo-editing-tips-for-stock-photography-platforms.jpg" alt="/"/>
                </div>
            </div>
            <div className="read-more2">
                <div className="r3">
                <Link to={'/read2'}>Readmore</Link>
                </div>
                <div className="r4">
                <Link to={'/read3'}>Readmore</Link>
                </div>
            </div>
        </div>
    )
}
export default Home