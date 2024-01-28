// import { Component } from "react";
import React from "react";
import styles from './profile.module.css'

const Profile = ({ username, tag, description, location, avatar, stats }) => {
    
    console.log(stats);

        return (
          <div className={styles.profile}>
            <div className={styles.description}>
              <img
                src={avatar}
                alt={description}
                className={styles.avatar}
              />
                    <p className={styles.name}>{username}</p>
                    <p className={styles.tag}>{tag }</p>
                    <p className={styles.location}>{location }</p>
            </div>

            <ul className={styles.stats}>
              <li>
                <span className={styles.label}>Followers</span>
                <span className={styles.quantity}>1000</span>
              </li>
              <li>
                <span className={styles.label}>Views</span>
                <span className={styles.quantity}>2000</span>
              </li>
              <li>
                <span className={styles.label}>Likes</span>
                <span className={styles.quantity}>3000</span>
              </li>
            </ul>
          </div>
        );
    }

export default Profile;