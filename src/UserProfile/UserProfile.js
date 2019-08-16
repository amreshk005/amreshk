import React from 'react';
import '../App';
import { HashLink as Link} from 'react-router-hash-link';
import classes from "../App.css";


const UserInfo = () => {
    return (
        <header className={classes.header}>
        <div className={classes.header__leftcloud}></div>
        <div className={classes.header__rightcloud}></div>
        <div className={classes.header__nav} id="navbar">
          <svg className={classes.header__nav__logo}>
            <image
              xlinkHref="../UserImage/content/home/hello/me.svg"
              height="100%"
              width="100%"
            />
          </svg>
          <div className={ classes.header__nav__link }>
            <Link to="/" className={ classes.header__nav__link__1 }>About</Link>
            <Link to="/" className={ classes.header__nav__link__2 }>Work</Link>
            <Link to="/" className={ classes.header__nav__link__3 }>Contact</Link>
           
          </div>
        </div>
        
        <div className={ classes.header__content }>
          <div className={ classes.header__content__info }>
            <svg className={ classes.header__content__info__1 }>
              <image
                xlinkHref="../UserImage/content/home/masthead/im-sean.svg"
                height="100%"
                width="100%"
              />
            </svg>
            <h3 className={ classes.header__content__info__2 }>a web designer.</h3>
          </div>
          <div className={ classes.header__content__photo }>
            <svg className={ classes.header__content__photo__1 }>
              <image
                xlinkHref="../UserImage/content/home/masthead/land.svg"
                height="100%"
                width="100%"
              />
            </svg>
          </div>
        </div>
      </header>
    )
};

export default UserInfo;