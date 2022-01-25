import { Transition, TransitionStatus } from 'react-transition-group';
import { ReactNode } from 'react';
import { Properties } from 'csstype';

// Todo (1) добавить анимацию через namespace (если возможно) <Animation.SlideDown>

const defaultDuration = 300;

const transitionStyles: Partial<Record<TransitionStatus, Properties>> = {
    entering: {opacity: 1, transform: 'translateY(0)'},
    entered: {opacity: 1, transform: 'translateY(0)'},
    exiting: {opacity: 0, transform: 'translateY(-20px)'},
    exited: {opacity: 0, transform: 'translateY(-20px)'},
};

interface MenuAnimationProps {
    inProp: boolean;
    duration?: number;
    children: ReactNode;
}

export const SlideDownAnimation = ({inProp = false, duration = defaultDuration, children}: MenuAnimationProps) => {
    const defaultStyle = {
        transition: `all ${duration}ms ease-in-out`,
        opacity: 0,
    };

    // console.log('inProp', inProp);

    return (
        <Transition in={inProp} timeout={duration}>
            {state => (
                <div style={{...defaultStyle, ...transitionStyles[state]}}>
                    {children}
                </div>
            )}
        </Transition>
    );
};