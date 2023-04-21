import styles from "./Player.module.css";
const Player = () => {
  return (
    <div className={styles.player}>
      <img className={styles.logoIcon} alt="" src="/logo.svg" />
      <div className={styles.navigation}>
        <div className={styles.forYou}>For You</div>
        <div className={styles.topTracks}>Top Tracks</div>
        <div className={styles.topTracks}>Favourites</div>
        <div className={styles.topTracks}>Recently Played</div>
      </div>
      <div className={styles.player1}>
        <div className={styles.songinfo}>
          <b className={styles.vivaLaVida}>Viva La Vida</b>
          <div className={styles.coldplay}>Coldplay</div>
        </div>
        <div className={styles.center}>
          <img className={styles.coverIcon} alt="" src="/cover@2x.png" />
          <div className={styles.seeker}>
            <div className={styles.rectangleParent}>
              <div className={styles.groupChild} />
              <div className={styles.groupItem} />
            </div>
          </div>
        </div>
        <button className={styles.controls}>
          <img className={styles.controlsChild} alt="" src="/group-7.svg" />
          <div className={styles.frameParent}>
            <img className={styles.frameIcon} alt="" src="/frame.svg" />
            <img className={styles.frameIcon1} alt="" src="/frame1.svg" />
            <img className={styles.frameIcon} alt="" src="/frame2.svg" />
          </div>
          <div className={styles.frame}>
            <img className={styles.vectorIcon} alt="" src="/vector.svg" />
          </div>
        </button>
      </div>
      <div className={styles.sidebar}>
        <div className={styles.listview}>
          <div className={styles.listItem01}>
            <div className={styles.image4Parent}>
              <img className={styles.image4Icon} alt="" src="/image-4@2x.png" />
              <div className={styles.seeker}>
                <div className={styles.starboy}>Starboy</div>
                <div className={styles.theWeeknd}>The Weeknd</div>
              </div>
            </div>
            <div className={styles.div}>4:16</div>
          </div>
          <div className={styles.listItem01}>
            <div className={styles.image4Parent}>
              <img
                className={styles.image4Icon}
                alt=""
                src="/image-41@2x.png"
              />
              <div className={styles.seeker}>
                <div className={styles.starboy}>Demons</div>
                <div className={styles.theWeeknd}>Imagine Dragons</div>
              </div>
            </div>
            <div className={styles.div}>5:24</div>
          </div>
          <div className={styles.listItem03}>
            <div className={styles.image4Parent}>
              <img
                className={styles.image4Icon}
                alt=""
                src="/image-42@2x.png"
              />
              <div className={styles.seeker}>
                <div className={styles.starboy}>Mouth of the river</div>
                <div className={styles.theWeeknd}>Imagine Dragons</div>
              </div>
            </div>
            <div className={styles.div}>6:23</div>
          </div>
          <div className={styles.listItem03}>
            <div className={styles.image4Parent}>
              <img
                className={styles.image4Icon}
                alt=""
                src="/image-43@2x.png"
              />
              <div className={styles.seeker}>
                <div className={styles.starboy}>Ghost Stories</div>
                <div className={styles.theWeeknd}>Coldplay</div>
              </div>
            </div>
            <div className={styles.div}>3:10</div>
          </div>
          <div className={styles.listItem03}>
            <div className={styles.image4Parent}>
              <img
                className={styles.image4Icon}
                alt=""
                src="/image-44@2x.png"
              />
              <div className={styles.seeker}>
                <div className={styles.starboy}>Sparks</div>
                <div className={styles.theWeeknd}>Coldplay</div>
              </div>
            </div>
            <div className={styles.div}>4:23</div>
          </div>
          <div className={styles.listItem06}>
            <div className={styles.image4Parent}>
              <img
                className={styles.image4Icon}
                alt=""
                src="/image-45@2x.png"
              />
              <div className={styles.seeker}>
                <div className={styles.starboy}>Viva La Vida</div>
                <div className={styles.theWeeknd}>Coldplay</div>
              </div>
            </div>
            <div className={styles.div}>5:32</div>
          </div>
          <div className={styles.listItem03}>
            <div className={styles.image4Parent}>
              <img
                className={styles.image4Icon}
                alt=""
                src="/image-46@2x.png"
              />
              <div className={styles.seeker}>
                <div className={styles.starboy}>Hymn for the weekend</div>
                <div className={styles.theWeeknd}>Coldplay</div>
              </div>
            </div>
            <div className={styles.div}>2:23</div>
          </div>
          <div className={styles.listItem03}>
            <div className={styles.image4Parent}>
              <img
                className={styles.image4Icon}
                alt=""
                src="/image-47@2x.png"
              />
              <div className={styles.seeker}>
                <div className={styles.starboy}>Pain</div>
                <div className={styles.theWeeknd}>Ryan Jones</div>
              </div>
            </div>
            <div className={styles.div}>3:12</div>
          </div>
          <div className={styles.listItem03}>
            <div className={styles.image4Parent}>
              <img
                className={styles.image4Icon}
                alt=""
                src="/image-48@2x.png"
              />
              <div className={styles.seeker}>
                <div className={styles.starboy}>Origin</div>
                <div className={styles.theWeeknd}>Imagine Dragons</div>
              </div>
            </div>
            <div className={styles.div}>3:43</div>
          </div>
        </div>
        <b className={styles.title}>For You</b>
        <div className={styles.search}>
          <div className={styles.searchSongArtist}>Search Song, Artist</div>
          <img className={styles.frameIcon3} alt="" src="/frame3.svg" />
        </div>
      </div>
      <img className={styles.profileIcon} alt="" src="/profile@2x.png" />
    </div>
  );
};

export default Player;
