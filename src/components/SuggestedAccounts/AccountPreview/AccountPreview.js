// import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/311601546_2714155968717742_4238354715740443220_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=0debeb&_nc_ohc=ndw7ca1xvAkAX9Yu-gM&_nc_ht=scontent.fhan17-1.fna&oh=00_AfB29zWs8iHq1CFFna9UfUrKAOSoGd3Pmq0-_hO2VVRqBQ&oe=6367E756"
                    alt=""
                />
                <div>
                    <Button className={cx('follow-btn')} primary>
                        Follow
                    </Button>
                </div>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>suahsuah</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Nguyễn Hồng Nhung</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
