import React, { Component } from "react";
import { AppRegistry, View, Modal, Text, TouchableOpacity } from "react-native";
import Scene01 from "./components/extras/scene-01";
import Scene02 from "./components/extras/scene-02";
import TableOfContents from "./components/table-of-contents";
import CloseButton from "./components/table-of-contents/closeButton";

export default class NatureOfCodeApp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sceneVisible: false,
			scene: null
		};
	}

	mountScene = scene => {
		this.setState({
			sceneVisible: true,
			scene: scene
		});
	};

	unMountScene = () => {
		this.setState({
			sceneVisible: false,
			scene: null
		});
	};

	render() {
		return (
			<View>
				<TableOfContents
					sceneVisible={this.state.sceneVisible}
					contents={{
						heading: "Chapters",
						items: [
							{
								heading: "Extras",
								summary: "These are just a few extra examples I've been tinkering with.",
								items: [
									{
										heading: "Single Worm",
										onPress: () =>
											this.mountScene(<Scene01 />)
									},
									{
										heading: "Multi-Touch Worms",
										onPress: () =>
											this.mountScene(<Scene02 />)
									}
								]
							}
						]
					}}
				/>
				<Modal
					animationType={"slide"}
					transparent={false}
					visible={this.state.sceneVisible}
				>

					{this.state.scene}

					<CloseButton
						onPress={this.unMountScene}
						animation={"fadeInLeft"}
					/>

				</Modal>
			</View>
		);
	}
}

AppRegistry.registerComponent("NatureOfCodeApp", () => NatureOfCodeApp);
