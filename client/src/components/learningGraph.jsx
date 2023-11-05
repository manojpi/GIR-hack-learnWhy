import React from "react";
// import '../learningGraph';
import '../App.css';

export default function LearningGraph(props) {
    console.log(props)
    return (
        <>
            <div className="learning-graph">
                {props.data.map((item) => (
                    <>
                        <div className="topic">
                            <h2>{item}</h2>
                        </div>

                        <div className="connector">
                            <div className="line"></div>
                            <div className="arrow"></div>
                        </div>
                    </>

                ))}
                <div className="topic">
                    <h2>{props.product}</h2>
                </div>
            </div>
            <div class="modal-container" id="myModal">
                <span class="close" id="closeModal">&times;</span>
                <div class="modal-content">
                    <h2>Modal Title</h2>
                    <p>Modal content goes here.</p>
                </div>
            </div>

            <div class="modal-background" id="modalBackground"></div>
        </>

    )
}
