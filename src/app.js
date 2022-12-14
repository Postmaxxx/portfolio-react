import  React, { Component, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import SidePanel from "./components/side_panel/SidePanel";
import Homepage from './pages/home/Home';
import Aboutpage from './pages/about/About';
import Contact from './pages/contact/Contact';
import Resume from './pages/resume/Resume';
import Portfolio from './pages/portfolio/Portfolio'
import Page404 from './pages/page404/page404'
import ThemeSwitcher from './components/theme_switcher/ThemeSwitcher';
import { connect } from 'react-redux';
import * as actions from './assets/redux/actions';
import { bindActionCreators } from 'redux';
import ModalSplide from './components/modal_splide/ModalSplide.jsx';


const App = (props) => {
    return (
        <>
            <ModalSplide />
            <ThemeSwitcher />
            <SidePanel />
            <Routes>
                <Route index element={<Homepage />} />
                <Route path="/home" element={<Homepage />} />
                <Route path="/" element={<Homepage />} />
                <Route path="/index" element={<Homepage />} />
                <Route path="/about" element={<Aboutpage />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
        </>
    )

}
//{props.store.currentGallery.images.length !== 0 ? <ModalSplide /> : null}


const mapStateToProps = (store) => ({store: store})


const mapDispatchToProps = (dispatch) => ({
    setStore: bindActionCreators(actions, dispatch),
})


export default connect(mapStateToProps, mapDispatchToProps)(App);


