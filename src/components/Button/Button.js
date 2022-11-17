import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);
function Button({
    to,
    href,
    onClick,
    children,
    className,
    leftIcon,
    primary = false,
    outline = false,
    small = false,
    large = false,
    text = false,
    rounded = false,
    disable = false,

    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };
    //Remove event when button disable
    if (disable) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        primary,
        outline,
        small,
        large,
        text,
        rounded,
        [className]: className,
        disable,
    });
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
        </Comp>
    );
}
Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node,
    className: PropTypes.string,
    leftIcon: PropTypes.node,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    text: PropTypes.bool,
    rounded: PropTypes.bool,
    disable: PropTypes.bool,
};
export default Button;
