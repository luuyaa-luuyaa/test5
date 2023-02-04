import React from "react";
import zurag from '../readmore/bbbb.png'
import './bet.css'

const Readmore2 = () =>{
    const data = [
        {
            key:1,
            description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            title:'red',
            img:zurag,
        },
        {
            key:1,
            description:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc',
            title:'red2',
        },

    ]
    return(
        <div>
            {
                data.map((row)=>(
                    <div className="con">
                        <div className="title">
                            <h2>{row.title}</h2>
                        </div>
                        <div className="des">
                            <p>{row.description}</p>
                        </div>
                        <div className="im">
                            <img src={row.img} alt="/"/>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
export default Readmore2