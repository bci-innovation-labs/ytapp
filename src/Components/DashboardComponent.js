import React, { Component } from "react";
import { Link } from "react-router-dom";


function YouTubePlaylist(props) {
    return (
        <>
             <h2>Playlist</h2>
             <table>

             </table>
        </>
    );
}

function DashboardComponent(props) {
    const {
        isAddVideoPanelOpen,
        onOpenAddVideoPanelClick,
        onCloseAddVideoPanelClick,
        addVideoIFrame,
        onAddVideoOnChange,
        onAddVideoSubmitClick
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

            <YouTubePlaylist />
            <Link to="/login">Logout</Link>
        </>
    );
}


export default DashboardComponent;
