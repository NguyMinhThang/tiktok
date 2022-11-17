// import images from '~/assets/images';
// import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview/AccountPreview';

const cx = classNames.bind(styles);
function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview></AccountPreview>
                </PopperWrapper>
            </div>
        );
    };
    return (
        <div>
            <Tippy offset={[-20, 0]} interactive delay={[800, 0]} placement="bottom" render={renderPreview}>
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/311601546_2714155968717742_4238354715740443220_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=0debeb&_nc_ohc=ndw7ca1xvAkAX9Yu-gM&_nc_ht=scontent.fhan17-1.fna&oh=00_AfB29zWs8iHq1CFFna9UfUrKAOSoGd3Pmq0-_hO2VVRqBQ&oe=6367E756"
                        alt=""
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>suahsuah</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>Nguyễn Hồng Nhung</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}
AccountItem.propTypes = {};
export default AccountItem;
