import React from 'react';
import SearchDoctor from './consult-doctor/SearchDoctor';
import DoctorProfile from './consult-doctor/DoctorProfile';
import { createStackNavigator } from '@react-navigation/stack';
// import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
// import {
//   useFonts,
//   Roboto_500Medium,
//   Roboto_700Bold
// } from '@expo-google-fonts/roboto';
// import Constants from 'expo-constants';
// import { TextInput } from 'react-native';
// import { Feather, AntDesign, Fontisto } from '@expo/vector-icons';
// import { colors } from '../constants/theme';
// import { LinearGradient } from 'expo-linear-gradient';

// const Category = () => {
//   return (
//     <View style={styles.categoryContainer}>
//       <Text style={styles.categoryTitle}>Category</Text>
//       <View style={styles.categoryCardsContainer}>
//         <View style={styles.categoryCard}>
//           <View style={styles.categoryImage}>
//             <AntDesign name='heart' size={24} color={colors.red} />
//           </View>
//           <Text style={styles.categoryText}>Medical oncologist</Text>
//         </View>
//         <View style={styles.categoryCard}>
//           <View style={styles.categoryImage}>
//             <Fontisto name='doctor' size={24} color={colors.gray} />
//           </View>
//           <Text style={styles.categoryText}>Surgical oncologist</Text>
//         </View>
//         <View style={styles.categoryCard}>
//           <View style={styles.categoryImage}>
//             <AntDesign name='heart' size={24} color={colors.red} />
//           </View>
//           <Text style={styles.categoryText}>Breast surgeon</Text>
//         </View>
//         <View style={styles.categoryCard}>
//           <View style={styles.categoryImage}>
//             <AntDesign name='heart' size={24} color={colors.red} />
//           </View>
//           <Text style={styles.categoryText}>Plastic surgeon</Text>
//         </View>
//       </View>
//     </View>
//   );
// };

// const Header = () => {
//   return (
//     <LinearGradient style={styles.header} colors={[colors.white, colors.gray2]}>
//       <Text style={styles.headerText}>Find your desired specialist</Text>
//       <View style={styles.searchContainer}>
//         <TextInput
//           placeholder={'Search for doctor'}
//           style={styles.searchInput}
//         />
//         <View style={styles.searchIcon}>
//           <Feather name='search' size={24} color='white' />
//         </View>
//       </View>
//     </LinearGradient>
//   );
// };

// const TopDoctorCarousel = () => {
//   const data = [
//     {
//       id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//       title: 'First Item'
//     },
//     {
//       id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//       title: 'Second Item'
//     },
//     {
//       id: '58694a0f-3da1-471f-bd96-145571e29d72',
//       title: 'Third Item'
//     }
//   ];
//   const doctorCard = () => {
//     return (
//       <View style={styles.doctorCard}>
//         <View>
//           <Image
//             source={{
//               uri:
//                 'https://images.unsplash.com/photo-1582971805810-b24306e0afe7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
//             }}
//             style={{
//               width: 80,
//               height: 80,
//               borderRadius: 15,
//               alignSelf: 'flex-end'
//             }}
//           />
//         </View>
//         <View style={{ paddingTop: 10 }}>
//           <Text style={styles.doctorDetails}>Dr. Selkon Kane </Text>
//           <Text style={{ ...styles.doctorDetails, fontSize: 12 }}>
//             Breast Surgeon{' '}
//           </Text>
//         </View>
//       </View>
//     );
//   };
//   return (
//     <LinearGradient
//       style={styles.topDoctorsContainer}
//       start={{ x: 0, y: 0 }}
//       end={{ x: 1, y: 1 }}
//       colors={[colors.secondary, colors.white]}
//     >
//       <Text style={styles.topDoctorText}>Top Doctors</Text>
//       <FlatList
//         data={data}
//         renderItem={doctorCard}
//         keyExtractor={item => item.id}
//         horizontal={true}
//         style={{ flex: 1 }}
//         showsHorizontalScrollIndicator={false}
//       />
//     </LinearGradient>
//   );
// };

// const DoctorComponent = () => {
//   let [fontsLoaded] = useFonts({
//     Roboto_500Medium
//   });
//   if (!fontsLoaded) {
//     return null;
//   }
//   return (
//     <View style={styles.container}>
//       <Header />
//       <Category />
//       <TopDoctorCarousel />
//     </View>
//   );
// };

// export default DoctorComponent;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white'
//   },
//   header: {
//     padding: 20,
//     flexDirection: 'column',
//     alignItems: 'center',
//     backgroundColor: colors.gray2,
//     paddingBottom: 25,
//     borderBottomLeftRadius: 30,
//     borderBottomRightRadius: 30
//   },
//   headerText: {
//     fontSize: 26,
//     fontFamily: 'Roboto_500Medium',
//     letterSpacing: 1,
//     marginTop: Constants.statusBarHeight,
//     color: colors.black
//   },
//   searchContainer: {
//     padding: 5,
//     height: 50,
//     width: 330,
//     backgroundColor: 'white',
//     borderRadius: 50,
//     flexDirection: 'row',
//     marginTop: 20
//   },
//   searchInput: {
//     flex: 1,
//     paddingLeft: 10
//   },
//   searchIcon: {
//     backgroundColor: colors.tertiary,
//     marginRight: 0,
//     width: 60,
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 50,
//     color: 'white'
//   },
//   categoryContainer: {
//     padding: 20,
//     paddingTop: 10
//   },
//   categoryTitle: {
//     fontFamily: 'Roboto_500Medium',
//     fontSize: 17
//   },
//   categoryCardsContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     width: '100%',
//     justifyContent: 'space-between',
//     alignItems: 'center'
//   },
//   categoryCard: {
//     flexDirection: 'column',
//     padding: 5,
//     alignItems: 'center',
//     width: 70,
//     height: 70
//   },
//   categoryImage: {
//     padding: 10,
//     width: 60,
//     height: 60,
//     backgroundColor: 'white',
//     borderRadius: 15,
//     elevation: 10,
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   categoryText: {
//     padding: 10,
//     width: 100,
//     textAlign: 'center',
//     fontSize: 12
//   },
//   topDoctorsContainer: {
//     marginTop: 30,
//     marginLeft: 20,
//     borderTopLeftRadius: 30,
//     padding: 0,
//     position: 'relative',
//     flex: 1,
//     width: '100%',
//     backgroundColor: 'red',
//     elevation: 10,
//     flexDirection: 'row',
//     alignItems: 'center',
//     overflow: 'hidden'
//   },
//   topDoctorText: {
//     transform: [{ rotate: '-90deg' }],
//     fontFamily: 'Roboto_500Medium',
//     fontSize: 17
//   },
//   doctorCard: {
//     width: 150,
//     height: 150,
//     borderRadius: 20,
//     backgroundColor: colors.white,
//     opacity: 0.8,
//     marginRight: 20,
//     padding: 15
//   },
//   doctorDetails: {
//     fontFamily: 'Roboto_500Medium',
//     fontSize: 12
//   }
// });

const Stack = createStackNavigator();

const DoctorComponent = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Search'
        component={SearchDoctor}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='DoctorProfile'
        component={DoctorProfile}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default DoctorComponent;
