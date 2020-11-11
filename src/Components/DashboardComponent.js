import React, { Component } from "react";
import { Link } from "react-router-dom";


function YouTubePlaylistRow(props) {
    const { video, onDeleteClick } = props;
    return (
        <tr>
            <td>
                <button onClick={ ()=>onDeleteClick(video) }>Delete</button> <br /><br />
                <div dangerouslySetInnerHTML={{__html: video}} />
            </td>
        </tr>
    );
}


function YouTubePlaylist(props) {
    const { videosArray, onDeleteClick } = props;

    const elements = [];
    for (let video of videosArray) {
        elements.push(
            <YouTubePlaylistRow video={video} onDeleteClick={onDeleteClick} />
        );
    }

    return (
        <>
             <h2>Playlist</h2>
             <table>
                 {elements}
             </table>
        </>
    );
}

function DashboardComponent(props) {
    const {
        videosArray,
        isAddVideoPanelOpen,
        onOpenAddVideoPanelClick,
        onCloseAddVideoPanelClick,
        addVideoIFrame,
        onAddVideoOnChange,
        onAddVideoSubmitClick,
        onDeleteClick
    } = props;
    return (
        <>
            <h1>Dashboard</h1>
            <p>Here are my favourit YouTube songs...</p>

            {isAddVideoPanelOpen == false &&
                <button onClick={onOpenAddVideoPanelClick}>Add</button>
            }
            {isAddVideoPanelOpen &&
                <div className="add-video-panel">
                    <h2>Add Video</h2>
                    <input placeholder="iframe http://..." onChange={onAddVideoOnChange} value={addVideoIFrame} />
                    <button onClick={onAddVideoSubmitClick}>Submit</button>
                    <button onClick={onCloseAddVideoPanelClick}>Close</button>
                </div>
            }

            <YouTubePlaylist videosArray={videosArray} onDeleteClick={onDeleteClick} />
            <br />
            <Link to="/login">Logout</Link>
        </>
    );
}


export default DashboardComponent;
