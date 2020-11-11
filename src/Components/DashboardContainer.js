import React, { Component } from "react";
import DashboardComponent from "./DashboardComponent";


class DashboardContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            isAddVideoPanelOpen: false,
            addVideoIFrame: "",
        }
        this.onOpenAddVideoPanelClick = this.onOpenAddVideoPanelClick.bind(this);
        this.onCloseAddVideoPanelClick = this.onCloseAddVideoPanelClick.bind(this);
        this.onAddVideoOnChange = this.onAddVideoOnChange.bind(this);
        this.onAddVideoSubmitClick = this.onAddVideoSubmitClick.bind(this);
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
        //TODO: SAVE THE DATA...
        alert(this.state.addVideoIFrame);

        this.setState({
            isAddVideoPanelOpen: false,
            addVideoIFrame: "",
        });
    }

    render() {
        const { isAddVideoPanelOpen, addVideoIFrame } = this.state;
        return (
            <DashboardComponent
                isAddVideoPanelOpen={isAddVideoPanelOpen}
                onOpenAddVideoPanelClick={this.onOpenAddVideoPanelClick}
                onCloseAddVideoPanelClick={this.onCloseAddVideoPanelClick}
                addVideoIFrame={addVideoIFrame}
                onAddVideoOnChange={this.onAddVideoOnChange}
                onAddVideoSubmitClick={this.onAddVideoSubmitClick}
            />
        );
    }
}

export default DashboardContainer;
