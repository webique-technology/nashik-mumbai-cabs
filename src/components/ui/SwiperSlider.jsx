// swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

// slider image swiper
export const SwiperSliderComp = ({
    children,
    className,
    style,
    navigation = true,
    pagination = true,
    timeDelay = 2500,
    loop = true,
    slidesPerView = 1,
    spaceBetween = 20,
    effect, // Added explicit effect parameter
    module,
    breakpoints,
    disableAutoplay = false,
    ...props // Capture extra props like onSlideChange
}) => {
    // Explicit array assignment guarantees modules assemble correctly
    const activeModules = [Navigation, Autoplay];

    if (pagination) activeModules.push(Pagination);
    if (module) activeModules.push(module);
    if (effect === 'fade' && !activeModules.includes(EffectFade)) {
        activeModules.push(EffectFade);
    }

    const isFade = effect === 'fade';
    return (
        <Swiper
            modules={activeModules}
            effect={effect} // Decides if slider uses 'slide' or 'fade'
            // Crucial: Fade configurations break if spaceBetween is greater than zero
            spaceBetween={isFade ? 0 : spaceBetween}
            slidesPerView={isFade ? 1 : slidesPerView}
            navigation={navigation}
            grabCursor={!isFade} // Disable swipe tracking cursor feel for static crossfades
            // This ensures the transition finishes even if the user stops dragging mid-way
            shortSwipes={true}
            longSwipes={true}
            // Only loop if we have enough slides, otherwise Swiper gets "stuck"
            loop={loop}
            className={className}
            // Enable clickable pagination dots if pagination prop is true
            pagination={pagination ? { clickable: true } : false}
            autoplay={
                disableAutoplay
                    ? false
                    : {
                        delay: timeDelay,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true, // Good UX for sliders
                    }
            }
            breakpoints={isFade ? undefined : breakpoints}
            {...props}
            style={style}
        >
            {children}
        </Swiper>
    );
};