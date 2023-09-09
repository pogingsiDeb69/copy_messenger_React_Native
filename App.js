import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.top}>
        <View style={styles.three_dot}>
          <View style={styles.three_dots}>
          </View>
          <View style={styles.three_dots}>
          </View>
          <View style={styles.three_dots}>
          </View>
        </View>
        <View style={styles.chats}>
          <Text style={styles.chat_text}>Chats</Text>
        </View>
        <Image source={require('./cam.png')} style={styles.three_dot} />
        <Image source={require('./pen.png')} style={styles.three_dot} />
      </View>
      <View style={styles.searchBar}>
        <Image source={require('./search.png')} style={styles.three_dot} />
        <Text style={styles.search_text}>Search people, channels & more</Text>
      </View>
      <View style={styles.userlist}>
        <View>
          <View style={{justifyContent:'center', alignContent:'center', alignSelf:'center'}}>
            <Image source={require('./alyysa.jpg')} style={styles.userslisttop} />
            <View style={{ backgroundColor: 'white', height: 20, width: 20, borderRadius: 80, position: 'absolute', marginTop: 50, marginLeft: 40, alignContent: 'center' }}>
              <View style={{ backgroundColor: 'green', height: 15, width: 15, borderRadius: 80, alignSelf: 'center', marginTop: 2 }}>
              </View>
            </View>
          </View>
          <View style={{alignContent:'center'}}>
            <Text style={styles.userlistsname}>Alyssa Mae</Text><Text style={styles.userlistsname}>Dequina</Text>
          </View>

        </View>
        <View>
          <View>
            <Image source={require('./tisoy.jpg')} style={styles.userslisttop} />
            <View style={{ backgroundColor: 'white', height: 20, width: 20, borderRadius: 80, position: 'absolute', marginTop: 50, marginLeft: 40, alignContent: 'center' }}>
              <View style={{ backgroundColor: 'green', height: 15, width: 15, borderRadius: 80, alignSelf: 'center', marginTop: 2 }}>
              </View>
            </View>
          </View>
          <View style={{alignContent:'center'}}>
            <Text style={styles.userlistsname}>Athenasia</Text><Text style={styles.userlistsname}>Fides</Text>

          </View>
        </View>
        <View>
          <View>
            <Image source={require('./lovelyn.jpg')} style={styles.userslisttop} />
            <View style={{ backgroundColor: 'white', height: 20, width: 20, borderRadius: 80, position: 'absolute', marginTop: 50, marginLeft: 40, alignContent: 'center' }}>
              <View style={{ backgroundColor: 'green', height: 15, width: 15, borderRadius: 80, alignSelf: 'center', marginTop: 2 }}>
              </View>
            </View>
          </View>
          <View style={{alignContent:'center'}}>
            <Text style={styles.userlistsname}>Lovelyn</Text><Text style={styles.userlistsname}>Magsino</Text>

          </View>
        </View>
        <View>
          <View>
            <Image source={require('./norie.jpg')} style={styles.userslisttop} />
            <View style={{ backgroundColor: 'white', height: 20, width: 20, borderRadius: 80, position: 'absolute', marginTop: 50, marginLeft: 40, alignContent: 'center' }}>
              <View style={{ backgroundColor: 'green', height: 15, width: 15, borderRadius: 80, alignSelf: 'center', marginTop: 2 }}>
              </View>
            </View>
          </View>
          <View style={{justifyContent:'center'}}>
            <Text style={styles.userlistsname}>Norie</Text><Text style={styles.userlistsname}>Hangad</Text>

          </View>
        </View>
        <View>
          <View>
            <Image source={require('./mj.jpg')} style={styles.userslisttop} />
            <View style={{ backgroundColor: 'white', height: 20, width: 20, borderRadius: 80, position: 'absolute', marginTop: 50, marginLeft: 40, alignContent: 'center' }}>
              <View style={{ backgroundColor: 'green', height: 15, width: 15, borderRadius: 80, alignSelf: 'center', marginTop: 2 }}>
              </View>
            </View>
          </View>
          <View>
            <Text style={styles.userlistsname}>Mj</Text><Text style={styles.userlistsname}>Sanchez</Text>

          </View>
        </View>



      </View>
      <View style={styles.chatss}>
        <View style={{ flexDirection: 'row' }}>
          <Image source={require('./alyysa.jpg')} style={styles.userslisttop} />
          <View style={{ backgroundColor: 'white', height: 20, width: 20, borderRadius: 80, position: 'absolute', marginTop: 50, marginLeft: 40, alignContent: 'center' }}>
            <View style={{ backgroundColor: 'green', height: 15, width: 15, borderRadius: 80, alignSelf: 'center', marginTop: 2 }}>
            </View>
          </View>
        </View>
        <View style={styles.chat_content}>
          <Text style={styles.username}>Alyssa Mae Dequina</Text>
          <Text style={styles.chat_contents}>Take your time sa dra. 22:25</Text>

        </View>
        <View style={{ alignContent: 'right', }}>
          <Image source={require('./alyysa.jpg')} style={styles.seenImage} />


        </View>
      </View>
      <View style={styles.chatss}>
        <View>
          <Image source={require('./alyysa.jpg')} style={styles.userslisttop} />
          <View style={{ backgroundColor: 'white', height: 20, width: 20, borderRadius: 80, position: 'absolute', marginTop: 50, marginLeft: 40, alignContent: 'center' }}>
            <View style={{ backgroundColor: 'green', height: 15, width: 15, borderRadius: 80, alignSelf: 'center', marginTop: 2 }}>
            </View>
          </View>
        </View>
        <View style={styles.chat_content}>
          <Text style={styles.username}>Alyssa Mae Dequina</Text>
          <Text style={styles.chat_contents}>Take your time sa dra. 22:25</Text>
        </View>
        <View style={{ alignContent: 'right', }}>
          <Image source={require('./alyysa.jpg')} style={styles.seenImage} />


        </View>
      </View>
      <View style={styles.chatss}>
        <View>
          <Image source={require('./alyysa.jpg')} style={styles.userslisttop} />
          <View style={{ backgroundColor: 'white', height: 20, width: 20, borderRadius: 80, position: 'absolute', marginTop: 50, marginLeft: 40, alignContent: 'center' }}>
            <View style={{ backgroundColor: 'green', height: 15, width: 15, borderRadius: 80, alignSelf: 'center', marginTop: 2 }}>
            </View>
          </View>
        </View>
        <View style={styles.chat_content}>
          <Text style={styles.username}>Alyssa Mae Dequina</Text>
          <Text style={styles.chat_contents}>Take your time sa dra. 22:25</Text>
        </View>
        <View style={{ alignContent: 'right', }}>
          <Image source={require('./alyysa.jpg')} style={styles.seenImage} />


        </View>
      </View>
      <View style={styles.chatss}>
        <View>
          <Image source={require('./alyysa.jpg')} style={styles.userslisttop} />
          <View style={{ backgroundColor: 'white', height: 20, width: 20, borderRadius: 80, position: 'absolute', marginTop: 50, marginLeft: 40, alignContent: 'center' }}>
            <View style={{ backgroundColor: 'green', height: 15, width: 15, borderRadius: 80, alignSelf: 'center', marginTop: 2 }}>
            </View>
          </View>
        </View>
        <View style={styles.chat_content}>
          <Text style={styles.username}>Alyssa Mae Dequina</Text>
          <Text style={styles.chat_contents}>Take your time sa dra. 22:25</Text>
        </View>
        <View style={{ alignContent: 'right', }}>
          <Image source={require('./alyysa.jpg')} style={styles.seenImage} />


        </View>
      </View><View style={styles.chatss}>
        <View>
          <Image source={require('./alyysa.jpg')} style={styles.userslisttop} />
          <View style={{ backgroundColor: 'white', height: 20, width: 20, borderRadius: 80, position: 'absolute', marginTop: 50, marginLeft: 40, alignContent: 'center' }}>
            <View style={{ backgroundColor: 'green', height: 15, width: 15, borderRadius: 80, alignSelf: 'center', marginTop: 2 }}>
            </View>
          </View>
        </View>
        <View style={styles.chat_content}>
          <Text style={styles.username}>Alyssa Mae Dequina</Text>
          <Text style={styles.chat_contents}>Take your time sa dra. 22:25</Text>
        </View>
        <View style={{ alignContent: 'right', }}>
          <Image source={require('./alyysa.jpg')} style={styles.seenImage} />


        </View>
      </View>
      <View style={styles.chatss}>
        <View>
          <Image source={require('./alyysa.jpg')} style={styles.userslisttop} />
          <View style={{ backgroundColor: 'white', height: 20, width: 20, borderRadius: 80, position: 'absolute', marginTop: 50, marginLeft: 40, alignContent: 'center' }}>
            <View style={{ backgroundColor: 'green', height: 15, width: 15, borderRadius: 80, alignSelf: 'center', marginTop: 2 }}>
            </View>
          </View>
        </View>
        <View style={styles.chat_content}>
          <Text style={styles.username}>Alyssa Mae Dequina</Text>
          <Text style={styles.chat_contents}>Take your time sa dra. 22:25</Text>
        </View>
        <View style={{ alignContent: 'right', }}>
          <Image source={require('./alyysa.jpg')} style={styles.seenImage} />


        </View>
      </View>
      <View style={styles.chatss}>
        <View>
          <Image source={require('./alyysa.jpg')} style={styles.userslisttop} />
          <View style={{ backgroundColor: 'white', height: 20, width: 20, borderRadius: 80, position: 'absolute', marginTop: 50, marginLeft: 40, alignContent: 'center' }}>
            <View style={{ backgroundColor: 'green', height: 15, width: 15, borderRadius: 80, alignSelf: 'center', marginTop: 2 }}>
            </View>
          </View>
        </View>
        <View style={styles.chat_content}>
          <Text style={styles.username}>Alyssa Mae Dequina</Text>
          <Text style={styles.chat_contents}>Take your time sa dra. 22:25</Text>
        </View>
        <View style={{ alignContent: 'right', }}>
          <Image source={require('./alyysa.jpg')} style={styles.seenImage} />


        </View>
      </View><View style={styles.chatss}>
        <View>
          <Image source={require('./alyysa.jpg')} style={styles.userslisttop} />
          <View style={{ backgroundColor: 'white', height: 20, width: 20, borderRadius: 80, position: 'absolute', marginTop: 50, marginLeft: 40, alignContent: 'center' }}>
            <View style={{ backgroundColor: 'green', height: 15, width: 15, borderRadius: 80, alignSelf: 'center', marginTop: 2 }}>
            </View>
          </View>
        </View>
        <View style={styles.chat_content}>
          <Text style={styles.username}>Alyssa Mae Dequina</Text>
          <Text style={styles.chat_contents}>Take your time sa dra. 22:25</Text>
        </View>
        <View style={{ alignContent: 'right', }}>
          <Image source={require('./alyysa.jpg')} style={styles.seenImage} />


        </View>
      </View>

      <View style={styles.fourthGroup}>
        <View>
          <View style={{ alignSelf: 'center' }}>
            <Image source={require('./speech-bubble.png')} style={styles.bottNavigate} />

          </View>
          <View style={{ textAlign: 'center' }}>
            <Text style={{ textAlign: 'center' }}>Chats</Text>
          </View>
        </View>
        <View>
          <View style={{ alignSelf: 'center' }}>
            <Image source={require('./facetime-button.png')} style={styles.bottNavigate} />

          </View>
          <View style={{ textAlign: 'center' }}>
            <Text style={{ textAlign: 'center' }}>Calls</Text>
          </View>
        </View>
        <View>
          <View style={{ alignSelf: 'center' }}>
            <Image source={require('./group.png')} style={styles.bottNavigate} />

          </View>
          <View style={{ textAlign: 'center' }}>
            <Text style={{ textAlign: 'center' }}>People</Text>
          </View>
        </View>
        <View>
          <View style={{ alignSelf: 'center' }}>
            <Image source={require('./copy-black-square-symbol.png')} style={styles.bottNavigate} />

          </View>
          <View style={{ textAlign: 'center' }}>
            <Text style={{ textAlign: 'center', color: '#2196F3' }}>Stories</Text>
          </View>
        </View>

      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    

  },
  three_dot: {
    backgroundColor: '#ecf0f1',
    borderRadius: 70,
    height: 45,
    width: 45,
    alignContent: 'center',
    padding: 10,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  three_dots: {
    backgroundColor: 'black',
    width: 20,
    height: 3.5,
    alignSelf: 'center',
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'center',

  },
  chats: {
    flexGrow: 3,
    paddingLeft: 10,
  },
  chat_text: {
    fontSize: 30,
    fontWeight: '640',
  },
  searchBar: {
    backgroundColor: '#ecf0f1',
    height: 45,
    width: 'auto',
    flexDirection: 'row',
    borderRadius: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  search_text: {
    fontSize: 15,
    padding: 10,
    color: '#bdc3c7',
  },
  userslisttop: {
    borderRadius: 80,
    height: 60,
    width: 60,
    marginTop: 10,

  },
  userlist: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    columnGap: 15,
    alignContent: 'center', 
    alignSelf:'center'

  },

  userlistsname: {
    textAlign:'center',
    justifyContent: 'center',

  },
  chatss: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  chat_content: {
    paddingLeft: 20,

  },
  username: {
    fontSize: 20,
    alignSelf: 'flex-start',
    marginTop: 15,
    marginRight: 70,

  },
  seenImage: {
    borderRadius: 80,
    height: 20,
    width: 20,
    marginTop: 30,

    alignSelf: 'left',
  },
  fourthGroup:{
    backgroundColor:'white',
    height:60,
    width:415,
    marginTop:40,
    flexDirection:'row',
    justifyContent:'center',
    padding:10,
    columnGap: 60,
    
    alignSelf:'baseline'

},

bottNavigate:{
    height: 25,
    width:25,
},
bottomNavPic:{
    height: 25,
    width:25,
    borderRadius:20,
    borderColor:'#2196F3',
    borderWidth:3
}




});
