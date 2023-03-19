import { useEffect, useRef } from "react";
import * as actions from "../../../assets/redux/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { setImage } from "../../../assets/js/setImage";
import store from "../../../assets/redux/store";
import "./about.scss";
import "../../preloader/preloader.scss";
import { IMapdispatchToProps, IMapStateToProps, IProps, MeInfo } from "src/models";
import ImgWithPreloader from "src/assets/js/ImgWithPreloader";
import { findBestSuitedImg } from "src/assets/js/findBestSuitedImg";

const About = (props) => {

	const _imgContRef = useRef(null);

	const showModal = (image: string, descr: string): void => {
		props.setStore.setModalImage(image);
		props.setStore.setModalDescr(descr);
		props.setStore.setModal(true);
	};
    
	useEffect((): void => {
		/*const time: string = store.getState().theme === "dark" ? "night" : "day";
		const addListener = (obj: HTMLElement): void => obj.addEventListener("click", (): void => showModal(store.getState().imagesMe[time].images.slice(-1)[0].image, store.getState().imagesMe[time].descr));
		setImage("#imageMe", store.getState().imagesMe[time].images, (obj: HTMLElement) => addListener(obj));*/

	}, [props.theme]);

	console.log("rerender");
	

	return(
		<div className="about__container">
			<div className="img-container" ref={_imgContRef}>
				{_imgContRef.current && <ImgWithPreloader 
					link={findBestSuitedImg({
						images: store.theme === "light" ? props.imagesMe.day.images : props.imagesMe.night.images, 
						width: _imgContRef.current.width, 
						height: _imgContRef.current.height}
					).image} 
					alt={store.theme === "light" ? props.imagesMe.day.descr : props.imagesMe.night.descr} 
				/>} 
			</div>
			<div className="descr">
				<h3>I am <em>Postnikov Max</em></h3>
				<p>Frontend Developer with over 4 year of experience in successfully creating and maintaining web sites and components supported by more than 10 years IT background.</p>
				<p>I am experience working with clients ranging from homepage owners to well-organized business with up to 10.000 visitors per day.</p>
				<ul>
					{props.me.map((item: MeInfo, index: number) => {
						return (
							<li key={index}><b>{item.descr}</b>{item.value}</li>
						);
					})}
				</ul>
				<a className="link_button" href={props.resumeDoc} target="_blank" rel="noreferrer">Download cv</a>
			</div>
		</div>
	);
};


const mapStateToProps = (state)  => {
	return {
		theme: state.theme,
		me: state.me,
		imagesMe: state.imagesMe,
		resumeDoc: state.resumeDoc
	};
};


const mapDispatchToProps: IMapdispatchToProps = (dispatch) => ({
	setStore: bindActionCreators(actions, dispatch),
});


export default connect(mapStateToProps, mapDispatchToProps)(About);