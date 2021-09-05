import React, {Component} from 'react';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import IconBox from './components/IconBox';
import AboutUs from './components/AboutUs';
import TestimonialSlider from './components/TestimonialSlider';
import FaqEvent from './components/FaqEvent';
import TeamSlider from './components/TeamSlider';
import HelpArea from './components/HelpArea';
import HomeBlog from './components/HomeBlog';
import CampusTour from './components/CampusTour';
import NewsletterForm from './components/NewsletterForm';
import Footer from './components/Footer';
import ServiceBox from "./components/ServiceBox";
import ImageGallery from "./components/ImageGallery";

export default class HomeOne extends Component {
    render() {
        return (
            <div className="main-wrapper">

                {/* Header */}
                < Header/>

                {/* Hero Slider */}
                < HeroSlider/>

                {/* Icon Box */}
                < IconBox/>

                {/* Service Box */}
                <ServiceBox/>

                {/* Faq & Event Area */}
                < FaqEvent/>

                {/* About Area */}
                < AboutUs/>

                {/* Image Gallery Area */}
                <ImageGallery/>

                {/* Course Filter */}
                {/*< CourseFilter />*/}

                {/* Testimonial Slider */}
                < TestimonialSlider/>


                {/* Team Slider */}
                < TeamSlider/>

                {/* Help Area */}
                < HelpArea/>

                {/* Blog Area */}
                < HomeBlog/>

                {/* Campus Tour */}
                < CampusTour/>

                {/* Newsletter Form */}
                < NewsletterForm/>

                {/* Footer */}
                < Footer/>

            </div>
        )
    }
}