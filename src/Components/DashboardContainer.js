import React, { Component } from "react";
import DashboardComponent from "./DashboardComponent";


class DashboardContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            isAddVideoPanelOpen: false,
            addVideoIFrame: "",
            videosArray: [],
        }
        this.onOpenAddVideoPanelClick = this.onOpenAddVideoPanelClick.bind(this);
        this.onCloseAddVideoPanelClick = this.onCloseAddVideoPanelClick.bind(this);
        this.onAddVideoOnChange = this.onAddVideoOnChange.bind(this);
        this.onAddVideoSubmitClick = this.onAddVideoSubmitClick.bind(this);
        this.onDeleteClick = this.onDeleteClick.bind(this);
    }

    onOpenAddVideoPanelClick(e) {
        const { isAddVideoPanelOpen } = this.state;
        this.setState({
            isAddVideoPanelOpen: !isAddVideoPanelOpen,
        });
    }

    onCloseAddVideoPanelClick(e) {
        this.setState({
            isAddVideoPanelOpen: false,
        });
    }

    onAddVideoOnChange(e) {
        this.setState({
            addVideoIFrame: e.target.value,
        });
    }

    onAddVideoSubmitClick(e) {
        const { videosArray, addVideoIFrame } = this.state;

        videosArray.push(addVideoIFrame);

        this.setState({
            isAddVideoPanelOpen: false,
            addVideoIFrame: "",
            videosArray: videosArray,
        });
    }

    onDeleteClick(targetVideo) {
        const { videosArray } = this.state;
        const newVideoArray = [];
        for (let searchVideo of videosArray) {
            if (searchVideo !== targetVideo) {
                newVideoArray.push(searchVideo);
            }
        }
        this.setState({
            videosArray: newVideoArray,
        });
    }

    render() {
        const { isAddVideoPanelOpen, addVideoIFrame, videosArray } = this.state;
        return (
            <DashboardComponent
                videosArray={videosArray}
                isAddVideoPanelOpen={isAddVideoPanelOpen}
                onOpenAddVideoPanelClick={this.onOpenAddVideoPanelClick}
                onCloseAddVideoPanelClick={this.onCloseAddVideoPanelClick}
                addVideoIFrame={addVideoIFrame}
                onAddVideoOnChange={this.onAddVideoOnChange}
                onAddVideoSubmitClick={this.onAddVideoSubmitClick}
                onDeleteClick={this.onDeleteClick}
            />
        );
    }
}

export default DashboardContainer;
