import {useCallback, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {IFrameProps} from "../components/Frames/Frame";

export function useSliderNavigation(slides: React.ReactElement<IFrameProps>[], initialSlide: number = 0) {
    const navigate = useNavigate();

    const [currentSlide, setCurrentSlide] = useState(initialSlide);

    const [slideName, setSlideName] = useState<string | undefined>(undefined);

    const nextSlide = useCallback(() => {
        setCurrentSlide((prevState: number) => prevState >= slides.length - 1 ? 0 : prevState + 1);
    },[setCurrentSlide, slides]);

    const prevSlide = useCallback(() => {
        setCurrentSlide((prevState: number) => prevState <= 0 ? slides.length - 1 : prevState - 1);
    },[setCurrentSlide, slides]);


    useEffect(() => {
        navigate(`/${currentSlide}`);
        setSlideName(slides[currentSlide].props.name);
    },[currentSlide]);

    return {
        currentSlide,
        nextSlide,
        prevSlide,
        slideName,
        slideCount: slides.length
    }


}