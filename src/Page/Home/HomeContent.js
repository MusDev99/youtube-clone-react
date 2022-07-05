import React from "react";
import VideoRow from "../../Main/VideoRow";
import "./HomeContent.css";

const HomeContent = () => {
	const recommendedVideos = [
		{
			thumbnail: `https://picsum.photos/id/${Math.floor(
				Math.random() * 100
			)}/300/150`,
			title: "Shariff - Diriku Dibenci",
			length: 208,
			channel: {
				name: "Shariff Syazwan",
				link: "https://www.youtube.com/channel/UC9CoOnJkIBMdeijd9qYoT_g",
				image: "https://picsum.photos/30/30",
			},
			viewCount: 1812124001,
			uploadedAt: "2022-05-01",
		},
		{
			thumbnail: `https://picsum.photos/id/${Math.floor(
				Math.random() * 100
			)}/300/150`,
			title: "Shariff - Simpang 302",
			length: 208,
			channel: {
				name: "Shariff Syazwan",
				link: "https://www.youtube.com/channel/UC9CoOnJkIBMdeijd9qYoT_g",
				image: "https://picsum.photos/30/30",
			},
			viewCount: 1812124001,
			uploadedAt: "2020-02-01",
		},
		{
			thumbnail: `https://picsum.photos/id/${Math.floor(
				Math.random() * 100
			)}/300/150`,
			title: "TUTORIAL MEMBANTAI MEMBER",
			length: 208,
			channel: {
				name: "Shariff Syazwan",
				link: "https://www.youtube.com/channel/UC9CoOnJkIBMdeijd9qYoT_g",
				image: "../../images/shariff.jpeg",
			},
			viewCount: 1812124001,
			uploadedAt: "2020-02-01",
		},
		{
			thumbnail: `https://picsum.photos/id/${Math.floor(
				Math.random() * 100
			)}/300/150`,
			title: "AKU BELANJA RM5000 DI UNIQLO",
			length: 208,
			channel: {
				name: "Azam Kamal",
				link: "https://www.youtube.com/channel/UC9CoOnJkIBMdeijd9qYoT_g",
				image: "https://picsum.photos/30/30",
			},
			viewCount: 1812124001,
			uploadedAt: "2020-02-01",
		},
	];

	const channelVideos = [
		{
			thumbnail: `https://picsum.photos/id/${Math.floor(
				Math.random() * 100
			)}/300/150`,
			title: "Ariana Grande - Problem ft.Iggy Azalea",
			length: 208,
			channel: {
				name: "Ariana Grande",
				link: "https://www.youtube.com/channel/UC9CoOnJkIBMdeijd9qYoT_g",
				image: "https://picsum.photos/30/30",
			},
			viewCount: 1812124001,
			uploadedAt: "2020-12-01",
		},
		{
			thumbnail: `https://picsum.photos/id/${Math.floor(
				Math.random() * 100
			)}/300/150`,
			title: "Ariana Grande - Problem ft.Iggy Azalea",
			length: 208,
			channel: {
				name: "Ariana Grande",
				link: "https://www.youtube.com/channel/UC9CoOnJkIBMdeijd9qYoT_g",
				image: "https://picsum.photos/30/30",
			},
			viewCount: 1812124001,
			uploadedAt: "2020-02-01",
		},
		{
			thumbnail: `https://picsum.photos/id/${Math.floor(
				Math.random() * 100
			)}/300/150`,
			title: "Ariana Grande - Problem ft.Iggy Azalea",
			length: 208,
			channel: {
				name: "Ariana Grande",
				link: "https://www.youtube.com/channel/UC9CoOnJkIBMdeijd9qYoT_g",
				image: "https://picsum.photos/30/30",
			},
			viewCount: 1812124001,
			uploadedAt: "2020-02-01",
		},
		{
			thumbnail: `https://picsum.photos/id/${Math.floor(
				Math.random() * 100
			)}/300/150`,
			title: "Ariana Grande - Problem ft.Iggy Azalea",
			length: 208,
			channel: {
				name: "Ariana Grande",
				link: "https://www.youtube.com/channel/UC9CoOnJkIBMdeijd9qYoT_g",
				image: "https://picsum.photos/30/30",
			},
			viewCount: 1812124001,
			uploadedAt: "2020-02-01",
		},
	];

	const marqChan = {
		name: "Shariff Syazwan",
		link: "https://www.youtube.com/channel/UC9CoOnJkIBMdeijd9qYoT_g",
		image: "https://picsum.photos/30/30",
	};
	return (
		<div className="home-content">
			<iframe
				height="100%"
				width="100%"
				src={
					"https://www.youtube.com/embed/UotRPwnjEPM?autoplay=1&mute=1&loop=1"
				}
				frameborder="0"
			/>
			<VideoRow type="normal" label="Recommended" videos={recommendedVideos} />

			<VideoRow type="channel" channel={marqChan} videos={channelVideos} />
		</div>
	);
};

export default HomeContent;
