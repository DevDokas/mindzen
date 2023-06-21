import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Link } from 'expo-router';
import { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import * as color from '../config/colorPalette';
import { AuthStore } from '../config/store';

export default function Navbar(): any {
  const [homePage, setHomePage] = useState<string>(color.navButtonSection);
  const [homeSelection, setHomeSelection] = useState<string>(color.navButton);
  const [searchPage, setSearchPage] = useState<string>(color.navButtonSection);
  const [searchSelection, setSearchSelection] = useState<string>(
    color.navButton
  );
  const [calendarPage, setCalendarPage] = useState<string>(
    color.navButtonSection
  );
  const [calendarSelection, setCalendarSelection] = useState<string>(
    color.navButton
  );
  const [profilePage, setProfilePage] = useState<string>(
    color.navButtonSection
  );
  const [profileSelection, setProfileSelection] = useState<string>(
    color.navButton
  );

  const { isLoggedIn } = AuthStore.useState();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center',
      height: 72,
      width: '100%',
      bottom: 0,
      left: 0
    },
    main: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    },
    bar: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 20,
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
      height: 72,
      width: '100%',
      backgroundColor: color.navBackgroundColor
    },
    homePage: {
      height: 68,
      width: 68,
      borderRadius: 12,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: homePage
    },
    searchPage: {
      height: 68,
      width: 68,
      borderRadius: 12,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: searchPage
    },
    calendarPage: {
      height: 68,
      width: 68,
      borderRadius: 12,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: calendarPage
    },
    profilePage: {
      height: 68,
      width: 68,
      borderRadius: 12,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: profilePage
    }
  });

  const selectHome = (): void => {
    setHomePage(color.navButtonSectionSelected);
    setSearchPage(color.navButtonSection);
    setCalendarPage(color.navButtonSection);
    setProfilePage(color.navButtonSection);
    setHomeSelection(color.navButtonSelected);
    setSearchSelection(color.navButton);
    setCalendarSelection(color.navButton);
    setProfileSelection(color.navButton);
  };

  const selectSearch = (): void => {
    setHomePage(color.navButtonSection);
    setSearchPage(color.navButtonSectionSelected);
    setCalendarPage(color.navButtonSection);
    setProfilePage(color.navButtonSection);
    setHomeSelection(color.navButton);
    setSearchSelection(color.navButtonSelected);
    setCalendarSelection(color.navButton);
    setProfileSelection(color.navButton);
  };

  const selectCalendar = (): void => {
    setHomePage(color.navButtonSection);
    setSearchPage(color.navButtonSection);
    setCalendarPage(color.navButtonSectionSelected);
    setProfilePage(color.navButtonSection);
    setHomeSelection(color.navButton);
    setSearchSelection(color.navButton);
    setCalendarSelection(color.navButtonSelected);
    setProfileSelection(color.navButton);
  };

  const selectProfile = (): void => {
    setHomePage(color.navButtonSection);
    setSearchPage(color.navButtonSection);
    setCalendarPage(color.navButtonSection);
    setProfilePage(color.navButtonSectionSelected);
    setHomeSelection(color.navButton);
    setSearchSelection(color.navButton);
    setCalendarSelection(color.navButton);
    setProfileSelection(color.navButtonSelected);
  };

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={styles.bar}>
          <Link href="/" onPress={selectHome}>
            <View style={styles.homePage}>
              <FontAwesome5 name="home" size={50} color={homeSelection} />
            </View>
          </Link>
          <Link href="/(tabs)/pageSearch" onPress={selectSearch}>
            <View style={styles.searchPage}>
              <FontAwesome5
                name="capsules"
                size={50}
                color={searchSelection}
              />
            </View>
          </Link>
          <Link href="/(tabs)/pageCalendar" onPress={selectCalendar}>
            <View style={styles.calendarPage}>
              <FontAwesome5
                name="calendar-alt"
                size={50}
                color={calendarSelection}
              />
            </View>
          </Link>
          <Link href="/(tabs)/pageProfile" onPress={selectProfile}>
            <View style={styles.profilePage}>
              <FontAwesome5
                name="grin-alt"
                size={50}
                color={profileSelection}
              />
            </View>
          </Link>
        </View>
      </View>
    </View>
  );
}
